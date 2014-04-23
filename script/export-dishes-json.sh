#!/bin/sh
echo 'set names utf8; select * from dish'|
mysql --skip-column-names --batch "$@" |
awk 'BEGIN { print "[";first=1; } { if (first) first=0; else printf ",\n"; printf("{\"name\":\"%s\"}", $0) } END { print "\n]";}'
