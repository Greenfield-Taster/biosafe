import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "../styles/scss/RequestConsultation.scss";

const RequestConsultation = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
    captcha: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Очистить ошибку для этого поля при изменении
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { fullName, email, phone, captcha } = formData;

    if (!fullName.trim()) {
      newErrors.fullName = "Поле ПІБ є обов'язковим";
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "ПІБ повинно містити принаймні 2 символи";
    }

    if (!email.trim()) {
      newErrors.email = "Поле Email є обов'язковим";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Введіть правильний email адрес";
      }
    }

    if (!phone.trim()) {
      newErrors.phone = "Поле Телефон є обов'язковим";
    } else {
      const phoneRegex = /^[+]?[0-9\s-()]{10,}$/;
      if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
        newErrors.phone = "Введіть правильний номер телефону";
      }
    }

    if (!captcha.trim()) {
      newErrors.captcha = "Поле Капча є обов'язковим";
    } else if (!validateCaptcha(captcha)) {
      newErrors.captcha = "Неправильний код капчі";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("validation_error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");
    setErrors({});

    try {
      // EmailJS configuration
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Проверка на то, что ключи настроены
      if (
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        throw new Error("EmailJS не настроен. Проверьте переменные окружения.");
      }

      const templateParams = {
        to_name: "BioSafe Team",
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.comment || "Немає додаткових коментарів",
        reply_to: formData.email,
        date: new Date().toLocaleString("uk-UA"),
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          comment: "",
          captcha: "",
        });

        loadCaptchaEnginge(6);

        // Автоматически убрать сообщение об успехе через 6 секунд
        setTimeout(() => setSubmitStatus(""), 6000);
      } else {
        throw new Error("Неспішний відповідь від сервера");
      }
    } catch (error) {
      console.error("Помилка відправлення:", error);

      if (error.message.includes("EmailJS не настроен")) {
        setSubmitStatus("config_error");
      } else if (error.text && error.text.includes("network")) {
        setSubmitStatus("network_error");
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case "success":
        return {
          type: "success",
          message:
            "✅ Заявку успішно надіслано! Ми зв'яжемося з вами найближчим часом.",
        };
      case "error":
        return {
          type: "error",
          message:
            "❌ Виникла помилка при надсиланні заявки. Спробуйте ще раз або зв'яжіться з нами іншим способом.",
        };
      case "network_error":
        return {
          type: "error",
          message:
            "🌐 Проблема з інтернет-з'єднанням. Перевірте підключення та спробуйте ще раз.",
        };
      case "config_error":
        return {
          type: "error",
          message:
            "⚙️ Служба email тимчасово недоступна. Будь ласка, зв'яжіться з нами іншим способом.",
        };
      case "validation_error":
        return {
          type: "error",
          message: "❌ Будь ласка, виправте помилки у формі нижче.",
        };
      default:
        return null;
    }
  };

  const statusMessage = getStatusMessage();

  return (
    <div className="request-consultation">
      <div className="request-consultation__container">
        <div className="request-consultation__header">
          <h1 className="request-consultation__title">
            Заявка на Консультацію
          </h1>
          <p className="request-consultation__subtitle">
            Заповніть форму нижче, і наш експерт зв'яжеться з вами найближчим
            часом для надання професійної консультації
          </p>
        </div>

        <form
          ref={formRef}
          className="request-consultation__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-section">
            <h2 className="form-section__title">Контактна форма:</h2>

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                ПІБ: <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.fullName ? "form-input--error" : ""
                }`}
                required
                placeholder="Введіть ваше повне ім'я"
                disabled={isSubmitting}
                autoComplete="name"
              />
              {errors.fullName && (
                <span className="form-error">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email: <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.email ? "form-input--error" : ""
                }`}
                required
                placeholder="example@email.com"
                disabled={isSubmitting}
                autoComplete="email"
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Телефон: <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.phone ? "form-input--error" : ""
                }`}
                required
                placeholder="+380 XX XXX XX XX"
                disabled={isSubmitting}
                autoComplete="tel"
              />
              {errors.phone && (
                <span className="form-error">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="comment" className="form-label">
                Коментар або питання:
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className="form-textarea"
                rows="4"
                placeholder="Опишіть ваше питання, тип консультації, або додайте будь-які додаткові коментарі..."
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group captcha-group">
              <label htmlFor="captcha" className="form-label">
                Код підтвердження: <span className="required">*</span>
              </label>
              <div className="captcha-container">
                <div className="captcha-image">
                  <LoadCanvasTemplate />
                </div>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className={`form-input captcha-input ${
                    errors.captcha ? "form-input--error" : ""
                  }`}
                  required
                  placeholder="Введіть код з картинки"
                  disabled={isSubmitting}
                  maxLength="6"
                />
              </div>
              {errors.captcha && (
                <span className="form-error">{errors.captcha}</span>
              )}
              <p className="captcha-help">
                Введіть символи, які ви бачите на картинці вище
              </p>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "НАДСИЛАННЯ..." : "НАДІСЛАТИ ЗАЯВКУ"}
            </button>

            {statusMessage && (
              <div
                className={`status-message status-message--${statusMessage.type}`}
              >
                <p>{statusMessage.message}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestConsultation;
