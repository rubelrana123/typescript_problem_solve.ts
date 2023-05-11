interface Person {
    name: string;
    age: number;
  }
  
  function filterAdultFunction(persons: Person[]): Person[] {
    return persons.filter((eachPerson: Person) => eachPerson.age >= 18);
  }
  const persons : Person[] = [
    { name: 'Rubel', age: 22 },
    { name: 'Sohel', age: 15 },
    
  ];
  
  const results : Person[] = filterAdultFunction(persons) ;
  console.log(results);
  