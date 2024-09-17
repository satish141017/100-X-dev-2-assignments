/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  lst = [];
  add(str){
    this.lst.push(str);
  }
  remove(indx){
    if(indx<this.lst.length){
      for(let i=indx ; i<this.lst.length-1 ; i++){
        this.lst[i]=this.lst[i+1];
      }
      this.lst.pop();
    }
 
  }
  update(indx,str){
    
    if(indx<this.lst.length) this.lst[indx] = str;

  }
  getAll(){
    return this.lst;
  }
  get(indx){
    if(indx>=0 && indx<this.lst.length)
      return this.lst[indx];
    return null;
  }
  clear(){
    this.lst=[];
  }
    
 
  
}
// let todoList = new Todo();
// todoList.add('Task 1');
// 		todoList.add('Task 2');
// 		todoList.add('Task 3');

// console.log(todoList.getAll());

module.exports = Todo;
