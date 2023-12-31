FROM node:16-alpine
LABEL maintainer="andresorozco.developer@gmail.com"
WORKDIR /portal
ARG env
ENV ENVIRONMENT=${env}

RUN yarn global add @angular/cli@13.1.2
COPY package.json .
RUN yarn
ENV PATH="/portal/node_modules/.bin:$PATH"

RUN apk update && apk add --update --no-cache git zsh curl openssh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
COPY . .

EXPOSE 4200 49153

CMD yarn start --host=0.0.0.0 --port=4200 --poll=2000 --configuration=${ENVIRONMENT}
