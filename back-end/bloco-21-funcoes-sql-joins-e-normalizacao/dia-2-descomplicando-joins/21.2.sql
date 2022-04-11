SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id;

SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

SELECT m.title, bo.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

SELECT t.*, m.*
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT t.*, m.*
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;


SELECT m.*, bo.*
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.rating > 8;