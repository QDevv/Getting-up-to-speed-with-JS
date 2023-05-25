// var myName;

// myName = "Kudus";
// console.log(myName);

// let myNumber = 10;

// console.log(myNumber + 5);

// let wears = "denim";

// console.log(wears + myNumber);

// console.log("Hello" + " " + "David");
// let myInteger = 55;
// myInteger += 5;

// console.log(myInteger);

// // console.log(myInteger++);
// console.log(++myInteger);
// document.write(myName);
// document.write(77);

// console.log(Boolean(550));

// //IF ELSE STATEMENT
// // check if a number is odd or even in JS
// let n = 4;
// if (n % 2 == 0) {
//   console.log("This is an even Number");
// } else if (n % 2 != 0) {
//   console.log("This is an odd number");
// }

// //check if input variable is a number or not

// let InputVariable = 0;

// // console.log(typeof InputVariable);
// console.log(Number(InputVariable));

// if (Number.isInteger(InputVariable)) {
//   console.log("This is a number");
// } else if (!Number.isInteger(InputVariable)) {
//   console.log("This is not a number");
// }

// let players = ["bode", "temi", "gold", "adam"];
// for (let i = 0; i < players.length; i++) {
//   if (i == 2) {
//     break;
//   }
//   console.log(players[i]);
  
// }

// let soln = prompt("Type first number", 0);

// let ver = prompt("Type second number", 0);

// if (soln > ver) {
//   console.log(`${soln} is greater`);
// } else if (ver > soln) {
//   console.log(`${ver} is greater`);
// } else {
//   console.log(`The two numbers are the same`);
// }

// let x = [3, 4, 5];

// if (x[0] * x[1] * x[2] > 1) {
//   console.log("The sign is +");
// } else if (x[0] * x[1] * x[2] < 1) {
//   console.log("The sign is -");
// }

// let codes = prompt('enter the numbers you want to compare',0).split('')
// console.log(codes);

// if (codes[0] < codes[1] && codes[1] < codes[2]) {
//   console.log(`${codes[0]} ${codes[1]} ${codes[2]}`);
// } else if (codes[1] < codes[0] && codes[0] < codes[2]) {
//   console.log(`${codes[1]} ${codes[0]} ${codes[2]}`);
// } else if (codes[2] < codes[1] && codes[1] < codes[0]) {
//   console.log(`${codes[2]} ${codes[1]} ${codes[0]}`);
// } else if (codes[2] < codes[0] && codes[0] < codes[1]) {
//   console.log(`${codes[2]} ${codes[0]} ${codes[1]}`);
// } else if (codes[1] < codes[2] && codes[2] < codes[0]) {
//   console.log(`${codes[1]} ${codes[2]} ${codes[0]}`);
// } else if (codes[0] < codes[2] && codes[2] < codes[1]) {
//   console.log(`${codes[0]} ${codes[2]} ${codes[1]}`);
// }

// let findHighest = () => {
//   codes.sort((a, b) => a-b)
//   return codes[codes.length -1]
// } 
// let highestt = findHighest()
// console.log(highestt);

// console.log(codes.sort((a, b) => a - b));

// let clpss = [0, -5, -1, 2, -6];

// let highest = clpss.sort((a, b) => b - a);

