CREATE TABLE movies(
  id INT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  description TEXT
);

INSERT INTO
  movies(id, name, description)
VALUES
  (1, 'Godfather', "Godfather");

INSERT INTO
  movies(id, name, description)
VALUES
  (2, 'Citizen Kane', "Citizen Kane");

INSERT INTO
  movies(id, name, description)
VALUES
  (3, 'Shawshank Redemption', "Shawshank Redemption");