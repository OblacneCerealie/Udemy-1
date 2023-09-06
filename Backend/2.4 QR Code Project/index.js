/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import input from "inquirer";
import QR from "qr-image";
const modifiedContent = input;

fs.readFile("./URL.txt", "utf8", (err, data) => {
    if (err) throw err;

    // Change the content
    const modifiedContent = data.replace("https://www.google.com", input);

    // Log the modified content
    console.log(QR);
});
//npm init -y