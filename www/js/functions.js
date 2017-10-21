new Clipboard('.btn');
function setFocusTo(objname) {
    var x = objname;
    document.getElementById(x).focus();
}

function appendtext(tFormat){
    var otext = document.getElementById('otext').value;
    otext = otext.trim();
    if (tFormat == "bold") {
            otext = " *<b>" + otext + "</b>*";
}
    if (tFormat == "italic") {
            otext = " _<i>" + otext + "</i>_";
        }
    if (tFormat == "strike") {
            otext = " ~<strike>" + otext + "</strike>~";
        }
    if (tFormat == "highlighted") {
            otext = otext.split(' ').join('.');
            otext = " <a>"+otext + ".tt </a>";
        }
    var ftext = document.getElementById('ftext');
    ftext.innerHTML += otext +" ";
    document.getElementById('otext').value = "";
    setFocusTo('otext');
}
function appendreadmore() {
    var i=0;
    var spacevar="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var ftext = document.getElementById('ftext');
    for (i=0; i < 7; i++) { 
    spacevar += spacevar;
    }
    //for (i=0; i < 10; i++) { 
    ftext.innerHTML += spacevar;
    //}
    setFocusTo('otext');
}
function appendnewline() {
    var ftext = document.getElementById('ftext');
    ftext.innerHTML += "<br>";
    setFocusTo('otext');
}
function resettext() {
    document.getElementById('ftext').innerHTML = "";
    setFocusTo('otext');
}