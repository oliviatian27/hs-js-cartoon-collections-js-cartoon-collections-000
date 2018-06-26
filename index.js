function dwarfRollCall(dwarves) {
	var newString = "";
  for (var i = 0; i < dwarves.length; i++) {
   newString += (i+1).toString()+ ". " + dwarves[i] + " ";
  }
  return newString;
}
function summonCaptainPlanet(planeteerCalls){
 var newArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   newArray.push(planeteerCalls[i] + "!");
  }
  return newArray;
}
function longPlaneteerCalls(words) {
  for (var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true;
    }
  }return false;
}

function findTheCheese(food){
  for (var i=0;i<food.length;i++){
     if(food[i]=="cheddar"||food[i]=="gouda"||food[i]=="camembert"){
       return food[i];
     }
  }return "no cheese!";
}
