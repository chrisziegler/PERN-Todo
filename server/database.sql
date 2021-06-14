CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

SELECT * FROM todo

INSERT INTO todo(description) VALUES ('Buy coconut milk');

INSERT INTO students (a,b,c) VALUES (1,2,3), (4,5,6), (7,8,9); 