// console.log(highest[0]);

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 == 1) {
//     console.log(`${i} is an odd number`);
//   } else {
//     console.log(`${i} is an even number`);
//   }
// }

// let arr = [80, 77, 88, 95, 68];

// let avgArr = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / 5;

// if (avgArr < 60) {
//   console.log("F");
// } else if (avgArr > 60 && avgArr < 70) {
//   console.log("D");
// } else if (avgArr > 70 && avgArr < 80) {
//   console.log("C");
// } else if (avgArr > 80 && avgArr < 90) {
//   console.log("B");
// } else if (avgArr > 90 && avgArr < 100) {
//   console.log("A");
// }

// function Declare5(L, B) {
//   let area = L * B;
//   return area;
// }

// calcArea = Declare5(4, 5);
// console.log(calcArea);

// //    Local and Global variable

// let team = "Barca";

// function check() {
//   console.log(team);

//   let stage = "initial";
// }

// check();
// // console.log(stage);

// let vox = "56ty";
// console.log(vox[3]);
// console.log(vox.length);

// let nnum = prompt("input Number", 0);
// // console.log(nnum.length);

// let reverseNumber = (gt) => {
//   if (gt == 0) return "";

//   return nnum[gt - 1] + reverseNumber(gt - 1);
// };

// console.log(reverseNumber(nnum.length));

// // Math Operators

// console.log(Math.ceil(4.6));

// let pal = prompt("type word");

// let funcPalindrome = (dt) => {
//   if (dt == 0) return "";

//   return pal[dt - 1] + funcPalindrome(dt - 1);
// };

// let checkPal = funcPalindrome(pal.length);

// if (checkPal == pal) {
//   console.log(`${pal} is a palindrome`);
// } else {
//   console.log(`${pal} is not a palindrome`);
// }

// let animal = "dog";
// console.log(
//   `${animal.split("")[0]}, ${animal.split("")[1]}, ${animal.split("")[2]}, ${
//     animal.split("")[0] + animal.split("")[1]
//   }, ${animal.split("")[1] + animal.split("")[2]}, ${
//     animal.split("")[0] + animal.split("")[1] + animal.split("")[2]
//   }`
// );

// let multilate = () => {
//   animal.split("")[0],
//     animal.split("")[1],
//     animal.split("")[2],
//     animal.split("")[0] + animal.split("")[1],
//     animal.split("")[1] + animal.split("")[2],
//     animal.split("")[0] + animal.split("")[1] + animal.split("")[2];
// };

// console.log(multilate());

let arrange = 'live'
console.log(arrange.split("").sort().join(''));

// let arrangeAlpha = () => {
//    arrange.split("").sort()
// }

// console.log(arrangeAlpha());

// const points = [40, 100, 1, 5, 47, 66];

// let funcSORT = points.sort((a, b) => a-b)

// console.log(funcSORT);

// let cap = prompt('type a sentence').split(' ')
// console.log(cap);
// let deed = 0;

// const pp = cap[deed][0].toUpperCase() + cap[deed].slice(1, cap[deed].length)
// // console.log(cap[0].slice(1,3));
// console.log(pp);

// let xs = ['how', 'are', 'you']
// let gv = xs[2].slice(0,3)
// console.log(gv);
// let amm = xs[0][0]
// console.log(typeof amm);

// console.log(Number.isInteger(deed));

// console.log(xs[0][0].toUpperCase() + xs[0].slice(1,3));
// console.log(xs);

// let funcCap = (ded) => {
//     if (ded == cap.length ) return '';

//     return cap[ded][0].toUpperCase() + cap[ded].slice(1, cap[ded].length) + ' ' + funcCap(ded + 1)

// }

// const capitalize = funcCap(0)
// console.log(capitalize);

// let alpha = prompt('Type a word').split('')

// console.log(alpha );

// let arrAlpha = alpha.sort().join('')

// console.log(arrAlpha);

// let capitalizer = prompt('Type aa word').split(' ').join()
// console.log(capitalizer);
// console.log(typeof capitalizer[0][0].toUpperCase());
// console.log(typeof capitalizer[0].slice(1));
// console.log( capitalizer[0][0].toUpperCase() + capitalizer[0].slice(1) + ' ' + capitalizer[1][0].toUpperCase() + capitalizer[1].slice(1) );

// let funcCapitalize = (pas) => {
//    if (capitalizer.length == pas) return "";

//  return capitalizer[pas][0].toUpperCase() + capitalizer[pas].slice(1) + ' ' + funcCapitalize(pas + 1)
// }

// let dcv = funcCapitalize(0)
// console.log(dcv);

// let Longest = prompt('Type a word').split(' ').sort((a, b) => b.length -a.length)[0]

// console.log(Longest);

// let funcLongest = (long) => {
//   if (Longest.length == long) {

//   }
//   return Longest[long] + funcLongest(long + 1)
// }
// let ab = 2;
// let vc = 5
// if (ab != vc) {
//   vc = 8;

//   if (vc == 8) ab++;

//   console.log(ab);

// }

// let hm = 3;
// let vw = 0;
// let vowell = ['aod', 'abv']

// if (hm != vowell[vw].length) {
//   vw = 0;
//   console.log('vw is 00');

//  }

//  if (hm == vowell[vw].length ) {
//    hm = 0;
//    vw = 1;
//    console.log('hm is 0');
//  }

//  if (vowell[vw][hm] == 'a' || vowell[vw][hm] == 'e' || vowell[vw][hm] == 'i' || vowell[vw][hm] == 'o' || vowell[vw][hm] == 'u') {
//    let neww = 5;
//    console.log(++neww);
//    console.log(vw);
//  }
//  if (vw == vowell.length)


// let vowelFind = (sstr) => {
//  const count = sstr.match(/[aeiou]/gi) .length

//  return count;
// }

// const stringg = prompt('Type a string: ')

// const ressult = vowelFind(stringg)
// console.log(ressult);

// let checkPrime = prompt('Enter a Number')

// let funcFindPrime = (checkPrime) => {
// if (checkPrime <= 1)
//   return false;

//   for (let i = 2; i < checkPrime; i++)
//     if (checkPrime % i == 0)
//     return false;

//     return true;

// }

// funcFindPrime(9)
//         ? console.log('true')
//         : console.log('false');

//         let findType = (nn) => {

//           console.log(typeof nn);
//         }

//         findType('8')

// let findNum = prompt('Enter a number: ').split('')
// console.log(findNum);

// let funcSOdRT = () => {
//   findNum.sort((a,b) => a-b )

//   console.log(`${findNum[1]},${findNum[findNum.length -2]}`);
// }

// funcSOdRT()

// // REVERSE A NUMBER

// let Reverse_Number = (n) => {
//   // convert to String
//   n = n + "";

//   return n.split("").reverse().join('');
// }

// console.log(Number(Reverse_Number(34218)));

// let upper_case = (str) => {
//   var array1 = str.split(' ');
//   console.log(array1);
//   var newArray = [];

//   for (let x = 0; x < array1.length; x++) {
//     console.log(array1[x]);
//        newArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));

//     console.log(newArray);
//   }
//   return newArray.join(' ')
// }

// console.log(upper_case('the man is here'));

// // TEST PRIME NUMBER

// let Test_Prime = (n) => {
//   if (n === 1) {
//     return false;
//   } else if (n === 2) {
//     return true;
//   } else {
//     for (let p = 2; p < n; p++) {
//       if (n % p == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// console.log(Test_Prime(4));

function countSelected(selectObject) {
  let numberSelected = 0;
  console.log(selectObject.options);
  for (let i = 0; i < selectObject.options.length; i++) {
    console.log(selectObject.options[i].selected);
    if (selectObject.options[i].selected) {
      numberSelected++;
      console.log(numberSelected);
    }
  }
  return numberSelected;
}

console.log(countSelected(musicTypes));
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
console.log(document.selectForm.musicTypes);
console.log(musicTypes.options);

// console.log(selectObject.options[i].selected)

let nedd = 0;

let sttr = "balablu";
function nbn() {
  for (let i = 0; i < sttr.length; i++) {
    // console.log(sttr[i]);
    // console.log(sttr.split('').indexOf(sttr[i]));
    if (sttr[4] == sttr[i]) {
      // console.log(sttr[0]);
     nedd++;
    
      console.log(nedd);
      // nedd.push(sttr[5]);
      console.log(`${sttr[4]} occured ${nedd} times`);
    }
  
   
  }
}
nbn()


const getStr = (inc) => {
  if (sttr[inc] == sttr.length) return "";

  for (let s = 0; s < sttr.length; s++) {
    // console.log(sttr[s]);

    if (sttr[inc] == sttr[s]) {
      let nedd = [];
      nedd.push(sttr[inc]);
      console.log(`${sttr[inc]} occured ${nedd.push(sttr[inc])} times`);
    }
  }

  getStr(inc + 1);
};
// getStr(0)

// JS REGEX; REPLACE() && Match
let text = "Is this all there is?";
let ressultt = text.replace(/is/g, "dd");
console.log(ressultt);

let text2 = "1234567892";
let extractt = text2.match(/[1-4]/g);
console.log(extractt);

let text3 = "how have you been";
let extractt2 = text3.match(/[h]/g);

console.log(extractt2);

let text_q = "green, black , blue, red, red, green";

let veriry = text_q.match(/green|red/g);
console.log(veriry);

// A GLOBAL SEARCH FOR DIGITS IN A STRING

let text4 = "123 5go!";
let reslt = text4.match(/\d/g);

console.log(reslt);

// SEARCH FOR WHITESPACE CHARACTERS IN A STRING

let strrr = "how have you been";
let rsltt = strrr.replace(/\S/g, "v");

console.log(rsltt);

// FIND A MATCH AT THE BEGINNING OF A WORD

let sim = "bad, beat, cat, bee, cabe";
let rst5 = sim.search(/be\b/);
console.log(rst5);

let sdd = "she has two eggs";
let temm = [...sdd];
console.log(temm);


// const poss = {
//   key: 'value',
//   age: 55
// }
// console.log(poss[i]);

let uchars = {};
console.log(uchars["namee"]);

"the efg".replace(/\S/g, function oof(i) {
  uchars[i] = isNaN(uchars[i]) ? 1 : uchars[i] + 1;
  
});
console.log(uchars);

let quote = 'What goes around comes around';

let rgx = () => {
  let r = /\b\w+\b/g;

  let s = quote.replace(r, '$')
  console.log(s);


}

function replacer(para) {
  if (para == 'goes' ) {
    return 'comes';
  }
  if (para == 'comes') {
    return 'goes';
  }
  else{
    return para
  }
}

rgx()

function replace(para) {
  if (para == 'goes' ) {
    return 'comes';
  }
  if (para == 'comes') {
    return 'goes';
  }
  else{
    return para
  }
}

replace()






console.log(isNaN(undefined));



//  Find the Unicode character specified by the hexadecimal number xxxx

// CHECK NUMBER OF OCCURRENCE

let char_Counts = (str1) => {
  let ucharsz = {};
  str1.replace(/\s/g, function (i) {
    ucharsz[i] = isNaN(ucharsz[i]) ? 1 : ucharsz[i] + 1;
  });
};

console.log(char_Counts('The quick brown fox jumps over the lazy dog'));

// OBJECTSSS





const myhouse = new Object();

myhouse.size = 55;
myhouse.location = "lagos";
myhouse.energy = function () {
  console.log("prepaid meter");
};
myhouse.energy();

const myhouse5 = {
  size: 55,
  location: "Lekki",
  colour: "blue",
  Area: function (lenght, breadth) {
    console.log(lenght * breadth);
  },
};

myhouse5.Area(23, 42);
console.log(myhouse5.size);

let mystacks = {
  html_: "good",
  css: "okay",
  Javascript: "good",

  program: function (l, b) {
    let area = l * b;
    console.log(`${area} is ${this.html_}`);
  },
};
// console.log(this.login);

mystacks.program(3, 4);

// constructor func

let bus = function (speed, brand) {
  this.speed = speed;
  this.brand = brand;
  this.driver = function () {
    console.log("Mr ben");
  };
  this.logdrive = function (distance, time) {
    console.log(`The speed is ${distance / time} m/s`);
  };
};

let mybus = new bus(40, "Benz");
let mybus5 = new bus(50, "Honda");
console.log(mybus);

mybus.logdrive(10, 5);
mybus5.logdrive(3, 5);
mybus5.driver();

mydate = new Date(1987, 1, 6);
console.log(mydate);

let birthday = new Date(1998, 0, 30, 4, 30, 50);

console.log(birthday.getTime());

const profile = {
  first_name: "Brown",
  lastname: "Kemi",
  age: 28,

  fullname: function () {
    return this.first_name + " " + this.lastname;
  },
};

Object.values(profile).map((jj=> {
  console.log(jj.length);
}))

let boo = profile.fullname();

console.log(boo);

console.log(Array.prototype.pop.call(profile));

console.log(Object.entries(profile));

Object.values(profile).forEach((prop) => {
  if (prop.length == 5) {
    console.log(prop);
  }
});

console.log(Array.prototype.pop.call(profile));

console.log(profile);

let club = [
  {
    Name: "Bayern Munich",
    Location: "Germany",
    position: 1,
    Playing_Ucl: true,
  },
  { 
    Name: 'arsenal',
    Location: "England", 
    position: 1, 
    Playing_Ucl: false
   },
];
console.log(club);

let man = club.map((pop => {
  if (pop.Playing_Ucl) {
    console.log(`${pop.Name} is playing in the ucl`);
  }
  else{
    console.log(`${pop.Name} is not in the ucl`)
  }
}))

console.log(man);

// CONSTRUCTOR FUNCTION

const objj = new Object()

objj.namee = 'levy';

objj.age = 41;


console.log(objj);





// 'Object.create' recreates an object

const objl = Object.create(club)

console.log(objl[0].Name);

// Destructuring



const{spider, legs} = objj

console.log(objj);


// destructuring

let swe = ({namee,age}) =>{
 return `my name is ${namee} and i am ${age} years old`
}

console.log(swe(objj));

console.log(objj['namee']);


let objectz = {
  namme: 'David gyan',
  sclass: 'VI',
  rollno: '12',

}

console.log(Object.keys(objectz).length);

let mab = Object.values(objectz)

console.log(objectz.rollno);

delete objectz.rollno
console.log(objectz.hasOwnProperty('rollno'));

console.log(objectz);

// console.log(out);

console.log(mab);



const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'The Road Ahead',
    readingStatus: false
  }
]

