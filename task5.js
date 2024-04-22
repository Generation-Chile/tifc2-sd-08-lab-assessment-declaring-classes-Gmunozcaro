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

// Ejemplo de uso
let player1 = new Player("Tara");
player1.gainExperience(120); // Ganar 120 puntos de experiencia
player1.info(); // Salida: Tara has reached Level 2 with 20 experience points!

//En este ejemplo, cada vez que un jugador gana experiencia, verificamos si tienen suficiente experiencia para subir de nivel. Si es así, llamamos al método levelUp(), que aumenta el nivel del jugador y ajusta la cantidad de experiencia necesaria para el próximo nivel. En este caso, hemos decidido que se necesita un aumento del 20% en la cantidad de experiencia necesaria para el próximo nivel cada vez que el jugador sube de nivel. Este valor puede ajustarse según las necesidades del juego.