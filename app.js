







var myVariable;
myVariable = 'live'
console.log(myVariable);

let conn = 100 + 'dede' 
console.log(conn);

let yamNumbers = 'fourty ' + 'five' + ' Tubers'
console.log(yamNumbers);

console.log(55 > 6);
console.log(5==='5');
let iamBold = true

if (!iamBold) {
    
    console.log('yes, i am bolddd');
}
else {
    console.log('No, i am not bold');
    document.write('No, i am not bold')
}

let x = 6
console.log(6 !== '6');

let age = 1
if (age >= 18 && age < 70) {
    console.log('you can drink the wine');
}
else {
    console.log('you cant drink that');
}

let email = 'abdulkudus555@gmail.com'
let result = email.replace('a', 'y')
console.log(result);

let html = `my mail is <h2>${email}</h2>`
console.log(html);

let boys = ['Yemi', 'Tunde', 'bayo']
 boys[2] = 'rayo'
//  let joiner = boys.join(',');
//  console.log(joiner);

let count = boys.push('momo')
let addMore = boys.push('qd')
console.log(addMore);
console.log(count);
console.log(boys);


let nam = 'AAsodi'
console.log(nam > 'are');

let score = '555'
   score = Number(score)
   console.log(score + 30);
   console.log(typeof score);



   let players = [10, 20, 30]

   for (let i = 0; i < players.length; i++) {
    const element = players[i];

    console.log(element);
    
   }


   let scores = 30;

   if (true) {
    let scores = 40 
    console.log(scores);
   }
   console.log(scores);

let price = 55

if (true) {
    price = 56
    console.log(price);
    if (true) {
        // price = 555
        // console.log(price);
    }
}
console.log(price);




function calc(radius) {
    return 3*radius**2
}
let Vol = calc(10)
console.log(Vol);

let Arrow = radius => 5*radius**2

let Recall = Arrow(4)
console.log(`The volume is ${Recall} metre cube`);

let greet = () => 'Hello World';

let thanks = greet()
console.log(thanks);

const bill = (products, tax) => {
   let total = 0;
   for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i]*tax;
    console.log(total);
    
   }
   return total;
}
console.log(bill([10, 15, 30], 0.2));

// let val = () => {
//    return 50
// }

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

// const userOne = {name: 'shawn', likes: 55} 

// const userTwo = userOne;
// const userOne = {name: 'shawn', likes: 56} 


// let para = document.querySelector('p')

// console.log(para);
// console.log(para.innerText);

// para.innerText += ' We are back'
// let paras = document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerHTML);
//     para.innerText += ' New text'
// });

// let guys = ['yele', 'dave', 'thomas']

// let lst = document.querySelector('.last');

// guys.forEach(guy => {
//     lst.innerHTML += `<p>${guy}</p>`
// });

// let sef = document.querySelector('.dimm')

// console.log(sef.getAttribute('class'));
// console.log(sef.setAttribute('class', 'swiss'));
// console.log(sef.setAttribute('style', 'color: red;'));

// sef.style.color = 'red';

// let pp = document.querySelectorAll('p');
// console.log(pp);

// pp[1].classList.add('danger');
// pp[2].style.color = 'green';



let pars = document.querySelectorAll('p')

pars.forEach(par => {
    console.log(par);
    if (par.innerText.includes('error')) {
        par.classList.add('danger')
    };
    if (par.innerText.includes('success')) {
        par.classList.add('success')
    };

}

)
// console.log(pars);
// console.log(pars[0]);
// console.log(pars[0].innerText == 'Lorem success ipsum');
// console.log(pars[4].innerText == 'error lorem ipsum' );

// pars.forEach(par => {
//     console.log(par);
//   if (pars[0].innerText == 'Lorem error ipsum' && pars[4].innerText == 'error lorem ipsum' && pars[6].innerText == 'Lorem ipsum error') {
//     pars[0].classList.add('danger')
//     pars[4].classList.add('danger')
//     pars[6].classList.add('danger')

//   }

//   if (pars[1].innerText == 'Lorem success ipsum' && pars[3].innerText == 'Lorem ipsum success' && pars[7].innerText == 'success Lorem ipsum') {
//     pars[1].classList.add('success')
//     pars[3].classList.add('success')
//     pars[7].classList.add('success')

//   }
// })

var todaysDate = new Date(1999, 10, 22)
console.log(todaysDate);
console.log(todaysDate.getMonth());
// console.log(todaysDate.get());




let funcCombine = (x, y) => {

    let result = [];
  
    function Combination(position, current){
  
      //base case
  
      if (current.length === y) {
        result.push([...current]);
      }
      for (let i = position; i <= x; i++) {
        current.push(i);
  
        //recursive function
        Combination(i+1, current);
  
        //Backtracking to find all possible solution
        current.pop()
        
      }
    }
    Combination(1, []);
  
    return result;
    
  };

  funcCombine(4, 2)








