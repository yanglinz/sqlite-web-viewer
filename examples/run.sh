#!/usr/bin/env bash

cd examples
rm -f movies.db && sqlite3 movies.db < movies.sql
cd -
