# these will speed up builds, for docker compose >= 1.25
export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

build-up:
	docker compose up --build

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down 

restart: 
	docker compose restart

zsh:
	docker compose exec admin zsh

sh:
	docker compose exec admin sh