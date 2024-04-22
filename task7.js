export class Player {
  constructor(name) {
    this.name = name;
    this.inventory = {}; // El inventario se inicializa como un objeto vacío
  }

  addItem(item, quantity = 1) {
    if (this.inventory[item]) {
      // Si el artículo ya existe en el inventario, aumentamos su cantidad
      this.inventory[item] += quantity;
    } else {
      // Si el artículo no está en el inventario, lo añadimos con la cantidad especificada
      this.inventory[item] = quantity;
    }
  }

  removeItem(item, quantity = 1) {
    if (this.inventory[item]) {
      // Si el artículo existe en el inventario
      if (this.inventory[item] > quantity) {
        // Si la cantidad en el inventario es mayor que la cantidad a eliminar, simplemente restamos la cantidad
        this.inventory[item] -= quantity;
      } else {
        // Si la cantidad en el inventario es menor o igual a la cantidad a eliminar, eliminamos completamente el artículo del inventario
        delete this.inventory[item];
      }
    }
  }

  showInventory() {
    console.log(`${this.name}'s Inventory:`);
    for (let item in this.inventory) {
      console.log(`${item}: ${this.inventory[item]}`);
    }
  }
}

// Ejemplo de uso
let player1 = new Player("Tara");
player1.addItem("Potion", 3);
player1.addItem("Sword");
player1.showInventory(); // Mostrar el inventario

player1.removeItem("Potion", 2);
player1.showInventory(); // Mostrar el inventario después de eliminar algunos elementos


//En este ejemplo, cada artículo en el inventario se almacena como una clave en el objeto inventory, con su cantidad correspondiente como valor asociado. Los métodos addItem() y removeItem() se utilizan para agregar y eliminar elementos del inventario, respectivamente. El método showInventory() se utiliza para mostrar el contenido del inventario en la consola.