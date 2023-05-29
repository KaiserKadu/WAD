var http = require("http");
const crypto = require("crypto");

function generateRandomPassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log("Random Password:", randomPassword);

var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from Krishna\nPassword for you is displayed in Console ");
});
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