const nij = library.map((pop => {
  if (pop.readingStatus) {
   return `i have read ${pop.title} by ${pop.author}`
  }
  else{
    return `i have not read ${pop.title} by  ${pop.author} `
  }
}))

console.log(nij);


class Vol {
  constructor(radius, height) {
    this.radiu = radius;
    this.height = height;
    
  }
  get Voll(){
    return this.calcVol();
  }
       
  calcVol(){
  return (Math.PI * this.radiu ** 2 * this.height).toFixed(2);
}
  
  }


let rst =new Vol(5,10)
console.log(rst.Voll);

class Volv {
  constructor(secs, minute) {
    this.secs = secs;
    this.minute = minute;
    
  }
  get Voll(){
    return setInterval()
  }
       
  calcVol(){
  this.secs+= secs;
  if (this.seconds >= 60) {
    this.minute++;
    this.secs = 0;
  }

}
  
  }

  let daaat =  new Date()

  console.log(daaat);

  let datts = new Volv(daaat.getSeconds, daaat.getMinutes)
  console.log(datts);



  const demography = {
     firstname5: 'mario',
     lastname6: 'gini',

     get fullname(){
       return `${this.firstname5} ${this.lastname6}`
     },

     set fullname(val) {
      const part = val.split(' ');
      console.log(part);
      this.firstname5 = part[0];
      this.lastname6 = part[1]

     }
  }


  demography.fullname = 'barry white';

  console.log(demography.fullname);

  const game = {
    title: 'Atomic Habits',
    year: 1991,
  }

  function binder(man) {
    console.log(`${this.title} was written by ${man}`);
  }

  function cx  (vc) {
    console.log(`${vc} was born in ${this.year}`);
  }
  cx.call(game, 'david')

  const dcc = cx.bind(game, 'Melvin')
  dcc()

  binder.call(game, 'jjjj')



  const gy = binder.bind(game, 'James clear');
  gy()


  let book = {
    title: 'rich dad',
    Author: 'james vok',

  }

  function info(year) {

    console.log((`${this.title} was written by ${this.Author} and was released in ${year}`));
  }

  info.call(book, '2005')

  info.apply(book, ['2008'])

  

  let bb = info.bind(book, '2055')
  bb()




