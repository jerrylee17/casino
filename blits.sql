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
player_id varchar(10) not null,
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
foreign key (admin_id) REFERENCES users(username)
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

create table plays(
bet_chips int not null,
player_id varchar(10) not null,
game_id varchar(10) not null,
primary key(player_id, game_id)
 -- foreign key(player_id) REFERENCES users(username)
); 
-- relationship between new_user and game

create table game(
game_no varchar(10) not null,
game_status varchar(10)
	check (game_status in ('Open', 'In Progress', 'Finished')),
wager_amt int not null,
game_type varchar (9)
	check(game_type in ('Blackjack', 'Coin Flip', 'Slots')),
winner varchar(10) not null,
primary key(game_no)
-- foreign key(winner) REFERENCES plays(player_id)
-- on update cascade,
-- foreign key(game_no) REFERENCES plays(game_id)
-- on update cascade
);



create table players_list(
game varchar(9),
game_id varchar(10) not null,
player_id varchar(10),
max_capacity int not null,
-- foreign key(game) REFERENCES game(game_type),
-- foreign key(game_id) REFERENCES game(game_no),
foreign key(player_id) REFERENCES plays(player_id)
on delete cascade
); 
-- i don't think this is complete
-- needs an array of names from users, not sure how to define the relationship


create table shop(
shop_no int not null,
primary key(shop_no)
);
-- did not do badges attribute yet

create table use_chips(
no_of_chips int not null
);
-- relationship between shop and user, don't know how to do derived attributes

create table badges(
total int, 
badge_name varchar(10) not null,
badge_cost int -- how much the badge costs
); -- not sure on details for badges