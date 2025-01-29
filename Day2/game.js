console.log("welcome to game ")
console.log("Reached the destination by Choosing Correct direction and distance");
const x = Math.floor(Math.random() * 21) - 10;
const y = Math.floor(Math.random() * 21) - 10;



console.log("your target : x : ",x,"  y: ",y);
console.log("choose direction : n for north , e for east , s for south and w for west \n -- type exit for exit from the game \n\n");
let xaxis=0,yaxis=0;
gameOn();


function gameOn(){
    console.log("Your Location : x:",xaxis," y:",yaxis);
    console.log("target Location : x:",x," y:",y);
    if(xaxis===x&&yaxis===y){
        console.log("You reached the destionation!!!");
        return ;
    }
    let direction =prompt("enter the direction : ");
    if(direction==='exit'){
        console.log("you have leaved from the game");
        return ;
    }
    if(direction==='n'){
        north();
    }else if(direction==='e'){
         east();
    }else if(direction==='s'){
        south();
    }else if(direction==='w'){
        west();
    }else{
        console.log("invalid direction type choose only in n,e,s,w");
        return ;
    }
}
function north(){
     let t=parseInt(prompt("enter the north direction :"));
     xaxis+=t;
      console.log("\n");
     gameOn();
    
}
function east(){
    let t=parseInt(prompt("enter the east direction :"));
     yaxis+=t;
      console.log("\n");
     gameOn(); 
}
function south(){
    let t=parseInt(prompt("enter the south direction :"));
     xaxis-=t;
      console.log("\n");
     gameOn();
}
function west(){
    let t=parseInt(prompt("enter the west direction :"));
     xaxis-=t;
      console.log("\n");
     gameOn();
}