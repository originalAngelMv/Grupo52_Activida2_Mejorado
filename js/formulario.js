//(function(){
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');        
    function validarNombre(e){
        if(nombre.value == "" || nombre.value == null){
            console.log("Completa el nombre papu");
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor complete el nombre</li>';
            //error.innerHTML += '<li>Por favor complete el nombre</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarCorreo(e){
        if(correo.value == "" || correo.value == null){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor complete el correo</li>';
            //error.innerHTML += '<li>Por favor complete el nombre</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }
    
    function validarSexo(e){
        if(!formulario.sexo.value){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor seleccione un sexo</li>';
            //error.innerHTML += '<li>Por favor complete el nombre</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarTerminos(e){
        if(terminos.checked ==false){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor cacepte los Terminos</li>';
            //error.innerHTML += '<li>Por favor complete el nombre</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarFormulario(e){
        error.innerHTML = '';
        error.style.display = 'none';
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);

        if(error.innerHTML !== ''){
            error.style.display = 'block';
        }
    }

    formulario.addEventListener('submit', validarFormulario);

//}())