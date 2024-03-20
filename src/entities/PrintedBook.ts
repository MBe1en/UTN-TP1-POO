import { Author } from "./Author";
import { Book} from "./Book";

export class PrintedBook implements Book{
    title: string;
    author: Author;
    year: number;
    
    constructor(title:string, author:Author, year:number){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    getInfo(): string{
        return `${this.title} - ${this.author.lastName}, ${this.author.name} - ${this.year}`
    }
}