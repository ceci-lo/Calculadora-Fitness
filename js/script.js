
let Edad = document.getElementById("mAmoung");
let years = document.getElementById("mTerm");
let interest = document.getElementById("iRate");

let radioRepayment = document.getElementById("repayment");
let radioInterestOnly = document.getElementById("InterestOnly");

let calculate = document.getElementById("btn");


calculate.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
if (validacionCampos()){
  let month = years.value * 12;
  let TIN = interest.value / 12;
  let TINt = TIN / 100;
  let multiplier =
    (Math.pow(1 + TINt, month) * TINt) / (Math.pow(1 + TINt, month) - 1);
  let total = capitalPrestado.value * multiplier;

  let repayment = total;
  let interestOnly = (repayment * month - capitalPrestado.value) / 360;

  mostrarAviso();
  if (radioRepayment.checked) {
   
    crearTarjetaResultado(repayment, interestOnly);
  } else if (radioInterestOnly.checked) {
    
    crearTarjetaResultado(repayment, interestOnly);
  }
}
});

function mostrarAviso() {
  let oldTitle = document.getElementsByClassName("container2__results_title")[0];
  let oldP = document.getElementsByClassName("container2__results_p")[0];
  let img = document.getElementsByClassName("container2__results__img");
  for(let i  of img){ 
  
  if (i[0] = 'container2__results__img') {

      i.remove();
    } else {
      continue;
    }
  }
  oldTitle.innerText = "Your results";
  oldP.innerText =
    'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.';

  //Estilos
  // Titulo

  oldTitle.style.textAlign = "left";
  oldP.style.textAlign = "left";
  oldP.style.padding = "0px 3px";

  // screen 1024px
  if(innerWidth > 1023){
  
    oldTitle.style.padding = "10px 15px";
    oldTitle.style.fontSize = "22px";
    oldP.style.fontSize = "14px";
    oldP.style.padding = "0px 15px";
  }
}

function crearTarjetaResultado(repayment, interest) {
  if(!document.getElementsByClassName("container_tarjeta")[0]){
  let padre = document.getElementsByClassName("container2__results_p")[0]
    .parentNode;

  let nuevoDiv = document.createElement("div");
  let divAnterior = document.getElementsByClassName("container2__results_p")[0];

  padre.insertBefore(nuevoDiv, divAnterior.nextSibling);
  nuevoDiv.className = "container_tarjeta";

  let p1 = document.createElement("p");
  p1.innerText = "Your monthly repayments";
  p1.style.padding = "5px 0px";
  p1.style.textAlign= "Left";
//screen 1024
if(innerWidth > 1023){
  p1.style.fontSize = "14px";

}
  let repaymentP = document.createElement("p");
  let interestP = document.createElement("p");
  let hr = document.createElement("hr");

  let p2 = document.createElement("p");
  p2.innerText = "Total you'll repay over the term";
  p2.style.padding = "10px 0px 5px";
  p2.style.textAlign= "Left";
//screen 1024
if(innerWidth > 1023){
  p2.style.marginTop = "10px";
  p2.style.fontSize = "14px";
}


  let containerTarjeta =
    document.getElementsByClassName("container_tarjeta")[0];
  containerTarjeta.style.backgroundColor = "rgb(23 41 50)"

  containerTarjeta.style.padding= "10px";
  containerTarjeta.style.marginTop= "15px";
  containerTarjeta.style.borderTop= "solid hsl(61, 70%, 52%)";
  containerTarjeta.style.borderRadius= "5px";
  containerTarjeta.style.textAlign= "Left";
//screen 1024 
  if(innerWidth > 1023){
    containerTarjeta.style.marginTop= "25px";
    containerTarjeta.style.marginLeft= "15px";
    containerTarjeta.style.marginRight= "20px";
    containerTarjeta.style.padding= "15px";

  }
  
  containerTarjeta.appendChild(p1);
  //Estilos del resultado
  repaymentP.innerText = repayment.toLocaleString('en');
  repaymentP.className = "repaymentP"
  repaymentP.style.padding = "5px 0px";
  repaymentP.style.fontSize = "45px";
  repaymentP.style.color = "hsl(61, 70%, 52%)";
  repaymentP.style.textAlign= "Left";
  
  interestP.style.fontSize = "20px";
  interestP.className = "interestP"
  interestP.innerText = interest.toLocaleString('en-DE');
  interestP.style.textAlign= "Left";
  interestP.style.color= "white";
  interestP.style.padding = "5px 0px";

 

  containerTarjeta.appendChild(repaymentP); 
  containerTarjeta.appendChild(hr);
  containerTarjeta.appendChild(p2);
 
  containerTarjeta.appendChild(interestP);
  } else {
    let tomarRepaymentP = document.getElementsByClassName("repaymentP")[0]
    let tomarInterestP = document.getElementsByClassName("interestP")[0]

    if(tomarInterestP && tomarRepaymentP){
      tomarInterestP.innerText = interest.toLocaleString('en-DE');;
      tomarRepaymentP.innerText = repayment.toLocaleString('en-DE');;


    }

  }
}


