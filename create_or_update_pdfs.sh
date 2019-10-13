#!/bin/bash
# This script uses decktape to export reveal.js made OOP slides to PDFs
# Website: https://github.com/OOP-Regensburg/OOP-Folien
# Author: Alexander Bazo <alexanderbazo@googlemail.com>

INPUT=$1;
OUTPUT="pdfs/";
URL="http://localhost:8000?slides="

function print_error {
	printf "Error: $1"
}

function print_usage {
	printf "\nUsage: create_or_update_pdfs.sh Filelist [Output]\n"
}

function init {
	if [ -z "INPUT" ]
  		then
  			print_error "Missing arguments\n"
    		print_usage 
    		exit
	fi
}


printf "\n# This script uses decktape to export reveal.js made OOP slides to PDFs #\n\n"

# Init script
init

# Start local reveal.js server
npm start &
printf "Waiting for reveal.js to start ..."
sleep 5

printf "\nStarting export ...\n\n"

# Iterate over slide sets
for file in $INPUT
do
 printf "Creating PDF from $file\n"
 filename=$(basename -- "$file")
 filename="${filename%.*}"
 decktape --size "2560x1440" --pause 500 --load-pause 500 reveal $URL$filename $OUTPUT$filename.pdf
 printf "Done!\n\n"
done

printf "Export finished.\n\n"

printf "Add files to git and commit ... \n"
git add $OUTPUT/*
git commit -m "Update PDF slides"
printf "Done!\n\n"

printf "Push updated files ...\n"
echo -n "Do you want to push (and publish) the generated PDF slides [y/n]: "
read mode
if [ "$mode" == "y" ]; then
	printf "\nPushing to master\n"
	git push github master
else
	printf "\nDone without pushing to master\n"
fi

# Stop local reaveal-js server
printf "\nTerminating reveal.js\n"
killall grunt