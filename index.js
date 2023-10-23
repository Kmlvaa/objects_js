//Task 1
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
for (const [key,value] of Object.entries(student)) {
    console.log(key);
}
//Task 2
delete student.rollno
console.log(student);

//Task 3
const objSum = {
    a: 10,
    b: 10,
};
const updatedObjSum = {
    ...objSum,
    sum: objSum.a + objSum.b
  };
  
  console.log(updatedObjSum);

//Task 4
const obj = {
    n: 13,
    info: "n is smaller than 20"
  };
  
  const updatedObj = { ...obj };
  
  if (obj.n > 10) {
    updatedObj.info = "n is bigger than 10";
  }
  
  console.log(updatedObj);