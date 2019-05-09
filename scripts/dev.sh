#!/bin/bash

NODE_ENV=${1:-development}

WEBPACK_CONFIG=$(pwd)"/config/webpack/createWebpackConfig.ts"
TS_CONFIG=$(pwd)"/config/typescript/tsconfig.node.json"

export TS_NODE_PROJECT=$TS_CONFIG

webpack-dev-server \
    --config $WEBPACK_CONFIG \
    --hot \
    --watch \
    --progress \
    --host 0.0.0.0 \
    --disable-host-check \
    --env.NODE_ENV=$NODE_ENV \
    --env.serve=true
