console.log("tu sam");


//Binding
let o1 = {
    x: 5,
    y: 9,
    getx: function(msg) {return console.log(msg+' '+this.x);}
}

let o2 = {
    x: 75,
    y: 235,
   
}

o1.getx("value of x is: ");


//let printCoordinates = () => {
    function printCoordinates () {
    console.log(this.x+', '+this.y)
    }
    function printCoordinatesMore (msg) {
        this.getx(msg);
        }
/*
    function callObjectFunction (msg) {
        this.getx(msg);
    }*/
//}
  printCoordinates();

let callFunction = printCoordinates.bind(o2);
let callCallObjectFunction = printCoordinatesMore.bind(o1, "Value of x with binding");

 // callObjectFunction();
 callFunction();

 callCallObjectFunction();

 //printCoordinatesMore();