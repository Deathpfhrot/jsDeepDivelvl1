console.log("%c----------lev1_1: for loop Hello World----------", "color: green");

for (let i = 1; i <= 10; i++) {
    console.log('Hello World ' + [i]);    
}

console.log("%c----------lev1_2: for loop Array----------", "color: green");

let numArray = [];

for (let i = 0; i <= 10; i++) {
    console.log(numArray.push(i));
}
console.log(numArray);


console.log("%c----------lev1_3: while loop Hallo World----------", "color: green");

let counter = 0;

while (counter < 10) {
    console.log('Hallo World ' + counter);
    counter++;
}

// was ist der große unterschied bei while und loop?

console.log("%c----------lev1_4: for loop Namen----------", "color: green");

let names = ['Eric', 'Steffen', "Finn", "Simon", "Franzi", "Kim", "Sergio"]

for (let i = 0; i < names.length; i++) {
    output = names[i];
}
console.log(output);

console.log("%c----------lev1_5: vor loop objects----------", "color: green");

var apple1 = { color: "red", size: "big" };
var apple2 = { color: "green", size: "small" };
var apple3 = { color: "yellow", size: "big" };
var apples = [apple1, apple2, apple3];

for (let i = 0; i < apples.length; i++) {
    const element = apples[i].size;
    console.log(element);
}


//// size: -> is a key, the 'big' is a value. To access those object you want to get the value. Therefore you ask for the key/object to get the value of the key.


// richtig so sieht auf dem bild etwas anders aus?

console.log("%c----------lev1_6: for loop Array----------", "color: green");

let retArray = []

for (let i = 1; i <= 100; i++) {
    retArray.push('image_'+ i + '.jpg')    
}
console.log(retArray);

console.log("%c----------lev1_7: do while----------", "color: green");

let y = 1;

do {
    document.write('The number is ' + y + '<br>')
    y++;
} while (y <= 5);

console.log("%c----------lev1_8: do while2----------", "color: green");

let m = 0
do {
        m++
    if (m % 2 == 0) {
        console.log('Hello');
        console.log(m)
    }
} while (m < 20);

console.log("%c----------lev1_9: loops_mit_input_word----------", "color: green");


let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
let output2 = document.getElementById('output2')
let number1 = document.getElementById('number1')

function submitButton(){
    
    // words.forEach(m => {
    //     console.log(m.length);
    //     if (number1.value == m.length) {
    //         console.log('Test');
    //         output2.innerHTML += `${m} <br>`
    //     }
    // })

        for (let i = 0; i == words; i++) {
            
            if (number.value == words[i].length) {
                output2.innerHTML = words[i]
                console.log('Iam here');
            } else{
                
            }
        }
}

console.log(words[0].length);





