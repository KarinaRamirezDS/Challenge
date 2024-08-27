// Definir las reglas de sustitución
let textoEncriptado;
let text;
let statusText;
const reglasEncriptar = {
    'a': 'ai', 
    'e': 'xelr', 
    'i': 'imes', 
    'o': 'obzr', 
    'u': 'ufat',
    'k': 'qpr',
    'b': 'liñ'
  };
  
  const reglasDesencriptar = {
    'ai': 'a', 
    'xelr': 'e', 
    'imes': 'i', 
    'obzr': 'o', 
    'ufat': 'u',
    'qpr': 'k',
    'liñ': 'b'
  };
  


  // Función para encriptar
  function encriptar() {
    
    // Obtener el valor del campo de texto
    let textContent = document.getElementById("inputText");
    text = textContent.value;
    if(text == null || text === undefined || text == ''){
        alert('Ingresa un texto, por favor.')
    }else{
        // Encriptar el texto
    statusText = 'true';
    
    textoEncriptado = text.split('').map(caracter => {
      return reglasEncriptar[caracter] || caracter;
    }).join('');
    
    // Mostrar el resultado en una alerta
    alert(textoEncriptado);
    }
    document.querySelector('.btn-copy').style.display = 'block';
    updateStatus(textoEncriptado);
    
  
  }
  
  // Función para desencriptar
  function desencriptar() {
    
    const clavesOrdenadas = Object.keys(reglasDesencriptar).sort((a, b) => b.length - a.length);
    if(text == null || text === undefined || text == ''){
      alert('Ingresa un texto, por favor.')
  }else{
    statusText = 'false';
    
    for (const clave of clavesOrdenadas) {
      textoEncriptado = textoEncriptado.split(clave).join(reglasDesencriptar[clave]);
    }
    alert(textoEncriptado)
  }
  updateStatus(textoEncriptado)
  document.querySelector('.btn-copy').style.display = 'block';
    return textoEncriptado;
  }
  

  function updateStatus() {
    const messageAlert = document.getElementById('message');
    messageAlert.style.display = 'none';
    const statusMessage = document.getElementById('status-message');
    statusMessage.innerHTML = textoEncriptado;
   
}
function copiarAlPortapapeles() {
  if (textoEncriptado === '') {
      alert('No hay texto para copiar.');
      return;
  }

  // Crear un elemento temporal para copiar el texto al portapapeles
  const textarea = document.createElement('textarea');
  textarea.value = textoEncriptado;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert('Texto copiado al portapapeles!');
}