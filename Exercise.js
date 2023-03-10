

    
    
    // let N = parseInt(window.prompt('Type a number', '0'))
    // console.log(Number)
    // console.log(2/N);
    // console.log(isNaN(y));

    // if (isNaN(N)) {
    //     console.log('This is not a number');
    // }
    // else if (N%2 == 0) {
    //     console.log(`This is an even number`);
        
    // }
    // else if (N%2 !== 0) {
    //     console.log(`This is an odd number`);
    // }


    // let LargerNum = (num1, num2, num3) => {
    //  if (num1 > num2 && num1 > num3) {
    //     console.log(`${num1} is the greatest number`);
    //  }
    //  else if (num2 > num1 && num2 > num3) {
    //     console.log(`${num2} is the greatest number`)
    //  }
    //  else if(num3 > num2 && num3 > num1) {
    //     console.log(`${num3} is the greatest number`);
    //  }
    // }
    // LargerNum(75, 56, 43)
   

    let findTriangleType = (side1, side2, side3) => {
        if (side1 == side2 && side2 == side3) {
            console.log('This is an equalateral triangle');
        }
        else if (side1 == side2 && side2 !== side3 || side1 == side3 && side3 != side2 || side2 == side3 && side3 != side1) {
            console.log('This is an isosceles triangle');
        }
        else if (side1 != side2 && side2 != side3 ) {
            console.log('This is a scalene triangle');
        }
    }
    findTriangleType(6,6,6)

    let mult = '3 * 4'
    console.log(eval(mult));

    let evalNumbers = (num1, num2, sign) => {
      if (sign == '+') {
        console.log(num1+num2);
      }
      else if (sign == '*') {
        console.log(num1*num2);
      }
      else if (sign == '/') {
        console.log(num1/num2);
      }
      else if (sign == '%') {
        console.log(num1%num2);
      }

    
      
    }
    evalNumbers(10,2,'+')
    // console.log(ee);


    let isLeapYear = (year) => {
        // const date = new Date(year, month, day)
        // console.log(date);
    
    if (year%4 == 0) {
        console.log('leap year');
    }
    else{
        console.log('Not a leap year');
    }
    }
    isLeapYear(2000)

    let findGrade = (grade) => {
        if (grade < 100 && grade > 90) {
            console.log('S grade');
        }
         else if (grade < 90 && grade > 80) {
        
        }
    }

    // let Prod = parseInt(window.prompt('first Number','0'));
    // let prod2 = parseInt(window.prompt('second Number','0'));
    // let prod3 = parseInt(window.prompt('Third Number','0'));
    // let products = Prod * prod2 * prod3

    // if (products > 0 ) {
    //     console.log('The product sign is +');
    // }
    // else if (products < 0) {
    //     console.log('The product sign is -');
    // }
    // let Nm1 = parseInt(window.prompt('num1', '0'));
    // let Nm2 = parseInt(window.prompt('num2', '0'));
    // let Nm3 = parseInt(window.prompt('num3', '0'));

    // if (Nm1 > Nm2 && Nm2 > Nm3) {
    //     console.log(`${Nm1}, ${Nm2}, ${Nm3}`);
    // }
    // else if (Nm1 > Nm3 && Nm3 > Nm2) {
    //     console.log(`${Nm1}, ${Nm3}, ${Nm2}`);
    // }

    // else if (Nm1 < Nm2 && Nm2 < Nm3) {
    //     console.log(`${Nm3},${Nm2},${Nm1}`);
    // }
    // else if (Nm3 > Nm1 && Nm1 > Nm2) {
    //     console.log(`${Nm3}, ${Nm1}, ${Nm2}`);
    // }
    // else if (Nm2 > Nm3 && Nm3 > Nm1) {
    //     console.log(`${Nm2}, ${Nm3}, ${Nm1}`);
    // }
    // else if (Nm2 > Nm1 && Nm1 > Nm3) {
    //     console.log(`${Nm2}, ${Nm1}, ${Nm3}`);

     
    // for (let i = 0; i < 16; i++) {
    //     // console.log(i);
    //     if (i%2 == 0) {
    //         console.log(`even`);
    //     }
    //     else {
    //         console.log(`${i} is odd`);
    //     }
        
    // }

    // for (let i = 1; i < 101; i++) {
    //    if (i%3 == 0 && i%5 != 0) {
    //     console.log(`fizz`);
    //    }
    //    else if (i%5 == 0 && i%3 != 0) {
    //     console.log('Buzz');
    //    }
    //   else if (i%3 == 0 && i%5 == 0) {
    //     console.log('FizzBuzz');
    //    }
    //    else if (i%5 !== 0 || i%3 !== 0) {
    //     console.log(`${i}`);
    //    }
        
    // }


    let happyNumber = 1;
    let numArray = [1,2,3,4,5,6,7,8,9,0]

    for (let i = 0; i < numArray.length; i++) {
        let a = numArray[0]
        let b = numArray[i]
        let c = (a+b)**2 
        console.log(c);
        var d;
        var f;
        console.log(c);
        if (c == 1) {
            console.log(a)
            // a++;
        } 
        if (c != 1 && b !== 9 ) {
          console.log(`${a + b}`)
          let y = (a + b)**2
          console.log(y);
          let h = ((y%10)**2 + Math.trunc(y/10)**2)
          // if () {
            
          // }
        }
        
        
        if (`${a}${b}` > 9 ) {
        // console.log(`${a} and ${b}` );
        
       let d = (a**2 + b**2)
    //    console.log(d);
       if (d == 1 || d == 10) {
        console.log(`${a}${b} is happy`);
       }
        if (d != 1 && d > 9 && d != 10) {
        console.log(`${a}${b}`);
        console.log(d)
           let e = ((d%10)**2 + Math.trunc(d/10)**2)
           console.log(e);
           console.log(d);
           if (e == 1 || e == 10 && d != 10) {
           console.log(`${a}${b} is happy`);
            
           }
           else{
            console.log(e);
            console.log(d);
           }
           let g = ((e%10)**2 + Math.trunc(e/10)**2)
           console.log(g);
           if (g == 10 || g == 1 || g == 100  && e != 10 && e != 1) {
            // console.log(`${e}`);
            console.log(`${a}${b}, ${e}, ${d} and ${g} is happy`);
            // console.log();
           }
           console.log(`${a}${b}`)
           let k = ((g%10)**2 + Math.trunc(g/10)**2)
           console.log(k);
          //  let p = (Math.trunc(g/100)**2 + (g%100)**2 + (g%100)**2)
           
         if (k == 10 || k == 1 && g != 10 && g != 1) {
            console.log('happppppppppppy');
            console.log(`${a}${b} is happy`);
         }
         else{
            console.log(k);
            console.log(`${a}${b}`);
         }
       }
      
      
   
       }
       
      
      


        
    }


    let num = [1,2,3,4,5,6,7,8,9,0];
    let num2 = [0,1,2,3,4,5,6,7,8,9]
    let gggh = num.slice(1, 8) + num2.slice(2, 9);  
    console.log(gggh);
    console.log(num.slice(2, 10));
    console.log(num.slice(0,1));
    // let cg = num.slice(0, i)
    // console.log(cg);

    for (let i = 0; i < num.length; i++) {
      const element = num[i];
      console.log(element);
      cd = num.slice(0, i) + num.slice(i + 1, num.length)
      fg = 'kk';
      // console.log(fg);
      let gg= num.slice(2,num.length)
      // console.log(gg);
      console.log(cd);
      
      // console.log(`${x} + ${y} + ${z}` );
      // console.log(`${x++} + ${y} + ${z}` );
      // console.log(x**3 + y**3 + z**3);
      // console.log(`${x} + ${x1} + ${x2} +${x3}`);
  
      // if (x**3 + y**3 + z**3 == `${x}${y}${z}`) {
      //   console.log(dddddddddddd);
      // }
      // let namex = 'bode'
      
     
      // console.log(`${xy**3} + ${cc**3} + ${vv**3}`);
      // console.log(`${xy} + ${bb}`);
      // console.log(element);
      //    if () {
        
      //  }
      
    }

    let alpha = '0123456789';
    // console.log(`${alpha[0]}${alpha[1]}${alpha[2]} `);
    // let dd = alpha.substring(1,2)
    // for (let i = 0; i < alpha.length; i++) {
    //   console.log(alpha[i]);
    //   let rest = alpha.substring(0, i) + alpha.substring(i + 1) 
    //   let f =  alpha.substring(3, 3)
      // console.log(f);
      // console.log(rest);
    // permutation(rest, result + alpha[i])
      
    // }
   
    // console.log(dd);

    let permutation = (alpha, result) => {

      if ( alpha.length === 7 && result[0]**3 + result[1]**3 + result[2]**3 == `${result[0]}${result[1]}${result[2]} ` ) {
        console.log(result);
      }
      for (let i = 0; i < alpha.length; i++) {
        let rest = alpha.substring(0, i) + alpha.substring(i + 1) 
        // console.log(rest);
        // console.log(alpha);
        // console.log(result);
        // console.log(alpha[i]);
        // console.log(result + alpha[i]);
      permutation(rest, result + alpha[i])
    
        
      }
    }
    permutation(alpha, '')



    let bag = 'bag'
   
   let cined = (bag, plud) => {
    if (bag.length == 0) {
      
    }
    for (let i = 0; i < bag.length; i++) {
      // const element = alpha[i];
      let ress = alpha.substring(0, i) + alpha.substring(i + 1) ;

      console.log(bag[i]);
      
    }
   }
   cined(bag, '');

   let fac = (num) => {
   if (num == 1) {
    return 1
   }
   return  num * fac(num - 1)
  

   }
   let fac6 = fac(6)
   console.log(fac6);

   let numrray = [1,2,3,4,5,6,7,8,9,0]
  
   
   

  //  let happy = (nom) => {

  //   for (let i = 0; i < numrray.length; i++) {
  //     const element = numrray[i];
  //     // let aa = numArray[0]
  //     let bb = numrray[i]
  //     let cc = (bb)**2 
  //     nom = cc
  //     if (cc == 1) {
  //     console.log(cc);
  //     console.log(bb);
  //     }
  //    console.log(nom);
  //    let cx = (nom%10)**2 + Math.trunc(nom/10)**2
  //    console.log(cx);
  //   // fx =  (cx%10)**2 + Math.trunc(cx/10)**2
        
  //     //  let fy = ''
  //       // console.log((nom%10)**2 + Math.trunc(nom/10)**2);
       
  //     //  happy(cx) 
  //       }
      
      
    // }
   let nn = [123]
  //  console.log();
   
   let pp = `${nn[nn.length - 1]}${nn[nn.length - 2]}${nn[nn.length - 3]}${nn[nn.length - 4]}${nn[nn.length - 5]}`
  
  //  console.log( pp.pop('undefined'));

   console.log(`${nn[nn.length - 1]}${nn[nn.length - 2]}${nn[nn.length - 3]}${nn[nn.length - 4]}${nn[nn.length - 5]}`);
   console.log(pp.includes('undefined'));
   if (pp.includes('undefined')) {
    console.log();
   }
   
  //  happy(numrray)

   let funcExercise = (num, hum) => {
   if (hum == 0) return '';
   
    return num[hum - 1] + funcExercise(num ,hum - 1)
     
   }
   console.log(num);

 console.log(funcExercise('123376789', 9));


 n = '1234'
 console.log(n.split('').reverse().join(''));
 console.log(n.split('').reverse().join(''));

 nn = ['m','a','d']
