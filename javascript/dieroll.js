function rollit(){
// declare variables

let allStats = [];
let sum = 0;
var dieRoll = [];
const list = document.getElementById('statList')

// remove old list from page

list.innerHTML = "";

// start main loop

for (var i = 0; i < 6; i +=1){

    // 4d6

    for (var u = 0; u < 4; u += 1){
        dieRoll.push(Math.floor((Math.random() * 6) + 1))
    };

    // sort and drop lowest value

    dieRoll.sort((a,b) => a-b);
    dieRoll.shift();

    // sum of all rolls

    for (let num of dieRoll){
        sum = sum + num
    };

    allStats.push(sum);
    
    // reset variables for next loop

    dieRoll.length = 0;
    sum = 0;

};

allStats.sort((a,b) => b-a);

console.log(allStats);

// print results to page

for (var i = 0; i < allStats.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = allStats[i];
    list.append(li);
}

}