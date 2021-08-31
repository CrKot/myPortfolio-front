FROM node:16.0.0

RUN mkdir -p /myPortfolio/frontend
WORKDIR /myPortfolio/frontend

COPY package*.json  /myPortfolio/frontend/
RUN npm install

COPY . /myPortfolio/frontend/

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD npm run start