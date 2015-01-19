var chapterNumber = 1;
var chapterString = "chapter_";
var canMoveON = false;

$( document ).ready(function() {
    changeChapter();
    
    $('#rightSpace').click(function(){
        if(canMoveON) {
            chapterNumber += 1;
            changeChapter();
        } else {
            alert("Du kannst nicht vorbei!");
        }
    });
    
    $('#rightSpace').hover(function(){
        $('#rightArrow').fadeIn(100);
    }, function() {
        $('#rightArrow').fadeOut(100);
    });
    
     $('#leftSpace').hover(function(){
        $('#leftArrow').fadeIn(100);
    }, function() {
        $('#leftArrow').fadeOut(100);
    });
    
     $('#leftSpace').click(function(){
        if(chapterNumber >1) {
            chapterNumber -= 1;
            changeChapter();
        }
    });
    
    /* Open Journal Function */
    $('#journalBtn').click(function(){
        $('#myModal').foundation('reveal', 'open');
            setTimeout(function() {
            document.getElementById("noteIn").focus();
            }, 200);
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

function changeChapter() {
    var dec = null;
    switch(chapterNumber) {
            case 1:
                dec = localStorage.getItem("dec1");
                $('#main').load("chapters/" + chapterString + chapterNumber + ".html");
                if(dec != null) {
                    $('#result').load("chapters/" + chapterString + chapterNumber + "_" + dec + ".html");
                    canMoveON = true;
                } else {
                    $('#result').html("");
                    canMoveON = false;
                }
                $('#topTitle').html("Sink-Positive | Kapitel " + chapterNumber);
                break;
            case 2:
                dec = localStorage.getItem("dec2");
                $('#main').load("chapters/" + chapterString + chapterNumber + ".html");
                if(dec != null) {
                    $('#result').load("chapters/" + chapterString + chapterNumber + "_" + dec + ".html");
                    canMoveON = true;
                } else {
                    $('#result').html("");
                    canMoveON = false;
                }
                $('#topTitle').html("Sink-Positive | Kapitel " + chapterNumber);
                break;
            case 3:
                dec = localStorage.getItem("dec3");
                $('#main').load("chapters/" + chapterString + chapterNumber + ".html");
                if(dec != null) {
                    $('#result').load("chapters/" + chapterString + chapterNumber + "_" + dec + ".html");
                    canMoveON = true;
                } else {
                    $('#result').html("");
                    canMoveON = false;
                }
                $('#topTitle').html("Sink-Positive | Kapitel " + chapterNumber);
                break;
             case 6:
                dec = localStorage.getItem("dec6");
                $('#main').load("chapters/" + chapterString + chapterNumber + ".html");
                if(dec != null) {
                    $('#result').load("chapters/" + chapterString + chapterNumber + "_" + dec + ".html");
                    canMoveON = true;
                } else {
                    $('#result').html("");
                    canMoveON = false;
                }
                $('#topTitle').html("Sink-Positive | Kapitel " + chapterNumber);
                break;
             case 7:
                dec = localStorage.getItem("dec7");
                $('#main').load("chapters/" + chapterString + chapterNumber + "_" + dec + ".html");
                $('#result').html("");
                canMoveON = true;
                $('#topTitle').html("Sink-Positive | Kapitel " + chapterNumber);
                break;
            default:
                $('#main').load("chapters/" + chapterString + chapterNumber + ".html");
                $('#result').html("");
                $('#topTitle').html("Sink-Positive | Kapitel " + chapterNumber);
    }
    
}

function safe() {
    localStorage.setItem("cNum", chapterNumber);
    localStorage.setItem("journal", $('#journalArea').html());
}

function load() {
    chapterNumber = parseInt(localStorage.getItem("cNum"));
    changeChapter();
    $('#journalArea').html(localStorage.getItem("journal"));
}

/* Restart */
function restart() {
    // Clear LocalStorage & Journal
    localStorage.clear();
    $('#journalArea').empty();
    chapterNumber = 1;
    changeChapter();
}

function decide(num,res) {
    localStorage.setItem("dec" + num, res);
    changeChapter();
}


/* JOURNAL FUNCTIONS */
function getText() {
    var text = "";

	
	if (window.getSelection) {

		text = window.getSelection().toString();
        
		return text;
	}
}

document.onmouseup = function(e) {
	var text = getText();
	//Mache nur weiter, wenn der Text mindestens 3 Zeichen besitzt !!!!! please speak english! thx
	if (text.length > 2) {
        
        
        $('#markedText').html('"' + getText() + '"');
        $('#journalModal').foundation('reveal', 'open');
        window.getSelection().removeAllRanges();
        
        /* Wenn JA gedrückt wird */
        $('#enterNote').click(function() {
            if (text != null) {
            $('#journalArea').append(text + "<br><br>");
            $('#journalModal').foundation('reveal', 'close');
            text = null;
            }
        });
        
        /* Wenn NEIN gedrückt wird */
        $('#escNote').click(function () {
            $('#journalModal').foundation('reveal', 'close');
            text = null;
        });
	}
}

// Enter Note into Journal
var noteIn = document.getElementById("noteIn");

noteIn.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        text = $('#noteIn').val();
        $('#journalArea').append(text + "<br><br>");
        $('#noteIn').val("");
        $("#journalArea").scrollTop($("#journalArea")[0].scrollHeight);
        }
    }                       
);

function journalTest() {
       $('#journalArea').append("Dies ist ein Test" + "<br><br>");
}

