import { useTranslation } from "react-i18next";
import "./workexperiencesection.css";

const WorkExperienceSection = ({ darkMode = false }) => {
  const { t } = useTranslation("work"); // Usamos el namespace "work"

  // Obtenemos la traducción de "work" como un array de objetos
  const workExperiences = t("work", { returnObjects: true });

  return (
    <section className="work-experience-section" id="work-experience">
      <div className="work-experiences">
        {workExperiences.map((workExperience, index) => (
          <div
            key={index}
            className={`work-experience ${darkMode ? "dark" : "light"}`}
          >
            <div className="header-work-experience">
            <img
                src={workExperience.imageUrl}
                alt={workExperience.altText}
                className={`image-work-experience ${
                  darkMode
                    ? workExperience.altText === "MyWacc Logo" || workExperience.altText === "GISOSA Logo"
                      ? "image-light"
                      : ""
                    : workExperience.altText === "WMT Logo"
                    ? "image-dark"
                    : ""
                }`}
              />
              <div className="info-work-experience">
                <h3 className="company-work-experience" onClick={() => window.open(workExperience.url, "_blank")}>
                  {workExperience.company}
                </h3>
                <span className="role-work-experience">
                  {workExperience.role}
                </span>
                <span className="period-work-experience">
                  {workExperience.period}
                </span>
              </div>
            </div>
            <div className="achievements-work-experience">
              <h3 className="achievements-title-work-experience">
                {t("achievements")} {/* Traducimos "achievements" */}
              </h3>
              <ul>
                {workExperience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;