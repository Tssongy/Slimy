CREATE DATABASE slimy_db;
\c slimy_db

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title TEXT,
    actors TEXT,
    poster TEXT,
    description TEXT
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    user_id INT,
    movie_id INT,
    rating FLOAT,
    review TEXT
);


