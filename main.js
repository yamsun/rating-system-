const starts = document.querySelectorAll(".star");
const reset = document.querySelector("button");
const result = document.querySelector("#result")

let ratingValue = "0";

starts.forEach(i => {
    i.addEventListener("mouseover", (e)=>{
        // console.log(e.target);
        e.target.style.color="red"
    })
    i.addEventListener("mouseout", (e)=>{
        e.target.style.color="";
    })

    i.addEventListener("click", (e)=>{
        resetRating();
        e.target.style.backgroundColor="#bada55";
        e.target.style.color="red";
        // console.log("event target is")
        // console.log(e.target.id);
        ratingValue = e.target.id;
        showResult();
    })
});

const resetRating= ()=>{
    ratingValue="0"
    showResult();
    starts.forEach(i => {
        i.style.backgroundColor="";
    })
}

reset.addEventListener("click", ()=>{
    resetRating();
    result.innerHTML="not rated"   
});

const showResult = ()=>{
    result.innerHTML=`${ratingValue}/5`
}