document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing");
    const text = "Olá! Meu nome é...";
    let index = 0;

    function type() {
        if (!typingElement) return;

        if (index < text.length) {
            const char = text.charAt(index);
            if (char === '\n') {
                typingElement.innerHTML += '<br>'; // Adiciona quebra de linha
                typingElement.classList.remove("cursor"); // Remove o cursor durante a quebra de linha
                setTimeout(() => {
                    typingElement.classList.add("cursor"); // Recoloca o cursor na próxima linha
                    index++;
                    type();
                }, 300); // Tempo para a quebra de linha
            } else {
                typingElement.innerHTML += char; // Adiciona o caractere normalmente
                index++;
                setTimeout(type, 50); // Velocidade de digitação
            }
        } else {
            setTimeout(() => {
                typingElement.textContent = "";
                index = 0;
                type();
            }, 2000); // Espera 2 segundos e recomeça
        }
    }

    type();

    const flashcards = document.querySelectorAll(".flashcard");

    flashcards.forEach((flashcard) => {
        flashcard.addEventListener("click", () => {
            flashcard.classList.toggle("flipped");
        });
    });
});
