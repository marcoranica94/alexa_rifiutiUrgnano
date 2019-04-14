#!/usr/bin/env bash

functionName=$(aws lambda list-functions --output json  | jq -r '.Functions[] | select(.FunctionName|contains("i3Spesa")) | [.FunctionName] | @tsv')

echo "Removing old zip file..."
rm -rf function.zip

echo "Creating new zip file..."
cd Aws
zip -r ../function.zip . *
cd ..

echo "Uploading zip file..."
aws lambda update-function-code --function-name $functionName --zip-file fileb://function.zip

echo "Removing zip file..."
rm -rf function.zip