//  console.log(nn.split('').reverse().join(''));
 console.log(nn.sort());


 let checkPalindrome = (word) => {
  console.log(word == word.split('').reverse().join(''));
  if (word == word.split('').reverse().join('')){
     console.log(`${word} is a palindrome`);
  } 
  else{
    console.log(`${word} is not a palindrome`);
  }
  
 
 }

 checkPalindrome('madam')


 let alphabetical = (let) => {
  // let[let.lenght - 1]
  console.log(let.split('').sort().join(''));

 }
 alphabetical('damex')

 let uppercase = (words) => {
  console.log(words[2,8].toUpperCase());
 }
 uppercase('this is good')


 let cvv = () => {
  console.log(str);
  if (!str) {
    return ''
  }
 }
 let ght = 'love'
 let cdsd = ['sd','hh','rt','gq']
 console.log(cdsd.length);
 console.log(cdsd[0][0].toUpperCase() + cdsd[0].substring(1).toLowerCase());
 console.log(cdsd[0][0].toUpperCase());


 let wold = 'this man'
 console.log(wold.split(' '));
 const mama = wold.split(' ').map((wof) => {
  console.log(typeof wof);
   
   return (wof[0].toUpperCase() + wof.substring(1).toLowerCase());
    
 })
 console.log(mama.join(' '));
