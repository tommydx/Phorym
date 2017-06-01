DROP DATABASE IF EXISTS phorym_db;

CREATE DATABASE phorym_db;

\c phorym_db;

CREATE TABLE
posts
(id BIGSERIAL PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
 body text NOT NULL
);

CREATE TABLE
comments
(id BIGSERIAL PRIMARY KEY,
 cbody text NOT NULL,
 post_id INTEGER NOT NULL,
 FOREIGN KEY (post_id) REFERENCES posts(id)
);
