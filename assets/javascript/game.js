// Character Objects
var character = [ {
    name:"Magikarp",
    health:120,
    attack:8, 
    counterAttack:15,
}, {
    name: "Snorlax",
    health:100,
    attack:14, 
    counterAttack:5,
}, {
    name: "Psyduck",
    health:150,
    attack:8, 
    counterAttack:20,
},{
    name:"Metapod",
    health:180,
    attack:7, 
    counterAttack:25,
}]

for (var i = 0; i < character; i++); {

};

function addproperties() {
    $("#info").append("Name: " + character[i].name + "<br>");
    $("#info").append("Health: " + character[i].health + "<br>");
    $("#info").append("Attack: " + character[i].attack + "<br>");
    $("#info").append("Counter: " + character[i].counterAttack + "<br>"); 
}

 $("#magiKarp").click(function() {
     i=0; addproperties();
      });

 $("#snorLax").click(function() {
     i=1; addproperties();
      });

 $("#psyDuck").click(function() {
     i=2; addproperties();
      });

 $("#metaPod").click(function() {
     i=3; addproperties();; 
      });




//Window load


