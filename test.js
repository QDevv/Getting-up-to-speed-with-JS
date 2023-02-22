var myName;

myName = 'Kudus';
console.log(myName);

let myNumber = 10;

console.log(myNumber + 5);

let wears = 'denim'

console.log(wears + myNumber);

console.log(
'Hello' + ' ' + 'David'
);
let myInteger = 55
myInteger += 5

console.log(myInteger);

// console.log(myInteger++);
console.log(++myInteger);
document.write(myName)
document.write(77)

console.log(Boolean(550));

//IF ELSE STATEMENT
// check if a number is odd or even in JS
let n = 4;
if (n%2 == 0 ) {
    console.log('This is an even Number');
}
else if (n%2 != 0) {
    console.log('This is an odd number');
}

//check if input variable is a number or not

let InputVariable = 0;

// console.log(typeof InputVariable);
console.log(Number(InputVariable))


if (Number.isInteger(InputVariable)  ) {
    console.log('This is a number');
}
else if (!Number.isInteger(InputVariable)) {
    console.log('This is not a number');
}


let players = ['bode', 'temi', 'gold', 'adam']
for (let i = 0; i < players.length; i++) {
    
    if (i == 2) {
        break;
    }
    console.log(players[i]);
    
}





let soln = prompt('Type first number', 0)

let ver = prompt('Type second number', 0)

if (soln > ver) {
    console.log(`${soln} is greater`);
}
else if (ver > soln) {
    console.log(`${ver} is greater`);
}
else{
    console.log(`The two numbers are the same`);
}

let x = [3, 4, 5]



if (x[0]*x[1]*x[2] > 1) {
   console.log('The sign is +');
}
else if (x[0]*x[1]*x[2] < 1) {
    console.log('The sign is -');
}

let codes = [1, 2, -5];

if(codes[0] < codes[1] && codes[1] < codes[2]) {
console.log(`${codes[0]} ${codes[1]} ${codes[2]}`);
}

else if(codes[1] < codes[0] && codes[0] < codes[2]) {
    console.log(`${codes[1]} ${codes[0]} ${codes[2]}`) }

    else if (codes[2] < codes[1] && codes[1] < codes[0]) {
        console.log(`${codes[2]} ${codes[1]} ${codes[0]}`)
    }
    else if (codes[2] < codes[0] && codes[0] < codes[1]) {

        console.log(`${codes[2]} ${codes[0]} ${codes[1]}`)
    }
    else if (codes[1] < codes[2] && codes[2] < codes[0]) {
        console.log(`${codes[1]} ${codes[2]} ${codes[0]}`)
    }
    else if (codes[0] < codes[2] && codes[2] < codes[1]) {
        console.log(`${codes[0]} ${codes[2]} ${codes[1]}`)
    }

   console.log( codes.sort((a, b) => a-b));

   let clpss = [0, -5, -1, 2, -6];

   let highest = clpss.sort((a,b) => b-a)

   console.log(highest[0]);



   for (let i = 0; i <= 15; i++) {
    
      if (i%2 == 1) {
       console.log(`${i} is an odd number`)
      }
      else{
        console.log(`${i} is an even number`);
      }
   }





   let arr = [80, 77,88, 95, 68]

   let avgArr =  (arr[0] + arr[1] +arr[2] + arr[3] + arr[4])/5

   if (avgArr < 60) {
    console.log('F');
   }
   else if (avgArr > 60 && avgArr < 70) {
    console.log('D');
   }
   else if (avgArr > 70 && avgArr < 80) {
    console.log('C');
   }
   else if (avgArr > 80 && avgArr < 90) {
    console.log('B');
   }
   else if (avgArr > 90 && avgArr < 100) {
    console.log('A');
   }


   function Declare5(L, B) {
       let area = L * B
       return area
   }
   
   calcArea = Declare5(4, 5) 
   console.log(calcArea);


//    Local and Global variable

let team = 'Barca';

function check() {
    console.log(team);

    let stage = 'initial'
}

check()
// console.log(stage);

let vox = '56ty'
console.log(vox[3]);
console.log(vox.length);




let nnum = prompt('input Number', 0);
console.log(nnum.length);



let reverseNumber = (gt, nnum) => {
    if ( gt == 0) return '';

    return nnum[gt - 1] + reverseNumber(gt- 1, nnum)
}

console.log(reverseNumber(nnum.length, nnum));



// Math Operators 

console.log(Math.ceil(4.6));



let pal = prompt('type word')

let funcPalindrome = (dt, pal) => {
    if (dt == 0) return '';

    return pal[dt -1] + funcPalindrome(dt -1, pal);

}

let checkPal = funcPalindrome(pal.length, pal)

if (checkPal == pal) {
    console.log(`${pal} is a palindrome`);
}
else{
    console.log(`${pal} is not a palindrome`) 
}


let animal = 'dog';
console.log(`${animal.split('')[0]}, ${animal.split('')[1]}, ${animal.split('')[2]}, ${animal.split('')[0] + animal.split('')[1]}, ${animal.split('')[1] + animal.split('')[2]}, ${animal.split('')[0] + animal.split('')[1] + animal.split('')[2]}`);


let multilate = () => {

 animal.split('')[0], animal.split('')[1], animal.split('')[2], animal.split('')[0] + animal.split('')[1], animal.split('')[1] + animal.split('')[2], animal.split('')[0] + animal.split('')[1] + animal.split('')[2]
}

console.log(multilate());