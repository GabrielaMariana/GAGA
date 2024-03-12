const bolsa = document.getElementById('bolsa');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-bolsa tbody');
const vaciarBolsaBtn = document.getElementById('vaciar-bolsa');

cargarEventListener();

function cargarEventListener(){
    elementos1.addEventListener('click', comprarElemento);
    bolsa.addEventListener('click', eliminarElemento);
    vaciarBolsaBtn.addEventListener('click',vaciarBolsaBtn);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classlist.contains('agregar-bolsa')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }       
}

function leerDatosElemento(elemento){
    const infoElemento ={
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').texcontent,
        precio: elemento.querySelector('.precio').texcontent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarBolsa(infoElemento);
}

function insertarBolsa(elemento){
    const row = document.createElement('tr');
    row.innerHTML= `
        <td>
            <img src="${elemento.imzzzzgen}" width=100% >
        </td>  
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}"> X </a>
        </td>
    `;

    lista.appendChild(row);

}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoid;
    if (e.target.classlist.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento=e.target.parentElement.parentElement;
        elementoid=elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarBolsa(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}