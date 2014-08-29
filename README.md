javascript.traits
=================

A simple way to inject methods to a javascript class

Example:
```javascript
/**
 * useless functions that will be injected
 **/
function sayMyName(){
  return this.name;
}
function changeMyName(newName){
  this.name = newName;
}

/**
 * Person Class
 **/
function Person(){
  this.name = "me";

// class methods can call injected methods
  this.whoAmI = function(){ return this.sayMyName(); }

// You can inject methods like in php
  use(this, changeMyName);

// You can pass an array of functions to inject
  use(Person, [sayMyName]);
  return this;
}

var someone = new Person();
console.log(someone.whoAmI());

someone.changeMyName("new name");
console.log(someone.whoAmI());
```
