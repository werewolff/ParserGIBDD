#!/bin/bash
rm -rf /tmp/*
curl -o /tmp/data.html https://xn--90adear.xn--p1ai
sleep 5s
#if grep -q b-crash-stat /tmp/data.html
#then
    node /usr/parser/src/index.js
    exit 0
#fi
