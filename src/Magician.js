import StonedCharacter from "./StonedCharacter";
export default class Magician extends StonedCharacter {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }
}