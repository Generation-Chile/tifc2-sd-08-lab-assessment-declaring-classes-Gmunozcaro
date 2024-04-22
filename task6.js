export class Player {
  constructor(name, level = 1, experience = 0) {
    this.name = name;
    this.level = level;
    this.experience = experience;
    this.experienceNeededForNextLevel = 100; // Cantidad de experiencia necesaria para el próximo nivel
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level} with ${this.experience} experience points!`);
  }

  gainExperience(points) {
    this.experience += points;
    while (this.experience >= this.experienceNeededForNextLevel) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level++;
    this.experience -= this.experienceNeededForNextLevel;
    this.experienceNeededForNextLevel *= 1.2; // Aumentar la cantidad de experiencia necesaria para el próximo nivel
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}

export class Party {
  constructor() {
    this.members = [];
  }

  addMember(player) {
    this.members.push(player);
  }

  removeMember(player) {
    const index = this.members.indexOf(player);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }
}

// Ejemplo de uso
let player1 = new Player("Tara");
let player2 = new Player("John");
let player3 = new Player("Alice");

let party = new Party();
party.addMember(player1);
party.addMember(player2);
party.addMember(player3);

console.log(party.members); // Array con los miembros del partido

party.removeMember(player2);
console.log(party.members); // Array con los miembros del partido después de eliminar un miembro


//En este código, hemos creado una clase Party para representar al grupo de jugadores. Tiene métodos addMember() y removeMember() para agregar y eliminar jugadores del grupo, respectivamente. Cada vez que un jugador es añadido o removido, se actualiza la matriz members.
