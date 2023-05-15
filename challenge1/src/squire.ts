import { Character } from "./character";

export class Squire extends Character {
  knight;
  pelotismo;
  communicate: string;

  constructor(
    name: string,
    house: string,
    age: number,
    knight: string,
    pelotismo: number,
    communicate:string,
  ) {
    super(name, house, age,communicate);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.communicate = "I'm a loser";
  }
}
