const btnPositivo = document.getElementById("evento_positivo");
const btnNegativo = document.getElementById("evento_negativo");
const btnEncerrar = document.getElementById("encerrar_evento");
const nodeEventos = document.getElementById("eventos");
const inputEvento = document.getElementById("titulo_evento");

//parse eventos do local storage
const eventos=[];

function toggle(...elementos){
    for(elemento of elementos){
        if (elemento.style.display === "none") {
            elemento.style.display = "inline-block";
        } else {
            elemento.style.display = "none";
        }
    }
}


function add_evento(event){
    const evento = {
        titulo:inputEvento.value,
        inicio: "10:00",
        fim:"11:00",
        tipo:event.target.id,
        duracao:"1"
    }
    const elemento = document.createElement("div");    
    elemento.classList.add("evento");

    for([chave,valor] of Object.entries(evento)){
        const no = document.createElement("span");
        no.classList.add(chave);
        no.innerText = valor;
        elemento.appendChild(no);
        console.log(`chave: ${chave}, valor: ${valor}`);
    }
    
    eventos.push(evento);
    nodeEventos.appendChild(elemento);
    toggle(btnNegativo, btnEncerrar, btnPositivo);
}

btnNegativo.addEventListener("click",add_evento);
btnPositivo.addEventListener("click",add_evento);
btnEncerrar.addEventListener("click",(event)=>{
    toggle(btnNegativo, btnEncerrar, btnPositivo);
});

toggle(btnEncerrar);