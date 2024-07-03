
-- create TABLE tire_items(
--     id SERIAL PRIMARY KEY,
--     model VARCHAR(255),
--     season VARCHAR(255),
--     width INTEGER,
--     hight INTEGER,
--     diameter INTEGER,
--     price INTEGER
-- );

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'winter', 175, 65, 15, 5000);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'summer', 165, 55, 16, 5500);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'winter', 155, 75, 15, 14000);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'summer', 185, 65, 16, 4500);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'winter', 195, 55, 18, 3300);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'winter', 205, 40, 19, 8500);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'summer', 200, 45, 18, 9000);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'winter', 195, 85, 17, 7000);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'summer', 200, 55, 18, 6500);

INSERT INTO tire_items(model, season, width, hight, diameter, price)
VALUES ('TOYO', 'winter', 185, 65, 16, 9500);

UPDATE tire_items 
SET model = 'Bridgestone'
WHERE id = 2;

UPDATE tire_items 
SET model = 'Continental'
WHERE id = 3;

UPDATE tire_items 
SET model = 'Nokian Tyres'
WHERE id = 4;

UPDATE tire_items 
SET model = 'Nokian Tyres'
WHERE id = 5;
UPDATE tire_items 
SET model = 'Bridgestone'
WHERE id = 6;

UPDATE tire_items 
SET model = 'Continental'
WHERE id = 7;
