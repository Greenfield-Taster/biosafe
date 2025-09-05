import React, { useState, useEffect } from "react";
import consultantsData from "../data/consultants.json";
import consultant1Photo from "../assets/images/consultant-1.jpg";
import consultant2Photo from "../assets/images/default-avatar.jpg";
import consultant3Photo from "../assets/images/default-avatar.jpg";
import consultant4Photo from "../assets/images/default-avatar.jpg";

import "../styles/scss/Consultants.scss";

const Consultants = () => {
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [consultants, setConsultants] = useState([]);

  const consultantPhotos = {
    1: consultant1Photo,
    2: consultant2Photo,
    3: consultant3Photo,
    4: consultant4Photo,
  };

  const getPhoto = (consultantId) => {
    return consultantPhotos[consultantId];
  };

  useEffect(() => {
    setConsultants(consultantsData.consultants);
  }, []);

  const openModal = (consultant) => {
    setSelectedConsultant(consultant);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedConsultant(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="consultants">
      <div className="consultants__container">
        {/* Заголовок страницы */}
        <div className="consultants__header">
          <h1>Наші Консультанти</h1>
          <p className="consultants__subtitle">
            Знайомтесь з нашими експертами, які мають багатий досвід у сфері
            лабораторної діагностики, управління якістю та консалтингу
          </p>
        </div>

        {/* Сетка карточек консультантов */}
        <div className="consultants__grid">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="consultant-card"
              onClick={() => openModal(consultant)}
            >
              <div className="consultant-card__photo">
                <img src={getPhoto(consultant.id)} alt={consultant.name} />
                <div className="consultant-card__overlay">
                  <span>Детальніше</span>
                </div>
              </div>
              <div className="consultant-card__info">
                <h3 className="consultant-card__name">{consultant.name}</h3>
                <p className="consultant-card__position">
                  {consultant.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedConsultant && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal__content">
              {/* Заголовок с фото и основной информацией */}
              <div className="modal__header">
                <div className="modal__photo">
                  <img
                    src={getPhoto(selectedConsultant.id)}
                    alt={selectedConsultant.name}
                  />
                </div>
                <div className="modal__title">
                  <h2>{selectedConsultant.name}</h2>
                  <p className="modal__position">
                    {selectedConsultant.position}
                  </p>
                </div>
              </div>

              {/* Основной контент модального окна */}
              <div className="modal__body">
                {/* Образование */}
                {selectedConsultant.education &&
                  selectedConsultant.education.length > 0 && (
                    <div className="modal__section">
                      <h3>Освіта</h3>
                      {selectedConsultant.education.map((edu, index) => (
                        <div key={index} className="education-item">
                          <h4>{edu.institution}</h4>
                          {edu.degree && (
                            <p>
                              <strong>Ступінь:</strong> {edu.degree}
                            </p>
                          )}
                          {edu.specialty && (
                            <p>
                              <strong>Спеціальність:</strong> {edu.specialty}
                            </p>
                          )}
                          {edu.year && (
                            <p>
                              <strong>Рік:</strong> {edu.year}
                            </p>
                          )}
                          {edu.specialization && (
                            <p>
                              <strong>Спеціалізація:</strong>{" "}
                              {edu.specialization}
                            </p>
                          )}
                          {edu.category && (
                            <p>
                              <strong>Категорія:</strong> {edu.category}
                            </p>
                          )}
                          {edu.programs && (
                            <div className="education-programs">
                              <strong>Освітні програми:</strong>
                              <ul>
                                {edu.programs.map((program, pIndex) => (
                                  <li key={pIndex}>{program}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                {/* Опыт работы */}
                {selectedConsultant.experience &&
                  selectedConsultant.experience.length > 0 && (
                    <div className="modal__section">
                      <h3>Досвід роботи</h3>
                      {selectedConsultant.experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                          <h4>{exp.company}</h4>
                          <p>
                            <strong>Посада:</strong> {exp.position}
                          </p>
                          {exp.experience && (
                            <p>
                              <strong>Досвід:</strong> {exp.experience}
                            </p>
                          )}
                          {exp.description && <p>{exp.description}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                {/* Ключевые компетенции */}
                {selectedConsultant.competencies &&
                  selectedConsultant.competencies.length > 0 && (
                    <div className="modal__section">
                      <h3>Ключові компетенції</h3>
                      <ul className="competencies-list">
                        {selectedConsultant.competencies.map(
                          (competency, index) => (
                            <li key={index}>{competency}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Профессиональное развитие */}
                {selectedConsultant.professionalDevelopment &&
                  Object.keys(selectedConsultant.professionalDevelopment)
                    .length > 0 && (
                    <div className="modal__section">
                      <h3>Професійний розвиток</h3>
                      {Object.entries(
                        selectedConsultant.professionalDevelopment
                      )
                        .sort(([a], [b]) => b - a) // сортируем по годам в убывающем порядке
                        .map(([year, activities]) => (
                          <div key={year} className="development-year">
                            <h4>{year} рік</h4>
                            <ul>
                              {activities.map((activity, index) => (
                                <li key={index}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultants;
