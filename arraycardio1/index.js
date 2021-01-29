const inventors = [
  { first: "Mohit", last: "Pal", year: 1993, passed: 3000 },
  { first: "Gandhav", last: "Sharma", year: 1983, passed: 2080 },
  { first: "Vivek", last: "Jashoria", year: 1995, passed: 2088 },
  { first: "Gaurav", last: "Jawla", year: 1989, passed: 2050 },
  { first: "Varun", last: "Jain", year: 1997, passed: 2090 },
];

const people = [
  "Beck,Glenn",
  "Becker,Carl",
  "Beckett,Samuel",
  "Mick, Henry",
  "Begin,Smith",
  "Paine,Marnus",
  "Harris,Wade",
  "Warner,Green",
  "Starc,Pat",
  "Josh,Lyon",
  "Ric,Robertt",
  "Peter,Saul",
  "David,Benn",
  "Tony,Bent",
  "Yogi,Ken",
  "Eric,Erin",
  "Frank,Blacke",
  "Lloyd,Ambrose",
];

// Array.prototype.filter()

const nineteen = inventors.filter(inventor => (inventor.year >= 1990 && inventor.year <= 1995));
console.table(nineteen);

// Array.prototype.map()

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);