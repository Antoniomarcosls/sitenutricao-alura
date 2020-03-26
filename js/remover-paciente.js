var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  //var alvoEvento = event.target;
  //var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover

  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);

  

  //paiDoAlvo.remove();

})

/*pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick", function(){
    console.log("Fui clicado com um duplo click")
    this.remove()
  })
});*/