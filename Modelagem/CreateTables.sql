CREATE TABLE roles (
  	 id_roles INT NOT NULL AUTO_INCREMENT,
 	 roles varchar(45) not null,
	 PRIMARY KEY(id_roles)
);

CREATE TABLE login_attempts (
	id_attempts int not null AUTO_INCREMENT,
	id_users int not null,
	created_at TIMESTAMP,
	PRIMARY KEY (id_attempts),
 	FOREIGN KEY (id_users) REFERENCES users(id_users)
);

CREATE TABLE passwords (
	id_passwords int not null AUTO_INCREMENT,
	id_users int(1) not null,
	token varchar(255) not null,
	status int(1) not null DEFAULT 0,
	PRIMARY KEY (id_passwords),
 	FOREIGN KEY (id_users) REFERENCES users(id_users)
);


CREATE TABLE status_products(
	id_status int not null AUTO_INCREMENT,
	status int(1) not null,
	qtd_products int(200) not null,
	id_products int not null,
	PRIMARY KEY (id_status),
 	FOREIGN KEY (id_products) REFERENCES products(id_products)
)

CREATE TABLE products (
	id_products int not null AUTO_INCREMENT,
	nome_products varchar(200) not null,
	description varchar(200),
	brands varchar(45) not null,
	tipo varchar(45) not null,
	value DOUBLE(8, 3) not null,
	id_users int not null,
 	PRIMARY KEY(id_products),
 	FOREIGN KEY (id_users) REFERENCES users(id_users)
);


CREATE TABLE users (
	 id_users INT NOT NULL AUTO_INCREMENT,
 	 name varchar(100) NOT NULL,
	 email varchar(100) not null,
	 username varchar(45) not null,
	 password char(128) not null,
	 salt char(128) not null,
	 role_id int not null,
	 status int(1) not null DEFAULT 1,
	 PRIMARY KEY(id_users),
 	 FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

