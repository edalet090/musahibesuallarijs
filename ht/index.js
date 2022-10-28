function reverseArray(salamdostlarnecesinizneynirsiniz) {
    let name = ["Ali", "Fidan", "Tunzala", "Humay"];
    let name2 = name.reverse();
    return name2;
}
console.log(reverseArray(name))

//

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]
function greetAliens(salamyaxsiyamsennecesen) {
    console.log("Oh powerful" + " " + aliens[0] + "," + "we humans offer our unconditional surrender!")
    console.log("Oh powerful" + " " + aliens[1] + "," + "we humans offer our unconditional surrender!")
    console.log("Oh powerful" + " " + aliens[2] + "," + "we humans offer our unconditional surrender!")
    console.log("Oh powerful" + " " + aliens[3] + "," + "we humans offer our unconditional surrender!")
}
greetAliens(aliens);

//

const coolStuff = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
];
const myStuff = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room',
];
function justCoolStuff(arr1, arr2) {
    let arr3 = []
    for (let i = 0; i < arr1.length; i++) {
        for (let a = 0; a < arr2.length; a++) {
            if (arr1[i] === arr2[a]) {
                arr3.push(arr1[i])
            }
        }
    }
    console.log(arr3)
}
justCoolStuff(myStuff, coolStuff);

//

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
];
const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
];
function isTheDinnerVegan(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].source === 'meat') {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));