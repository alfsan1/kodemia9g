class Person {
  constructor (firstName, lastName, gender) {
    this.firstName
    this.lastName
    this.gender
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

class Koder extends Person {
  constructor (firstName, lastName, gender, generation, bootcamp) {
    super(firstName, lastName, gender)
    this.school = 'Kodemia'
    this.generation = generation
    this.bootcamp = bootcamp
  }

  greet () {
    return `hola soy ${this.getFullName()} y pertenezco a ${this.generation} de ${this.school}`
  }
}

var koder = new Koder('alf', 'saints', 'm', 9, 'js')

// Una clase es un molde de una identidad que quiero crear. estoy creando mi tipo de dato. > tengo una estructura que contiene datos. constructor toma moldes > crea un objeto con las variables dadas.  >  tengo una clase persona, la definición del molde. Componentes** clase se le define, pone propiedades dentro del constructor. Un objeto

// al crear una función dentro de una clase, pero fuera del objeto, se convierte en método.
// todo lo que recibe el constructor, puede variar, es variable.
// react tiene un dom virtual.
