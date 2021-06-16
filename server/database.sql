CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

SELECT * FROM todo

INSERT INTO todo(description) VALUES ('Buy coconut milk');

INSERT INTO students (a,b,c) VALUES (1,2,3), (4,5,6), (7,8,9); 

// verify this from YouTube course comments:
Few updates in June 2021 : 
in post : pool.query(  `INSERT INTO "todo" (description) VALUES ($1) RETURNING *`,  [description])
in get: pool.query(`SELECT * FROM public."todos"`)
have backticks in query and database_name in " "