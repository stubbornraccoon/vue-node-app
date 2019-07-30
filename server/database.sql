CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username varchar(20),
	fullname varchar(20),
	password varchar(128),
	PRIMARY KEY (id)
);

CREATE TABLE goals ( 
	userid int,
	goal varchar(20),
	goalnum decimal(5,2),
	realnum decimal(5,2),
	progress decimal(5,2),	
	expired int
);
