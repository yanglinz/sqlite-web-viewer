#!/usr/bin/env bash

cd examples
rm movies.db && sqlite3 movies.db < movies.sql
cd -
