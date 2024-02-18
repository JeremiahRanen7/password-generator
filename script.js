class Password {
  constructor(pass) {
    console.log("Welcome to Password Generator");
    this.pass = "";
  }
  generatePassword(len) {

    let chars = "abcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let special = "!@#$%^&*()";
    
    if (len < 3) {
        document.getElementById("error").style.display = "block";
      console.log("Password should be atleast three characters long");
      document.getElementById("error").innerHTML = `
      <div style="margin-top:-30px">
      <p style="color:#ff5e5e">Password should be atleast three characters long!</p>
      </div>
      `;
    } 
    
    else {
      let i = 0;
      while (i < len) {
        document.getElementById("error").style.display = "none";
        this.pass += chars[Math.floor(Math.random() * chars.length)];
        this.pass += nums[Math.floor(Math.random() * nums.length)];
        this.pass += special[Math.floor(Math.random() * special.length)];
        i += 3;
      }
      this.pass = this.pass.substr(0, len);
      return this.pass;

    }
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const generateBtn = document.getElementById("generateBtn");
  const passwordDisplay = document.getElementById("passwordDisplay");

  generateBtn.addEventListener("click", function () {

    const p = new Password();
    let a = prompt("Enter your desired length for the password: ");
    const generatedPassword = p.generatePassword(a);
    passwordDisplay.textContent = generatedPassword;
    console.log(generatedPassword);
  });
});
