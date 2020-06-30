// Start my version Roll 4, Drop Lowest

var dieRoll = [];

for (var i=0; i<4; i+=1){
    dieRoll.push(Math.floor((Math.random() * 6) + 1))
};

console.log(dieRoll);

// sort array
dieRoll.sort((a,b) => a-b);


// drop lowest
dieRoll.shift();

// add all in array



// print to page
console.log(dieRoll);

// Start my version Roll 3 and add