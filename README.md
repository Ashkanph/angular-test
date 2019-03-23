
A tentative project with NodeJs-Angular4.

## Backend

A nodeJS backend application to serve the REST application.

* We have a table of "users" in the MySQL database of "angular-test" with rows like these:
   * ``userId`` and ``id`` are separately unique.
   * ``password`` is the [bcrypted](https://github.com/kelektiv/node.bcrypt.js) hash of the passwords ("pass1", "pass2", "pass3", etc).

| id  | userId  | name | password |
| --- |:-------:| :---:| -------|
| 1   | userId1 | null | $2b$10$nxlajZPYMF1M0Az9.FVpHua7f3H4UWHN0zlE3Hlp7OtNIbyyu4E7S |
| 2   | userId2 | null | $2b$10$NJoMFp1/j4XuDWybsJq/VeHhEk/NFVzWKQ8mOH.NyA6wNjeNgwn8e |
| 3   | userId3 | null | $2b$10$P9d96GL2VcjyS4S9HJ4Ik.rE.qVnoqCZ9tU6ca8t3w4y3dx65T4vW |

## Frontend

An Angular 4 web application. For developing, after installing the dependencies by ``npm install`` , You can open the project by ``ng serve --open`` (Which watch the changes too).