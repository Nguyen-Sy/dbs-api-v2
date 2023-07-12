#!/bin/bash

echo ******************************************************
echo Starting the replica set
echo ******************************************************

sleep 20 | echo Sleeping
mongosh mongodb://192.168.1.104:27018 repSet.js