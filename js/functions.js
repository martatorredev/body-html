/* ARRAYS DROPDOWN Y ZONAS DE SELECTOR GRÁFICO */
var dropdowns = document.getElementsByClassName("dr");
var dropdowns2 = document.getElementsByClassName("drb");
var zonas = document.getElementById("zonas-patologias").getElementsByTagName("li");
var zonasTwo = document.getElementById("zonas-patologias2").getElementsByTagName("li");

/* FUNCIÓN QUE OBTIENE DROPDOWN E INDEX ASOCIADO A ZONA DE SELECTOR GRÁFICO */
function getDropdown (zona, dropdowns) {
    var nombrePatologia = zona.getAttribute("Title");
    console.log(nombrePatologia)
    for (let i = 0; i < dropdowns.length; i++) {
        const element = dropdowns[i];
        console.log(nombrePatologia+" == "+element.getAttribute("Title"))
        if (nombrePatologia == element.getAttribute("Title")) {
            var dropdownElement = element;
            var dropdownIndex = i;
            return [dropdownElement, dropdownIndex];
        }
    }
}

/* FUNCIÓN QUE SELECTOR GRÁFICO SEGÚN DROPDOWN SELECCIONADO */
function activarPatologia(zonasElement,dropdowns,dropdownElement, dropdownIndex) {
    /* BÚSQUEDA Y CIERRE DE DROPDOWNS ACTIVOS */
    for (j = 0; j < dropdowns.length; j++) {

        if (j == dropdownIndex) {
            continue;
        }
        
        var submenu = dropdowns[j].getElementsByTagName('ul')[0];

        if (submenu.style.maxHeight){

            /* CIERRE Y DESACTIVACIÓN DE ESTILOS EN EL DESPLEGABLE */
            submenu.style.maxHeight = null;
            dropdowns[j].classList.toggle("dropdown-activo");

            /* BÚSQUEDA Y DESACTIVACIÓN DE ZONAS ACTIVAS */
            for (let k = 0; k < zonasElement.length; k++) {
                const zona = zonasElement[k];
                if (dropdowns[j].getAttribute("title") == zona.getAttribute("title")) {
                    zona.classList.toggle("zona-activa");
                }  
            }

        }
    }
    console.log(dropdownElement)
    /* ESTILOS DE DROPDOWN ACTIVO */
    dropdownElement.classList.toggle("dropdown-activo");
    
    /*  EXPANSIÓN DE SUBMENU */
    var submenu = dropdownElement.getElementsByTagName('ul')[0];
    if (submenu.style.maxHeight){
        submenu.style.maxHeight = null;
    } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
    } 

    /* ACTIVACIÓN DE ZONAS ASIGNADAS A DROPDOWN */
    for (let j = 0; j < zonasElement.length; j++) {
        const zona = zonasElement[j];
        if (dropdownElement.getAttribute("title") == zona.getAttribute("title")) {
            zona.classList.toggle("zona-activa");
        }  
    }
}

function hideOtherElements(zonasElement,dropdowns){
    console.log("hideOtherElements");
    for(let i=0;i<dropdowns.length;i++){
        var submenu = dropdowns[i].getElementsByTagName('ul')[0];

        if (submenu.style.maxHeight){

            /* CIERRE Y DESACTIVACIÓN DE ESTILOS EN EL DESPLEGABLE */
            submenu.style.maxHeight = null;
            dropdowns[i].classList.toggle("dropdown-activo");
            /* BÚSQUEDA Y DESACTIVACIÓN DE ZONAS ACTIVAS */
            for (let k = 0; k < zonasElement.length; k++) {
                const zona = zonasElement[k];
                if (dropdowns[i].getAttribute("title") == zona.getAttribute("title")) {
                    zona.classList.toggle("zona-activa");
                }  
            }

        }
    }
}