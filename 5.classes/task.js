//Task 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
      if (this.state < 0) {
        this.state = 0
      }
      if (this.state > 100) {
        this.state = 100
      }
    }
  
    set state(state) {
      if (state < 0) {
        this._state = 0;
      }
      if (state > 100) {
        this._state = 100;
      }
      this._state = state;
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book"
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
      this.author = author;
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "fantastic";
      this.author = author;
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount, author);
      this.type = "detective";
      this.author = author;
    }
  }
  
  //Task 2
  
  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(key, value) {
      for (let book of this.books) {
        if (book[key] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      const book = this.findBookBy("name", bookName);
      const bookIndex = this.books.indexOf(book);
      if (bookIndex !== 1) {
        this.books.splice(bookIndex, 1);
        return book;
      } return null;
    }
  }
  
  //Task 3
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
      if (subject in this.marks) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [mark];
      }
    }
  
    getAverageBySubject(subject) {
      if (!(subject in this.marks)) {
        return 0;
      }
      let avg = this.marks[subject].reduce((acc, marc) => acc + marc, 0) / this.marks[subject].length;
      return avg;
    }
  
    getAverage() {
      let subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
      let avg = 0;
      for (let sub of subjects) {
        let subAvg = this.getAverageBySubject(sub);
        avg += subAvg;
      }
      return avg / subjects.length;
    }
  }