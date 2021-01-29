#!/bin/bash

NEWFILE=$1

for file in `ls|sort -g -r`
do
    filename=$(basename "$file")
    extension=${filename##*.}
    filename=${filename%.*}

    if [ $filename -ge $NEWFILE ]
    then
        mv "$file" "Image$(($filename + 1))@2x".$extension
    fi
done
