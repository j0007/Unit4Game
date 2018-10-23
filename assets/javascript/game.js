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


//Attack Sequence Variables
var playerHealth ="";
var defHealth ="";
var playerAttack="";
var defCounter="";

//hide enemy/defenders images on start
$("#enKarp,#enLax,#enDuck,#enPod").hide();
$("#defKarp,#defLax,#defDuck,#defPod").hide();

//properties
function addproperties() {
    $("#infoOne").append("Name: " + character[i].name + "<br>");
    $("#infoOne").append("Health: " + character[i].health + "<br>");
    playerHealth = character[i].health
   

}

function addproperties2() {
    $("#infoTwo").append("Name: " + character[i].name + "<br>");
    $("#infoTwo").append("Health: " + character[i].health + "<br>");
 
}


// Initial Character Select


 $("#magiKarp").click(function() {
     i=0; addproperties();
     $("#snorLax,#psyDuck,#metaPod").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax,#enDuck,#enPod").show();
     playerAttack = character[i].attack;
     playerHealth = character[i].health;
     }); 

  
    
 $("#snorLax").click(function() {
     i=1; addproperties();
     $("#magiKarp,#psyDuck,#metaPod").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enKarp,#enDuck,#enPod").show();
     playerAttack = character[i].attack;
     playerHealth = character[i].health;

      });

 $("#psyDuck").click(function() {
     i=2; addproperties();
     $("#snorLax,#magiKarp,#metaPod").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax,#enKarp,#enPod").show();
     playerAttack = character[i].attack;
     playerHealth = character[i].health;
      });

 $("#metaPod").click(function() {
     i=3; addproperties();; 
     $("#snorLax,#psyDuck,#magiKarp").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax,#enDuck,#enKarp").show();
     playerAttack = character[i].attack;
     playerHealth = character[i].health;

      });
    



//Select Defender


$("#enKarp").click(function() {
    i=0; addproperties2();
    $("#enKarp").hide();
    $("#instructBox").text("Fight!");
    $("#defKarp").show();
    defCounter = character[i].counterAttack;
    defHealth = character[i].health;
    });
   
$("#enLax").click(function() {
    i=1; addproperties2();
    $("#enLax").hide();
    $("#instructBox").text("Fight!");
    $("#defLax").show();
    defCounter = character[i].counterAttack;
    defHealth = character[i].health;

     });

$("#enDuck").click(function() {
    i=2; addproperties2();
    $("#enDuck").hide();
    $("#instructBox").text("Fight!");
    $("#defDuck").show();
    defCounter = character[i].counterAttack;
    defHealth = character[i].health;
     });

$("#enPod").click(function() {
    i=3; addproperties2();
    $("#enPod").hide();
    $("#instructBox").text("Fight!");
    $("#defPod").show();
    defCounter = character[i].counterAttack;
    defHealth = character[i].health;
     });
   


//Attack Sequence 

$("#attackBtn").click(function() {

defHealth = (defHealth - playerAttack);
playerHealth = (playerHealth - defCounter);
$("#instructBox").text("You've Dealt " + playerAttack + " Damage, " + "Enemy countered " + defCounter + " damage!" );
if (playerHealth > 0) { playerAttack = playerAttack + 8};
if (playerHealth <= 0) {
    alert("You have be defeated!")}
if (defHealth <= 0) 
{alert("You Win!")}


console.log(playerAttack,playerHealth,defHealth,defCounter)
});







