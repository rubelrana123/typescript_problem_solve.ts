
type ArrayOfString<T> = Array<T>

const reverseArrayWithGeneric = (...param : ArrayOfString<string> ) : ArrayOfString<string> =>{
    const result = param.reverse() ;
    return result ;
} 
const result1 = reverseArrayWithGeneric('mir', 'mezba', 'tanmoy','firoz')

console.log(result1)