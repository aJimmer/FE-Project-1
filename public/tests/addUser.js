// test for adding users through the User module

user.createUser({username: 'admin', password: 'password'});
user.createUser({username: 'admin1', password: 'password'});
user.createUser({username: 'admin2', password: 'password'});
user.db;
