import { Character } from "./character";

export class Counselor extends Character {
  characterAdvised;
  communicate: string;

  constructor(
    name: string,
    house: string,
    age: number,
    characterAdvised: string
    
    
  ) {
    super(name, house, age,characterAdvised);
    this.characterAdvised = characterAdvised;
    this.communicate = "I think I'll be dying soon";
  }
}
