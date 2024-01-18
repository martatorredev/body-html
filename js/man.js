var dropdowns = document.getElementsByClassName("dr");
var dropdowns2 = document.getElementsByClassName("drb");
var zonas = document.getElementById("zonas-patologias").getElementsByTagName("li");
var zonasTwo = document.getElementById("zonas-patologias2").getElementsByTagName("li");


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

function activarPatologia(zonasElement,dropdowns,dropdownElement, dropdownIndex) {
    for (j = 0; j < dropdowns.length; j++) {

        if (j == dropdownIndex) {
            continue;
        }
        
        var submenu = dropdowns[j].getElementsByTagName('ul')[0];

        if (submenu.style.maxHeight){
            submenu.style.maxHeight = null;
            dropdowns[j].classList.toggle("dropdown-activo");
            for (let k = 0; k < zonasElement.length; k++) {
                const zona = zonasElement[k];
                if (dropdowns[j].getAttribute("title") == zona.getAttribute("title")) {
                    zona.classList.toggle("zona-activa");
                }  
            }

        }
    }
    console.log(dropdownElement)
    dropdownElement.classList.toggle("dropdown-activo");
    
    var submenu = dropdownElement.getElementsByTagName('ul')[0];
    if (submenu.style.maxHeight){
        submenu.style.maxHeight = null;
    } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
    } 

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

            submenu.style.maxHeight = null;
            dropdowns[i].classList.toggle("dropdown-activo");
            for (let k = 0; k < zonasElement.length; k++) {
                const zona = zonasElement[k];
                if (dropdowns[i].getAttribute("title") == zona.getAttribute("title")) {
                    zona.classList.toggle("zona-activa");
                }  
            }

        }
    }
}

for (let i = 0; i < dropdowns.length; i++) {
    const element = dropdowns[i];
    console.log(element)
    element.addEventListener("click", function() {
        activarPatologia(zonas,dropdowns,element, i);
        hideOtherElements(zonasTwo,dropdowns2);
    })
}

for (let j = 0; j < zonas.length; j++) {
    const element = zonas[j];
    element.addEventListener("click", function() {
        var dropdown = getDropdown(element, dropdowns);
        console.log(dropdown)

        activarPatologia(zonas,dropdowns,dropdown[0], dropdown[1])
        hideOtherElements(zonasTwo,dropdowns2);
    })
}
for (let i = 0; i < dropdowns2.length; i++) {
    const element = dropdowns2[i];
    element.addEventListener("click", function() {
        activarPatologia(zonasTwo,dropdowns2,element, i);
        hideOtherElements(zonas,dropdowns);
    })
}

for (let j = 0; j < zonasTwo.length; j++) {
    const element = zonasTwo[j];
    element.addEventListener("click", function() {
        var dropdown2 = getDropdown(element, dropdowns2);
        console.log(dropdown2)
        activarPatologia(zonasTwo,dropdowns2,dropdown2[0], dropdown2[1])
        hideOtherElements(zonas,dropdowns);
    })
}