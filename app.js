document.getElementById('inventoryForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append('inventoryNo', document.getElementById('inventoryNo').value);
  formData.append('location', document.getElementById('location').value);
  formData.append('price', document.getElementById('price').value);
  formData.append('image', document.getElementById('image').files[0]);

  const telegramBotToken = '5859325188:AAHMGylqJiCYztCnYAJ_gzbDljXMHiDRobQ';
  const chatId = 'saeed6524'; // test

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendPhoto`;

  const formDataToSend = new FormData();
  formDataToSend.append('chat_id', chatId);
  formDataToSend.append('photo', document.getElementById('image').files[0]);
  formDataToSend.append('caption', `Inventory No: ${document.getElementById('inventoryNo').value}, Location: ${document.getElementById('location').value}, Price: ${document.getElementById('price').value}`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formDataToSend
    });

    const result = await response.json();
    console.log(result);  // To check what Telegram API returns

    if(result.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Error in submitting form: ' + result.description);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send data to Telegram');
  }
});
