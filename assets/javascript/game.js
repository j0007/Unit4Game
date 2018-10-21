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



//hide enemy/defenders images on start
$("#enKarp,#enLax,#enDuck,#enPod").hide();
$("#defKarp,#defLax,#defDuck,#defPod").hide();

//properties
function addproperties() {
    $("#infoOne").append("Name: " + character[i].name + "<br>");
    $("#infoOne").append("Health: " + character[i].health + "<br>");
    return character[i].attack; 
}

function addproperties2() {
    $("#infoTwo").append("Name: " + character[i].name + "<br>");
    $("#infoTwo").append("Health: " + character[i].health + "<br>");
    return character[i].counterAttack; 
}

// Initial Character Select

 $("#magiKarp").click(function() {
     i=0; addproperties();
     $("#snorLax,#psyDuck,#metaPod").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax,#enDuck,#enPod").show();
     });
    
 $("#snorLax").click(function() {
     i=1; addproperties();
     $("#magiKarp,#psyDuck,#metaPod").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enKarp,#enDuck,#enPod").show();

      });

 $("#psyDuck").click(function() {
     i=2; addproperties();
     $("#snorLax,#magiKarp,#metaPod").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax,#enKarp,#enPod").show();
      });

 $("#metaPod").click(function() {
     i=3; addproperties();; 
     $("#snorLax,#psyDuck,#magiKarp").hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax,#enDuck,#enKarp").show();

      });
    



//Select Defender

$("#enKarp").click(function() {
    i=0; addproperties2();
    $("#enKarp").hide();
    $("#instructBox").text("Fight!");
    $("#defKarp").show();
    });
   
$("#enLax").click(function() {
    i=1; addproperties2();
    $("#enLax").hide();
    $("#instructBox").text("Fight!");
    $("#defLax").show();

     });

$("#enDuck").click(function() {
    i=2; addproperties2();
    $("#enDuck").hide();
    $("#instructBox").text("Fight!");
    $("#defDuck").show();
     });

$("#enPod").click(function() {
    i=3; addproperties2();
    $("#enPod").hide();
    $("#instructBox").text("Fight!");
    $("#defPod").show();
     });
   


//Attack Sequence Variables
var playerHealth ="";
var defHealth ="";
var playerAttack="";
var defCounter="";


$(".attackBtn").on("click", function() {
   
   alert("Doesnt Work Yet ):");

});

    



