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
banned varchar(10) DEFAULT 'false',
primary key(player_id),
foreign key(player_id) REFERENCES users(username)
on delete cascade
);

create table invited_by(
awarded_chips int not null
);
-- saw that awarded_chips is 500, but not sure how to do that lmao
-- also stuck on this relationship

create table user_admin(
admin_id varchar(10) not null,
primary key(admin_id),
foreign key(admin_id) REFERENCES users(username)
on delete cascade
);

create table user_profile(
user_id varchar(10) not null,
no_of_chips int,
loss_win_ratio int,
primary key(user_id),
foreign key(user_id) REFERENCES users(username)
on delete cascade
);
-- don't know how to reference badges in this table

create table game(
game_no varchar(10) not null,
game_status varchar(10)
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
game_id varchar(10) not null,
primary key(player_id, game_id),
foreign key(player_id) REFERENCES users(username),
foreign key(game_id) REFERENCES game(game_no)
); 
-- relationship between new_user and game


create table shop(
shop_no int not null,
primary key(shop_no),
customer varchar(10) not null,
foreign key(customer) REFERENCES users(username)
); -- did not do badges attribute yet

create table use_chips(
no_of_chips int not null
); -- relationship between shop and user, don't know how to do derived attributes

create table badges(
total int, 
badge_name varchar(10) not null,
category varchar(10) not null,
badge_cost int -- how much the badge costs
); -- not sure on details for badges