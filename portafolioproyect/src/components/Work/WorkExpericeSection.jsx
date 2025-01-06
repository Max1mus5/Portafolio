import { useTranslation } from "react-i18next";
import "./workexperiencesection.css";

const WorkExperienceSection = ({ darkMode = false }) => {
  const { t } = useTranslation("workExperience");

  const workExperiences = [
    {
      company: "WMT (CallWave)",
      role: t("workExperience.wmt.role"),
      period: t("workExperience.wmt.period"),
      imageUrl:
        "https://www.callwave.com/hs-fs/hubfs/CallWave-Homepage-Hero-1.png?width=1920&height=700&name=CallWave-Homepage-Hero-1.png",
      altText: "WMT Logo",
      achievements: [
        t("workExperience.wmt.achievements.first"),
        t("workExperience.wmt.achievements.second"),
      ],
    },
    {
      company: "MyWacc",
      role: t("workExperience.mywacc.role"),
      period: t("workExperience.mywacc.period"),
      imageUrl: "https://mywacc.com/images/new-design/home/new-home.png",
      altText: "MyWacc Logo",
      achievements: [
        t("workExperience.mywacc.achievements.first"),
        t("workExperience.mywacc.achievements.second"),
        t("workExperience.mywacc.achievements.third"),
      ],
    },
  ];

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