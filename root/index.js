// Write Javascript code!
console.log("hello world!");
var story1 = new Story();

initiate();

var container = document.getElementById("container");
var resultContainer = document.getElementById("resultContainer");

for(var i = 0; i < story1.getWordList().length; i++) {
    container.append(createUIElement("P", "label" + i, story1.getWordIndex(i).wordType));
    container.append(createUIElement("input", "input" + i, ""));
    container.append(document.createElement("br"));
}
var submit = document.getElementById("submit");
submit.onclick = function(){
    var clean = true;
    for(var j = 0; j < story1.getWordList().length; j++){
        if(document.getElementById("input" + j).value != ""){
            story1.setWordValue(j, document.getElementById("input" + j).value);
        }else{
            clean = false;
        }
    }
    if(clean){
        resultContainer.append(createUIElement("P", "story", story1.getStory()));
    }else{
        alert("missing values");
    }
};