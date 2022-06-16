# Intro

Training Iskra guillotina_react/guillotina
https://github.com/guillotinaweb/guillotina_react/blob/master/docs/tutorial/tutorial.md

https://github.com/guillotinaweb/guillotina_react
https://guillotina.io/


# Local installation
* for ubuntu 20.04 LTS (WSL)

- python (v3.8)
- python3.8-venv
- python3.8-dev
- build-essential
- node (v14)
- npm (v6)
- docker (v20)

### Guillotina
- mkdir tutorial-gmi
- cd tutorial-gmi
- python3.8 -m venv genv
- source ./genv/bin/activate
- pip install guillotina
- pip install cookiecutter

### Run DB
- docker run -d \
    -e POSTGRES_DB=guillotina \
    -e POSTGRES_USER=guillotina \
    -e POSTGRES_PASSWORD=guillotina \
    -p 127.0.0.1:5444:5432 \
    --name postgres_gmi \
    postgres:13.4

### Run guillotina
- g
- http://localhost:8080
- http://localhost:8080/+admin

### Create App Guillotina
- guillotina create --template=application
- pip install -e guillotina_demo

### Run App Guillotina
- guillotina serve -c guillotina_demo/config.yaml

### Create GMI App with create-react-app
- cd tutorial-gmi
- npx create-react-app gmi_demo
- cd gmi_demo
- yarn add -s @guillotinaweb/react-gmi
- npm run start

# Run

### Back
- cd tutorial-gmi/
- source ./genv/bin/activate

### DB
- sudo service docker start
- sudo docker start postgres_gmi

### Guillotina
- /tutorial-gmi/guillotina serve -c guillotina_demo/config.yaml

### Front
- cd tutorial-gmi/gmi_demo
- npm run start
- http://locahost:3000
