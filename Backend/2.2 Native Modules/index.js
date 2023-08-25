const fs = require("fs");




// Read the content of the file
fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;

    // Change the content
    const modifiedContent = data.replace("Hello Node", "Hey ho capo");

    // Log the modified content
    console.log("Modified Content:", modifiedContent);
});