function limpiarDatos() {
  capitalPrestado.value = "";
  years.value = "";
  interest.value = "";
  radioRepayment.checked = false;
  radioInterestOnly.checked = false;

  let campoRequerido = document.getElementsByClassName("campoRequerido");

  if (campoRequerido.length > 0) {
    let span = document.getElementsByClassName("spanUsd")[0];
    let mTerm = document.getElementById("mTerm");
    let spanmTerm = document.getElementsByClassName("spanmTerm");
    let iRate = document.getElementById("iRate");
    let spanPercent = document.getElementsByClassName("spanPercent");
    for (let i = 0; i <= campoRequerido.length; i++) {
      if (campoRequerido[i].className == "campoRequerido") {
        campoRequerido[i].remove();
        //se cambia el estilo al que debe tener por defecto
        //1er input
        capitalPrestado.style.borderColor = "hsl(200, 24%, 40%)";
        capitalPrestado.style.color = "hsl(200, 24%, 40%)";

        span.style.backgroundColor = "hsl(201deg 62.37% 91.63%)";
        span.style.color = "hsl(200, 24%, 40%)";

        //2do input
        mTerm.style.borderColor = "hsl(200, 24%, 40%)";
        mTerm.style.color = "hsl(200, 24%, 40%)";

        spanmTerm[0].style.backgroundColor = "hsl(201deg 62.37% 91.63%)";
        spanmTerm[0].style.color = "hsl(200, 24%, 40%)";

        //3er input
        iRate.style.borderColor = "hsl(200, 24%, 40%)";
        iRate.style.color = "hsl(200, 24%, 40%)";

        spanPercent[0].style.backgroundColor = "hsl(201deg 62.37% 91.63%)";
        spanPercent[0].style.color = "hsl(200, 24%, 40%)";
      }
    }

    if (
      campoRequerido.length > 0 &&
      campoRequerido[0].className == "campoRequerido"
    ) {
      campoRequerido[0].remove();
    }
  }
}

function validacionCampos() {
  let flag = true;  
  if(capitalPrestado.value == ""){
    let padre = document.getElementsByTagName("form")[0];
    let campoRequerido = document.createElement("p");
    campoRequerido.innerText = "This field is required";
    campoRequerido.className = "campoRequerido";

    let divAnterior = document.getElementsByClassName(
      "container1__calculator__form_twoInputs"
    )[0];
  
    padre.insertBefore(campoRequerido, divAnterior);
    campoRequerido.style.color = "hsl(4, 69%, 50%)";
    campoRequerido.style.fontSize = "13px";
    campoRequerido.style.marginBottom = "4px";

    capitalPrestado.style.borderColor = "hsl(4, 69%, 50%)";
    capitalPrestado.style.color = "hsl(4, 69%, 50%)";

    let span = document.getElementsByClassName('spanUsd')[0];
    span.style.backgroundColor = "hsl(4, 69%, 50%)";
    span.style.color = "white";
    flag = false; 
  }

  if(years.value == ""){
    let padre = document.getElementsByClassName("container1__calculator__form_twoInput_one")[0];
    let campoRequerido = document.createElement("p");
    campoRequerido.innerText = "This field is required";
    campoRequerido.className = "campoRequerido";
   
    padre.appendChild(campoRequerido);
    campoRequerido.style.color = "hsl(4, 69%, 50%)";
    campoRequerido.style.fontSize = "13px";
    campoRequerido.style.marginBottom = "4px";

   years.style.borderColor = "hsl(4, 69%, 50%)";
    years.style.color = "hsl(4, 69%, 50%)";

    let span = document.getElementsByClassName('spanmTerm')[0];
    span.style.backgroundColor = "hsl(4, 69%, 50%)";
    span.style.color = "white";
    flag = false; 
  }



  if(interest.value == ""){
    let padre = document.getElementsByClassName("container1__calculator__form_twoInput_two")[0];
    let campoRequerido = document.createElement("p");
    campoRequerido.innerText = "This field is required";
    campoRequerido.className = "campoRequerido";

   padre.appendChild(campoRequerido);
    campoRequerido.style.color = "hsl(4, 69%, 50%)";
    campoRequerido.style.fontSize = "13px";
    campoRequerido.style.marginBottom = "4px";

    interest.style.borderColor = "hsl(4, 69%, 50%)";
    interest.style.color = "hsl(4, 69%, 50%)";

    let span = document.getElementsByClassName('spanPercent')[0];
   span.style.backgroundColor = "hsl(4, 69%, 50%)";
   span.style.color = "white";
   flag = false; 
  }
  return flag;
}



    
    
 