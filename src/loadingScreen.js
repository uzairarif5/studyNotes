var delayHolder;
export function showLoadingScreen(){
    window.clearTimeout(delayHolder);
    document.getElementById("loading").classList.remove("loadingClass");
    document.getElementById("loadingMainText").textContent = "Loading";
    document.getElementById("loading").style.display = "flex";
}

export function changeLoadingText(newText){
    document.getElementById("main").scrollTo(0,document.body.scrollHeight); // for more loading
    document.getElementById("loadingMainText").textContent = newText;
}

export function fadeLoadingToInsv(){
    document.getElementById("main").scrollTo(0,1);
    delayHolder = window.setTimeout(()=>{
        document.getElementById("loading").className = "loadingClass";
        delayHolder = window.setTimeout(()=>{
            document.getElementById("loading").classList.remove("loadingClass");
            document.getElementById("loading").style.display = "none";
        }, 1000)
    }, 500)
}
