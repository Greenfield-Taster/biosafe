import React from "react";
import "../styles/scss/Contact.scss";

const Contact = () => {
  // Координати офісу в Запоріжжі
  const officeLocation = {
    address: "вул. Святого Миколая, 57, Запоріжжя, 69002, Україна",
    lat: 47.81584167480469,
    lng: 35.17162322998047,
  };

  const openInMapsApp = () => {
    const query = encodeURIComponent(officeLocation.address);

    // Спробуємо відкрити в нативному додатку Maps
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      // iOS - використовуємо Apple Maps або Google Maps
      const appleMapsUrl = `maps://maps.apple.com/?q=${query}`;
      const googleMapsUrl = `comgooglemaps://?q=${query}`;

      // Спочатку пробуємо Google Maps, якщо не вдається - Apple Maps
      window.location.href = googleMapsUrl;

      // Fallback до Apple Maps через 1 секунду
      setTimeout(() => {
        window.location.href = appleMapsUrl;
      }, 1000);
    } else if (navigator.userAgent.match(/Android/i)) {
      // Android - використовуємо Google Maps
      const androidMapsUrl = `geo:${officeLocation.lat},${officeLocation.lng}?q=${query}`;
      window.location.href = androidMapsUrl;
    } else {
      // Desktop - відкриваємо в браузері
      const webUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
      window.open(webUrl, "_blank");
    }
  };

  // Визначаємо текст кнопки залежно від пристрою
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const mapsButtonText = isMobile
    ? "Відкрити в додатку Google Карта"
    : "Відкрити в Google Карті";

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <h1 className="contact__title">Зв'яжіться з нами</h1>

          <div className="contact__grid">
            {/* Контактна інформація */}
            <div className="contact__info">
              {/* Головний офіс */}
              <div className="contact__item">
                <div className="contact__icon contact__icon--location">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact__details">
                  <h3 className="contact__item-title">Головний офіс</h3>
                  <p className="contact__item-text">{officeLocation.address}</p>
                </div>
              </div>

              {/* Телефон */}
              <div className="contact__item">
                <div className="contact__icon contact__icon--phone">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact__details">
                  <h3 className="contact__item-title">Телефон</h3>
                  <p className="contact__item-text">
                    Основний: +380 67 184 4044
                  </p>
                </div>
              </div>

              {/* Електронна пошта */}
              <div className="contact__item">
                <div className="contact__icon contact__icon--email">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact__details">
                  <h3 className="contact__item-title">Електронна пошта</h3>
                  <p className="contact__item-text">
                    <a
                      href="mailto:office@biosafe.ltd"
                      className="contact__link"
                    >
                      office@biosafe.ltd
                    </a>
                  </p>
                </div>
              </div>

              {/* Години роботи */}
              <div className="contact__item">
                <div className="contact__icon contact__icon--clock">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="contact__details">
                  <h3 className="contact__item-title">Години роботи</h3>
                  <p className="contact__item-text">
                    Понеділок - П'ятниця: 8:00 - 18:00
                  </p>
                  <p className="contact__item-text">Субота: 9:00 - 13:00</p>
                  <p className="contact__item-text">Неділя: Вихідний</p>
                  <p className="contact__item-text contact__item-text--accent">
                    Екстрена підтримка: 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Google карта */}
            <div className="contact__map">
              <div className="contact__map-header">
                <h3 className="contact__map-title">Наше розташування</h3>
                <button
                  className="contact__map-button"
                  onClick={openInMapsApp}
                  title={
                    isMobile
                      ? "Відкрити в додатку Maps"
                      : "Відкрити в Google Maps"
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                      fill="currentColor"
                    />
                  </svg>
                  {mapsButtonText}
                </button>
              </div>

              <div className="contact__map-container">
                <iframe
                  src={`https://maps.google.com/maps?width=100%25&height=400&hl=uk&q=${encodeURIComponent(
                    officeLocation.address
                  )}+(Biosafe)&t=&z=15&ie=UTF8&iwloc=near&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта розташування офісу Biosafe"
                  onError={(e) => {
                    // Fallback якщо embed не працює
                    e.target.style.display = "none";
                    const fallback = e.target.parentElement.querySelector(
                      ".contact__map-fallback"
                    );
                    if (fallback) fallback.style.display = "flex";
                  }}
                ></iframe>

                {/* Fallback контент */}
                <div
                  className="contact__map-fallback"
                  style={{ display: "none" }}
                >
                  <div className="contact__map-fallback-content">
                    <div className="contact__map-icon">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h4>Карта недоступна</h4>
                    <p>
                      Натисніть кнопку вище, щоб відкрити локацію в Google Maps
                    </p>
                    <button
                      className="contact__map-fallback-button"
                      onClick={openInMapsApp}
                    >
                      Відкрити в Google Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Додаткові кнопки */}
              <div className="contact__map-actions">
                <button
                  className="contact__map-action"
                  onClick={() => {
                    const coords = `${officeLocation.lat},${officeLocation.lng}`;
                    const url = `https://www.google.com/maps/dir//${coords}`;
                    window.open(url, "_blank");
                  }}
                  title="Прокласти маршрут"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"
                      fill="currentColor"
                    />
                  </svg>
                  Прокласти маршрут
                </button>

                <button
                  className="contact__map-action"
                  onClick={() => {
                    navigator.clipboard.writeText(officeLocation.address);
                    // Можна додати повідомлення про копіювання
                    const button = document.activeElement;
                    const originalText = button.textContent;
                    button.textContent = "Скопійовано!";
                    setTimeout(() => {
                      button.textContent = originalText;
                    }, 2000);
                  }}
                  title="Копіювати адресу"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                      fill="currentColor"
                    />
                  </svg>
                  Копіювати адресу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
