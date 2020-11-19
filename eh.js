idInterwalua = window.setInterval(stareAnimuj, 4000);
function stareAnimuj(){
    document.getElementById("haha").style = "display: none;"
    document.getElementById("yes").style = "display: block;"
    idInterwalu = window.setInterval(animuj, 1000);
}
function animuj(){
    document.getElementById("yes").style = "display: none;"
    document.getElementById("nie").style = "display: block;"
}