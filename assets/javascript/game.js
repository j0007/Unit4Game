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
var playerName="";
var defName=""
var playerHealth ="";
var defHealth ="";
var playerAttack="";
var defCounter="";

//hide enemy/defenders images on start
$("#enKarp,#enLax,#enDuck,#enPod").hide();
$("#defKarp,#defLax,#defDuck,#defPod").hide();


//properties

function addproperties() {
    $("#infoOne").text ("Name: " + character[i].name + " Health: " + character[i].health);
    $("#instructBox").text("Choose Your Enemy!");
    playerName = character[i].name;
    playerAttack = character[i].attack;
    playerHealth = character[i].health;
}

function addproperties2() {
    $("#infoTwo").text ("Name: " + character[i].name + " Health: " + character[i].health);
    $("#instructBox").text("Fight!");
    defName = character[i].name;
    defCounter = character[i].counterAttack;
    defHealth = character[i].health;
 
}


// Initial Character Select


 $("#magiKarp").click(function() {
     i=0; addproperties();
     $("#snorLax,#psyDuck,#metaPod").hide();
     $("#enLax,#enDuck,#enPod").show();
     }); 
    
 $("#snorLax").click(function() {
     i=1; addproperties();
     $("#magiKarp,#psyDuck,#metaPod").hide();
     $("#enKarp,#enDuck,#enPod").show();
      });

 $("#psyDuck").click(function() {
     i=2; addproperties();
     $("#snorLax,#magiKarp,#metaPod").hide();
     $("#enLax,#enKarp,#enPod").show();
      });

 $("#metaPod").click(function() {
     i=3; addproperties();; 
     $("#snorLax,#psyDuck,#magiKarp").hide();
     $("#enLax,#enDuck,#enKarp").show();
      });
    



//Select Defender


$("#enKarp").click(function() {
    i=0; addproperties2();
    $("#enKarp").hide();
    $("#defKarp").show();
    $("#attackBtn").show();
    });
   
$("#enLax").click(function() {
    i=1; addproperties2();
    $("#enLax").hide();
    $("#defLax").show();
    $("#attackBtn").show();
     });

$("#enDuck").click(function() {
    i=2; addproperties2();
    $("#enDuck").hide();
    $("#defDuck").show();
    $("#attackBtn").show();
     });

$("#enPod").click(function() {
    i=3; addproperties2();
    $("#enPod").hide();
    $("#defPod").show();
    $("#attackBtn").show();
     });
   


//Attack Sequence 

$("#attackBtn").click(function() {

    defHealth = (defHealth - playerAttack);
    playerHealth = (playerHealth - defCounter);
        $("#instructBox").text("You've Dealt " + playerAttack + " Damage, " + "Enemy countered " + defCounter + " damage!" );
        $("#infoOne").text ("Name: " + playerName + " Health: " + playerHealth);
        $("#infoTwo").text ("Name: " + defName + " Health: " + defHealth);
            
        if (playerHealth > 0) { playerAttack = playerAttack + 8} 
        
        if (playerHealth <= 0) {
                $("#instructBox").text("You have Fainted, You Lose!")
                $("#attackBtn").hide()
                    }

        else if (defHealth <= 0){
                $("#instructBox").text("Choose Another Opponent!")
                $("#defKarp,#defLax,#defDuck,#defPod").hide();
                $("#attackBtn").hide();
                    }
        
        if (playerHealth <= 0 && defHealth <= 0) {
                $("#instructBox").text("You've Both Fainted! Its a tie!")
                $("#attackBtn").hide();
                    }
    
});


// Still need to figure out how to signal all enemies have been defeated








