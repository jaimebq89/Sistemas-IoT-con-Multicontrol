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

const contenido = document.getElementById('contenido');
const subtitulo = document.getElementById('subtitulo');
const reiniciarBtn = document.getElementById('reiniciarBtn');
let indiceActual = 0;
let intervalo;

function formatearTitulo(nombreArchivo) {
    return nombreArchivo
        .replace(/%20/g, ' ')
        .replace(/[_-]/g, ' ')
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');
}

function cargarImagenes() {
    contenido.innerHTML = '';
    imagenes.sort().forEach((imagen, index) => {
        const img = new Image();
        img.src = imagen;
        img.onload = () => {
            img.alt = `Imagen ${index + 1}`;
            img.style.display = index === 0 ? 'block' : 'none';
            contenido.appendChild(img);
            if (index === 0) subtitulo.textContent = formatearTitulo(imagen.split('.').slice(0, -1).join('.'));
        };
        img.onerror = () => console.error(`Error al cargar: ${imagen}`);
    });
}

function cargarVideo() {
    contenido.innerHTML = '';
    const vid = document.createElement('video');
    vid.src = video;
    vid.controls = true;
    vid.style.display = 'block';
    contenido.appendChild(vid);
    subtitulo.textContent = formatearTitulo(video.split('.').slice(0, -1).join('.'));
    reiniciarBtn.classList.remove('oculto');
}

function manejarNavegacion(direccion) {
    const elementos = contenido.children;
    elementos[indiceActual].style.display = 'none';
    
    if (direccion === 'siguiente' && indiceActual < elementos.length - 1) indiceActual++;
    else if (direccion === 'anterior' && indiceActual > 0) indiceActual--;
    
    elementos[indiceActual].style.display = 'block';
    subtitulo.textContent = formatearTitulo(elementos[indiceActual].src.split('/').pop().split('.')[0]);
}

document.addEventListener('DOMContentLoaded', () => {
    cargarImagenes();
    intervalo = setInterval(() => {
        if (indiceActual < contenido.children.length - 1) manejarNavegacion('siguiente');
        else cargarVideo();
    }, 3000);
});

document.getElementById('siguienteBtn').addEventListener('click', () => {
    clearInterval(intervalo);
    if (indiceActual < contenido.children.length - 1) manejarNavegacion('siguiente');
    else cargarVideo();
});

document.getElementById('anteriorBtn').addEventListener('click', () => {
    clearInterval(intervalo);
    manejarNavegacion('anterior');
});

document.getElementById('reiniciarBtn').addEventListener('click', () => {
    contenido.innerHTML = '';
    indiceActual = 0;
    cargarImagenes();
    reiniciarBtn.classList.add('oculto');
});