const input_area=document.getElementsByTagName('input')[0];

const img_area=document.getElementsByTagName('img')[0];

let clickcount=0;


img_area.addEventListener('click',()=>{

    if (clickcount%2===0){
        clickone(); //unhide
    }
    else{
        clicktwo(); //hide 
    }
    clickcount++;
})

function clickone(){
    input_area.style.display="inline";
}

function clicktwo(){
    input_area.style.display="none";
}

