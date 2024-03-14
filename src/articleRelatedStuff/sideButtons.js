import $ from 'jquery';

export function sideB(name, clickFunc, imageSrc){
    return <div id={name} onClick={clickFunc}>
        <img src={imageSrc} alt=''/>
    </div>;
}

export function showSideB(name){
    $(name).fadeIn(200);
}

export function hideSideB(name){
    $(name).fadeOut(200);
}