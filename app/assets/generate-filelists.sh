#!/bin/bash

codeFolder="../public_html/code/";
outputFolder="../public_html/versions/"

versions="";

# iterate over all version dirs
for DIR in $(ls ${codeFolder} -p | grep "/" | grep -v "^0.")
    do

        versions=${versions}`echo \"${DIR}\", | tr -d "/"`;

        fileList=""
        # iterate over all files in %version%/api/*
        for FILE in $(ls ${outputFolder}${DIR}docs/partials/api/ | sed -e 's/"/\\"/g')
            do
                fileList=${fileList}\"${FILE}\",
            done
        echo [${fileList%?}] > ${outputFolder}${DIR%?}.api.json

    done

echo [${versions%?}] > ${outputFolder}index.json