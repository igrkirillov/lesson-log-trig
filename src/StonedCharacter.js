import Character from "./Character";

export default class StonedCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.stoned = undefined;
    this.distance = 1;
  }

  get attack() {
    let result = this._attack - Math.ceil(this._attack * (this.distance - 1) / 10);
    if (this.stoned) {
      result -= Math.log2(this.distance) * 5;
    }
    return result;
  }

  set attack(value) {
    this._attack = value;
  }
}