const game6 = {
    title: 'PS5',
    Make: 'Sony',
    year: 2019,
    Locationn: {
      country: 'Nigeria',
      state: 'Lagos'
    }
}

let {title,
   Make: brand,
   year, 
   Locationn, 
   Locationn: {country, state},
  } = game6

console.log(title, brand, year);
// console.log(title);
console.log(Locationn);

const bvv = ['boy', 'girl', 'baby', ['man', 'woman']]

// let [title1, title2, title3, [a,b]] = bvv;

// console.log(title2);
// console.log(a,b);









let Userb = {
  firstName: 'seye',
  country: 'Nigeria',
  yearr: 55,
  Loccationn: {
    counttry: 'Nigeria',
    statte: 'Lagos'
  }
}

let {firstName,
    country: placee, 
    yearr,
    Loccationn, 
    Loccationn: {counttry, statte},
   }  = Userb

   console.log(firstName, country);
console.log(Loccationn);
console.log(counttry);
console.log(placee, statte);


// console.log(User.todos[1]);




let gh = {
  jkj : 'hdhfd',
  6 : 'ehej'
}
console.log(gh.jkj);


const User = {
  firstName5:'Zayd',
  country5: 'UAE',
  todos: {
    ll: 'Do the shopping',
    2: 'Play some games',
  }
}


let {
  firstName5,
  country5,
  todos,
  todos: {one, two}

} = User

console.log(firstName5, country5, todos);
console.log(todos['ll']);

let hubby = ['football', 'racing', 'programming',['Java', 'Rust']]

let[H1,H2,H3, [a,b]] = hubby;

console.log(H1, H3, a, b);


// closure

const outer = () => {
  let outerVar = 'outer';
  console.log(outerVar);

  function inner() {
    let vcc = 'hdh'
    console.log(outerVar, vcc);
  }
  return inner
}

let frr = outer()
frr()


let crust = 'crust';

let earth = () => {
  let mantle = 'mantle';

  function message () {
    let core = 'core';
  console.log(`The earth is made up of the ${crust}, the ${mantle} and the ${core}`);
  }
  return message
}

let rstt = earth()

rstt()



// NULLISH OPERATOR

// This returns the first defined value

let age = null;

console.log(age ?? 'no age');

let course;

console.log(course ?? 'pls select a course');


// DOM MANIPULATION


let val = 50


let anotherFunc = () => {
  console.log('Finalll!!');
}

//CALLBACK FUNCTION

function fisrtAction(Messi) {
  console.log('this is the first action');
  // setTimeout(secondAction, 3000)



  setTimeout(Messi, 7000)
}

function secondAction(text) {
  console.log('this is the second action ');
  // console.log(text);
  setTimeout(text, 11000)
}

setTimeout(() => fisrtAction(() => secondAction(anotherFunc)), 5000)

let isTruthy = (gn) => {
  
  if (gn > 0) {
    return true
  }
  else{
    return false
  }
}

let cf = isTruthy(4)
let vd = isTruthy(-7)

console.log(cf);
console.log(vd);

let shn = (tt) => {
  return `${tt}!`
}
bh = shn('Tayo');
vv = shn(shn('Tayo'));

console.log(bh, vv);

let doublee = (str) => {

 console.log(str.split('')
  );
  str.split(' ').map(val => {
    console.log(val.split(''))
    if (true) {
      console.log((val[0] + val[0] + val[1] + val[1] + val[2] + val[2] + val[3] + val[3]));
    }
   
    // if (val[i] == val ) {
    //   console.log( (val[i] + val).split('').join(''));
    // }
  })

}

doublee('xavi')

console.log(bb);


let myFunc = (callBack) => {
    
    console.log(callBack);
     callBack(val)
}


// let val = 50;

myFunc(val => {
    console.log(val);
})

let people = ['joy', 'ade', 'bisi', 'ada']
people.forEach(person => console.log(person));

let barca = {
    Name: 'Barcelona', 
    Founded: '1899',
    UCL: 5,
    leagueTitles: 26,
    greatestPlayer: 'Messi',
    legends: ['Messi', 'Ronaldinho', 'cruyff', 'Suarez', 'Iniesta']

}

console.log(barca.Name  );

console.log(barca.Founded);
barca.Name = 'catalans'
console.log(barca.Name);

// blogs = [
//     {Title: 'csc101', likes:56},
//     {Title: 'algorithm', likes:5},
//     {Title: 'cloud engineering', likes:65}
// ]

let user = {
    Name: 'Bill Joy',
    Age: '55',
    email: 'billy@programmer.co.uk',
    blogs: [
      {Title: 'csc101', likes:56},
      {Title: 'algorithm', likes:5},
      {Title: 'cloud engineering', likes:65}
    ],  
    location: 'pennsylvania',
    login() {
        console.log('The user logged in');
        console.log(`my name is ${ this.Name }, i am ${ this.Age } years old. i live in ${this.location} and i am the author of ${this.blogs[0].Title} and ${this.blogs[2].Title}` );
    },

    logout(day) {
        console.log(`The user logged out ${day}`);
    },

    logblogs() {
        this.blogs.forEach(person => {
            console.log(person.Title, person.likes);
        });
    }
};

user.login()

user.logout('yesterday')

user.logblogs()

// let length = 10.5;
// let breadth = 15;

let funcArea = (length, breadth) => Math.round(length*breadth)


let areacalc = funcArea(10.5,50.2)
console.log(areacalc);

