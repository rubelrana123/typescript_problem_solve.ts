

// class Person {
//     private name : string ;
//     private age : number ;
//      constructor(userName : string , userAge : number){
//          this.name = userName ;
//          this.age = userAge ;
//      }
//      getDetails(){
//          return `${this.name} is ${this.age} year's Old`;
//      }
//  }
//  const p = new Person('ansarul', 22);
//  // console.log(p.getDetails())
 
//  class Student extends Person {
//      private grade : number ;
//      constructor(name :string , age : number , grade : number){
//          super(name , age)
//          this.grade = grade ;
//      }
//      getGrade(){
//          return `got GPA : - ${this.grade}`
//      }
//  }
//  const p1 = new Student("ansarul", 22, 4.73);
//  console.log(p1.getGrade())