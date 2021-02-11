const request = require('request');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
 - should take a URL as a command-line argument, and
 - a local file path and download the resource to the
 specified path.
*/


//take a URL as a CL argument, prompt the user for URL
rl.question('What is the URL?', userURLInput => {
  console.log(`http:\\\\${userURLInput}`);


  //request URL
  request(`http:\\\\${userURLInput}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for web homepage.


    rl.question('What is the file path to save it to?', userPathInput => {
      console.log(`${userPathInput}`);
      //convert userPathInput into file path
      //SAVE HTML FILE FOR WEBPAGE TO USER SPECIFIED FILE PATH
      console.log(body.length);
      fs.writeFile(`./${userPathInput}.html`, body, (error) => {
        if (error) {
          console.log(error);
        } else {
          //the number of characters in the file is equal to the amount of bytes
          console.log(`Downloaded and saved ${body.length} bytes to ./${userPathInput}.html`);
        }
      });

      rl.close();
    });
  });
});


//take local file path as CL argument


//download the resource to the path

