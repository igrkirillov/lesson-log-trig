import StonedCharacter from "./StonedCharacter";
export default class Daemon extends StonedCharacter {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }
}