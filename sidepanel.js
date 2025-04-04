document.addEventListener('DOMContentLoaded', function() {
    const promptHeaders = document.querySelectorAll('.prompt-header');
    const promptContents = document.querySelectorAll('.prompt-content');
    const copyButtons = document.querySelectorAll('.copy-button');

    promptHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            promptContents[index].classList.toggle('expanded');
            const icon = header.querySelector('.toggle-icon');
            icon.textContent = promptContents[index].classList.contains('expanded') ? '-' : '+';
        });
    });

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textarea = this.previousElementSibling;
            textarea.select();
            document.execCommand('copy');
            // Opcional: feedback visual ao copiar
            button.textContent = 'Copiado!';
            setTimeout(() => {
                button.textContent = 'Copiar';
            }, 1500);
        });
    });
});