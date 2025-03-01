#!/bin/bash

ORG="$1"

if [ -z "${ORG}" ]; then
  echo "Error: ORG is required"
  exit 1
fi

gh repo list --limit 1000 "$ORG" | 
grep -Eio "$ORG/\S+" |
while read repo; do
  ghq get git@github.com:$repo
done

