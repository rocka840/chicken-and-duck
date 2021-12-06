$(start);

function start(){
    $("#btn").on("click",duck);
}

function duck(){
    //alert("hi");
    let myInputVal = $("#ducks").val();
    let newDiv =$("<div></div>");
    
    $("#enter").append(newDiv);

    if (document.getElementById("choose").value=="0"){
        newDiv.load(`showImages.php?duck=${myInputVal}`);
    } else if (document.getElementById("choose").value=="1"){
        newDiv.load(`showImages.php?chicken=${myInputVal}`);
    }


}