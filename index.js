function dwarfRollCall(dwarves) {
   var result= dwarves.map(function(value,index){
      return (index+1).toString()+'. '+value+' ';
       });
   return result.join('');
  }

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(x=>
 x.toUpperCase()+'!');
 }

function longPlaneteerCalls(words) {
  return words.some(x=>x.length>4 );
}

function findTheCheese(food){
  var cheese=['cheddar','gouda','camembert'];
  var result=food.find(x=>cheese.indexOf(x)!=-1);
  if (result){
   return result;
    }
  return "no cheese!";
 }