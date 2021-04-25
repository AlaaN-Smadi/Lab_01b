'use strict'

let userName = prompt('Please let us know your name');
let age = parseInt(prompt("What's Your Age"));
let color = prompt("What's your favorites color. 1. White , 2. Yellow , 3. Red");

while (color !== "White" && color !== "Red" && color !== "Yellow") {
    color = prompt("Please give us your favorites color. 1. White , 2. Yellow , 3. Red");
}

if (color == "White"){
document.writeln(`<h3 style="background:white;"> Welcome mr  ${userName} </h3>`)
}else if(color == "Red"){
    document.writeln(`<h3 style="background:red;"> Welcome mr  ${userName} </h3>`)

}else{
    document.writeln(`<h3 style="background:yellow;"> Welcome mr  ${userName} </h3>`)

}

let car=prompt("What's your favorites car 1. sport , 2. classic");

while (car !=="sport" && car !== "classic"){
    car=prompt("What's your favorites car 1. sport , 2. classic");

}

var image;

if (car == "classic"){
    image = '<img src="https://thumbor.granitemedia.com/1968-ford-mustang-gt-from-bullitt/8MruAOtGQ8KLxj0L4uAsjCdlsCk=/480x352/filters:format(webp):quality(80)/granite-web-prod/85/52/855255035d5a4cbf9ea921ca327d85c6.jpeg" width="150px" height="150px" alt="Top_Greatest_CARS">'

}else{
    image = '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" width="150px" height="150px" alt="Top_Greatest_CARS">'

}

document.write(image);


console.log("userName = " , userName);
console.log("userAge = " , age);
console.log("user's best color = " , color);
console.log("car type = " , car);