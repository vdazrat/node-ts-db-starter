#!/bin/bash
set -e

POSTGRES="psql --username ${DB_USER}"
DATABASES=($DB_NAME)

echo "******* creating user ${DB_USER} *********"
for i in ${DATABASES[@]}; do
  echo "Creating database: ${i}"
  psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = '${i}'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE \"${i}\""
done
