# Problem 1 - Analysis

## 1. These codes are written using the bad behaviour. How many flaws are shown in the code below?

6 flaws

## 2. Which part are they?

- Declaring variable
- Naming class
- Naming method in the class
- Missing extend in class "userservice"
- In the part of `user[] users = []` and `user[] getallusers()` are not exist in JavaScript
- Filter method in JavaScript need a callback

## 3. Write down the reasons for each of these flaws?

- Declaring variable.

  In the example, to declare a variable they used "var" instead of using "let" or "const". It supposed to use "let" rather than using "var" to declare variable.

- Naming class

  To create a class in JavaScript should use Pascal Case. Example:

  ```
  class Users
  class UserService
  ```

- Naming method in the class

  To create a method in JavaScript should use Camel Case. Example:

  ```
  getAllUsers()
  getUserById()
  ```

- Missing extend in class "userservice"

  To access property in class Users, it required to extend the class. So, it supposed to be:

  ```
  class UserService extend User
  ```

- In the part of `user[] users = []` and `user[] getallusers()` are not exist in JavaScript

  It supposed to use `super()` inside the constructor to access property in parent class. So, it supposed to be:

  ```
  class UserService extend Users{
    constructor(id,userName,password){
       super(id,userName,password)
       this.users = [id,userName,password];
    }
  }
  ```

- Filter method in JavaScript need a callback

  To use filter method, it require a callback. So, it supposed to look like this:

  ```
  getUserById(userId) {
    return this.users.filter((user) => user.id === userId);
  }
  ```
