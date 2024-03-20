import { Person } from "./Person";

export class Author implements Person {
  name: string;
  lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}
