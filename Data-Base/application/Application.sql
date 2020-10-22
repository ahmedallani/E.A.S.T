CREATE TABLE Applications (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
       PersonID INT ,
       ApplicationContent  VARCHAR(400),
      CONSTRAINT EmaiUn UNIQUE (id)
);
