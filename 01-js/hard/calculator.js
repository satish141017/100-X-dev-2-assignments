/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  
  ans=0;
  add(val) {
    this.ans += val;
  }
  subtract(val) {
    this.ans -= val;
  }
  multiply(val) {
    this.ans *= val;
  }
  divide(val) {
    if(val===0 ) throw new Error('Division by zero');
    this.ans /= val;
  }
  clear() {
    this.ans = 0;
  }
  getResult() {
    return this.ans;
  }
  calculate(str) {
    function aukaat(str) {
      if (str == '*' || str == '/') return 2;
      if (str == '+' || str == '-') return 1;

      return 0;
    }
    function operation(b, a, c) {
      if (c == '+') return a + b;
      if (c == '*') return a * b;
      if (c == '-') return a - b;
      if (c == '/') {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      }

    }

    let stack1 = [];
    let stack2 = [];
    try {
      for (let i = 0; i < str.length; i++) {

        if (str[i] == ' ') continue;
        if (str[i] >= '0' && str[i] <= '9') {
          let val = "";
          while (i < str.length && ((str[i] >= '0' && str[i] <= '9') || str[i] == '.')) {
            val += str[i];
            i++;
          }
          stack1.push(parseFloat(val));
          i--;

        } else if (str[i] == '+' || str[i] == '-') {
          while (stack2.length > 0 && aukaat(stack2[stack2.length - 1]) >= 1) {
            let b = stack1.pop();
            let a = stack1.pop();
            let c = stack2.pop();
            stack1.push(operation(b, a, c));

          }
          stack2.push(str[i]);

        } else if (str[i] == '*' || str[i] == '/' || str[i] == '(') {
          stack2.push(str[i]);

        } else if (str[i] == ')') {
          while (stack2.length>0 && stack2[stack2.length - 1] != '(') {
            let b = stack1.pop();
            let a = stack1.pop();
            let c = stack2.pop();
            stack1.push(operation(b, a, c));

          }
          if(stack2.length==0) throw new Error("invalid expression");
          stack2.pop();

        }
        else {
          throw new Error("Invalid inpput");
        }

      }

      while (stack2.length > 0) {
        
        let a = stack1.pop();
        let b = stack1.pop();
        let c = stack2.pop();
        if(c=='(') throw new Error("Invalid expression");
        stack1.push(operation(a, b, c));

      }
    } catch (err) {

      throw new Error("Invalid inpput");

    }
    this.ans+=stack1[stack1.length - 1];



  }

}

let c = new Calculator();
console.log(c.calculate('10 + (2 + 3)'));

module.exports = Calculator;
