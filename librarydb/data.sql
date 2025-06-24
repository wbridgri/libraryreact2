insert into author(author)
    ('Justin Torres');

insert into author(author)
    ('Axie Oh'),
('Margret Owen'),
('CL Montblanc'),
('Jerry Spinelli'),
('Robin Wasley'),
('Tarah DeWitt'),
('John Scalzi'),
('Bob the Drag Queen'),
('Natasha Preston'),
('Stephen King'),
('Andrzej Sapokowski'),
('Pamela Crane'),
('Sarah Pinborough'),
('K. Ancrum'),
('Abdi Nazemian'),
('Lynette Noni'),
('Genevieve Gornichec'),
('Murasaki Shikibu');

insert into publisher(publisher)
    ('Picador');

insert into publisher(publisher)
    values('Feiwel & Friends'), 
    ('St. Martin''s'), 
    ('Yearling'), 
    ('Simon & Schuster'), 
    ('Self Published'), 
    ('Tor Books'), 
    ('Knopf'), 
    ('Gallery Books'),
    ('Delacorte'),
    ('Scribner'),
    ('Hachette Book Group'),
    ('Rockin'' C Reads'),
    ('Flatiron Books'),
    ('HarperCollins'),
    ('Clarion Books'),
    ('Ace'),
    ('Penguin'),
    ('Orbit');

insert into genre(genre)
    values('Literary'),
    ('LGBTQ'),
    ('Fantasy'),
    ('Young Adult'),
    ('Science Fiction'),
    ('Speculative Fiction'),
    ('Mystery'),
    ('Magic Realism'),
    ('Horror'),
    ('Romance'),
    ('Humor'),
    ('African American'),
    ('Historical');

insert into format(format)
    values('PHYSICAL'),
    ('AUDIOBOOK'),
    ('E-BOOK');

insert into book(
    title,
    author_id, 
    pub_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    cover_image,
    qty,
    format_id
)
    values('Blackouts', 1, 1, 2023, 1, 2023, 'hardback', '4', 'en', 320, 'blackouts.jpg', 54, 1);

insert into book(
    title,
    author_id, 
    pub_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    cover_image,
    qty,
    format_id
)
    values('The Floating World', 2,	2, 2025, 1, 2025, 'hardback', 1, 'en', 368, 'floating.jpg', 23, 1);



INSERT INTO book (
    title,
    author_id, 
    pub_id,
    copyright_year,
    edition,
    edition_year,
    binding,
    rating,
    language,
    num_pages,
    cover_image,
    qty,
    format_id
) VALUES
('Little Thieves', 3, 2, 2021, 2, 2023, 'paperback', 5, 'en', 528, 'littlethieves.jpg', 10, 1),
('Pride or Die', 4, 3, 2025, 1, 2025, 'hardback', 3, 'en', 336, 'prideordie.jpg', 16, 1),
('Dead Wednesday', 5, 4, 2023, 1, 2023, 'paperback', 3, 'en', 240, 'deadwednesday.jpg', 24, 1),
('Dead Things are Closer Than They Appear', 6, 5, 2024, 1, 2024, 'hardback', 4, 'en', 416, 'deadthings.jpg', 67, 1),
('The Co-op', 7, 3, 2022, 1, 2025, NULL, 4, 'en', 0, 'thecoop.jpg', 57, 2),
('Starter Villain', 8, 2, 2023, 1, 2023, 'hardback', 4, 'en', 264, 'startervillain.jpg', 42, 1),
('Harriet Tubman: Live in Concert', 9, 9, 2025, 1, 2025, 'hardback', 4, 'en', 288, 'harriet.jpg', 47, 1),
('The Party', 10, 10, 2024, 1, 2024, 'paperback', 4, 'en', 352, 'party.jpg', 31, 1),
('Mr. Mercedes', 11, 11, 2014, 1, 2014, 'hardback', 4, 'en', 437, 'mercedes.jpg', 24, 1),
('Blood of Elves', 12, 12, 1993, 3, 2009, 'paperback', 4, 'pol', 398, 'blood.jpg', 89, 1),
('The Art of Fear', 13, 13, 2017, 2, 2018, NULL, 4, 'en', 306, 'artoffear.jpg', 22, 2),
('Behind Her Eyes', 14, 14, 2017, 1, 2017, 'hardback', 4, 'en', 307, 'behind.jpg', 12, 1),
('The Corruption of Hollis Brown', 15, 15, 2025, 1, 2025, 'hardback', 4, 'en', 384, 'corruption.jpg', 5, 1),
('Desert Echoes', 16, 15, 2024, 1, 2024, 'hardback', 4, 'en', 320, 'desertechoes.jpg', 20, 1),
('The Prison Healer', 17, 16, 2021, 1, 2021, 'hardback', 4, 'en', 416, 'prisonhealer.jpg', 25, 1),
('The Witch''s Heart', 18, 17, 2021, 1, 2021, 'hardback', 4, 'en', 359, 'witchsheart.jpg', 25, 1),
('The Tale of Genji', 19, 18, NULL, 20, 2023, 'paperback', 5, 'jap', 1182, 'genji.jpg', 1, 1),
('The Last Wish', 12, 19, 1993, 3, 2008, NULL, 4, 'pol', 400, 'lastwish.jpg', 54, 2);

INSERT INTO book_to_genre (book_id, genre_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(2, 5),
(3, 4),
(3, 6),
(3, 3),
(4, 4),
(4, 7),
(5, 4),
(5, 8),
(6, 4),
(6, 10),
(7, 10),
(8, 3),
(8, 5),
(8, 11),
(9, 2),
(9, 12),
(10, 4),
(10, 7),
(10, 9),
(11, 7),
(11, 9),
(12, 3),
(13, 7),
(13, 9),
(14, 7),
(15, 2),
(15, 4),
(15, 9),
(16, 2),
(16, 4),
(16, 10),
(17, 3),
(17, 4),
(18, 10),
(19, 1),
(19, 13),
(20, 3);


--TESTING SOME QUERIES
select book.title, book_to_genre.genre_id from book inner join book_to_genre on book.book_id = book_to_genre.book_id;


--relational algebra