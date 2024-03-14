var mouseX;
var intervalVar;

function mouseEnterFunc(e){
    const curTableLi = e.currentTarget;
    const currentTableLiRect = curTableLi.getBoundingClientRect();
    if(e.currentTarget.scrollWidth > e.currentTarget.clientWidth) intervalVar = window.setInterval(()=>{
        if(mouseX - currentTableLiRect.left < 50) curTableLi.scrollLeft -= 1;
        else if(currentTableLiRect.width - (mouseX - currentTableLiRect.left) < 50) curTableLi.scrollLeft += 1;
    }, 5)
}

export function TableDiv(props){
    return <div className="tableContainer" style={props.style} dir={props.dir}>
        <table>{props.children}</table>
    </div>;
}

export function TableLI(props){
    return <li
        className="tableContainer"
        dir={props.dir}
        onMouseMove={(e)=>{mouseX = e.clientX}}
        onMouseEnter={mouseEnterFunc}
        onMouseLeave={()=>{if(intervalVar) window.clearInterval(intervalVar)}}
    >
        <table style={props.style}>{props.children}</table>
    </li>;
}