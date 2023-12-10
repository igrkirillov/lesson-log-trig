export default class Character {
  constructor(name, type) {
    this.checkName(name);
    this.name = name;
    this.checkType(type);
    this.type = type;

    this.health = 100;
    this.level = 1;

    this._attack = undefined;
    this.defence = undefined;
    this.stoned = undefined;
    this.distance = 1;
  }

  checkName(name) {
    if (typeof name !== "string") {
      throw new Error("Параметр name не строка");
    }
    const length = name.length;
    if (length < 2 || length > 10) {
      throw new Error("Длина параметра name не в интервале [2,10]");
    }
  }

  checkType(type) {
    const availableTypes = ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if (!availableTypes.includes(type)) {
      throw new Error(`Значение параметра type ${type} не содержится среди доступных ${availableTypes}`);
    }
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }
}