let random = Math.random()
console.log(Math.floor(random*100));   

const fn = (a,b) => {
  if (a == 0) return b
  if (b == 0) return a
  return fn(a+1, b-1)
}

let output = fn(1,3)
console.log(output);



// class myClock {
//   constructor() {
//      this.Date5 = new Date()
//      this.hours = this.Date5.getHours();
//      this.minutes = this.Date5.getMinutes();
//      this.sec = this.Date5.getSeconds();
//      console.log(this.sec);
//   }
//   run() {
//     setInterval(this.update.bind(this), 1000)
//   };
//   update() {
//     this.updateTime();
//     console.log(this.hours + ':' + this.minutes + ':' + this.sec);
//   }

//   updateTime(){
    
//     this.sec += 1;
//     if (this.sec >= 60) {
//       this.minutes++;
//       this.sec = 0;
//     }
//     if (this.minutes >= 60) {
//       this.hours++;
//       this.minutes = 0;
//     }
//     if (this.hours >= 24) {
//       this.hours = 0;
//     }
//   }



  let animals = ['cats', 'dogs', 'cows', 'goats']
  let hg = 'shsgfs'

  let upperCasee = (val) => {
  return val.toUpperCase()
  }
  

  let result = upperCasee(animals[0])
  let resultt = animals.map(upperCasee)
  console.log(resultt);

  console.log(animals);


// }

const fruits = ['apple', 'orange', 'banana']

// let alertFruit = (val) => {
//   alert(val)
// }

// let frt = fruits.forEach(alertFruit)

// let setToUppercase = (val) => {
  
// }

let upp = fruits.map((val => {
  if (val.length == 5) {
  return val.toUpperCase()
  }
  return val
}))
console.log(upp);

let findLength = (val) => {
  return val.length > 5;
  
}

let checklenght = fruits.every(findLength)

console.log(checklenght);


// MAP EXERCISE

const input = [1, 2, 3, 4, 5];

let allSquared = input.map(all => {
  return all**2;
})

console.log(allSquared);

const input1 = [1, -4, 12, 0, -3, 29, -150];
const chckpositive = input1.filter(pos => {
  if (pos >= 1) {
    return pos
  }
})
console.log(chckpositive);

let allPositive = chckpositive.reduce((accumulator, pos)=> {

    return pos + accumulator;
  
}, 0)

console.log(allPositive);




// DOM DOM DOM


document.body.style.backgroundColor = 'red';
const btn = document.getElementsByTagName('button')

btn[1].style.backgroundColor = 'blue';
console.log(btn);

//getelementid('element)== make sure the id matches
// we can assign 2a variable or go straight


// document.getElementById('title').style.color = 'red'

// let text = document.getElementById('title')
// text.style.color = 'purple'



// let btn = document.getElementById('btn')

// btn.style.backgroundColor = 'red';



const Header = document.getElementsByTagName('h2')
Header[4].style.color = 'green';
console.log(Header);


const listitems = document.getElementsByTagName('li')
listitems[1].style.color = 'blue';
console.log(listitems);

const headColor = document.querySelector('.colors')
headColor.style.color = 'white'
console.log( listitems);

const koretitems = [... listitems]
console.log( koretitems);

koretitems.forEach((item) => {
    console.log(item);
})

// getElementByClassName('className')
// with className we can select multiple elements, we wud gt a nodeList
// select the element or grp of elemnt u want
// decide the effect u wnt to d selction
// you can use forEach on a nodelist but not an html collection
// index, length, propties, but not all array ,methods


let itemslistn = document.getElementsByClassName('special')

console.log(itemslistn);

itemslistn[1].style.color = 'violet'
console.log(itemslistn[1]);

// OUr last 2 method(selectors)
// -select d Element or grp of Elementu wnt
// decide the effect u wnt to apply to d selection

// querySelector('any css') ---selects single elements
// querySelectorALL('any css')--- selects all, forEach wud work here

const anotherItem = document.querySelectorAll('.special')
console.log(anotherItem);

anotherItem.forEach(city =>city.style.color = 'white' )

const peoplebcg = document.querySelector('#title')
console.log(peoplebcg);
console.log(peoplebcg.innerText);

peoplebcg.innerText = 'this is good'

peoplebcg.innerHTML += ' chai'

console.log(peoplebcg);



// let lsrr = document.querySelectorAll('.special')

// lsrr.forEach(item => {
//     item.style.color = 'yellow'
// })

let para = document.querySelectorAll('p');

console.log(para.innerText);
para[3].innerText = 'Blessing is here'
console.log(para[3].innerText);

//textcontent

let newheader = document.querySelector('h5')

console.log(newheader.textContent);

newheader.innerText += ' Qdevv'
console.log(newheader.innerHTML);



const change = document.querySelector('.html')
console.log(change.innerHTML);

change.innerHTML = '<h1>we finally run am<h1>'
console.log(change.innerHTML);


const link = document.querySelector('a')
console.log(link.getAttribute('href'));

link.innerText = 'facebook website'

link.setAttribute('href', 'https://facebook.com')
console.log(link);

const lk = document.querySelector('.an')
lk.innerHTML = 'Twitter'
lk.setAttribute('href', 'Twitter.com')
console.log(lk.getAttribute('href'));

console.log(lk);
// console.log();



let divv = document.querySelector('.an')
console.log(divv.getAttribute('href'));


let lst = document.querySelector('.last')
console.log(lst);
lst.style.color = 'white'


const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')


const classvalue = first.className
console.log(classvalue);

//classlist
third.classList.add('colors')
// third.classList.remove('colors')


let $result = third.classList.contains('colors')

if($result){
    console.log('hello world');
}
else{
    console.log('doesnt have the class');

}

let talk = $result ? 'hello world': 'doesnt have d class'
console.log(talk);


//Events
//select element
//addEventListener()
//what event, what to do
const Bbtn = document.querySelector('.bttn');
const headd = document.querySelectorAll('h2');

console.log(headd[1].innerHTML);

function changecolor(){
    // let hasclass = headd[1].classList.contains('blue')
    // if(hasclass) {
    //     headd[1].classList.remove('blue')
    // }
    // else{
    //     headd[1].classList.add('blue')
    // }

    headd[1].classList.toggle('blue')

}

Bbtn.addEventListener('click', changecolor)

// let pause = () => {
//     clearInterval(my)
//     b3.innerHTML = 'CONTINUE'
//   }
//   b3.addEventListener('click', pause)
  
