
CREATE TABLE IF NOT EXISTS students(
    id serial PRIMARY KEY,
    first_name varchar(22) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


INSERT INTO students(first_name)
VALUES ('emaildkjsdfkjd');



