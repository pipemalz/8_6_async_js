// const idList = [1,2,3,4,5,6,7,8,9];

// function* gen(){
//     let id = idList.at(-1);
//     while (id < 100){
//         yield id++;
//     }   
// }

// const g = gen()

// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)


function* iterable(array){
    for(let value of array){
        yield value;
    }
}

const it = iterable(['Felipe', 'Omar', 'Ana', 'Lucia', 'Jorge']);

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
 