//   const continues = () => {
//   if (b3.innerHTML == 'CONTINUE') {
//       setInterval(() => {
//           sec.innerHTML++
//   }, 1000)
//   }
//   }
  
//   b3.addEventListener('click',continues)








const fr = ['one', 'two', 'three', 'four']

// console.log();       
  

// DOM 

let ded = document.getElementById('title');

// ded.innerHTML = 'React Dev'

let newLi = document.createElement('li');

console.log(newLi);

newLi.innerHTML = 'Delta';

let uL = document.getElementsByClassName('all')[0]
console.log(uL);

let child = uL.getElementsByTagName('li')[3]
console.log(child);

uL.appendChild(newLi)

console.log(uL);


uL.removeChild(child)

console.log(uL);



// let lasst = document.querySelector(".last")

// const blackk = (document.querySelectorAll('a'))

// blackk.forEach(element => {
//     element.classList.add('text')
// });



// let vv = blackk.forEach(val => val.innerText)
// console.log(vv);

// changecolorr(blackk)
 
// function changecolorr(element) {
//     element.classList.add('text')
// }







let lasst = document.querySelector(".last")

const blackk = (document.querySelectorAll('a'))

// blackk.forEach(element => {
//     element.classList.add('text')
// });

let lrm = document.querySelector('.lorem')

let newLorem = document.getElementById('content')
console.log(newLorem);
 
// let clearLorem = lrm.getElementsByTagName('p')[0]


let expand = document.getElementById('expand');
console.log(expand);

fucnExpand = () => {
    if (newLorem.className == 'open') {
        // shrink the box
        newLorem.className = "";
        expand.innerHTML = 'Show More'

        
    }
    else{
        // expand the box
        newLorem.className = 'open';
        expand.innerHTML = 'Show less'
    }
    
}

expand.addEventListener('click', fucnExpand)



// DOM SAMPLE////


let setupEvents = () => {

  let content = document.querySelector('.write-up');
  // let button = document.querySelector('.foll')
  
  let showMore = document.querySelector('#show-more');
  
  
  
  
  let resize = () => {
  if (content.className == 'open') {
     content.className = '';
     showMore.innerHTML = 'Show More';
  
  }else{
      content.className = 'open';
      showMore.innerHTML = 'Show less';
  }
  
  };
  
  showMore.addEventListener('click', resize);
  
}


window.onload = () => {
setupEvents()
}

let myMessage = document.getElementById('message');

let fadeIn = () => {
 myMessage.className = 'show';
}

setTimeout(fadeIn, 3000);


let colorChange = document.getElementById('colour-changer'); 

let colorss = ['red','yellow','blue','green','pink'];
let counter = 0; 

let changeColor1 = () => {
  if (counter == colorss.length) {
      counter = 0;
  }
  colorChange.style.backgroundColor = colorss[counter];
  counter++;
}

let clearTimer = setInterval(changeColor1, 3000);

colorChange.onclick = () => {
  clearInterval(clearTimer)
  colorChange.style.background = '';
  colorChange.innerHTML = 'Timer stopped';
}


console.log(document.forms.myForm);

let myForm = document.forms.myForm;

console.log(myForm.name.value);

myForm.submit.onfocus = () => {
    myForm.submit.style.background = "red"
}

myForm.submit.onblur = () => {
    myForm.submit.style.background = ""
}

let messagge5 = document.getElementById('messagge')
myForm.onsubmit = () => {
  if (myForm.name.value == "") {
    messagge5.innerHTML = 'Pls type a name';
  }
  else{
    messagge5.innerHTML = ''
  }
}

myForm.addEventListener('submit', errorTest)

// myForm.addEventListener('submit', errorTest)


let pick = document.querySelectorAll('.co')

console.log(typeof pick);

// for (let i = 0; i < pick.length; i++) {
//   pick[i].style.color = "red";
// }

//ARRAY.FROM Convert a nodelist to an array
Array.from(pick).map((ad => {

  ad.style.color = 'red';
}))

// CREATING ELEMENT

const newElement = document.querySelector('.col');


const lin = document.createElement('p');

newElement.append(lin);

lin.innerText = 'Maroon'


lin.classList.add('co')






let btn = document.querySelector('.New-quote')
let Quote = document.querySelector('.Quote')
let person =  document.querySelector('.person')

const allQuotes = [
    {

    Quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error! Nisi voluptatibus minima cupiditate!swsswwssx  "`,
    person: `albert Einstein`

    },
    {

        Quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error! Nisi voluptatibus minima cupiditate!jhjhjh"`,
        person: `samba doouglas`
    
    },

    {

            Quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error! Nisi voluptatibus minima cupiditate!gbbbbb"`,
            person: `Taylor swift`
        
     },

     {

        Quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error! Nisi voluptatibus minima cupiditate!vdddd"`,
        person: `honu lulu`
    
    },

    {

            Quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error! Nisi voluptatibus minima cupiditate vvvc!"`,
            person: `Felix jhu`
        
    },

    {

        Quote:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error! Nisi voluptatibus minima cupiditate vvvc!"`,
        person: `sam hadd`
    
}


    // allQuotes[0].person

]


// console.log(randomQuote);

const GenerateQuote = () => {

    let randomQuote = Math.trunc(Math.random()*allQuotes.length)

    console.log(randomQuote);
    // let randomQuote = Math.trunc((Math.random*10))
   
    if (allQuotes.length - randomQuote >= 0) {

        console.log(randomQuote);

        Quote.innerHTML = allQuotes[randomQuote].Quote

        person.innerHTML = allQuotes[randomQuote].person
        
    }   
    
}

btn.addEventListener('click', GenerateQuote)


// Variables

let openBtn = document.getElementById('open-btn')

let modalContainer = document.getElementById('modal-container')

let closeBtn = document.getElementById('close-btn')

// EVENT LISTENERS

