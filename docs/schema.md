# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null, indexed
description | string    | indexed

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
answer_id   | string    | not null, foreign key (references answers), indexed
