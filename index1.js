const promise = new Promise((resolve, reject) => {

    const randomNumber = Math.random();

    if(randomNumber < .98) {
        resolve('All things went well!');
    } else {
        reject(new Error('Something went wrong'));
    }
});

promise.then((data)=> {
    console.log(data);  //prints 'all things went well' 
    },
    (error) => {
    console.log(error);  // prints error object
    }
);
