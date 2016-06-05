// Create changeMachine function that accepts int of cents and outputs 
// number of appropriate coins that can be used to give exact change.

function changeMachine(cents) {
  let returnStr = ''
  let coinNames = {
    200 : 'toonie',
    100 : 'loonie',
    25  : 'quarter',
    10  : 'dime',
    5   : 'nickel',
    1   : 'penny',
  }
  let denoms    = [200,100,25,10,5,1]
  let remainder = 0
  let countDown = cents

  denoms.forEach((denom) => {
    
    remainder = countDown % denom
    
    if (countDown - remainder > 0) {
      returnStr = returnStr + `${(countDown - remainder)/denom} ${coinNames[denom]}, `
      countDown = remainder
    }

  })

  console.log('You will need ' + returnStr + `to get ${cents} cents`)
}

changeMachine(73)
changeMachine(173)
changeMachine(152)
changeMachine(340)
changeMachine(41)
changeMachine(92)