FROM node:20.11-alpine3.19 as build

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY tsconfig.json tsconfig.build.json nest-cli.json ./ 

COPY src ./src
RUN yarn build

FROM node:20.11-alpine3.19 as run
ENV NODE_ENV production
WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production

COPY --from=build /usr/app/prisma ./prisma
RUN npx prisma generate
COPY --from=build /usr/app/dist ./dist

RUN mkdir logs temp

ENTRYPOINT ["npm", "run", "start:prod"]
