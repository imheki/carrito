// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBTN = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let carritoDeCompras = [];


cargarEventListener();
function cargarEventListener() {
    //Cuando agregas un curso carga
    listaCursos.addEventListener('click', agregarUnCurso)
}


function agregarUnCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito') ) {
        const leerCursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(leerCursoSeleccionado);
    }
}


//lee el contenido del html
console.log(leerDatosCurso);

function leerDatosCurso(curso) {
    // console.log(curso);


    //crear un objeto
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    // Verificar si existe en el objeto

    const existe = carritoDeCompras.some(curso => curso.id === infoCurso.id);
    if(existe) {
        const cursos = carritoDeCompras.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
        carritoDeCompras = [...curso]
    } else {      
    carritoDeCompras = [...carritoDeCompras, infoCurso]
    }
    console.log(existe);

    // agregar productos en carrito


    // console.log(carritoDeCompras);

    carritoHTML();
}


// Muestra carrito de compras en el HTML

function carritoHTML() {
// limpiar HTML
    limpiarHTML();
// recorrer el carrito a html
    carritoDeCompras.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}"width="100"  >
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a  href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;
    

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

}

// elimina los cursos del tbody

function limpiarHTML() {
    // carritoDeCompras.innerHTML = '';

    while(carritoDeCompras.firstChild) {
        carritoDeCompras.removeChild(carritoDeCompras.firstChild);
    }
}