drop database if exists blits;
create database blits;
use blits;

create table users(
username varchar(15) not null,
email varchar(50) not null,
password varchar(150) not null,
primary key(username, email),
UNIQUE(username, email)
);

create table player(
player_id varchar(15) not null,
no_of_chips int,
no_of_warns int,
no_of_wins int,
no_of_losses int,
banned varchar(10) DEFAULT 'false',
primary key(player_id),
foreign key(player_id) REFERENCES users(username)
on update cascade on delete cascade
);

create table user_admin(
admin_id varchar(15) not null,
primary key(admin_id),
foreign key(admin_id) REFERENCES users(username)
on delete cascade
);

create table user_profile(
user_id varchar(15) not null,
no_of_chips int,
loss_win_ratio int,
primary key(user_id),
constraint user_name foreign key(user_id) REFERENCES player(player_id)
on delete cascade
);
-- don't know how to reference badges in this table

create table game(
game_no int not null,
game_status varchar(11)
	constraint status_check check (game_status in ('Open', 'In Progress', 'Finished')) ENFORCED,
wager_amt int not null,
game_type varchar (9)
	constraint type_check check(game_type in ('Blackjack', 'Coin Flip', 'Slots')) ENFORCED,
winner varchar(10) not null,
primary key(game_no, game_status, game_type),
foreign key(winner) REFERENCES player(player_id)
on update cascade,
UNIQUE(game_no)
);

create table plays(
bet_chips int not null,
player_id varchar(10) not null,
game_id int not null,
primary key(player_id, game_id),
foreign key(player_id) REFERENCES users(username),
foreign key(game_id) REFERENCES game(game_no)
); 
-- relationship between new_user and game


create table bot(
game_name varchar(10) not null,
game_id int not null,
primary key(game_name, game_id),
foreign key(game_id) REFERENCES plays(game_id)
on update cascade,
opponent varchar(10) not null,
foreign key(opponent) REFERENCES users(username)
on update cascade
);

create table badges_shop(
owner_name varchar(15) not null,
owned varchar(5) DEFAULT 'false', -- would be the equivalent of purchased?
badge_name varchar(10) not null,
category varchar(10) not null,
badge_cost int,
description varchar(100),
primary key(badge_name, category, badge_cost),
foreign key(owner_name) REFERENCES users(username) 
on update cascade
);