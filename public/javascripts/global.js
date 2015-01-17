var pageNumber = 1;
var pageString = "page_";

$( document ).ready(function() {
    changePage();
    
    $('#rightSpace').click(function(){
        pageNumber += 1;
        changePage();
    });
    
     $('#leftSpace').click(function(){
        if(pageNumber >1) {
            pageNumber -= 1;
            changePage();
        }
       
    });
    
        /* Open Journal Function */
    $('#journalBtn').click(function(){
        console.log("Hi!");
        $('#myModal').foundation('reveal', 'open');   
    });
});

/*
function toChat() {
    $.get('/bot');
}
*/


//Cosmetic Functions

var isChanged = false;
var changeSize = 1;

function setFontSize() {
    var myDiv = document.getElementById("content");
    
    if (changeSize === 0 ) {
        myDiv.style.fontSize = "120%";
            changeSize = 1;
        return;
    }
    

    if (changeSize === 1) {
        myDiv.style.fontSize = "140%";
            changeSize = 2;
            return;     
    }
    
    if (changeSize === 2) {
        myDiv.style.fontSize = "100%";
            changeSize = 0;
            return;
    }
}


function changeBg() {
    var myDiv = $('body');
	
    if (isChanged) {
        myDiv.css("background-color","#FFFFFF");
        myDiv.css("color", "#000000");
        $("h1").css("color", "black");
        
		isChanged = false;
	} else {
        myDiv.css("background-color","#242424");
        myDiv.css("color", "#a9a9a9");
        $("h1").css("color", "#a9a9a9");
       
		isChanged = true;
	}
}

function changePage() {
    var dec = "";
    switch(pageNumber) {
            case 3:
                dec = localStorage.getItem("dec3");
                $('#content').load("pages/" + pageString + pageNumber + "_" + dec + ".html");
                break;
            default:
                $('#content').load("pages/" + pageString + pageNumber + ".html");
    }
    
}

function safe() {
    localStorage.setItem("pNum", pageNumber);
}

function load() {
    pageNumber = parseInt(localStorage.getItem("pNum"));
    changePage();
}

function decide(num,res) {
     alert("Du hast dich entschieden!");
    localStorage.setItem("dec" + num, res);
}

function journalTest() {
       $('#journalArea').append("Dies ist ein Test" + "<br><br>");
}

