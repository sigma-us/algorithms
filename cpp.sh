#!/bin/bash

FILE_NAME=dijkstra


c++ "$FILE_NAME.cpp" -o "$1"

./$1

rm $1