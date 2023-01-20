export const sendEmail = (data) => {
  return fetch('https://api.emailjs.com/api/v1.0/email/send', {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(checkResponse)
}

const checkResponse = (res) => {
  if (res.ok) {
    return res;
  }
  return Promise.reject(`Ошибка ${res.status}`);
}