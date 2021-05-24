$(document).ready(function(){
    console.log("hola")
    $("#boton1").on("click",()=>{
        $("#cup").css("backgroundColor", "red");
    })
    $("#boton2").on("click",()=>{
        $("#cup").css("backgroundColor", "rgb(36, 16, 122)");
    })
    $("#boton3").on("click",()=>{
        $("#cup").css("backgroundColor", "gold");
    })
    $("#boton4").on("click",()=>{
        $("#cup").css("backgroundColor", "chocolate");
    })
});