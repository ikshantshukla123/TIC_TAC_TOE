let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#btn");
let winSound = new Audio("win.wav");
let turno = true;


let Wpattern = [
    [0,1,2],
    [6,7,8],
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno)
       { box.innerText="O";
        box.disabled = true;
        turno = false;
       
       }
       else{
        box.innerText="X";
        box.disabled = true;
        turno = true;
       
       }
      
      
       checkWinner();
    } )


});

let disableb = () =>{
    for(let box of boxes)
    {
       box.disabled = true;
    }
};
const checkWinner = () => {
    for(let pattern of Wpattern)
    {
       
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
    
        if(box1 != "" && box2 != "" && box3 != "")
        {
            if(box1 === box2 && box2===box3)
            {
                document.getElementById("p1").innerHTML =` Winner is ${box1}`;
                winSound.play();
                disableb();
            }
        }
    }};
    
    let enable = () =>{
        winSound.pause();          // Pauses the sound
        winSound.currentTime = 0;
        turno = true;
        document.getElementById("p1").innerHTML =` TIC-TAC-TOE`;
       
        for(let box of boxes)
            {
               box.disabled = false;
                box.innerText ="";
            }
    };
 reset.addEventListener("click",enable);