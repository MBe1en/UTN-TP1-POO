import { Author } from "./entities/Author";
import { Library } from "./entities/Library";
import { PrintedBook } from "./entities/PrintedBook";

const delFrade = new Author('Carlos', 'Del Frade');
const abram = new Author('David', 'Abram');
const galeano = new Author('Eduardo', 'Galeano');

const ciudadBlanca = new PrintedBook('Ciudad blanca, crónica negra', delFrade, 2000);
const devenirAnimal = new PrintedBook('Devenir animal', abram, 2021);
const lasVenas = new PrintedBook('Las venas abiertas de Latinoamérica', galeano, 1971);
const losHijos = new PrintedBook('Los hijos de los días', galeano, 2012);

const biblioteca = new Library()

biblioteca.addBook(ciudadBlanca);
biblioteca.addBook(devenirAnimal);
biblioteca.addBook(lasVenas);
biblioteca.addBook(losHijos);

biblioteca.getCatalog();
console.log(ciudadBlanca.getInfo());
console.log(devenirAnimal.getInfo());
