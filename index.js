document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('btn-copy');
    const textToCopy = document.getElementById('text-converted').textContent;
  
    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    });
  });