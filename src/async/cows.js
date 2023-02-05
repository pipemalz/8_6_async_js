const cows = Math.floor(Math.random() * (20 - 5 + 1) + 5);
const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have enough milk, ${cows} cows.`);
  } else {
    reject(
      `There are no cows enough to supply the necessary milk, just ${cows} cows.`
    );
  }
});

// countCows
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(()=>{
//         console.log('FInally');
//     })

async function print() {
  let res;
  try {
    res = await countCows;
    console.log(res);
  } catch(e) {
    console.log(e)
  }
}

print();
