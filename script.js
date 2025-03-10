const imagenes = [
    'Dashboard medidor weidmuller EM220.png',
    'DASHBOARD NODE RED OEE + DB +Sim.png',
    'DASHBOARD NODE RED OEE + DB ANALOGICA.png',
    'DASHBOARD NODE RED OEE + DB.png',
    'DASHBOARD NODE RED SIM.png',
    'DASHBOARD NODE RED UNIDADES DATABASE.png',
    'DASHBOARD NODE RED UNIDADES.png',
    'dashboard nodered File browser.png',
    'ESQUEMA NODE-RED.png',
    'miniSCADA weidmuller DEmo.png',
    'miniSCADA weidmuller uc 20 IoT - demo OEE.png',
    'NODE config librerias red modbus.png',
    'NODE configuracion cliente modbus tcp.png',
    'NODE configuracion dispositivos de red modbus.png',
    'node Dashboard Med_Energia.png',
    'node dashboard OEE ModTCP.png',
    'node file browser programming.png',
    'node fileget from weidmuller.png',
    'node files config.png',
    'node files timestamp.png',
    'node logging  programing from weidmuller.png',
    'Node red Dashboard OEE Escritura DB.png',
    'Node script conversiones variables.png',
    'Node script declaracion de variables en js node red - scaling.png',
    'script señales OEE - DB.png'
];

const video = 'Video Controlador IoT - OEE - PLC Comm.mp4';

// Mapeo de términos a lenguaje Industry 4.0
const terminosIndustria = {
    'Dashboard': 'Panel de Control',
    'Node Red': 'Flujo de Datos',
    'OEE': 'Eficiencia Global',
    'DB': 'Base de Datos',
    'Config': 'Configuración',
    'Script': 'Programación',
    'Señales': 'Datos de Sensores',
    'Modbus': 'Protocolo Industrial',
    'Sim': 'Simulación',
    'Medidor': 'Monitorización',
    'Scada': 'Sistema SCADA',
    'IoT': 'IoT Industrial'
};

// Elementos DOM
const contenido = document.getElementById('contenido');
const subtitulo = document.getElementById('subtitulo');
const reiniciarBtn = document.getElementById('reiniciarBtn');
let intervalo;

// Función para decodificar y formatear títulos
function formatearTitulo(nombreArchivo) {
    let nombre = decodeURIComponent(nombreArchivo) // Decodificar caracteres especiales
        .split('.')[0] // Eliminar extensión
        .replace(/[_-]/g, ' ') // Reemplazar guiones y underscores
        .split(' ')
        .map(palabra => {
            // Reemplazar términos técnicos
            const termino = terminosIndustria[palabra] || palabra;
            return termino.charAt(0).toUpperCase() + termino.slice(1).toLowerCase();
        })
        .join(' ');

    // Mejoras específicas para caracteres especiales
    return nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function cargarImagenes() {
    contenido.innerHTML = '';
    imagenes.sort().forEach((imagen, index) => {
        const img = new Image();
        img.src = imagen;
        img.onload = () => {
            img.style.display = index === 0 ? 'block' : 'none';
            img.alt = formatearTitulo(imagen);
            contenido.appendChild(img);
            if(index === 0) subtitulo.textContent = formatearTitulo(imagen);
        };
        img.onerror = () => console.error(`Error carga: ${imagen}`);
    });
}

function cargarVideo() {
    contenido.innerHTML = '';
    const vid = document.createElement('video');
    vid.src = video;
    vid.controls = true;
    vid.style.display = 'block';
    
    // Evento para reiniciar al finalizar video
    vid.addEventListener('ended', reiniciarPresentacion);
    
    contenido.appendChild(vid);
    subtitulo.textContent = formatearTitulo(video);
    reiniciarBtn.classList.remove('oculto');
    clearInterval(intervalo);
}

function manejarNavegacion(direccion) {
    const elementos = contenido.children;
    elementos[indiceActual].style.display = 'none';
    let nuevoIndice = direccion === 'siguiente' ? indiceActual + 1 : indiceActual - 1;
    
    if(nuevoIndice >= 0 && nuevoIndice < elementos.length) {
        indiceActual = nuevoIndice;
        elementos[indiceActual].style.display = 'block';
        subtitulo.textContent = formatearTitulo(elementos[indiceActual].src.split('/').pop());
    }
    
    // Lógica para transición al video
    if(direccion === 'siguiente' && nuevoIndice === elementos.length) {
        cargarVideo();
    }
}

function reiniciarPresentacion() {
    indiceActual = 0;
    cargarImagenes();
    reiniciarBtn.classList.add('oculto');
    iniciarIntervalo();
}

function iniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        if(indiceActual < contenido.children.length - 1) {
            manejarNavegacion('siguiente');
        } else {
            cargarVideo();
        }
    }, 3000);
}

// Eventos
document.addEventListener('DOMContentLoaded', reiniciarPresentacion);

document.getElementById('siguienteBtn').addEventListener('click', () => {
    if(indiceActual < contenido.children.length - 1) {
        clearInterval(intervalo);
        manejarNavegacion('siguiente');
    } else {
        cargarVideo();
    }
});

document.getElementById('anteriorBtn').addEventListener('click', () => {
    clearInterval(intervalo);
    manejarNavegacion('anterior');
});

document.getElementById('reiniciarBtn').addEventListener('click', reiniciarPresentacion);