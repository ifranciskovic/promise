const promise1 = new Promise((resolve, reject) => {
    resolve('Promise1 resolved');
});

const promise2 = new Promise((resolve, reject) => {
    resolve('Promise2 resolved');
});

const promise3 = new Promise((resolve, reject) => {
    reject('Promise3 rejected');
});

promise1
    .then((data)=> {
    console.log(data);   //Promise1 resolved
    return promise2;   
    })
    .then((data)=> {
    console.log(data);  //Promise2 resolved
    return promise3;
    })
    .then((data)=> {
    console.log(data);
    })
    .catch((error)=> {
    console.log(error);  //Promise3 rejected
    });






    
