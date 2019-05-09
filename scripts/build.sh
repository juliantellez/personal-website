#!/bin/bash

NODE_ENV=production

WEBPACK_CONFIG=$(pwd)"/config/webpack/createWebpackConfig.ts"
TS_CONFIG=$(pwd)"/config/typescript/tsconfig.node.json"

export TS_NODE_PROJECT=$TS_CONFIG

if [ "${1}" = "--analyze" ] ; then
    ANALYZE=true;
else
    ANALYZE=false;
fi

webpack \
    --config $WEBPACK_CONFIG \
    --env.NODE_ENV=$NODE_ENV \
    --env.analyze=$ANALYZE
