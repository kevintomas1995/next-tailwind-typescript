FROM node:17-alpine3.14 AS deps

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./packages/carmarket/package*.json ./packages/carmarket/
RUN npm ci

FROM node:17-alpine3.14 AS builder

WORKDIR /usr/src/app
COPY ./packages/carmarket/ ./packages/carmarket/
COPY ./packages/components/ ./packages/components/
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY package*.json ./

RUN npm run build --workspace carmarket
RUN npm ci --only=production --workspace carmarket

FROM gcr.io/distroless/nodejs:16
WORKDIR /usr/src/app

LABEL org.opencontainers.image.source https://github.com/spring-media/ac-steam

ENV TZ=Europe/Berlin

COPY --from=builder /usr/src/app/packages/carmarket ./packages/carmarket
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

EXPOSE 3000

USER 1000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start", "packages/carmarket"]
