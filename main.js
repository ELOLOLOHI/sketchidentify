function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}

function setup(){
canvas=createCanvas(1000,500);
background("pink");
canvas.position(255,200);
syth=window.speechSynthesis;
canvas.mouseReleased(classifyCanvas);
}

function draw(){
stroke("black");
strokeWeight(10);
if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    if(results){
        console.log(results);
        document.getElementById("name").innerHTML="Name: "+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100);
        utterThis=new SpeechSythesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
}

function clearCanvas(){
    background("pink");
}