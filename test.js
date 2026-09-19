const users = [
  { name: "김철수", age: 28, active: true },
  { name: "이영희", age: 34, active: false 
,
];

const names = users.filter(u => u.active).map(u => u.name);
console.log(names);






