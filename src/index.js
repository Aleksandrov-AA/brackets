module.exports = function check(str, bracketsConfig) {
  // your solution

  const holder = []
  const openBrackets = []
  const closedBrackets = []

// Version 0.1  
//   for (let bracket of bracketsConfig) {
//     openBrackets.push(bracket[0])
//     closedBrackets.push(bracket[1])
//   }
//   let flag = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (openBrackets.includes(str[i])) {
//         flag += 1;
//     }else if (closedBrackets.includes(str[i])) {
//         flag -= 1;
//     }
//     if (flag < 0) {
//         return false;
//     }
//   }
//   if (flag === 0) {
//     return true;
//   } else if (flag > 0) {
//     return false;
//   }

    // const openBrackets = ['(','{','[']
    // const closedBrackets = [')','}',']']

// version 0.2 (11 +, 9 -)    
    // for (let letter of str) { 
    //     if(openBrackets.includes(letter)){ 
    //         holder.push(letter)
    //     }else if(closedBrackets.includes(letter)){ 
    //         const openPair = openBrackets[closedBrackets.indexOf(letter)] 
    //         if(holder[holder.length - 1] === openPair){ 
    //             holder.splice(-1,1)
    //         }else{ 
    //             holder.push(letter)
    //             break
    //         }
    //     }
    // }
    // return (holder.length === 0)

    //Version 0.3
    if (str.length % 2 !== 0) {
        return false;
    }

    let pairBr = '';
    let res = str;
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            pairBr = bracketsConfig[i][0] + bracketsConfig[i][1];
            res = res.replace(pairBr, '');
        }
    }

    return res.length === 0;
}
