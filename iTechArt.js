const input = [
  "https://test.com/connections/555",  
  "https://test.com/connections/555?locale=en",
  "https://test.com/connections/555{?q}",
  "https://test.com/connections/777{?q}",
  "https://test.com/connections/777{?locale}",
  "https://test.com/connections/999",
  "https://test.com/connections/111"
];

function func(connectionUrls) {
  const reducer = (accumulator, currentValue) => { // accumulator = {} when executed first time
    if(accumulator[currentValue]) { 
      accumulator[currentValue]+=1
    } else {
      accumulator[currentValue] = 1
    }
    return accumulator
  }
 
  return connectionUrls.map(item => item.match(/\d+/)[0]).reduce(reducer,{})  
}

// What solution is easy but I got stuck on the interview. All guys should refresh their knowledge
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
