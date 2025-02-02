/* Alberto Rojo */

/* Parte CV */

/* Para cambiar la página del CV y volver */
function tocontact() {
    window.location.href = "recursos/HTML/formularioAlbertoRojo.html";
};
function tocv() {
    window.location.href = "../../indexAlbertoRojo.html";
};


/* Para cambiar el color */
function chgtema() {
    check = document.getElementById("tema");
    if (check.checked) {
        cambiarlink = document.getElementById("csschg");
        cambiarlink.href = "recursos/CSS/index2AlbertoRojo.css";
        alert("Tema cambiado a playa."); 
    }else {
        cambiarlink = document.getElementById("csschg");
        cambiarlink.href = "recursos/CSS/indexAlbertoRojo.css";
        alert("Tema cambiado a espacial.");
    };
};


/* Parte formulario */

/* Para cambiar el color */

function chgtema2 () {
    check2 = document.getElementById("tema2");
    if (check2.checked) {
        cambiarlink2 = document.getElementById("csschg2");
        cambiarlink2.href = "../CSS/formulario2AlbertoRojo.css";
        alert("Tema cambiado a playa.");
    }else{
        cambiarlink2 = document.getElementById("csschg2");
        cambiarlink2.href = "../CSS/formularioAlbertoRojo.css";
        alert("Tema cambiado a espacio.");
    };
};

/* valida si eres una organización */
function orgval() {
    organizacion = document.getElementById("orgsi");
    if (organizacion.checked) {
        document.getElementById("ape").disabled = true;
        document.getElementById("ape").placeholder = "Deshabilitado.";
        document.getElementById("nom").placeholder = "Nombre de organización.";
        document.getElementById("ape").value = "";
    }else {
        document.getElementById("nom").placeholder = "Introduce tu nombre real.";
        document.getElementById("ape").placeholder = "Introduce tu primer apellido real.";
        document.getElementById("ape").disabled = false;
    };
};

/* valida si aceptas terminos y condiciones */
function terminos() {
    ter = document.getElementById("cond");
    if (ter.checked) {
        document.getElementById("submit").disabled = false;
    }else {
        document.getElementById("submit").disabled = true;
    };
};


/* Hace la validación de los datos de envío */
function validar() {
    nombre = document.getElementById("nom").value;
    apellido = document.getElementById("ape").value;
    telefono = document.getElementById("num").value;
    correo = document.getElementById("mail").value;
    Texto = document.getElementById("text").value;
    check = document.getElementById("orgsi");
    /* Valida que los campos esten completos. */
    if (nombre === "" || telefono === "" || correo === "" || Texto === "" || ( check.checked == false && apellido == "")) {
        alert("Por favor, relleno todos los campos antes de enviar.");
    }else {
        /* Validar nombre */
        letranom1 = nombre.slice(0,1);
        if (letranom1 == letranom1.toUpperCase()) {
            /* valida correo */
            Patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (Patron.test(correo)) {
                /* Validar telefono */
                if ((telefono >= 600000000 && telefono <= 699999999) || ( telefono >= 910000000 && telefono <= 919999999)) {
                    /* Validar apellido */
                    if (check.checked == false) {
                        letranom1 = apellido.slice(0,1);
                        if (letranom1 == letranom1.toUpperCase()) {
                            /* Después de validar envía correo (Persona)*/
                            alert("Los datos introducidos se han enviado correctamente, muchas gracias "+nombre+" "+apellido+".");
                            window.location.href = "mailto:alberto.rojo1@educa.madrid.org";
                        }else {
                            alert("Por favor, introduce la primera letra mayúscula en el apellido.");
                            document.getElementById("ape").focus();
                        };
                    }else {
                        /* Después de validar envía correo (organización)*/
                        alert("Los datos introducidos se han enviado correctamente, muchas gracias "+nombre);
                        window.location.href = "mailto:alberto.rojo1@educa.madrid.org";
                    };
                }else {
                    alert("Teléfono no válido, por favor, introducelo de nuevo.");
                    document.getElementById("num").focus();
                };
            }else {
                alert("Por favor introduce el correo en un formato válido.");
                document.getElementById("").focus();
            };
        }else {
            alert("Por favor introduce la primera letra mayúscula en el nombre.");
            document.getElementById("nom").focus();
        };   
    };
};