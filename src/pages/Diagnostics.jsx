import React from "react";
import antibodiesIcon from "../assets/images/antibodies.png";
import microscopeIcon from "../assets/images/microscope.png";
import petriDishIcon from "../assets/images/petriDish.png";
import "../styles/scss/Diagnostics.scss";

const Diagnostics = () => {
  const handleOrderClick = () => {
    window.open("https://portal.biosafe.com.ua", "_blank");
  };

  const diagnosticServices = [
    {
      title: "імунофлуоресцентні дослідження",
      icon: antibodiesIcon,
    },
    {
      title: "паразитологічні дослідження",
      icon: microscopeIcon,
    },
    {
      title: "бактеріологічні дослідження",
      icon: petriDishIcon,
    },
    {
      title: "цитологічні дослідження",
      icon: microscopeIcon,
    },
    {
      title: "мікологічні дослідження",
      icon: petriDishIcon,
    },
    {
      title: "гістологічні дослідження",
      icon: microscopeIcon,
    },
  ];

  return (
    <div className="diagnostics">
      <div className="container">
        {/* Hero Section */}
        <section className="diagnostics__hero">
          <div className="diagnostics__hero-content">
            <h1 className="diagnostics__hero-title">
              Ветеринарна лабораторна діагностика
            </h1>
            <p className="diagnostics__hero-description">
              Ми надаємо широкий спектр високоякісних лабораторних послуг для
              ветеринарної медицини, що відповідають міжнародним стандартам,
              забезпечуючи надійну основу для точної діагностики, ефективного
              лікування та профілактики захворювань тварин.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="diagnostics__services">
          <div className="diagnostics__services-header">
            <h2 className="diagnostics__services-title">
              Наші напрями досліджень охоплюють
            </h2>
          </div>

          <div className="diagnostics__services-grid">
            {diagnosticServices.map((service, index) => (
              <div key={index} className="diagnostics__service-card">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="diagnostics__service-icon"
                />
                <p className="diagnostics__service-title">{service.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Standards Section */}
        <section className="diagnostics__standards">
          <div className="diagnostics__standards-content">
            <div className="diagnostics__standards-icon">🏆</div>
            <p className="diagnostics__standards-text">
              У роботі ми застосовуємо валідовані та верифіковані методики з
              дотриманням вимог міжнародних ветеринарних стандартів, зокрема{" "}
              <strong>
                CLSI VET (Clinical and Laboratory Standards Institute –
                Veterinary Guidelines)
              </strong>{" "}
              та інших актуальних настанов, що забезпечує достовірність і
              клінічну цінність результатів.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="diagnostics__cta">
          <button
            className="diagnostics__cta-button"
            onClick={handleOrderClick}
            aria-label="Перейти до порталу замовлення"
          >
            <span className="diagnostics__cta-text">
              Перейти на портал замовлення
            </span>
            <span className="diagnostics__cta-arrow">→</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Diagnostics;
