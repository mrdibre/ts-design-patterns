import { DatabaseSingleton } from "./singleton";
import "./module_a";

const db = DatabaseSingleton.instance;

db.add({ name: "Roberto", age: 50 });
db.add({ name: "Joana", age: 75 });
db.add({ name: "Luiza", age: 8 });

db.show();
