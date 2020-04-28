-- user: Sampleuser
-- password: password


INSERT users VALUES ('sampleUser', 'sampleUser@gmail.com', '$2b$10$QTC0lfiTtvPGe4.x9WvlJuPz.rLBJYwaG4hRY0upN6Lk/PfjepyA.');
INSERT player VALUES ('sampleUser', 500, 0, 0, 0,'2020-04-28T05:33:40.839Z', false);

INSERT badges_shop VALUES ('sampleUser', false, 'Casual Noob', 2000, 'We are all noobs over here, we gotta start somewhere (casually).');
INSERT badges_shop VALUES ('sampleUser', false, 'All Threes', 2500, 'Getting three matching slots thrice!');
INSERT badges_shop VALUES ('sampleUser', false, 'Get That Coin', 2500, 'Has won the coin flip at least once!');
INSERT badges_shop VALUES ('sampleUser', false, 'Make it Rain', 5000, 'Accumulated 5000 chips in total balance. Make it rain!');
INSERT badges_shop VALUES ('sampleUser', false, 'Blackjack Master', 10000, 'Congratulations for winning 10+ times! No need to be modest.');
INSERT badges_shop VALUES ('sampleUser', false, 'True Winner', 10000, 'Won in Blackjack, Coin Flip, and Slots.');
INSERT badges_shop VALUES ('sampleUser', false, '30 Day Login Streak', 15000, 'This user has logged in 30 days in a row! That is impressive.');
INSERT badges_shop VALUES ('sampleUser', false, 'Casual Pro', 25000, 'Too pro for winning 1000 chips in total from all the games you participated in.');
INSERT badges_shop VALUES ('sampleUser', false, 'God Chains', 50000, 'This badge is the ultimate badge to show everyone who is boss.');
INSERT badges_shop VALUES ('sampleUser', false, 'Senpai Club', 1000000, 'The senpai badge! Senpai on the streets.');

-- tie blackjack
UPDATE player 
    SET no_of_chips=no_of_chips, 
        no_of_wins=no_of_wins+0,
        no_of_losses=no_of_losses+0
    WHERE player_id='sampleUser';

INSERT INTO game
    (game_status, wager_amt, game_type, game_starter, winner)
    VALUES 
    ('Finished', 50 , 'Blackjack', 'sampleUser', 1);

-- win coin flip
UPDATE player 
    SET no_of_chips=no_of_chips+90, 
        no_of_wins=no_of_wins+1,
        no_of_losses=no_of_losses+0
    WHERE player_id='sampleUser';

INSERT INTO game
    (game_status, wager_amt, game_type, game_starter, winner)
    VALUES 
    ('Finished', 90 , 'Coin Flip', 'sampleUser', 2);

-- lose slots
UPDATE player 
    SET no_of_chips=no_of_chips, 
        no_of_wins=no_of_wins+0,
        no_of_losses=no_of_losses+1
    WHERE player_id='sampleUser';

INSERT INTO game
    (game_status, wager_amt, game_type, game_starter, winner)
    VALUES 
    ('Finished', 50 , 'Slots', 'sampleUser', 0);
