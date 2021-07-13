function yesClick(){
    alert("Anh biết mà. Anh cũng yêu em<3!!")
}
function noClick(){
    let a =Math.floor(Math.random()*window.innerHeight );
    let b =Math.floor(Math.random()*window.innerHeight );
    document.getElementById('no').style.left= a + "px";
    document.getElementById('no').style.top= b + 'px';
}