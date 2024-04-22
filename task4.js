export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
  }
}

let player1 = new Player("Tara", 6);
player1.info(); 
player1.levelUp();
player1.info(); 