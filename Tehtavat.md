## Tehtävä 1.1

CONTAINER ID        
IMAGE               COMMAND                  CREATED              STATUS                      PORTS               NAMES
f8801aa5958a        nginx               "nginx -g 'daemon of…"   About a minute ago   Exited (0) 31 seconds ago                       gallant_gauss
e48183fc317f        nginx               "nginx -g 'daemon of…"   About a minute ago   Exited (0) 25 seconds ago                       dazzling_lichterman
9419cf48f95e        nginx               "nginx -g 'daemon of…"   About a minute ago   Up About a minute           80/tcp              ecstatic_chebyshev

## Tehtävä 1.2

docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES

docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE

## Tehtävä 1.3

docker run -d -it --name looper devopsdockeruh/simple-web-service:ubuntu

winpty docker container exec -it looper bash

tail -f ./text.log

Secret message is: 'You can find the source code here: https://github.com/docker-hy'

## Tehtävä 1.4

winpty docker run -it -d ubuntu

winpty docker container exec -it great_moore bash

apt-get update

apt-get install curl

sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'

helsinki.fi

## Tehtävä 1.5

docker pull devopsdockeruh/simple-web-service:alpine

docker pull devopsdockeruh/simple-web-service:ubuntu

docker run -d --name alpine devopsdockeruh/simple-web-service:alpine

winpty docker exec -it alpine sh

tail -f ./text.log

Secret message is: 'You can find the source code here: https://github.com/docker-hy'

exit

devopsdockeruh/simple-web-service   ubuntu    4e3362e907d5   13 months ago   83MB

devopsdockeruh/simple-web-service   alpine    fd312adc88e0   13 months ago   15.7MB

## Tehtävä 1.6

Give me the password: basics

You found the correct password. Secret message is:

"This is the secret message"

## Tehtävä 1.7

FROM devopsdockeruh/simple-web-service:alpine

CMD server

## Tehtävä 1.8

docker build . -t curler

docker run curler

## Tehtävä 1.9

docker run -d -v "/$(pwd)/text.log:/usr/src/app/text.log" devopsdockeruh/simple-web-service

## Tehtävä 1.10

docker run --rm -p 127.0.0.1:3000:8080 web-server

output: {

message: "You connected to the following path: /",

path: "/"

}

## Tehtävä 1.16

https://docker-juttu.herokuapp.com/