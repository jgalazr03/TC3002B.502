import { Stack } from "./stack.js";
import { Queue } from "./queue.js";
import { Dictionary } from "./dictionary.js";

// STACK - Test case: Prueba de las operaciones básicas de pila (LIFO)
// Agrega elementos, consulta el último sin removerlo, y luego lo remueve
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("Stack peek:", stack.peek());
console.log("Stack pop:", stack.pop());
console.log("Stack size:", stack.size());

// QUEUE - Test case: Prueba de las operaciones básicas de cola (FIFO)
// Agrega elementos, consulta el primero sin removerlo, y luego lo remueve
const queue = new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
console.log("Queue front:", queue.front());
console.log("Queue dequeue:", queue.dequeue());
console.log("Queue size:", queue.size());

// DICTIONARY - Test case: Prueba de las operaciones básicas del diccionario (key-value)
// Agrega pares clave-valor, consulta valores, obtiene claves, y elimina entradas
const dict = new Dictionary<string, any>();
dict.set("name", "Juan");
dict.set("age", 21);
console.log("Dictionary get name:", dict.get("name"));
console.log("Dictionary keys:", dict.keys());
dict.delete("age");
console.log("Dictionary has age:", dict.has("age"));