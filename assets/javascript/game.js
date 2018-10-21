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

function addproperties() {
    $("#info").append("Name: " + character[i].name + "<br>");
    $("#info").append("Health: " + character[i].health + "<br>");
    $("#info").append("Attack: " + character[i].attack + "<br>");
    $("#info").append("Counter: " + character[i].counterAttack + "<br>"); 
}

var initialChar = ["#magiKarp","#snorLax","#psyDuck","#metaPod"]


// Initial Character Select
 $("#magiKarp").click(function fc() {
     i=0; addproperties();
     $(initialChar[1]).hide();
     $(initialChar[2]).hide();
     $(initialChar[3]).hide();
     $("#instructBox").text("Choose Your Enemy!");
     });
    
 $("#snorLax").click(function() {
     i=1; addproperties();
     $(initialChar[0]).hide();
     $(initialChar[2]).hide();
     $(initialChar[3]).hide();
     $("#instructBox").text("Choose Your Enemy!");
      });

 $("#psyDuck").click(function() {
     i=2; addproperties();
     $(initialChar[0]).hide();
     $(initialChar[1]).hide();
     $(initialChar[3]).hide();
     $("#instructBox").text("Choose Your Enemy!");
      });

 $("#metaPod").click(function() {
     i=3; addproperties();; 
     $(initialChar[0]).hide();
     $(initialChar[1]).hide();
     $(initialChar[2]).hide();
     $("#instructBox").text("Choose Your Enemy!");
      });

//Select Defender




