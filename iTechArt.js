// input
const input = [
  "https://test.com/connections/555",  
  "https://test.com/connections/555?locale=en",
  "https://test.com/connections/555{?q}",
  "https://test.com/connections/777{?q}",
  "https://test.com/connections/777{?locale}",
  "https://test.com/connections/999",
];

 const extractIdFromLink = (link, regex) => {
    
    if(typeof link !== 'string') {
      throw new Error('first argument must be a string');
    }
   
    if(!(regex instanceof RegExp)) {
      throw new Error('second argument must be a regex');
    }
    
    return link.match(regex);
  }
  
  const reducer = (accumulator, currentValue) => { // accumulator = {} when executed first time
    
    if(accumulator[currentValue]) { 
      accumulator[currentValue]+=1
    } else {
      accumulator[currentValue] = 1
    }
    return accumulator
  }

function func(connectionUrls) {
  
  if(!Array.isArray(connectionUrls)) {
    throw new Error('input must be an array') 
  }
  
  return connectionUrls.map(link => extractIdFromLink(link, /\d+/)[0]).reduce(reducer, {})  
}

// The task was not difficult but I got stuck on the interview. All guys should refresh their knowledge
// about regex and reduce method

// Aliaksandr Yanushkevich 17.02.2021


//
// output:
//
// { 
//    "555": 3,
//    "777": 2,
//    "999": 1
// }
//

console.log(func(input))
