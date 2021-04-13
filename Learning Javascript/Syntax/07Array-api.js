// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();

  console.log(fruits);
  console.log(result);

}



// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');

  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(array);
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function(student) {
    return student.score === 90;
  });

  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter(function(student) {
    return student.enrolled;
  });

  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // const result = students.map((student) => student.score);
  const result = students.map(function(student) {
    return student.score;
  });
  console.log(result);
}

console.clear();

// Q8. check if there is a student with the score lower than 50
{
  // const result = students.find(function(student) {
  //   if (student.score < 50) {
  //     return student.score;
  //   }
  // });


  const result = students.some(function(student) { // some은 배열에 한요소라도 충족되는지 확인함
    return student.score < 50;
  })
  console.log(result);

  const result2 = students.every(function(student) { // every는 배열의 모든것을 확인할때 사용함
    return student.score < 50;
  })
  console.log(result2);
}

console.clear();
// Q9. compute students' average score
{
  const result = students.reduce(function(prev, curr) {
  console.log(prev);
  console.log(curr);
  return prev + curr.score;
}, 0); //0 is initial value

  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // const result = students.map(function(student) {
  //   return student.score;
  // });
  // console.log(result);

  // const score = result.join();
  // console.log(score);

  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

  console.log(result);
}

// console.clear();
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
const result = students
  .map((student) => student.score)
  // .sort((a, b) => (b - a)) //decending
  .sort((a, b) => (a - b))
  .join();

  console.log(result);
}
