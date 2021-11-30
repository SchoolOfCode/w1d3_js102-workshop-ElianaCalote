
let attempt = 0;
let userPassword;

while (attempt < 3) {
    userPassword = prompt("Please enter the password.");
    console.log(userPassword);
    if (userPassword === "myPassword1!") {
        alert("My secret information here");
        break;
    } else {
        attempt++;
    }
}

console.log("The last password given was " + userPassword);

