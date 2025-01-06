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

  return ();

  export default WorkExperienceSection;