
.PHONY: help start stop mysql exec run

.DEFAULT_GOAL := help

start: ## Start postgres Container
	docker run -d --name postgres_karim -v my_dbdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password -p 54320:5432 postgres:11

stop: ## Terminate MySQL Container
	docker container stop postgres_karim

psql: ## Connect to MySQL
	docker exec -it postgres_karim psql -U postgres

create: ## Create Database, Table and insert Data 
	cat createDatabase.sql | docker exec -i postgres_karim bash -c 'psql -U postgres -w -a -q -f -'

CMD=\l
exec: ## Execute query on MySQL ex: make exec CMD="show columns from country"
	docker exec -it postgres_karim psql -U postgres -c "${CMD}"

FILE=''
run: ## Run quey from file on MySQL ex: make run FILE=./count_city.sql
	cat ${FILE} | docker exec -i postgres_karim bash -c 'psql -U postgres -d test_database -w -a -q -f -'

help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'