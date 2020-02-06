const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

console.log("hello");

console.log("Hello I am a %s string!', '' ")

console.log(`%c I am some great text, ' font-size:50px;
    background:blue; text-shadow: 10px 10px 0 red`)

console.error('shit!')

const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'that is wrong!');

console.log(p);
console.dir(p);

console.clear();


dogs.forEach(dog => {
    console.groupCollapsed(`{dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} god years old`);
    console.groupEnd(`${dog.name}`);
});


console.count('Alan');
console.count('Alan');
console.count('Steve');
console.count('Steve');
console.count('Alan');
console.count('Alan');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })


console.table(dogs);