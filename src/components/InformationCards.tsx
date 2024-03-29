import { useState, useEffect } from "react";
import {
  BadgeContainer,
  CardContainer,
  HistoryCard,
  ExpandableSpace,
  Skeleton,
  RunningLine,
} from "@/components"
import { useWindowSize, useScrollLocation } from "@/hooks";
import { useTranslation } from "react-i18next";

/**
 * Component use to contain all the cards in the middle of the app.
 * Such as work experiences, skills, educations, etc.
 * @returns InformationCards component.
 */
export const InformationCards = () => {
  const { t } = useTranslation();
  const workExperiences = ["whiteRabbit", "goRide", "mapQuestAsia", "gmmGrammy"];
  const otherWorkExperiences = ["mamoru", "leWagonTokyo"];
  const languages = ["thai", "english", "japanese"];
  const educations = ["leWagonTokyo", "tni"];

  const [skills, setSkills] = useState([]);
  const [skillsLoading, setSkillsLoading] = useState(true);

  const windowSize = useWindowSize();
  const scrollLocation = useScrollLocation();
  const [spaceExpanded, setSpaceExpanded] = useState(false);

  const fetchSkill = async () => {
    // Set loading to true to render Skeleton component.
    setSkillsLoading(true);
    await fetch("/api/skills").then(async (res) => {
      await res.json().then((data) => {
        if (data?.error) throw new Error(data?.error);
        setSkills(data?.data);
        setSkillsLoading(false);
      }).catch((error) => {
        console.error({ error });
        setSkillsLoading(false);
      })
    });
  };

  useEffect(() => {
    // If there's no skill data, fetch it from the API.
    if (!!skills?.length === false) {
      fetchSkill();
    }
  }, [skills])

  useEffect(() => {
    if (scrollLocation?.y !== undefined && scrollLocation?.y > 20) {
      setSpaceExpanded(true);
    } else {
      setSpaceExpanded(false);
    }
  }, [scrollLocation]);

  return (
    <div className={`${windowSize.containerClass} overflow-hidden mt-3`}>
      <div className="d-flex position-relative w-100 justify-content-center">
        <RunningLine height="2000px" />
      </div>
      <div className="row">
        {/* Left column */}
        <div className="col-12 col-lg-6">
          <ExpandableSpace expanded={spaceExpanded} height={"20px"}/>
          <CardContainer title={t("WorkExperience.title")}>
            {workExperiences.map((work, index) => {
              return (
                <HistoryCard
                  key={`work-${index}`}
                  title={t(`WorkExperience.${work}.title`)}
                  subtitle={t(`WorkExperience.${work}.subtitle`)}
                  placeName={t(`WorkExperience.${work}.placeName`)}
                  dateRange={t(`WorkExperience.${work}.dateRange`)}
                  location={t(`WorkExperience.${work}.location`)}
                  // Support up to five tasks per one work place.
                  tasks={[
                    t(`WorkExperience.${work}.tasks.1`),
                    t(`WorkExperience.${work}.tasks.2`),
                    t(`WorkExperience.${work}.tasks.3`),
                    t(`WorkExperience.${work}.tasks.4`),
                    t(`WorkExperience.${work}.tasks.5`),
                  ].filter((task) => !!task)}
                />
              )
            })}
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"}/>
          <CardContainer title="Freelance / Volunteer">
            {otherWorkExperiences.map((work, index) => {
              return (
                <HistoryCard
                  key={`otherWork-${index}`}
                  title={t(`FreeLanceVolunteer.${work}.title`)}
                  subtitle={t(`FreeLanceVolunteer.${work}.subtitle`)}
                  placeName={t(`FreeLanceVolunteer.${work}.placeName`)}
                  dateRange={t(`FreeLanceVolunteer.${work}.dateRange`)}
                  location={t(`FreeLanceVolunteer.${work}.location`)}
                  // Support up to five tasks per one work place.
                  tasks={[
                    t(`FreeLanceVolunteer.${work}.tasks.1`),
                    t(`FreeLanceVolunteer.${work}.tasks.2`),
                    t(`FreeLanceVolunteer.${work}.tasks.3`),
                    t(`FreeLanceVolunteer.${work}.tasks.4`),
                    t(`FreeLanceVolunteer.${work}.tasks.5`),
                  ].filter((task) => !!task)}
                />
              )
            })}
          </CardContainer>
        </div>
        {/* Right column */}
        <div className="col-12 col-lg-6">
          <ExpandableSpace expanded={spaceExpanded} height={"80px"}/>
          <CardContainer title={t("Skills.title")}>
            { skillsLoading ?
              <Skeleton width="" height="200px" />
              : <BadgeContainer contents={skills} />
            }
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"}/>
          <CardContainer title={t("Languages.title")}>
            <div className="row">
              {languages?.map((lang, index) => {
                return (
                  <div key={`language-${index}`} className="col-12 col-lg-4">
                    <p className="mb-0">{t(`Languages.${lang}.title`)}</p>
                    <p className="mb-2 text-muted fst-italic">{t(`Languages.${lang}.level`)}</p>
                  </div>
                )
              })}
            </div>
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"60px"}/>
          <CardContainer title={t("Education.title")}>
            {educations?.map((education, index) => {
              return (
                <HistoryCard
                  key={`education-${index}`}
                  title={t(`Education.${education}.title`)}
                  subtitle={t(`Education.${education}.subtitle`)}
                  placeName={t(`Education.${education}.placeName`)}
                  dateRange={t(`Education.${education}.dateRange`)}
                  location={t(`Education.${education}.location`)}
                />
              );
            })}
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"}/>
          <CardContainer title={t("Interests.title")}>
            <p>
              {t("Interests.content")}
            </p>
          </CardContainer>
        </div>
      </div>
    </div>
  )
}
