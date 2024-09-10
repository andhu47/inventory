document.getElementById('inventoryForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append('inventoryNo', document.getElementById('inventoryNo').value);
  formData.append('location', document.getElementById('location').value);
  formData.append('price', document.getElementById('price').value);
  formData.append('image', document.getElementById('image').files[0]);

  // Send the form data to Telegram
  const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';  // Replace with your bot token
  const chatId = 'YOUR_CHAT_ID'; // Replace with the group/user ID

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendPhoto`;

  const imageFile = document.getElementById('image').files[0];

  const formDataToSend = new FormData();
  formDataToSend.append('chat_id', chatId);
  formDataToSend.append('photo', imageFile);
  formDataToSend.append('caption', `Inventory No: ${document.getElementById('inventoryNo').value}, Location: ${document.getElementById('location').value}, Price: ${document.getElementById('price').value}`);

  const response = await fetch(url, {
    method: 'POST',
    body: formDataToSend
  });

  const result = await response.json();
  if(result.ok) {
    alert('Form submitted successfully!');
  } else {
    alert('Error in submitting form');
  }
});
