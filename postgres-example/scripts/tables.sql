
CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    first_name varchar(22) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);          

INSERT INTO users (email , first_name)
VALUES ('email@gmail.com' , 'email' );


drop table users;