//  console.log(mama);
//  console.log(wold[0].toLocaleUpperCase() + wold.substring(1).toLowerCase());
 wold.split('').map((word) => {
  return wold[0].toUpperCase() + wold.substring(1)
 })





let findLongestWord = (str) => {
 
    const newArray = str.split(' ')
    let compare = newArray.sort(function(a, b) {
      return b.length - a.length
    })
    console.log(compare[0]);
 
    compare.map((sdd)=> {
      console.log(sdd);
      if (compare[0].length == sdd.length && compare[0] !== sdd) {
       
        console.log(`${compare[0]} and ${sdd} has the highest length` );
      }
      else if (sdd.length - compare[0].length >= 0 && compare[0] == sdd && compare[0] ) {
        console.log(sdd)
      }
    })
   

    console.log(compare[0]);

      
}
 
findLongestWord('Tv Lo fg bavv here')
let arrr = ['werrsssq', 'dg', 'sfsdf']
let wer = arrr.sort(function (a, b) {
 console.log( a);
 console.log(b);
  return (b.length - a.length)
})
console.log(wer[0]);
console.log(arrr[2] > arrr[0]);
 
// arrr.map((de)=> {
//   if (de.length > arrr[arrr.length-1].length) {
//     console.log(de);
//     // [de[0], vg[vg.length-1]] = [vg[vg.length-1], vg[0]]

