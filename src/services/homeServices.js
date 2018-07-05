const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
];

export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  });
};
