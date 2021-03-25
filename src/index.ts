interface Human {   // object 로 넣을때
    name: string;
    age: number;
    gender: string;
}
const person = {
    name: 'Jeein',
    age: 30,
    gender: 'female'
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export { };