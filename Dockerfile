FROM node:8.10

ENV HOMEAPP /apps

RUN mkdir ${HOMEAPP}

WORKDIR ${HOMEAPP}

COPY . ${HOMEAPP}

RUN rm -rf node_modules package-lock.json yarn.lock
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]