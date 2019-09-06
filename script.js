// window.onload = window.onresize = function() {
//     // var canvas = document.getElementById('canvas');
//     canvas.width = window.innerWidth * 0.8;
//     canvas.height = window.innerHeight * 0.8;
// }window.onload = window.onresize = function() {
//     // var canvas = document.getElementById('canvas');
//     canvas.width = window.innerWidth * 0.8;
//     canvas.height = window.innerHeight * 0.8;
// }
function drawLine(context, p1, p2) {
  context.beginPath();

  context.moveTo(p1.x, p1.y);

  context.lineTo(p2.x, p2.y);
//   context.moveTo(p1.x+50, p1.y);

//   context.lineTo(p2.x+50, p2.y);

  context.stroke();
}


function project(threep) {
    //return 2dp

}

const draw = (p1)=>{
    ctx.beginPath();
    // ctx.rect(p1.x, p1.y, p1.x+50, p1.y+50);
    ctx.stroke();
}

function rotate(threep, xdegree, ydegree, zdegree) {
  // return 3dp
}

// var vertices = [[],[]];

// var edges =[[],[]]

var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
var context = canvas.getContext("2d");
var ctx = context
// let [x1,x2,x3,x4] = [20,40,40,20]
// let [y1,y2,y3,y4] = [20,20,40,40]
///

//
ctx.fillStyle = "#ff0000";
let p1 = {
    x:20,
    y:20
}


//acts like center
const width  = 100

var points = [[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1],[-1,-1,1],[1,-1,1],[1,-1,-1],[-1,-1,-1]]
// points = [[]]
var lines = [[0,4],[0,3],[0,1],[1,5],[4,5],[1,2],[6,5],[6,2],[6,7],[3,2],[3,7],[4,7]]
points =  points.map(each=>each.map(child=>child*width))
var faces = [[0,1,5,4],[0,1,2,3],[5,1,2,6],[6,2,3,7],[3,0,4,7],[4,5,6,7]]

function rotate(angleX, angleY) {
 
    var sinX = Math.sin(angleX);
    var cosX = Math.cos(angleX);

    var sinY = Math.sin(angleY);
    var cosY = Math.cos(angleY);
    points.forEach(function (point) {
        let x = point[0];
        let y = point[1];
        let z = point[2];
        //rotating around y axis
        if(angleX){
            point[0] = x * cosX - z * sinX;
            point[2] = z * cosX + x * sinX;
        }
        //rotating around x axis
        else{
        //rotate along x direction and y remains constant
        
        //use updated z 
        // z = point[2];
        //rotate along y direction and x remains constant
        point[1] = y * cosY - z * sinY;
        point[2] = z * cosY + y * sinY;
        }
    });

}


function fillCube(x,y,clr){
    let [x1,x2,x3,x4] = x
    let [y1,y2,y3,y4]  = y
    context.beginPath();
    context.lineWidth = 1;
    // context.strokeStyle = "rgba(135,206,235, 0.5)";

context.moveTo(x1,y1); //go to first point
context.lineTo(x2,y2); //draw to second point
context.lineTo(x3,y3); //draw to third point
context.lineTo(x4,y4);
// context.lineTo(x1,y1) //draw to last point
context.closePath();  //draw to first point
// context.fill(); 
ctx.fillStyle = "rgba(135,206,235, 0.5)";
context.fill()
context.stroke()
}
// let colors = [1,1,1,1,1,1].map((dummy)=>'#'+Math.floor(Math.random()*16777215).toString(16))
// let indexer = 0
function drawCube() {
    //save current state of canvas so we can clear previous 
    ctx.save();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = "#000000";
    ctx.beginPath();


    faces.forEach((face)=>{
        let x = face.map((each)=>points[each][0])
        let y = face.map((each)=>points[each][1])
        // indexer = (indexer + 1) % 6
        fillCube(x,y,'#00ff00')
    })
    // lines.forEach((line)=>{
    //     let p = {x:points[line[0]][0],y:points[line[0]][1]}
    //     let q = {x:points[line[1]][0],y:points[line[1]][1]}
    //     drawLine(ctx,p,q)

    // })

    

    ctx.restore();
}


drawCube()
document.addEventListener("keydown", event => {
    
    //x press -x
    if(event.keyCode === 88){
        rotate(12*Math.PI/180,0)
        drawCube()
}
//y - press y
else if(event.keyCode === 89){
        rotate(0,12*Math.PI/180)
        drawCube()
}

//negative x - press z
else if(event.keyCode === 90){
    rotate(-12*Math.PI/180,0)
    drawCube()
}
//negative y  - press w
else if(event.keyCode === 87){
    rotate(0,-12*Math.PI/180)
    drawCube()
}

    // do something
  });


 

var x = null;
var y = null;
var clicked = false
var startTime;
var endTime;
document.addEventListener('mousedown', (e)=>{ 
    clicked = true;
    origX = e.pageX
    origY = e.pageY
    startTime = (new Date()).getMilliseconds()
    console.log('c')
});
document.addEventListener('mouseup', async()=>{ 

    if(!clicked) return;
    clicked = false;
    endTime = (new Date()).getMilliseconds()
let speedX = (Math.abs(origX - x)/(endTime-startTime))*100
let speedY = (Math.abs(origY - y)/(endTime-startTime))*100




if(origX>x){
    //going left

    // let speed
    let looping = setInterval(()=>{
        // while(1){
            // speed = 
            console.log(speedX)
            let temp  = speedX - (1/100)*speedX
            speedX = (temp> 0 &&temp<speedX) ? temp:speedX
            // console.log(parseFloat(speed).toFixed(3)) 
            // i = i + 1
            // console.log(speed)
            rotate(0.30*speedX*Math.PI/180,0)        // z = point[2];
            drawCube()
            if(parseFloat(speedX).toFixed(1) == 0)
            clearInterval(looping)
            // if(i>10000)
            // 22
        // }
    },1000/speedX)


}
else if (origY < y){

    let looping = setInterval(()=>{
            console.log(speedY)
            let temp = speedY - (1/100)*speedY
            speedY = (temp > 0  && temp<speedY)?temp:speedY
            
            // console.log(speed)
            rotate(0,0.3*speedY*Math.PI/180)        // z = point[2];
            drawCube()
            if(parseFloat(speedY).toFixed(1) == 0)
            clearInterval(looping)
         
    },1000/speedY)
}

//spin right
if(origX<x){
    //going left

    // let speed
    let looping = setInterval(()=>{
        // while(1){
            // speed = 
            speedX = speedX - (1/100)*speedX
            // console.log(parseFloat(speed).toFixed(3)) 
            // i = i + 1
            // console.log(speed)
            rotate(-0.30*speedX*Math.PI/180,0)        // z = point[2];
            drawCube()
            if(parseFloat(speedX).toFixed(1) == 0)
            clearInterval(looping)
            // if(i>10000)
            // 22
        // }
    },1000/speedX)



}
//spin down
else if (origY > y){

    let looping = setInterval(()=>{
       
            speedY = speedY - (1/100)*speedY
            
            // console.log(speed)
            rotate(0,-0.3*speedY*Math.PI/180)        // z = point[2];
            drawCube()
            if(parseFloat(speedY).toFixed(1) == 0)
            clearInterval(looping)
         
    },1000/speedY)
}
//using speed rotate

// speed = 0
startTime = 0
endTime = 0
});


document.addEventListener('mousemove', onMouseUpdate, false);
// document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
    if(clicked){
        console.log('moving')
        x = e.pageX;
        y = e.pageY;
        // console.log(x, y);
    }
 
}


