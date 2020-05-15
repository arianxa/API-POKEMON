var contador=0;
var prueba=0;
var Vidapokemon1=0;
var Vidapokemon2=0;
var Ataquepokemon1=0
var Ataquepokemon2=0
var velocidad1=0;
var velocidad2=0;
var p=0;
var total=0;
window.onload = function () {
    cargarDIV();

   

}

function cargarDIV() {//Vacias el div y llamas al metodo de rellenar

    let divGlobal = document.querySelector('#div-pokemon')
    divGlobal.innerText = "";
    CargarAPI();
}




function CargarAPI() {
    console.log("hola")
    //Comprovacion para que el contador no sea negativo 
    if(contador<=0){
        contador=0;
    }
    else{
        
        contador=contador-20;
    }
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset='+contador)
        .then(response => response.json())
        .then(function (pokemonS) {
            pokemonS.results.forEach(function (pokemon) {
                InformacionPokemon(pokemon);
                //  console.log(pokemon)
               
               
            })
            
        })
}
function InformacionPokemon(pokemon) {
    let url = pokemon.url 
    fetch(url)
        .then(response => response.json())
        .then(function (Datos) {
            renderPokemon(Datos)

           //  console.log(Datos)
        })
}



function renderPokemon(Datos) {
    let divGlobal = document.getElementById('div-pokemon');
    var pokemon1 = document.getElementById('pokemon1');
    let barra = document.getElementsByClassName('barra');
    let pokemon2 = document.getElementById('pokemon2');
    let barra2 = document.getElementsByClassName('barra2');
    let butonPelear= document.getElementById('butonPelear');

    let DivPokemon = document.createElement("div")
    DivPokemon.setAttribute("id", "Div1");
    let DivFoto = document.createElement("div")
    DivFoto.setAttribute("id", "Div2");
    let prueb = document.createElement("div")
    prueb.setAttribute("id", "Div3");
    let prueb2 = document.createElement("div")
    prueb2.setAttribute("id", "Div4");



    
    let NombrePokemon = document.createElement('h4')
    NombrePokemon.setAttribute("id","NombrePokemon");
    NombrePokemon.innerText = Datos.name
    let ImagenPokemon = document.createElement('img')
    ImagenPokemon.setAttribute("id", "ImgPoke")
    ImagenPokemon.srcset = Datos.sprites.front_default

    let BotonSel = document.createElement('button')
    BotonSel.innerText = "Seleccionar"
    BotonSel.setAttribute("id","p")
    ImagenPokemon.setAttribute("data-toggle","modal");
    ImagenPokemon.setAttribute("data-ataque", Datos.stats[4].base_stat);
    ImagenPokemon.setAttribute("data-vida",  Datos.stats[5].base_stat);

    ImagenPokemon.setAttribute("data-target","#exampleModalLong");
    ImagenPokemon.onclick = function(){
        $('#exampleModalLong').on('show.bs.modal', function (event) {
            var myVal = $(event.relatedTarget).data('ataque');
            var myVal2 = $(event.relatedTarget).data('vida');

            $(this).find(".modal-body").text("Ataque: " + myVal +" " +"Vida:" +myVal2);
          });

    } 
console.log(Datos)
        BotonSel.onclick=function(){

            
            //! $('#pokemon1:empty').length 
            if(prueba ==0  ){

                prueba++;
                let NPoke = document.createElement('h4');
                NPoke.innerText = Datos.name;
                let IPoke = document.createElement('img');
                IPoke.setAttribute("id", "ImgPoke");

                Ataquepokemon1=Datos.stats[4].base_stat;
                Vidapokemon1=Datos.stats[5].base_stat;
                velocidad1=Datos.stats[1].base_stat;
                
                //npoke.setAttribute('data-vida', ' Datos.stats[5].base_stat');
                
                //console.log(el.getAttribute('data-foo'));
                
                IPoke.srcset = Datos.sprites.front_default;
                prueb.append(NPoke,IPoke);
                pokemon1.appendChild(prueb);
                
             barra[0].setAttribute("style","width: "+Vidapokemon1+"%")

                
            }else if(prueba==1){
                
                let NPoke = document.createElement('h4');
                NPoke.innerText = Datos.name;
                let IPoke = document.createElement('img');
                IPoke.setAttribute("id", "ImgPoke");
                Ataquepokemon2=Datos.stats[4].base_stat;
                Vidapokemon2=Datos.stats[5].base_stat;
                velocidad2=Datos.stats[1].base_stat;



                IPoke.srcset = Datos.sprites.front_default;
                prueb2.append(NPoke,IPoke);
                pokemon2.appendChild(prueb2);
                prueba++;
          
                barra2[0].setAttribute("style","width: "+Vidapokemon2+"%")

                          
               
            }
            
        }

    
    //console.log(prueba1);

   // console.log(prueba2);

   
    DivPokemon.append(NombrePokemon);
    DivFoto.append(ImagenPokemon)
    DivPokemon.append(DivFoto, BotonSel)
    divGlobal.appendChild(DivPokemon);
    butonPelear.onclick = function(){
      //  p(prueba1,prueba2);

      if(velocidad1==velocidad2){
          
     
          total = Ataquepokemon1-Vidapokemon2;
            
        
        barra[0].setAttribute("style","width: "+total+"%")
        Vidapokemon2=total;
       // barra2[0].setAttribute("style","width: "+Vidapokemon2+"%")



      }
      else{

        var total2= Ataquepokemon2-Vidapokemon1;

        
        barra2[0].setAttribute("style","width: "+total2+"%")

      }


    };


   

}

function p (prueba1,prueba2){

    console.log(prueba1);
    console.log(prueba2);
}
function tr() {
    let divGlobal = document.querySelector('#div-pokemon')
    divGlobal.innerText = "";
    contador=20+contador;
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset='+contador)
    .then(response => response.json())
    .then(function (pokemonS) {
        pokemonS.results.forEach(function (pokemon) {
            InformacionPokemon(pokemon);
            // console.log(pokemon)
           
        })
    })






}











