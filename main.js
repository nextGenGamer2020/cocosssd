status1 = ""
objects = []

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    canvas = createCanvas(350,350)
    canvas.center()

}

function draw(){
    image(img, 0,0, 350,350)
    if(status1 != ""){
        for(i = 0;i< objects.length;i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000")
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label+" "+percent + "%", objects[i].x, objects[i].y)
            nofill()
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        fill("#ff00e6")
        text("Dog", 40,50)
        noFill()
        stroke("black")
        rect(30,40,150,300)
    
        fill("#0059ff")
        text("Cat", 200,50)
        noFill()
        stroke("black")
        rect(180,40,150,300)
    
        fill("#000000")
        text("Bowl", 185,260)
        noFill()
        stroke("black")
        rect(150,245,70,100)
    }

}




function modelLoaded(){
    console.log("Model Loaded!")
    status1 = true
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error)

    }
    else{
        console.log(results)
        object = results
    }
    object = results
}


