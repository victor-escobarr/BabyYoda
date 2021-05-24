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


$("#boton6").on ("click", ()=>
  {
    console.log("click");
    
    $(".ojo").attr("class", "eyes");
    $("#izq").attr("id", "eyeleft");
    $("#der").attr("id", "eyeright");

    var elementos = $('<section id="sleep"><div id="upzeta"></div><div id="middlezeta"></div><div id="downzeta"></div><div id="uz2"></div><div id="mz2"></div><div id="dz2"></div><div id="bigz"></div><div id="granz"></div><div id="largez"></div></section>');
    $("#cuerpo").after(elementos);

});