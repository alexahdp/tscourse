// приватные поля

class User3 {
  private password: string;
  #key: string;
  private isActive: boolean;

  constructor(public name: string, private email: string, password: string) {
    this.password = password;
    this.isActive = false;
    this.#key = password;
  }

  login(password: string) {
    return this.isActive && this.password === password;
  }

  protected activate() {
    this.isActive = true;
  } 
}

const user3 = new User3('alex', 'alex@gmail.com', '1234');

if (user3.login('1234')) {
  console.log('success');
}

// typescript заругается, но js отработает
// поскольку js ничего не знает об аннотациях типов ts
console.log(user3.password);

// компиляция не сработает, js оказался невалидным
console.log(user3.#key);
