/*
* Task description: Write a JavaScript program to display the colors.
* Expected result: "1st choice is Blue ."
                    "2nd choice is Green."
                    "3rd choice is Red." 
*/

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]

for(let i = 0; i < color.length; i++){
  if(i + 1 === 1){
    console.log(`${i+1}${o[1]} color is ${color[i]}`)
  }
  else if(i + 1 === 2){
    console.log(`${i+1}${o[2]} color is ${color[i]}`)
  }
  else if(i + 1 === 3){
    console.log(`${i+1}${o[3]} color is ${color[i]}`)
  }
  else{
    console.log(`${i+1}${o[0]} color is ${color[i]}`)
  }

}