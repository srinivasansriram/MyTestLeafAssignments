var val = 5;

function sumvalues(val) {

    let sum = 0;

    for (let i = 1; i <= val; i++) {
      sum += i;
      console.log(`Sum from  ${i - 1} and ${i}: ${sum}`);
    }
    
}

sumvalues(val);