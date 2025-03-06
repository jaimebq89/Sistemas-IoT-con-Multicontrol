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
	'script señales OEE - DB.png',
    // Añade todas las rutas de las imágenes aquí
];

const video = 'Video Controlador IoT - OEE - PLC Comm.mp4';

const contenido = document.getElementById('contenido');
const subtitulo = document.getElementById('subtitulo');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const anteriorBtn = document.getElementById('anteriorBtn');
const siguienteBtn = document.getElementById('siguienteBtn');
let indiceActual = 0;
let intervalo;

function cargarImagenes() {
    imagenes.sort(); // Ordena las imágenes alfabéticamente
    imagenes.forEach((imagen, index) => {
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = `Imagen ${index + 1}`;
        if (index === 0) {
            img.classList.add('active');
            subtitulo.textContent = obtenerNombreArchivo(imagen); // Muestra el nombre del archivo
        }
        contenido.appendChild(img);
    });
}

function cargarVideo() {
    const vid = document.createElement('video');
    vid.src = video;
    vid.controls = true;
    vid.classList.add('active');
    contenido.appendChild(vid);
    subtitulo.textContent = obtenerNombreArchivo(video); // Muestra el nombre del video
    reiniciarBtn.classList.remove('oculto'); // Muestra el botón de reinicio
    clearInterval(intervalo); // Detiene el intervalo automático
}

function obtenerNombreArchivo(ruta) {
    const nombreArchivo = ruta.split('/').pop(); // Extrae el nombre del archivo de la ruta
    const nombreSinExtension = nombreArchivo.split('.').slice(0, -1).join('.'); // Elimina la extensión
    return decodeURIComponent(nombreSinExtension); // Decodifica los caracteres especiales
}

function mostrarSlide(index) {
    const elementos = contenido.querySelectorAll('img, video');
    elementos[indiceActual].classList.remove('active');
    indiceActual = index;
    elementos[indiceActual].classList.add('active');
    subtitulo.textContent = obtenerNombreArchivo(elementos[indiceActual].src); // Actualiza el subtítulo
}

function siguiente() {
    const elementos = contenido.querySelectorAll('img, video');
    if (indiceActual < elementos.length - 1) {
        mostrarSlide(indiceActual + 1);
    } else {
        cargarVideo(); // Si es la última imagen, carga el video
    }
}

function anterior() {
    if (indiceActual > 0) {
        mostrarSlide(indiceActual - 1);
    }
}

function reiniciarPresentacion() {
    const elementos = contenido.querySelectorAll('img, video');
    elementos.forEach((elemento) => elemento.remove()); // Elimina todas las imágenes y el video
    indiceActual = 0;
    subtitulo.textContent = '';
    reiniciarBtn.classList.add('oculto'); // Oculta el botón de reinicio
    cargarImagenes(); // Vuelve a cargar las imágenes
    iniciarIntervalo(); // Reinicia el intervalo automático
}

function iniciarIntervalo() {
    clearInterval(intervalo); // Limpia el intervalo anterior (si existe)
    intervalo = setInterval(siguiente, 3000); // Inicia un nuevo intervalo
}

function detenerIntervalo() {
    clearInterval(intervalo); // Detiene el intervalo automático
}

document.addEventListener('DOMContentLoaded', () => {
    cargarImagenes();
    iniciarIntervalo(); // Inicia el intervalo automático
});

anteriorBtn.addEventListener('click', () => {
    detenerIntervalo(); // Detiene el intervalo automático
    anterior(); // Navega al slide anterior
});

siguienteBtn.addEventListener('click', () => {
    detenerIntervalo(); // Detiene el intervalo automático
    siguiente(); // Navega al slide siguiente
});

reiniciarBtn.addEventListener('click', reiniciarPresentacion); // Evento para reiniciar la presentación
