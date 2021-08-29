export interface Prototype {
  clone(): Prototype;
}

class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) { }

  clone(): Person {
    const person = new Person(this.name, this.age);
    person.addresses = this.addresses.map(item => item.clone());

    return person;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }

}

const address1 = new Address("Av Brasil", 15);

const person1 = new Person("Person 1", 30);

person1.addAddress(address1);

const person2 = person1.clone();

person1.addresses[0].street = "Changed";

person2.name = "Person2";

console.log(person2);
console.log(person2.addresses)
