import { useState, useEffect } from "react";
import {
  BadgeContainer,
  CardContainer,
  HistoryCard,
  ExpandableSpace
} from "@/components"
import { useWindowSize, useScrollLocation } from "@/hooks";
import { useTranslation } from "react-i18next";

export const InformationCards = () => {
  const { t } = useTranslation();
  const workExperiences = ["goRide", "mapQuestAsia", "gmmGrammy"];
  const otherWorkExperiences = ["mamoru", "leWagonTokyo"];

  // TODO: Read these values from API instead.
  const skills = ["Node", "React", "JavaScript", "HTML", "CSS", "Express.js", "Next.js", "Ruby on Rails", "C#", "VB.NET", "GraphQL", "PostgreSQL", "SQL Server", "Bootstrap", "Heroku", "Git", "GitHub", "GitHub Projects", "Trello", "Photoshop", "Figmas"];

  const windowSize = useWindowSize();
  const scrollLocation = useScrollLocation();
  const [spaceExpanded, setSpaceExpanded] = useState(false);

  useEffect(() => {
    if (scrollLocation?.y > 20) {
      setSpaceExpanded(true);
    } else {
      setSpaceExpanded(false);
    }
  }, [scrollLocation]);

  return (
    <div className={`${windowSize.containerClass} mt-3`}>
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
          <CardContainer title="Skills">
            <BadgeContainer contents={skills} />
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"}/>
          <CardContainer title="Languages">
            <div className="row">
              <div className="col-12 col-lg-4">
                <p className="mb-0">Thai</p>
                <p className="mb-2 text-muted fst-italic">{"Native / Billingual"}</p>
              </div>
              <div className="col-12 col-lg-4">
                <p className="mb-0">English</p>
                <p className="mb-2 text-muted fst-italic">{"Native / Billingual"}</p>
              </div>
              <div className="col-12 col-lg-4">
                <p className="mb-0">Japanese</p>
                <p className="mb-0 text-muted fst-italic">{"Conversational"}</p>
              </div>
            </div>
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"60px"}/>
          <CardContainer title="Education">
            <HistoryCard
              title="Web Development Bootcamp"
              placeName="Le Wagon Tokyo"
              dateRange="07/2021 - 09/2021"
              location="Tokyo, Japan"
            />
            <HistoryCard
              title="Information Technology"
              subtitle="Bachelor's"
              placeName="Thai-Nichi Institute of Technology"
              dateRange="07/2011 - 06/2015"
              location="Bangkok, Thailand"
            />
          </CardContainer>
          <ExpandableSpace expanded={spaceExpanded} height={"40px"}/>
          <CardContainer title="Interests">
            <div>
              <p>
                {"Cooking, Puzzle, Hiking, Physical Fitness, Photography, Travelling, Video Games, DIY Projects"}
              </p>
            </div>
          </CardContainer>
        </div>
      </div>
    </div>
  )
}
