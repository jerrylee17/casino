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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 34ef045... rebasing
no_of_wins int,
no_of_losses int,
last_login varchar(50) not null,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2a1fc09... Daily credit login feature (#36)
>>>>>>> f4f1d1f... rebasing
=======
=======
banned varchar(10) DEFAULT 'false',
>>>>>>> 34ef045... rebasing
last_login varchar(50) not null,
>>>>>>> 2a1fc09... Daily credit login feature (#36)
banned varchar(10) DEFAULT 'false',
=======
banned varchar(10) DEFAULT '0',
<<<<<<< HEAD
>>>>>>> 72f36a3... hotfix (#38)
=======
>>>>>>> 34ef045... rebasing
primary key(player_id),
foreign key(player_id) REFERENCES users(username)
<<<<<<< HEAD
on update cascade 
=======
on update cascade on delete cascade
>>>>>>> 232cad2... Add functionality to change user settings (#42)
);

create table invited_by(
awarded_chips int not null
);
-- saw that awarded_chips is 500, but not sure how to do that lmao
-- also stuck on this relationship

create table user_admin(
admin_id varchar(10) not null,
primary key(admin_id)
-- foreign key(admin_id) REFERENCES new_user(username)
-- on delete cascade
);

create table user_profile(
user_id varchar(10) not null,
no_of_chips int,
loss_win_ratio int,
<<<<<<< HEAD
primary key(user_id)
-- foreign key(user_id) REFERENCES new_user(username)
-- on delete cascade
=======
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
UNIQUE(game_no),
primary key(user_id),
foreign key(user_id) REFERENCES new_user(username)
 on delete cascade
>>>>>>> 34ef045... rebasing
);
-- don't know how to reference badges in this table

create table plays(
bet_chips int not null,
player_id varchar(10) not null,
game_id varchar(10) not null,
primary key(player_id, game_id)
-- foreign key(player_id) REFERENCES new_user(username)
-- foreign key(game_id) REFERENCES game(game_no)
); 
-- relationship between new_user and game

<<<<<<< HEAD
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
=======

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
>>>>>>> 34ef045... rebasing
