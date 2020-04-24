
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
<<<<<<< HEAD
no_of_wins int,
no_of_losses int,
banned varchar(10) DEFAULT 'false',
=======
last_login varchar(50) not null,
banned varchar(10) DEFAULT '0',
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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
<<<<<<< HEAD
primary key(user_id),
constraint user_name foreign key(user_id) REFERENCES player(player_id)
on delete cascade
);

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
=======
primary key(user_id)
-- foreign key(user_id) REFERENCES new_user(username)
-- on delete cascade
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
);
-- don't know how to reference badges in this table

create table plays(
bet_chips int not null,
player_id varchar(10) not null,
game_id int not null,
primary key(player_id, game_id),
foreign key(player_id) REFERENCES users(username),
foreign key(game_id) REFERENCES game(game_no)
); 
-- relationship between new_user and game

<<<<<<< HEAD

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
=======
create table players_list(
game varchar(9),
max_capacity int not null
-- foreign key(game) REFERENCES game(type)
); -- i don't think this is complete

create table game(
game_no varchar(10) not null,
status varchar(10)
	check (status in ('Open', 'In Progress', 'Finished')),
wager_amt int not null,
type varchar (9)
	check(type in ('Blackjack', 'Coin Flip', 'Slots')),
winner varchar(10) not null,
primary key(game_no),
-- foreign key(winner) REFERENCES player(player_id)
UNIQUE(game_no)
);

create table shop(
shop_no int not null,
primary key(shop_no)
); -- did not do badges attribute yet

create table use_chips(
no_of_chips int not null
); -- relationship between shop and user, don't know how to do derived attributes

create table badges(
total int, 
badge_name varchar(10) not null,
badge_cost int -- how much the badge costs
); -- not sure on details for badges
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
