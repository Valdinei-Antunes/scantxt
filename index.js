document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('btn-copy');
    const selectButton = document.getElementById('btn-select');
    const textToCopyElement = document.getElementById('text-converted');

    // Função para copiar o texto
    copyButton.addEventListener('click', function () {
        const textToCopy = textToCopyElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    });

    // Função para enviar a imagem ao backend
    selectButton.addEventListener('click', function () {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.onchange = function (event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('file', file);

            fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    textToCopyElement.textContent = data.text; // Exibe o texto extraído
                })
                .catch(error => {
                    console.error('Erro ao processar a imagem:', error);
                });
        };

        fileInput.click();
    });
});