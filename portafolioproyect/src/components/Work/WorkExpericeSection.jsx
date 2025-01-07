import { useTranslation } from "react-i18next";
import "./workexperiencesection.css";

const WorkExperienceSection = ({ darkMode = false }) => {
  const { t } = useTranslation("workExperience");

  const workExperiences = t("work", { returnObjects: true });

  return (
    <section className="work-experience-section" id="work-experience">
      <h1 className="work-experience-title">
        {t("workExperience.workExperience")}
      </h1>
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
                className="image-work-experience"
              />
              <div className="info-work-experience">
                <h3 className="company-work-experience">
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
                {t("workExperience.achievements")}
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