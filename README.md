<p align="center">
  <a href="https://github.com/CastilhoF" target="_blank"><img src= "https://cdn.filestackcontent.com/FI20zcQx6Wx1WweQUZmg" width="1024" alt="image"></a>
</p>

<!-- <p align="center"><a href="https://creatorpro.live/pt" target="_blank">CreatorPRO</a> This project is a market place for NFT`s and is being managed by the MusicPRO group.</p> -->
<p align="center">

  <a href="https://twitter.com/your-profile" target="_blank"><img src="https://img.shields.io/twitter/follow/your-profile?style=social&label=Follow"></a>
</p>

## Description

[Clean Architecture and NestJS Template](https://github.com/CastilhoF/clean-architecture-nestjs-template) - Template repository that uses Clean Architecture and NestJS as a base, already has several validation wrappers and works with a clean entity base, just id, createdAt and updatedAt. <br><br><br>

## Installation

```bash
# install dependencies yarn or npm
$ yarn

```

## Running the app 

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev # (require .env.development)

# local mode
$ yarn start:local # (require .env.local and redis running and mysql running)

# debug mode
$ yarn start:debug # (require .env.local and redis running and mysql running)

# production mode
$ yarn start:prod # (require .env.production)

```

## Running the app with docker (LOCAL)

```bash
# Create network
$ docker network create -o "com.docker.network.bridge.enable_icc"="true" mp-network

# Build image
$ docker compose -f docker-compose.local.yml --env-file ./.env.local up --build # to run and view the logs (manual output with terminal)

# Build image in background
$ docker compose -f docker-compose.local.yml --env-file ./.env.local up --build -d # to run in the background (daemon mode)

# Run Prisma Migrate (require .env.local)
$ yarn migrate:db:local 

# Run the app locally with swc (require .env.local)
$ yarn start:local
```

## Running the app with docker (DEVELOPMENT)

```bash
# Create network
$ docker network create -o "com.docker.network.bridge.enable_icc"="true" mp-network

# Build image
$ docker compose -f docker-compose.dev.yml --env-file ./.env.development up --build # to run and view the logs (manual output with terminal)
```


## Test

```bash
# unit tests
$ yarn test

# unit tests with specific module or file
$ yarn test src/{module}/{path}/{file}.spec.ts

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Deploy in Homologation

```bash
# Every change is being made in the "development" branch (git push origin development). After making the changes, commit to the development branch before merging into the main. Commit to main and then run:

# commit and push to branch developer
$ git push origin developer

# Important!: Create pull request on GitHub to merge into development branch

# Access the Server:
$ ssh -i ~/.ssh/"you_pem_key".pem "you-user"@177.71.183.172

# Enter to sudo su:
$ sudo su

# Access the path:
$ cd /var/containerized-apps/creator-pro-core/

# Pull from Git
$ git pull origin development

# Run the docker build via docker-compose local
$ docker compose -f docker-compose-dev.yml -d

# Run the docker build via docker-compose to add changes to the container (Homolog)
$ docker compose -f docker-compose.yml --env-file ./.env.production up --build -d

# Run the docker build via docker-compose to add changes to the container (production)
$ docker compose --env-file ./.env.production up --build -d

# Homologation Host:
$ https://api-services.musicpro.live/creator-pro-api/
```

## Deploy in Production

```bash
# Every change is being made in the "main" branch (git push origin main). After making the changes, commit to the main branch before merging into the main. Commit to main and then run:

# commit and push to branch main
$ git push origin main

# Important!: Create pull request on GitHub to merge into main branch

# CI/CD will be responsible for deploying the application to the production server.

```

## Access Logs and bash terminal inside container
```bash
# Access Logs
$ docker logs --follow creator-pro-core

# Access bash terminal
$ docker exec -it creator-pro-core /bin/bash
# or
$ docker exec -it creator-pro-core /bin/sh
```

## Endpoints Documentation(Routes)

<br>

- Documentation of routes via swagger: - [Documentation]()

<br>

<a href="https://api-services-hml.creatorpro.live/creator-pro-core/api#" target="_blank"><img  width="320" src=https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg></a>

<br>



## Rollback

```bash
# Logged into the main branch, run the pull command to ensure that the code that's in the online repository is the same as that local one.

$ git pull origin main

# To undo the merge that was done with the bad code, run the reset, as per the command below.

$ git reset --hard HEAD~1

# If you want to undo a commit, just run the command below

$ git revert HEAD^

# After the reset/revert is done, commit to the main and upload the code to the repository from the pull command.

$ git add .
$ git commit -m "commit description"
$ git push origin main

```

## Stay in touch

- Author - [Creator Developers Team](https://github.com/musicpro-live)
- MusicPRO Website - [MusicPRO Live](https://musicpro.live/sobre)
- CreatorPRO Website - [CreatorPRO Live](https://creatorpro.live)
- Twitter - [@MusicPro](https://twitter.com/musicprolive) [@CreatorPro](https://twitter.com/creatorpro_live)
