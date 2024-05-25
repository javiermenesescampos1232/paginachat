// Función para manejar la carga de la página
document.addEventListener('DOMContentLoaded', function() {
    // Saludo al inicio del chat
    const welcomeMessage = "¡Bienvenido al chatbot más sencillo con voz! ¿En qué puedo ayudarte hoy?";
    appendMessage(welcomeMessage, 'bot');
});

// Resto del código...
function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message ' + sender;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Síntesis de voz para el mensaje
    if (sender === 'bot') {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'es-ES'; // Establece el idioma de la síntesis de voz
        speechSynthesis.speak(utterance);
    }
}

function search(query) {
    const responses = {
        "¿Qué es el clima?": "El clima es el estado promedio de la atmósfera en un lugar determinado durante un período de tiempo.",
        "¿Qué es un chatbot?": "Un chatbot es un programa de computadora diseñado para simular una conversación humana, especialmente a través de Internet.",
        "¿Cuál fue el resultado de la Segunda Guerra Mundial?": "La Segunda Guerra Mundial culminó con la derrota de las potencias del Eje, lideradas por Alemania, Italia y Japón, y el establecimiento de un nuevo orden mundial dominado por las superpotencias, Estados Unidos y la Unión Soviética.",
        "¿Cuál es la teoría de la relatividad?": "La teoría de la relatividad es una teoría física desarrollada por Albert Einstein que describe la relación entre el espacio y el tiempo. Se divide en dos partes: la relatividad especial, que trata sobre los fenómenos en ausencia de campos gravitatorios, y la relatividad general, que incluye los efectos de la gravedad.",
        "¿Qué es el ADN?": "El ADN, o ácido desoxirribonucleico, es una molécula que contiene la información genética utilizada en el desarrollo y funcionamiento de todos los organismos vivos, así como en muchos virus. Consiste en una larga cadena formada por unidades llamadas nucleótidos.",
        "¿Quién pintó La Mona Lisa?": "La Mona Lisa, también conocida como La Gioconda, fue pintada por Leonardo da Vinci durante el Renacimiento italiano.",
        "¿Cuál es la capital de Francia?": "La capital de Francia es París.",
        "¿Qué es la inteligencia artificial?": "La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de sistemas informáticos. Esto incluye aprendizaje automático, razonamiento, percepción, reconocimiento de voz y visión, entre otros.",
        "¿Cuál es la diferencia entre masa y peso?": "La masa es la cantidad de materia en un objeto, mientras que el peso es la fuerza que actúa sobre un objeto debido a la gravedad. La masa se mide en kilogramos, mientras que el peso se mide en newtons.",
        "¿Quién escribió 'Romeo y Julieta'?": "Romeo y Julieta es una obra de teatro escrita por William Shakespeare, uno de los dramaturgos más famosos de la literatura mundial."
    };
    return responses[query] || "Lo siento, no tengo información sobre eso.";
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    appendMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    const response = search(userInput);
    appendMessage(response, 'bot');
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

document.getElementById('speak-btn').addEventListener('click', function() {
    const textToSpeak = document.getElementById('user-input').value.trim();
    if (textToSpeak) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'es-ES'; // Establece el idioma de la síntesis de voz
        speechSynthesis.speak(utterance);
    }
});
