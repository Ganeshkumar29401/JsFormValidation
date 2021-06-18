class Validate {
  constructor() {
    this.userName = document.getElementById("input");
    this.userPass = document.getElementById("password");
    this.passCheck = document.getElementById("password_again");
    this.userEmail = document.getElementById("email");
    this.submitBtn = document.querySelector("button");
    this.form = document.querySelector(".form");
    this.okIcon = document.querySelector(".fa-check-circle");
    this.errorIcon = document.querySelector(".fa-exclamation-circle");
  }

  checkInput() {
    const name = this.userName.value.trim();
    const email = this.userEmail.value.trim();
    const pass = this.userPass.value.trim();
    const passCheck = this.passCheck.value.trim();

    if (name !== "") {
      this.setSucessCallback(this.userName);
    } else {
      this.setErrorCallback(this.userName, "Username can't be empty");
    }

    if (email === "") {
      this.setErrorCallback(this.userEmail, "Email can't be empty");
    } else if (!this.emailValidate(email)) {
      this.setErrorCallback(this.userEmail, "Email is not valid");
    } else {
      this.setSucessCallback(this.userEmail);
    }

    if (pass === "") {
        this.setErrorCallback(this.userPass, "Password can't be empty");
    } else if (pass.length < 8) {
        this.setErrorCallback(this.userPass, "Password must be greater than 8");
    } else {
        this.setSucessCallback(this.userPass);
    }

    if (passCheck === "") {
        this.setErrorCallback(this.passCheck, "Password can't be empty");
    } else if (pass !== passCheck) {
        this.setErrorCallback(this.passCheck, "Password does not match");
    } else {
        this.setSucessCallback(this.passCheck);
    }
  }

  setSucessCallback(input) {
    const form = input.parentElement;
    const small = form.querySelector("small");
    form.className = "form-control success";
    small.textContent = "";
  }

  setErrorCallback(input, message) {
    const form = input.parentElement;
    const small = form.querySelector("small");
    form.className = "form-control error";
    small.textContent = message;
  }

  emailValidate(mail) {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(mail);
  }
}

class Action extends Validate {
  constructor() {
    super();
  }

    render() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.checkInput();
    });
  }
}

const result = new Action();
result.render();
