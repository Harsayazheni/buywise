function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatWindow = document.getElementById("output");
    
    if (userInput) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatWindow.appendChild(userMessage);
        
        const botReply = document.createElement("div");
        botReply.classList.add("bot-message");
        botReply.innerHTML = `<p>Processing your inquiry...</p>`;
        chatWindow.appendChild(botReply);
        
        document.getElementById("user-input").value = "";
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
