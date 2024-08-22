type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, keyof AllType>, U extends Pick<AllType, keyof AllType>>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


const obj1 = { name: 'Object1', position: 1, color: 'red', weight: 10 };
const obj2 = { name: 'Object2', position: 2, color: 'blue', weight: 20 };

const result = compare(obj1, obj2);

console.log(result);

