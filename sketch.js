var canvas,Bbox,Rbox,Obox,Gbox,jbox;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    
    Bbox = createSprite(100,height-20,170,30);
    Bbox.shapeColor="blue"
    Rbox = createSprite(280,height-20,170,30);
    Rbox.shapeColor="red"
    Obox = createSprite(460,height-20,170,30); 
    Obox.shapeColor="orange"
    Gbox = createSprite(640,height-20,170,30);
    Gbox.shapeColor="green"
    jbox = createSprite(30,30,50,50)
    jbox.velocityY = 5;
    //create 4 different surfaces
    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
    if(Rbox.isTouching(jbox)){
        jbox.shapecolor = "red"
    }
    if(Bbox.isTouching(jbox)){
        jbox.shapecolor = "blue"
    }
    if(Gbox.isTouching(jbox)){
        jbox.shapecolor = "green"
    }
    if(Obox.isTouching(jbox)){
        jbox.shapecolor = "orange"
        jbox.velocityY = 0;
    }
    jbox.bounceOff(Rbox);
    jbox.bounceOff(Bbox);
    jbox.bounceOff(Obox);
    jbox.bounceOff(Gbox);
    
    jbox.bounceOff(edges)
    drawSprites()
    //add condition to check if box touching surface and make it box
}
