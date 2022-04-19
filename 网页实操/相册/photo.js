function showPic(whichpic){
   
    var source=whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
   
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}