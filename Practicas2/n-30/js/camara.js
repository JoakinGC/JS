async function getDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
}

export default function accederCamara(id,canva,playBtn,stopBtn){

  const $id = document.getElementById(id),
  $canva = document.getElementById(canva),
  $playBtn = document.getElementById(playBtn),
  $stopBtn = document.getElementById(stopBtn);

  let stream;

  let height = 0,
  width = 320;



  const tieneSoporteUserMedia = () =>
    !!(navigator.mediaDevices.getUserMedia)

  // Si no soporta...
  // Amable aviso para que el mundo comience a usar navegadores decentes ;)
  if (typeof MediaRecorder === "undefined" || !tieneSoporteUserMedia())
    return alert("Tu navegador web no cumple los requisitos; por favor, actualiza a un navegador decente como Firefox o Google Chrome");

  const p = navigator.mediaDevices;

  let video = {
        video: {
          width: {
            min: 400,
            idea:1280,
            max: 1920,
          },
          height: {
            min: 400,
            idea:720,
            max: 1080
          },
          facingMode: 'user'
        },
        audio: false,
        
      };

    p.getUserMedia(video)
    .then(function (stream){
      stream = stream;
      $id.srcObject = stream;      
    }).catch(() =>{
      console.error("Error al acceder a la camara.");
    })

    document.addEventListener("click",(e) =>{
      if(e.target === $playBtn){
        $id.play();
      }

      if(e.target === $stopBtn){
        $id.pause();
      }
    });
    
}