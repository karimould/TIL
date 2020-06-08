# JSON in PostgreSQL

Playing with PostgreSQL and JSON.
Just to stay up to date, to re-read it again and to refresh my knowledge.

To start database:

```
$ make start
```

To stop database:

```
$ make stop
```

To connect to docker container and run psql:

```
$ make psql
```

To create example data:

```
$ make create
```

To run execute query directly:

```
$ make exec CMD=\l
```

To run SQL file:

```
$ make run FILE=./1.sql
```
