let linkForHead = document.createElement('script');
linkForHead.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
(document.getElementsByTagName('head')[0]).appendChild(linkForHead);
linkForHead = document.createElement('link');
linkForHead.rel = "stylesheet";
linkForHead.href = "../main.css";
(document.getElementsByTagName('head')[0]).appendChild(linkForHead);

var boolForUB = true;
window.onload = () =>{
    //$("head").append('<script src="../prism.js"></script><link href="../prism.css" rel="stylesheet" />');
    $("head").append('\
    <meta name="viewport" content="width=device-width, initial-scale=1">\
    <link href="../fontsAndPics/logo.png" rel="icon">\
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>\
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>\
    ');
    $(document.getElementsByTagName('h1')[0]).after("<h4>Contents:</h4><ol id='reference'></ol>");
    $("html").append("<div id='imgViewer'></div>");
    $("h2").each(function(){
        $($("h4+ol")[0]).append("<li><a href='#"+$(this).attr('id')+"'>"+$(this).text()+"</a></li>");
    });
    $("h1").after("<div id=\"date\"><b>Last Edit:</b> " + new Date(document.lastModified) + "</div>");
    $($('body')[0]).append('<footer><p><a target="_blank" href="../index.html">Back To Home Page</a></p></footer>')
    $(".content a").each(function(){
        $(this).attr("target","_blank");
    });
    $('li').has('ol, ul').each(function(){
        if($(this).parents('.Opened').length||$(this).hasClass('Opened')){
            $(this).children('ol, ul').before(" <img class='icon' src = '../fontsAndPics/chevron-circle-down.svg'/>");
        }
        else{
            $(this).children('ol, ul').before(" <img class='icon' src = '../fontsAndPics/chevron-circle-right.svg'/>");
            $(this).children('ol, ul').slideUp();
        }
    });
    $('img[class]').click(function(){
        if($(this).attr('src') == '../fontsAndPics/chevron-circle-down.svg'){
            $(this).siblings('ol, ul').slideUp();
            $(this).attr('src','../fontsAndPics/chevron-circle-right.svg');
        }
        else{
            $(this).siblings('ol, ul').slideDown();
            $(this).attr('src','../fontsAndPics/chevron-circle-down.svg');
        }
    });
    $('h2').click(function(){
        $(this).next().slideToggle();
    });
    $('h3').click(function(){
        $(this).nextUntil('h3').slideToggle();
    });
    $('[class~=Coloured] h3').each(function(){
        $(this).nextUntil('h3').addBack().wrapAll('<div class="backgroundFormat"></div>');
    });
    $('.backgroundFormat').each(function(){
        $(this).css({'background-color':  `rgb(${Math.floor(Math.random() * 70) + 120},${Math.floor(Math.random() *  70) + 120},${Math.floor(Math.random() * 70) + 120})`});
    });
    $("body").append("<div id='upButton'>&#11165;</div>");
    window.onscroll = function(){
        if(boolForUB){
            if(this.scrollY>1000){$("#upButton").fadeIn(200);}
            else{$("#upButton").fadeOut(200);}
        }
    };
    $("#upButton").click(() => {window.scrollTo(0,0)})
    $(".mathStuff, img:not(.icon)").click(viewImg);
    $("#imgViewer").click(removeViewer);
}

function viewImg(el){
    let cloneImg;
    $("#imgViewer").css({"width":"100%","height":"100%","background-color":"rgba(0,0,0,0.8)","padding-bottom":"20px","padding-top":"20px"});
    $("#upButton").css("display","none");
    if(el.target.tagName =="IMG"){
        cloneImg = $(el.target).clone();
        cloneImg.removeAttr("style");
        console.log($(el.target).closest(".mathStuff").length);
    }
    else if($(el.target).closest(".mathStuff").length>0){
        cloneImg = $($(el.target).closest(".mathStuff")[0]).clone();
    }
    $("#imgViewer").html(cloneImg);
    $("body").css("overflow","hidden");
    boolForUB = false;
}

function removeViewer(){
    $("#imgViewer").css({"width":"0","height":"0","padding-bottom":"0px","padding-top":"0px"});
    $("#upButton").css("display","none");
    $("#upButton").css("display","fixed");
    $("body").css("overflow","visible");
    boolForUB = true;
}