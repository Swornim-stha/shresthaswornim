function sendMessage() {
    const userInput = document.getElementById('userInput');
    const userMessage = userInput.value.trim();

    if (userMessage === '') {
        return;
    }

    displayUserMessage(userMessage);
    processUserMessage(userMessage);

    userInput.value = '';
}

function displayBotMessage(message) {
    const chatbox = document.querySelector('.chatbox');
    const botMessage = document.createElement('div');
    botMessage.className = 'message';
    botMessage.innerHTML = `
      <span class="avatar">AI</span>
      <span class="text">${message}</span>
    `;
    chatbox.appendChild(botMessage);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

function displayUserMessage(message) {
    const chatbox = document.querySelector('.chatbox');
    const userMessage = document.createElement('div');
    userMessage.className = 'message';
    userMessage.innerHTML = `
      <span class="avatar">You</span>
      <span class="text">${message}</span>
    `;
    chatbox.appendChild(userMessage);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

function processUserMessage(message) {
    // Simulate AI processing time
    setTimeout(() => {
        const botReply = generateBotReply(message);
        displayBotMessage(botReply);
    }, 1000);
}

function generateBotReply(userMessage) {
    // Replace this with your own AI logic or API calls
    const replies = [
        "I'm sorry, I cannot provide a response at the moment.",
        "I'm still learning. Can you please rephrase your question?",
        "That's an interesting question. Let me think...",
        "I'm not sure. Can you provide more details?",
        "I'm sorry, I don't have the answer to that."
    ];

    return replies[Math.floor(Math.random() * replies.length)];
}
