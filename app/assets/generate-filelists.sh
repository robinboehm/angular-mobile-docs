#!/bin/bash

for DIR in $(ls -p | grep "/" | grep -v "0.9")
    do
        touch ${DIR}docs/partials/api/filelist.json
        echo '[' > ${DIR}docs/partials/api/filelist.json
        for FILE in $(ls ${DIR}docs/partials/api/ | sed -e 's/"/\\"/g')
            do
                echo \"${FILE}\", >> ${DIR}docs/partials/api/filelist.json
            done
        echo ']' >> ${DIR}docs/partials/api/filelist.json
    done



