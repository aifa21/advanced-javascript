numbers=[5,4,3,2,1];
// numbers.map(function(element,index,arr)//function(currentValue, index, arr)
// {
//     console.log(element,index,arr);
// })


// const res=numbers.map(function(element)//function(currentValue, index, arr)
// {
//    return element*element;
// })
// console.log(res);

// const res=numbers.map(x=>x*x);
// console.log(res);

//.........filter..........
const bigger=numbers.filter(x=>x>3);
console.log(bigger);

const isThere=numbers.find(x=>x>3);
console.log(isThere);
