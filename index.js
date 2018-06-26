function dwarfRollCall(dwarves){
   var array =[];
   for (var i=0;i<dwarves.length;i++){
     array.push(`${i+1}. ${dwarves[i]} `);
   }
   return array.join("");
 }
function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(x=>x.toUpperCase()+"!");
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
