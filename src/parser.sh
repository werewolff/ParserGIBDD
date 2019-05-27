#!/bin/bash
rm -rf /tmp/*
curl -o /tmp/data https://xn--90adear.xn--p1ai
sleep 5s
#if grep -q b-crash-stat /tmp/data
#then
    node /usr/parser/src/index.js
    exit 0
#fi
