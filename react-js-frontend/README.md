# React JS App with docker-compose

# build from Dockerfile to image

docker build -t mytest2 .

# run test

docker run -p 3000:3000 mytest2

# run container permanently

docker run -t -d -p 3000:3000 mytest2 
