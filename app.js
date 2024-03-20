const matrizLetras = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]

function encriptarTexto(texto) {
    for (let i = 0; i < matrizLetras.length; i++) {
        if (texto.includes(matrizLetras[i][0])) {
            texto = texto.replaceAll(matrizLetras[i][0], matrizLetras[i][1]);
        }
    }
    return texto;
}

function desencriptarTexto(texto) {
    for (let i = 0; i < matrizLetras.length; i++) {
        if (texto.includes(matrizLetras[i][1])) {
            texto = texto.replaceAll(matrizLetras[i][1], matrizLetras[i][0]);
        }
    }
    return texto;
}

function textoUsuarioEncriptar() {
    let textoU = document.getElementById('textoUsuario').value;
    let textoModificado = document.getElementById('textoEncriptado');

    let modificarTexto = encriptarTexto(textoU);

    textoModificado.value = modificarTexto;
}

function textoUsuarioDesencriptar() {
    let textoU = document.getElementById('textoUsuario').value;
    let textoModificado = document.getElementById('textoEncriptado');

    let modificarTexto = desencriptarTexto(textoU);

    textoModificado.value = modificarTexto;
}

function copiarTexto() {
    let textoModificado = document.getElementById('textoEncriptado').value;

    navigator.clipboard.writeText(textoModificado);
}