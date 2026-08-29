// console.log("Hello");
// console.error("0");
// console.warn("Warning");

// // let age=30;
// // console.log(age);
// // const country= "Nepal";
// // console.log(country);

// // let user={
// //     name: "Ram",
// //     age:20,
// // };
// // console.log(user.name,user.age);

// // let name= "Bisa";
// // let age= 22;
// // let isValid= true;
// // console.log(typeof isValid);

// // let marks= 40;
// // if (marks>=80){
// //     console.log("Graded");
// // }
// // else if(marks>=60)
// // {
// //     console.log("Pass")
// // }
// // else(
// //     console.log("Fail")
// // )

// // console.log(1);
// // console.log(2);

// // let fname= "Bisa";
// // let lname= "Kafle";
// // console.log(fname + " " + lname);

// // let i= 5;
// // for(i = 1; i <= 5; i++);
// // {
// //     console.log(i);
// // }

// const fruits=["apple","banana","orange"];
// fruits.shift ();
// console.log(fruits);

// const number1=[1,2,3];
// const number2=[...number1,4,5,6];
// console.log(number2);

// const user={
//      age:20,
//      name: "Bisa",
// }
// const add={
//     ...user,
//     location:"biratnagar",
// }
// console.log(add);

// let marks= [10,20,20,20];
// let total= marks[0]+marks[1]+marks[2]+marks[3];
// console.log(total);

// let average= total/4;
// console.log(average);

// if (average < 40) {
//     console.log("Fail");
// } else {
//     console.log("Pass");
// }

// function sum(){
//  console.log(30+29);
// }
// sum();

function add( a, b){
    console.log(a+b);

}
add(20,30);

const sum=(a,b,c)=>{
    console.log(b+c);
};
sum(20,30,40);

const avg=(a,b,c,d)=>{
    console.log((a+b+c+d)/4);
};
avg(40,60,70,80);

let marks = [80, 75, 90, 65, 95];

function calculateTotal(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return total;
}

function calculateAverage(total, length) {
  return total / length;
}

function getGrade(average) {
  if (average >= 80) {
    return "A";
  } else if (average >= 60) {
    return "B";
  } else if (average >= 40) {
    return "C";
  } else {
    return "Fail";
  }
}

let totalMarks = calculateTotal(marks);

let average = calculateAverage(totalMarks, marks.length);

let grade = getGrade(average);

console.log("Total Marks:", totalMarks);
console.log("Average:", average);
console.log("Grade:", grade);





// let marks=[20,30,40,50];
// const calculateTotal=(marks)=>
// {
//     let total=0;
//     for(let i=0; i<marks.length; i++){
//         total == marks[i];
//     }
//     return total;
// }

// const calculaateAverage=(total, length)=>{
//     return total/length;
// }

// const getgrade=(average)=>{
//     if (average>=80){
//         return "A";
//     }else if (average>=60){
//         return "B";

//     }else if (average>=40){
//         return "c";

//     }else{
//         return "F";
//     }
// }
// let totalMaeks=calculateTotal(marks);
// let averageMarks=calculateAverage();



// const tagValue= document.getElementById("id1").innerText="New data";
// console.log(tagValue);

// Query Selector