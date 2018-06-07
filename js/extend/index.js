// es6 class 只是语法糖
function Person(name) {
    this.name = name
  }
  
  Person.prototype = {
    getName: function() {
      return this.name;
    }
  }
  
  function Author(name, books) {
    Person.call(this, name);
    this.books = books;
  }
  
  extend(Author, Person);
  Author.prototype.getBooks = function() {
    return this.books;
  }
  
  function extend(subClass, superClass) {
    subClass.prototype = new superClass();
    // constructor属性丢失了 constructor属性就是它的构造函数
    subClass.prototype.constructor = subClass;
  }
  
  const author = new Author('高尔基', ['我的offer']);
  console.log(author.getName());
  console.log(author.getBooks());
  
  const person = new Person('周杰伦');
  console.log(person.constructor.prototype);

  // new Person()
  