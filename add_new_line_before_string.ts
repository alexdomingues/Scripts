/* function addNewLineBeforeWord(input: string): string {
    // Create a regular expression to find words containing "574"
    const regex = /(\b\w*574\w*\b)/g;

    // Replace found words with a newline before them
    const output = input.replace(regex, '\n$1');

    return output;
}

// Usage
let text = "This is a test574 string with some words574 that contain 574.";
console.log(addNewLineBeforeWord(text)); */

import * as fs from 'fs';
import * as path from 'path';

function addNewLineBeforeWord(input: string): string {
    // Create a regular expression to find words containing "574"
    // const regex = /(\b\w*574\w*\b)/g;
    const regex = /(574)/g;
    
    // Replace found words with a newline before them
    const output = input.replace(regex, '\n$1');

    return output;
}

// Read the file
const filePath = './quicktexts-formatted-2.csv'; // replace with your file path
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file from disk: ${err}`);
    } else {
        // Process the file data
        const result = addNewLineBeforeWord(data);

        // Create a new file path with the suffix "_modified"
        const dir = path.dirname(filePath);
        const ext = path.extname(filePath);
        const base = path.basename(filePath, ext);
        const newFilePath = path.join(dir, `${base}_modified${ext}`);

        // Write the result to the new file
        fs.writeFile(newFilePath, result, (err) => {
            if (err) console.error(`Error writing file: ${err}`);
        });
    }
});