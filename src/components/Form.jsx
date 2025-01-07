import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_88lb60s", // Zamień na ID usługi z EmailJS
        "template_0zvz6an", // Zamień na ID szablonu z EmailJS
        form.current,
        "VIfelb9ZMKewGh4fw" // Zamień na publiczny klucz API z EmailJS
      )
      .then(
        (result) => {
          alert("Wiadomość wysłana pomyślnie!");
        },
        (error) => {
          alert("Wystąpił błąd podczas wysyłania wiadomości.");
        }
      );
  };

  return (
    <div className="form-container">
      <h1>Formularz zgłoszeniowy</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Imię (opcjonalne):</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Wpisz swoje imię"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail (opcjonalny):</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Wpisz swój e-mail"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Treść zgłoszenia"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Wyślij zgłoszenie
        </button>
      </form>
    </div>
  );
}

export default Form;
