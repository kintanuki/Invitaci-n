const btn = document.getElementById('btnAbrir');
const inicio = document.getElementById('inicio');
const contenido = document.getElementById('contenido');

/* abrir invitación */
btn.addEventListener('click', () => {

  inicio.style.display = 'none';
  contenido.classList.remove('hidden');
  contenido.classList.add('fade-in');

  lanzarConfetti();
});

/* confetti */
function lanzarConfetti(){
  const confetti = document.querySelector('.confetti');

  for(let i=0;i<120;i++){
    const dot = document.createElement('span');

    const size = Math.random()*6+3;
    dot.style.width = size+'px';
    dot.style.height = size+'px';

    dot.style.left = Math.random()*100+'%';

    dot.style.background = ['red','yellow','black','gray'][
      Math.floor(Math.random()*4)
    ];

    dot.style.animationDuration = (Math.random()*2+2)+'s';

    confetti.appendChild(dot);
  }

  setTimeout(()=>{
    confetti.innerHTML = '';
  },4000);
}

/* whatsapp */
document.getElementById('btnWhatsApp').addEventListener('click', () => {

  const numero = "573187625722"; // cambia esto
  const mensaje = encodeURIComponent(
    "Hola, confirmo mi asistencia al cumpleaños de Joaquin "
  );

  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, '_blank');
});