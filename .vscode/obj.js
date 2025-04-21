function Book(title, author, ISBN) {
    return {
      title,
      author,
      ISBN,
      isBorrowed: false,
      borrow() {
        this.isBorrowed = true;
      },
      returnBook() {
        this.isBorrowed = false;
      }
    };
  }
  
  const Library = {
    books: [],
    addBook(book) {
      this.books.push(book);
    },
    findBookByISBN(isbn) {
      return this.books.find(book => book.ISBN === isbn);
    },
    listAvailableBooks() {
      return this.books.filter(book => !book.isBorrowed);
    },
    listBorrowedBooks() {
      return this.books.filter(book => book.isBorrowed);
    }
  };
  const book1 = Book("1984", "George Orwell", "123456");
  Library.addBook(book1);
  book1.borrow();
  console.log(Library.listBorrowedBooks());
  