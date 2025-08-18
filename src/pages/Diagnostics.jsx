import React from "react";
import "../styles/scss/Diagnostics.scss";

const Diagnostics = () => {
  const handleOrderClick = () => {
    window.open("https://portal.biosafe.com.ua", "_blank");
  };

  const diagnosticServices = [
    {
      title:
        "ПЛР-діагностику збудників вірусних, бактеріальних та паразитарних інфекцій",
      icon: "🧬",
    },
    {
      title: "імунофлуоресцентні дослідження для виявлення антигенів і антитіл",
      icon: "🔬",
    },
    {
      title: "паразитологічні методи",
      icon: "🦠",
    },
    {
      title:
        "бактеріологічні дослідження з ідентифікацією збудників та визначенням антимікробної чутливості",
      icon: "🧪",
    },
    {
      title:
        "мікологічну діагностику (включаючи дерматофіти, дріжджоподібні гриби, криптококи)",
      icon: "🔬",
    },
    {
      title: "цитологічні аналізи мазків із патологічного матеріалу",
      icon: "📊",
    },
    {
      title: "гістологічні дослідження тканин з морфологічною оцінкою",
      icon: "🧬",
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
                <div className="diagnostics__service-icon">{service.icon}</div>
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
