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
no_of_chips int DEFAULT 500,
no_of_wins int,
no_of_losses int,
no_of_warns int,
last_login varchar(50) not null,
banned varchar(10) DEFAULT '0',
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

-- create table user_profile(
-- user_id varchar(15) not null,
-- loss_win_ratio int,
-- primary key(user_id),
-- foreign key(user_id) REFERENCES users(username),
-- on delete cascade
-- );

create table game(
game_no int not null,
game_status varchar(10)
	constraint check_status check (game_status in ('Open', 'In Progress', 'Finished')) ENFORCED,
wager_amt int not null,
game_type varchar (9)
	constraint check_type check(game_type in ('Blackjack', 'Coin Flip', 'Slots')) ENFORCED,
game_starter varchar(15) not null,
-- 0 = game_starter loses, 1 = tie, 2 = game_starter wins
winner int not null,
primary key(game_no),
constraint game_starter foreign key(game_starter) REFERENCES player(player_id)
on update cascade,
UNIQUE(game_no)
);


create table bot(
game_name varchar(10) not null,
game_id int not null,
primary key(game_name, game_id),
foreign key(game_id) REFERENCES game(game_no)
on update cascade,
opponent varchar(10) not null,
foreign key(opponent) REFERENCES users(username)
on update cascade
);

create table badges_shop(
owner_name varchar(15) not null,
owned boolean DEFAULT false, 
badge_name varchar(30) not null,
badge_cost int,
description varchar(120),
foreign key(owner_name) REFERENCES users(username)
on update cascade
); 