openBtn.addEventListener('click', function () {
let start = document.querySelector('.start')
let Reset = document.querySelector('.reset')
let Hours = document.querySelector('.hrs')
let mins = document.querySelector('.mins')
let sec = document.querySelector('.sec')


console.log(mins.innerHTML[1]);
console.log(sec.innerHTML[1]);

let counter = 0;
let counter2 = 0;
let counter3 = 0;
const secText = sec.textContent;

let startTimer = () => {
    


   setInterval(() => {
    if ( sec.innerHTML <= 8) {
        sec.innerHTML = '0' + counter++;
    }
    else if (sec.innerHTML > 8 && sec.innerHTML <=18)
    {
        sec.innerHTML = counter++;
    }
    else if (sec.innerHTML == 19) {
        // counter2++;
        counter = 0;

        sec.innerHTML = '00';
        mins.innerHTML = '0' + ++counter2;
        sec.innerHTML = '0' + counter++;
        
    }
     if (mins.innerHTML == '02') {
        mins.innerHTML = '00';
        Hours.innerHTML = '0' + ++counter3;
        sec.innerHTML = '0' + counter++;


        
    }

    
   }, 1000);

    
    // counter++;
    


//  if (sec.innerHTML[1] == '9') {
//     sec.innerHTML = 10;
//     sec.innerHTML++;
    
// }


// if (sec.innerHTML == '60') {
//     mins.innerHTML[1]
// }
}

start.addEventListener('click', startTimer)
})

closeBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none';
})

window.addEventListener('click', function (e) {

    console.log(e.target);
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none'; 
    }
   
})

// AnimationEffect

let start = document.querySelector('.start')
let Reset = document.querySelector('.reset')
let Hours = document.querySelector('.hrs')
let mins = document.querySelector('.mins')
let sec = document.querySelector('.sec')


console.log(mins.innerHTML[1]);
console.log(sec.innerHTML[1]);

let counter = 0;
let counter2 = 0;
let counter3 = 0;
const secText = sec.textContent;

let startTimer = () => {
    


   setInterval(() => {
    if ( sec.innerHTML <= 8) {
        sec.innerHTML = '0' + counter++;
    }
    else if (sec.innerHTML > 8 && sec.innerHTML <=18)
    {
        sec.innerHTML = counter++;
    }
    else if (sec.innerHTML == 19) {
        // counter2++;
        counter = 0;

        sec.innerHTML = '00';
        mins.innerHTML = '0' + ++counter2;
        sec.innerHTML = '0' + counter++;
        
    }
     if (mins.innerHTML == '02') {
        mins.innerHTML = '00';
        Hours.innerHTML = '0' + ++counter3;
        sec.innerHTML = '0' + counter++;


        
    }

    
   }, 1000);

    
    // counter++;
    


//  if (sec.innerHTML[1] == '9') {
//     sec.innerHTML = 10;
//     sec.innerHTML++;
    
// }


// if (sec.innerHTML == '60') {
//     mins.innerHTML[1]
// }
}

start.addEventListener('click', startTimer)









const startStopBtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');

let minss = 0;
let hrs = 0;
let secc = 0;

let leadingMinutes = 0;
let leadingSecs = 0;
let leadingHours = 0;


function stopWatch() {
    sec++;
    if (sec / 60 === 1) {
        sec = 0;
        mins++;

        if (mins / 60 === 1) {
            mins = 0;
            hrs++;
        }
    }

    if (sec < 10 ) {
       leadingSecs = '0' + sec.toString() 
    }
    else{
        leadingSecs = sec;
    }
    if (mins < 10 ) {
        leadingMinutes = '0' + mins.toString() 
     }
     else{
         leadingMinutes = mins;
     }  if (hrs < 10 ) {
        leadingHours = '0' + hrs.toString() 
     }
     else{
         leadingHours = hrs;
     }
     let displayTimer = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSecs;
}

window.setInterval(stopWatch, 1)



const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task');

// console.log(inputTask.parentElement);
// EVENT LISTENER FOR ADD BUTTON


function todo (){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
     
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = 'Done';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delet';
    deleteButton.classList.add('deletetask');
    task.appendChild(deleteButton);


    if (inputTask.value === '') {
        document.querySelector('.errorMessage').innerHTML = 'Pls input a value';
        alert('pls enter a task');
        // document.querySelector('.errorMessage').style.color = 'red';
    }
    else{
        taskContainer.appendChild(task);
        
        console.log(taskContainer.appendChild(task));
        console.log(taskContainer);
        // console.log(task);
        // document.querySelector('.errorMessage').innerHTML = '';
    };

    inputTask.value = '';

    
checkButton.addEventListener('click', function (){
    checkButton.parentElement.style.textDecoration = 'line-through';
});


deleteButton.addEventListener('click', function(e) {

let target = e.target;

target.parentElement.parentElement.remove();

} );


}


addTask.addEventListener('click',todo);




const timer = document.querySelector('.timer');
let hrs =  document.querySelector('.hrs');
let mins =  document.querySelector('.mins');
let sec =  document.getElementById('secc');

let stop = null;

let FuncCountDown = () => {

    // console.log(sec.value);
    // console.log(!isNaN(sec.value));
    // console.log(mins.value);
    // console.log(typeof sec.value);
    // console.log('' + 5);
    // console.log(!isNaN(''));

    if (sec.value == '' && mins.value =='' && hrs.value == '') {
        alert('Enter a number')
    }


   

        if (!isNaN(sec.value) && sec.value != '') {
            sec.value--;
            console.log('first if');
            
        }
        //  if (sec.value == 0) {
        //     clearInterval(stop)
        //     console.log('kl');
        //  }
         if (sec.value <= 0 && mins.value === '' && hrs.value == 0) {
            console.log('lop');
            clearInterval(stop);
            console.log('first CI is active');

         }
         if (sec.value <= 0 && mins.value == 0 && hrs.value == 0) {
            console.log('second condition works');
            clearInterval(stop);
            console.log('neww CI is active');
            
         }

         if (sec.value <= 0 && mins.value == 0 && hrs.value == '') {
            console.log('second condition works');
            clearInterval(stop);
            console.log('second CI is active');
            
         }
         if (sec.value <= 0 && !isNaN(mins.value) && mins.value != 0) {
            sec.value = 59;
            console.log('kkm');
            if (sec.value == 59) {
                sec.value--;
                mins.value--;
                console.log('im decreasing sec and min');
            }
         }
         if (mins.value == 0 && !isNaN(hrs.value) && hrs.value != 0) {
            hrs.value--;
            sec.value = 59;
            mins.value = 59;
            console.log('111');
            if (mins.value && sec.value == 59) {
                sec.value--;    
                console.log('popo');
            }
         }

         if (hrs.value == 0) {
            hrs.value = '0'
            console.log('i return hrs to 0');
         }
         if (sec.value <= 0 && mins.value == 0 && !isNaN(hrs.value) && hrs.value != 0) {
            sec.value == 59;
            mins.value == 59;
            hrs.value--;
            console.log('222');

            if (sec.value == 59 && mins.value == 59 ) {
                sec.value--;
                console.log('333');

                if (sec.value == 0) {
                    mins.value--;
                console.log('444');

                }
            }
          
         }



 
} 

