drop database if exists libraryDB;
create database libraryDB;
use libraryDB;

create table author(
    author_id TINYINT unsigned AUTO_INCREMENT NOT NULL,
    author varchar(40),
    constraint pk_author primary key (author_id)
);

create table publisher(
    pub_id tinyint unsigned AUTO_INCREMENT NOT Null,
    publisher varchar(40),
    constraint pk_publisher primary key (pub_id)
);

create table genre(
    genre_id tinyint unsigned AUTO_INCREMENT NOT NULL,
    genre varchar(40),
    constraint pk_genre primary key (genre_id)
);

create table format(
    format_id tinyint unsigned AUTO_INCREMENT NOT NULL,
    format ENUM ('PHYSICAL', 'AUDIOBOOK', 'E-BOOK'),
    --this is deleted later
    constraint pk_format primary key (format_id)
);

create table book(
    book_id tinyint unsigned AUTO_INCREMENT not null,
    title varchar(60),
    author_id tinyint unsigned  not null, 
    pub_id tinyint unsigned not null,
    copyright_year YEAR,
    edition tinyint unsigned NOT NULL,
    edition_year YEAR,
    binding enum('paperback', 'hardback'),
    rating enum('1', '2', '3', '4', '5'),
    language varchar(4),
    qty tinyint unsigned NOT NULL,
    num_pages smallint unsigned NOT NULL,
    cover_image varchar(40),
    --format_id tinyint unsigned not null,
    constraint pk_book primary key (book_id),
    constraint  fk_author foreign key (author_id) references author (author_id),
    constraint fk_pub foreign key (pub_id) references publisher (pub_id)
);

create table book_to_genre(
    book_id tinyint unsigned not null,
    genre_id tinyint unsigned not null,
    constraint fk_book_btg foreign key (book_id) references book (book_id),
    constraint fk_genre_btg foreign key (genre_id) references genre (genre_id)
);

create table book_to_format(
    book_id tinyint unsigned not null,
    format_id tinyint unsigned not null,
    constraint fk_book_btf foreign key (book_id) references book (book_id),
    constraint fk_format_btf foreign key (format_id) references format (format_id)
);

--Alterations

ALTER TABLE format DROP COLUMN format;

ALTER TABLE format ADD COLUMN format varchar(30);

ALTER TABLE book ADD COLUMN format_id tinyint unsigned not null

ALTER TABLE book ADD CONSTRAINT fk_format FOREIGN KEY (format_id) REFERENCES format (format_id);

DELETE FROM book WHERE book_id = 1;

DELETE FROM book WHERE book_id <> 1; --AHA!!!!!!




    SET @num :=0;
    UPDATE book SET book_id= @num := (@num + 1);
    ALTER TABLE book AUTO_INCREMENT = 1;