//   }
// })


let opo = 'Thevv Longest bag here'
const arry = opo.split(' ')
console.log(typeof arry);
let vet = arry.map((one)=> {
  if (one.length > (arry[arry.length -1 ].length)) {
    console.log(one)
    return one;
  }
})
console.log(vet.join(' '));
let fre = vet.join(' ').split(' ')
console.log(fre);
// let bnew = fre.pop()
// let ved = fre.pop()
console.log(typeof fre);

let lastround = fre.map((last)=> {
  // console.log(fre);
  // console.log(last);
  // console.log(last.length );
  // console.log(fre.length);
  console.log(fre[fre.length -1].length);
  if (last.length >= (fre[fre.length -1].length)) {
    console.log(last)
    return last;
  }
})
console.log(lastround.join(' '));






// console.log(fre);
// console.log(opo.split(''));



// OBJECTSSSSSSSS
// OBJECTSSSSSSSS
// OBJECTSSSSSSSS
// OBJECTSSSSSSSS

const student = {
  length : 3,
  name : 'David',
   2 : 4
}

console.log(Array.prototype.pop.call(student));
// console.log();
console.log(Object.entries(student));
let vve = Object.entries(student)

// console.log(vve.pop());

// console.log(vve);
// console.log(student);


Object.keys(student).forEach((prop) => {
  console.log(prop);
})
const asl = {
  length : 3,
  unreal : 'ghh',
  2 : 4
}
console.log(Array.prototype.pop.call(asl));
console.log(asl);


const newObj = {
  name : 'john',
  age : 27,
  state : 'port'
}

console.log(Object.keys(newObj).length);

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
console.log(library[0]);
library.map((each) => {
  // console.log(`${each.author} ${each.title}${each.readingStatus}`)
  if (each.readingStatus == true) {
    console.log(`i have read ${each.title} by ${each.author}`)
  }
})

// CLASSES
// CLASSES
// CLASSES
// CLASSES


class rectangle {
  constructor(height, width) {
    this.height = height
    this.width = width
    // console.log(height*width)
  }
  // GETTER
  get area() {
    return this.calcArea();
  }
  // METHOD
  calcArea(){
    return this.height * this.width
  }
}
const areaz = new rectangle(10, 9)
console.log(areaz.area);
// if (readingStatus == true) {
//   console.log();
// }

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function() {
    console.log('draww');
  }
}
// circle.draw()
// facory Function
// facory Function
// facory Function

function creaateCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draww');
    }
  };

}
const circlev = creaateCircle(1)

// CONSTRUCTOR FUNCTION
// CONSTRUCTOR FUNCTION
// CONSTRUCTOR FUNCTION

function Circles(radius) {
  this.radius = radius;
  this.drawx = function() {
    console.log('draw');
  }
}

// const another = new Circles(1);

// EVERY OBJECT HAS A CONSTRUCTOR PROPERTY, AND THAT(PROPERTY) REFERENCES THE FUNCTION THAT WAS USED TO CREATE THAT OBJECT
// constructor 



const circle5 = new Function('radius', ` this.radius = radius;
this.drawx = function() {
  console.log('draw');
}`);

const circlez = new circle5(1)
console.log(circlez);


// Circles.call({}, 1);
// Circles.apply({}, 1)





const book1 = {
  title: 'Book one',
  author: 'John Doe',
  year: '2013',
  getSummary: function () {
   return  `${this.title} was written by ${this.author} in ${this.year} `
  }
  // console.log();
  
}

console.log(book1.getSummary());

// get object values
// get object values
// get object values

console.log(Object.keys(book1));


// CONSTRUCTOR
// CONSTRUCTOR

function Book(author, title, year) {
  console.log('book initialized...');
  this.author = author
  this.title = title
  this.year = year

}


// instatiate an Object
const book5 = new Book('George miller', 'book66', '2015')

// getSummary as a prototype
// getSummary as a prototype

