import React from "react";
import emailjs from "@emailjs/browser";

function Form(){
    return(
        <div className="form-container">
      <h1>Formularz zgłoszeniowy</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Wpisz swoje imię"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Wpisz swój e-mail (opcjonalnie)"
            required
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