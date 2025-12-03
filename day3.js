Day 3 Part 2:
const file = "input.txt"
fetch(file)
  .then((res) => res.text())
  .then((text) => {
    //console.log(text)
    const banks = text.split("\n");
    //console.log(banks[0])
    //console.log(banks.length)
    let total = 0
    const numDigits = 12
    for (let i=0; i <= banks.length-1; i++) { //iterate through all banks
      //console.log('bank')
      //console.log(i)
      const ourBank = banks[i]
      //console.log(banks[i].length)
      const ourBankLength = banks[i].length
      //console.log(ourBankLength)
      let mostRecentBattery = 0

      let maxOutput = 0 //for this bank, what is the max joltage we add to the total
      for (let j=0; j <= numDigits-1; j++) {
        //console.log('j= digit index')
        //console.log(j)
        let maxJthPlaceValue = 0
        for (let k=mostRecentBattery; k < ourBankLength - numDigits + j+1; k++) {
          //console.log('k=battery index')
          //console.log(k)
          const possibleJthDigit = ourBank.slice(k,k+1)
          //console.log('jth digit could be')
          //console.log(possibleJthDigit)
          let possibleJthPlaceValue = possibleJthDigit * 10**(numDigits - j-1)
          //console.log('this would be a value of')
          //console.log(possibleJthPlaceValue)
          if (possibleJthPlaceValue > maxJthPlaceValue && k>=mostRecentBattery) {
            maxJthPlaceValue = possibleJthPlaceValue
            //console.log('determined this is the max jth place value')
            //console.log(maxJthPlaceValue) 
            mostRecentBattery = k+1
            //console.log('most recent battery is now')
            //console.log(mostRecentBattery)
          } 
        }
        //console.log('adding this to maxOutput')
        //console.log(maxJthPlaceValue)
        maxOutput += maxJthPlaceValue
      }
      console.log(maxOutput)
      total += maxOutput
    }





    console.log(total);








   })
  .catch((e) => console.error(e));