Book.prototype.getSummary = function() {
  return  `${this.title} was written by ${this.author} in ${this.year} `
}


Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`
}


Book.prototype.revise = function(newYear){
  this.year = newYear;
  this.revised = true;

}
book5.revise('2017')
console.log(book5);
// const book6 = new Book()

// getSummary as a prototype
// getSummary as a prototype

const handbag = {
  make: 'luis vuitton',
  year: '2015',
  price: '$3000'
}


// INHERITANCE


function Book2(author, title, year) {
  this.author = author
  this.title = title
  this.year = year

}
Book2.prototype.getSummary = function() {
  return  `${this.title} was written by ${this.author} in ${this.year} `
};

// magazine constructor

function Magazine(author, title, month, year) {
  Book2.call(this, title, author, year);
  this.month = month;
}
Magazine.prototype = Object.create(Book.prototype)
// initiate magazine obj

const mag1 = new Magazine('mag one', 'kay', 'jan', '2018')

console.log(mag1.getSummary());

// Inherit prototype


// CLASSSSSSES
// CLASSSSSSES
// CLASSSSSSES


class Boook {
   constructor(title, author, year){
   this.title = title
   this.author = author
   this.year = year
}

getSummary(){
  return  `${this.title} was written by ${this.author} in ${this.year} `;
}
}

// let bk = new Boook('mag two', 'Ahmed Ali', '2015')
// console.log(bk);

// MAGAZINE SUBCLASS
// MAGAZINE SUBCLASS
// MAGAZINE SUBCLASS

// we have a subclass called magazine- which have everything a book has and also  have a month

class Magazine2 extends Boook {
  constructor(title, author, year, month) {
     super(title, author, year);
     this.month = month;
  }
}

// Instantiate Magazine
const mag6 = new Magazine2('good deed', 'Boona Muhammed', '2017', 'may');

console.log(mag6.getSummary());


class Volume {
    constructor(radius, height){
      this.radius = radius;
      this.height = height;
    }
    getVol(){
      return (Math.PI * this.radius *this.radius*this.height) 
    } 
}
const vol = new Volume(2,7)
console.log(vol.getVol().toFixed(4));

let x = [6,4,3,-2,1,0]

x.sort((a,b) => a - b)
console.log(x);


let cc = 'dog';
let arrD = []
arrD[0] = cc.substring(0,1)
arrD[1]  = cc.substring(0,2)
arrD[2] = cc.substring(0,3)
arrD[3] = cc.substring(1,2)
arrD[4] = cc.substring(1,3)
arrD[5]= cc.substring(2,3)
console.log(arrD);

// class Date {
//   constructor(Hours, Minutes, seconds){
//     this.Hours = Hours
//     this.Minutes = Minutes
//     this.seconds = seconds
//   }
//   clock(){
//     return (`${this.Hours}: ${this.Minutes} : ${this.seconds}`)
//   }
// }


let datte = new Date()
console.log(datte);
console.log(datte.getHours());
console.log(datte.getMinutes());
console.log(datte.getSeconds());
// console.log(`${'0' + datte.getHours()}:${datte.getMinutes()}:${datte.getSeconds()}`);


class myClock {
  constructor() {
     this.Date5 = new Date()
     this.hours = this.Date5.getHours();
     this.minutes = this.Date5.getMinutes();
     this.sec = this.Date5.getSeconds();
     console.log(this.sec);
  }
  run() {
    setInterval(this.update.bind(this), 1000)
  };
  update() {
    this.updateTime();
    console.log(this.hours + ':' + this.minutes + ':' + this.sec);
  }

  updateTime(){
    
    this.sec += 1;
    if (this.sec >= 60) {
      this.minutes++;
      this.sec = 0;
    }
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }


}

let clock = new myClock()

let m = 2
m += 5
console.log(m);


// clock.run()

// console.log(datte.clock());



let clk = (hours, minutes, sec) => {
  sec += 1;
  if (sec >= 60) {
    minutes++;
    sec = 0;
  }
  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }
  if (hours >= 24) {
    hours = 0;
  }

  console.log(hours + ':' + minutes + ':' + sec);
  

}
let mm = new Date()

clk(mm.getHours(), mm.getMinutes(), mm.getSeconds())

setInterval(clk(mm.getHours(), mm.getMinutes(), mm.getSeconds()), 1000)



class stopwatch {
  constructor(hours, minutes, sec){
    this.hours = hours
    this.minutes = minutes
    this.sec = sec
  }
  runn(){
    setInterval(this.update.bind(this), 1000)
  }
  update(){
    this.updateWatch()
    console.log(this.hours + ':' + this.minutes + ':' + this.sec);
  }

  updateWatch(){
    this.sec += 1;
    console.log(this.sec);
    if (this.sec >= 60) {
      this.minutes++;
      this.sec = 0;
    }
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
  
  }
}

let sWatch = new stopwatch(00, 00, 00)
// console.log(sWatch.runn());

// console.log(sWatch.updateWatch());


class countDown{
  constructor(minutes, sec){
    this.minutes = minutes
    this.sec = sec
  }
  clear(){
    clearInterval(this.runn.bind(this))
    clearInterval(this.runn())
  }

  runn(){
    setInterval(this.update.bind(this), 1000)
    // console.log(this.runn.bind(this));

  }
  update(){
    this.updateCountDown()
    // console.log(this.minutes + ':' + this.sec);
  }
  updateCountDown(){
    this.sec -= 1
    if (this.sec <= 0 && this.minutes != 0 ) {
      this.minutes--
      this.sec = 60
    }
    if (this.minutes == 0 && this.sec <= 0) {
      // return clearInterval(this.runn.bind(this))
       
      clearInterval(this.runn())
      clearInterval(this.runn.bind(this))

      this.clear()
    


    }
    

  }


}

let scount = new countDown(1,4)
console.log(scount.runn());
console.log(scount.clear());



 

//
let vv = 1





let sec = 10;
let minutes = 0;


function ctd (){
 
  sec -= 1
 if (sec <= 0 && minutes != 0 ) {
   minutes--;
   sec = 60;
 };
 console.log(minutes + ':' + sec);
//  if (minutes == 0 && sec <= 0) {
    console.log('Time up');
   clearInterval(ded);
 }
 

 ded = setInterval(ctd, 1000)
//  console.log(ded);
  

// setInterval(function bb() {
//   let cv= 5
//   cv += 1;
//   cv++
  
//   console.log(cv);
  
// }, 1000)

let funcCombine = (x, y) => {

  let result = [];

  let Combination = (position, current) => {

    //base case

    if (current.length === y) {
      result.push([[...current]])
    }
    for (let i = position; i <= x; i++) {
      current.push(i);

      //recursive function
      Combination(i+1, current)

      //Backtracking to find all possible solution
      current.pop()
      
    }
  }
  Combination(1, []);

  return result;
  
}












