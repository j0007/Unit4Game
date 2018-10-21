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

//properties
function addproperties() {
    $("#infoOne").append("Name: " + character[i].name + "<br>");
    $("#infoOne").append("Health: " + character[i].health + "<br>"); 
}

function addproperties2() {
    $("#infoTwo").append("Name: " + character[i].name + "<br>");
    $("#infoTwo").append("Health: " + character[i].health + "<br>"); 
}

var initialChar = ["#magiKarp","#snorLax","#psyDuck","#metaPod"]

//hide enemy/defenders images on start
$("#enKarp").hide();
$("#enLax").hide();
$("#enDuck").hide();
$("#enPod").hide();
$("#defKarp").hide();
$("#defLax").hide();
$("#defDuck").hide();
$("#defPod").hide();

// Initial Character Select

 $("#magiKarp").click(function() {
     i=0; addproperties();
     $(initialChar[1]).hide();
     $(initialChar[2]).hide();
     $(initialChar[3]).hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax").show();
     $("#enDuck").show();
     $("#enPod").show();
     });
    
 $("#snorLax").click(function() {
     i=1; addproperties();
     $(initialChar[0]).hide();
     $(initialChar[2]).hide();
     $(initialChar[3]).hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enKarp").show();
     $("#enDuck").show();
     $("#enPod").show();
      });

 $("#psyDuck").click(function() {
     i=2; addproperties();
     $(initialChar[0]).hide();
     $(initialChar[1]).hide();
     $(initialChar[3]).hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax").show();
     $("#enKarp").show();
     $("#enPod").show();
      });

 $("#metaPod").click(function() {
     i=3; addproperties();; 
     $(initialChar[0]).hide();
     $(initialChar[1]).hide();
     $(initialChar[2]).hide();
     $("#instructBox").text("Choose Your Enemy!");
     $("#enLax").show();
     $("#enDuck").show();
     $("#enKarp").show();
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
   


//Attack Sequence

function customShow(element)
{
    if( $( element )===( ':visible' ) )
        console.log(true);

    $( element ).show();
    return false;
}

    



