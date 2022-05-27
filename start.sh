#!/bin/bash

LOCAL_SETTINGS=$(cat settings.json)
PACKAGE_JSON=$(cat package.json)

APP_NAME=$(echo "$PACKAGE_JSON" | jq -r .displayName)
APP_VERSION=$(echo "$PACKAGE_JSON" | jq -r .version)
APP_PORT=$(echo "$LOCAL_SETTINGS" | jq -r .port)
API_PREFIX=$(echo "$LOCAL_SETTINGS" | jq -r .apiPrefix)

docker run -p $APP_PORT:$APP_PORT -d \
  -e APP_NAME=$APP_NAME \
  -e APP_VERSION=$APP_VERSION \
  -e APP_PORT=$APP_PORT \
  -e API_PREFIX=$API_PREFIX \
  --name sindri 4lch4/sindri:latest

docker logs sindri --follow
