var delayHolder: number;

export function showLoadingScreen(){
  window.clearTimeout(delayHolder);
  document.getElementById("loading")!.classList.remove("removeLoading");
  document.getElementById("loadingMainText")!.textContent = "Loading";
  document.getElementById("loading")!.style.display = "flex";
}

export function changeLoadingText(newText: string){
  document.getElementById("root")!.scrollTo(0,document.body.scrollHeight); 
  document.getElementById("loadingMainText")!.textContent = newText;
}

export function fadeLoadingToInsv(){
  document.getElementById("root")!.scrollTo(0,1);
  delayHolder = window.setTimeout(()=>{
    document.getElementById("loading")!.className = "removeLoading";
    delayHolder = window.setTimeout(()=>{
      document.getElementById("loading")!.classList.remove("removeLoading");
      document.getElementById("loading")!.style.display = "none";
    }, 1000)
  }, 500)
}
