import { Book } from "./Book";

export class Library{
    private books: Book[] = [];

    addBook(book:Book){
        this.books.push(book);
    }

    getCatalog(){
        console.log(this.books)
    }
}