document.querySelector('.startStop').addEventListener('click', () => { stop = setInterval(FuncCountDown
    
, 100)})



 //     if (sec.value < 10) {
        //         sec.value = '0' +  sec.value;
        //     }
        //   }
        //   else if (sec.value == 59) {
        //     sec.value--;
        //   }
        //   if (sec.value == 0 && mins.value == 0 || mins.value == '') {
        //    window.clearInterval(stop)
        //   }
        
    document.querySelector('.reset').addEventListener('click', () => {
       window.clearInterval(stop)
       console.log(stop);
        sec.value = "00"
        mins.value = "00"
        hrs.value = "00" 
        
    })



    let Text = document.querySelector('.text');
// console.log(Text.innerHTML.color = 'red');


let LoremArray = Text.innerHTML.split(' ');
console.log(LoremArray);

// let ss = ['1bb', '2', '3', '4']
// console.log(ss[0].style.color);

// console.log(ss.split(' '));

// console.log(ss[1]);

let HighlightHex = () => {

  LoremArray.map(each => {
// let cvb =  Text.parentElement;   
   cvb = `'<p>${each}</p>'`;
   console.log(cvb);
//    console.log(cvb.length);

//    if (cvb.length >= 8) {
//     cvb.style.color = 'yellow'
//    }

    console.log(Text);

  })
}

HighlightHex()



let Text = document.querySelector('.text');
let Headd = document.querySelector('.hd');

// console.log(Text.innerHTML.color = 'red');


let LoremArray = Text.innerHTML.split(' ');
console.log(LoremArray);

// let ss = ['1bb', '2', '3', '4']
// console.log(ss[0].style.color);

// console.log(ss.split(' '));

console.log(Headd);
// console.log(ss[1]);


let HighlightHex = () => {

   Text.innerHTML = '';

  const snew = document.createElement('p');

  LoremArray.forEach(each => {
    console.log(each);
   
  let snew = document.createElement('p');
  // Text.innerHTML = '';
  snew.textContent = `${each}`;
  Text.appendChild(snew)

  console.log(snew);
  // console.log(Text.children);
  // console.log(snew);
  // console.log(snew.parentElement);
  
  // console.log();

  if (snew.innerHTML.length >= 8) {
    snew.style.backgroundColor = 'red';
    snew.style.width = '80px'
    snew.style.display = 'inline'
    Text.style.display = 'inline'
    // console.log('dddd');
  }
 


  })
}

HighlightHex()


let para = document.querySelector('.text'); 


// Convert to an Array

let arrPara = para.innerHTML.split(' ');
console.log(arrPara);




para.innerHTML = arrPara.map(prg => prg.length > 8 ? `<span style="background-color: yellow;">${prg}</span>` : prg).join(' ');

// console.log(prg);


let ard = ['edd', 'fdcz', 'ssg', 'wswh', 'kpp']

let vv = ard.map(ch => ch.length > 3 ? `<span style="color: red;">${ch}</span>` : console.log(ch))
console.log(vv.join(' '));
// console.log(ardlet vv );















// let vv = blackk.forEach(val => val.innerText)
// console.log(vv);

// changecolorr(blackk)
// function changecolorr(element) {
//     element.classList.add('text')
// }





// CLICK EVENTS onclick



let count = document.querySelector('h1');

let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');

let count1 = 0

decrease.addEventListener('click', () => {

    count.innerHTML--;
})

increase.addEventListener('click', () => {

    count.innerHTML++;
})

reset.addEventListener('click', () => {

    count.innerHTML = 0;
})
let count = 0;

const value = document.querySelector('h1');
const controls =  document.querySelectorAll('.btn');


controls.forEach(btn => {
    btn.addEventListener('click', (e) => {
   let style = e.currentTarget.classList;

   if (style.contains('decrease')) {
    count--;
   }
   else if (style.contains('increase')) {
     count++;
   }
   else{
    count = '0';
   }
   value.innerHTML = count;
    })
})




















let arrowLeft = document.querySelector('.arrowLeft')
let arrowRight = document.querySelector('.arrowRight')
let img = document.querySelector('.img');
let Name = document.querySelector('h4');
let profession = document.querySelector('h6');
let Review = document.querySelector('p');


let reviewsArray = [

    {
        Image2: './Images/profile-2.jpg', Name2 : 'Tyler Ray', profession: 'Product Designer',
       
        review: "Tempore repellendus quo odio, fugiat maiores inventore molestias cum? Aliquam ratione ducimus quis minima libero consectetur. Neque iste itaque odit eos ducimus repudiandae. adipisicing elit. Inventore officia ipsam eius voluptate maxime nostrum ullam cupiditate laudantium. Earum, aliquid accusantium? Lorem, ipsum dolor sit amet consectetur"
    },

    {
        Image2: './Images/profile-3.jpg', Name2 : 'Mary Wallace', profession: 'React Developer',
       
        review: "Tempore repellendus quo odio, fugiat maiores inventore molestias cum? Aliquam ratione ducimus quis minima libero consectetur. Neque iste itaque odit eos ducimus repudiandae. adipisicing elit. Inventore officia ipsam eius voluptate maxime nostrum ullam cupiditate laudantium. Earum, aliquid accusantium? Lorem, ipsum dolor sit amet consectetur"
    },

    {
        Image2: './Images/profile-2.jpg', Name2 : 'Andre tay', profession: 'lawyer',
       
        review: "Tempore repellendus quo odio, fugiat maiores inventore molestias cum? Aliquam ratione ducimus quis minima libero consectetur. Neque iste itaque odit eos ducimus repudiandae. adipisicing elit. Inventore officia ipsam eius voluptate maxime nostrum ullam cupiditate laudantium. Earum, aliquid accusantium? Lorem, ipsum dolor sit amet consectetur"
    }
]


console.log(reviewsArray[0].Image2);


let ffv = [{namee: 'ss', age: '55'}, {namee2: 'sds', age1: '55'}]



let NextRev = () => {
if (reviewsArray[0]) {
    
}

}