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

// let arrange = prompt('Type a word')
// console.log(arrange.split("").sort().join(''));

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
  
    if (sttr[0] == sttr[i] && sttr.indexOf(sttr[0]) != sttr.indexOf(sttr[i])) {
      console.log(sttr[0]);
      let nedd = [];
      nedd.push(sttr[0]);
      console.log(`${sttr[0]} occured ${nedd.length} times`);
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
let rsltt = strrr.replace(/\S/g, "s");

console.log(rsltt);

// FIND A MATCH AT THE BEGINNING OF A WORD

let sim = "bad, beat, cat, bee, cabe";
let rst5 = sim.search(/be\b/);
console.log(rst5);

let sdd = "she has two eggs";
let temm = [...sdd];
console.log(temm);

let uchars = {};
console.log(uchars["namee"]);

"the eth".replace(/\S/g, function oof(i) {
  uchars[i] = "e";
});
console.log(uchars);

//  Find the Unicode character specified by the hexadecimal number xxxx

// CHECK NUMBER OF OCCURRENCE

let char_Counts = (str1) => {
  let uchars = {};
  str1.replace(/\s/g, function (i) {
    uchars[i] = isNaN(uchars[i]) ? 1 : uchars[i] + 1;
  });
};

// console.log(char_Counts('The quick brown fox jumps over the lazy dog'));

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


console.log(objj);





// 'Object.create' recreates an object

const objl = Object.create(club)

console.log(objl[0].Name);

// Destructuring



const{spider, legs} = objj

console.log(objj);


// destructuring

let swe = ({namee}) =>{
  return `my name is ${namee}`
}

console.log(swe(objj));


let objectz = {
  namme: 'David gyan',
  sclass: 'VI',
  rollno: '12',

}

console.log(Object.keys(objectz).length);

let mab = Object.values(objectz)

console.log(objectz.rollno);

delete objectz.rollno
objectz.hasOwnProperty('rollno')

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
    this.radius = radius;
    this.height = height;
    
  }
  get Voll(){
    return this.calcVol();
  }
       
  calcVol(){
  return (Math.PI * this.radius ** 2 * this.height).toFixed(2);
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



  const demography = {
     firstname5: 'mario',
     lastname6: 'gini',

     get fullname(){
       return `${this.firstname5} ${this.lastname6}`
     },

     set fullname(val) {
      const part = val.split(' ');
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
    1: 'Do the shopping',
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
console.log(todos[2]);

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

console.log(frr());


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


// DOM MANIPULATION


let val = 50
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

fn(1,3)



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

let setToUppercase = (val) => {
  return val.toUpperCase()
}

let upp = fruits.map(setToUppercase)
console.log(upp);

let findLength = (val) => {
  return val.length > 3;
  
}

let checklenght = fruits.every(findLength)

console.log(checklenght);















