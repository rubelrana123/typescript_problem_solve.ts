 ## **Interview Questions**

# 1. What is TypeScript, and how is it different from JavaScript?
Answer :
Typescript definition: TypeScript is a typed superset of javascript and object oriented programming language.  
Difference : 
 2.Javascript is a scripting lightweight, interpreted , and client-side programming language. Typescript is a  typed superset of Javascript.
 2.Javascript language no need to complier but Typescript language need to compiler.
 3. file extension javascript file - .js and typescript file .ts or .tsx
 4.JavaScript is preferable to use in small coding projects and typescript is oop language and use large project.

# 2. Can you explain the difference between "interface" and "type" in TypeScript?
Answer : interface is used only for objects but type is used anything. Interface use "interface" keyWord for declaring an interface that can contain the method but Typescript type use "type" keyword.type can be used other types also as primitive, unions and tuples.
# 3. Can you give an example of how to use generics in TypeScript?
Ans: A generic function is a function that has type arguments. Actual types are used instead of type arguments when called.
Example : 
  const genericfunc = <T>(param: T): T => {
  return param;
};

genericfunc<number>(5); // param type and return type = number
genericfunc<string>("5"); // param type and return type = string
 
# 4. What is the difference between an "unknown" and "any" type in TypeScript?
Ans: unknown is similar to any but a safer alternative but any is disables type checking and effectively allows all types to be used
# 5. Can you give an example of how to use enums in TypeScript?
Ans: enum is a special class that represents a group of constants .its come in two flavors string and numeric.
Example : 
enum Direction {  
    Up,  
    Down,  
    Left,  
    Right,  
}  
  
console.log(Direction[3]); // output left 
# 6. What is the "as" keyword used for in TypeScript?
Ans: The as keyword in TypeScript is for making type assertions. It’s a way to force the TypeScript compiler to to treat an object as whatever type you say it is.
# 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
Ans: A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. The "typeof" type guard is used to determine the type of a variable. The typeof type guard is said to be very limited and shallow.
Example :
function getValues(a: number | string, b: string) {
    if(a === b) {
        console.log(typeof a) // string
    } else {
        console.log(typeof a) // number or string
    }
}
 The "in" type guard checks if an object has a particular property, using that to differentiate between different types. It usually returns a boolean, which indicates if the property exists in that object. 
 Example :
 const getInfo  = (info : X | Y) => {
 if ('phone' in info) {
    return `type a ${info.property}`
    
 } else if("salary" in info) {
    return `type B ${info.property}`
    
 }
}

# typescript_problem_solve.ts
