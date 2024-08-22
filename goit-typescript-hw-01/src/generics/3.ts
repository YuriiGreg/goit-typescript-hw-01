function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}



const obj1 = { name: 'Alice' };
const obj2 = { age: 30 };

const mergedObj = merge(obj1, obj2);

console.log(mergedObj);

