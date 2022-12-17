
// Task 2 and 3

// const googleButton = document.querySelector('#googlebutton');
// const githubButton = document.querySelector('#githubbutton');
// const LinkedinButton = document.querySelector('#Linkedinbutton');

// googleButton.addEventListener('click', () => {
//   window.open('https://www.google.com', '_blank');
// });

// githubButton.addEventListener('click', () => {
//   window.open('https://www.github.com', '_blank');
// });

// LinkedinButton.addEventListener('click', () => {
//     window.open('https://www.linkedin.com', '_blank');
//   });

//   Task 4
// const bulb = document.getElementById('bulb');
// const lightbulb = document.getElementById('lightbulb');

// bulb.addEventListener('click', () => {
//   lightbulb.classList.toggle('on');
//   lightbulb.classList.toggle('off');
// });

//    Task 5

// object combined
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

const combinedObject = { ...object1, ...object2 };

console.log(combinedObject); 

// array  combined
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

// Task 7

class table {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    rep() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const first = new table('Aashish', 21);
  first.rep();
  
  const second = new table('durgesh', 22);
  second.rep(); 
//
  