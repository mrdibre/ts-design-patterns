import { DatabaseSingleton } from "./singleton";

const db = DatabaseSingleton.instance;

db.add({ name: "Luiz", age: 30 });
db.add({ name: "Maria", age: 50 });
db.add({ name: "Eduardo", age: 25 });

