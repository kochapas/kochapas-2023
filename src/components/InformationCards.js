import {
  BadgeContainer,
  CardContainer,
  HistoryCard,
} from "@/components"

export const InformationCards = () => {
  // TODO: Read these values from API instead.
  const skills = ["Node", "React", "JavaScript", "HTML", "CSS", "Express.js", "Next.js", "Ruby on Rails", "C#", "VB.NET", "GraphQL", "PostgreSQL", "SQL Server", "Bootstrap", "Heroku", "Git", "GitHub", "GitHub Projects", "Trello", "Photoshop", "Figmas"];

  return (
    <div className="container w-75 mt-3">
      <div className="row">
        {/* Left column */}
        <div className="col-12 col-lg-6">
          <CardContainer title="Work Experience">
            <HistoryCard
              title="Full-Stack Web Developer"
              subtitle="Permanent"
              placeName="GO RIDE Republic"
              dateRange="09/2021 - 03/2023"
              location="Tokyo, Japan"
              tasks={[
                "Developed web applications on the Shopify platform utilizing Node.js for the backend and React.js for the frontend.",
                "Designed and maintained databases using GraphQL and PostgresQL.",
                "Helped to train and onboard new employees.",
                "Conducted code reviews and provided feedback to other team members to ensure code quality and consistency.",
                "Conduct analysis and offer insights on the company's applications to enhance efficiency, as well as strategize the timeline for implementing improvements."
              ]}
            />
            <HistoryCard
              title="GIS Software Developer"
              subtitle="Permanent"
              placeName="MapQuestAsia"
              dateRange="06/2015 - 06/2020"
              location="Bangkok, Thailand"
              tasks={[
                "Design, code, test, and report windows/web applications based on requirements. Specialize in C# language.",
              ]}
            />
            <HistoryCard
              title="iOS Developer"
              subtitle="Internship"
              placeName="GMM Grammy"
              dateRange="06/2014 - 08/2014"
              location="Bangkok, Thailand"
            />
          </CardContainer>
          <CardContainer title="Freelance / Volunteer">
            <HistoryCard
              title="Frontend Developer"
              subtitle="Volunteer"
              placeName="Mamoru"
              dateRange="09/2021 - Present"
              location="Tokyo, Japan"
              tasks={[
                "Volunteered with the Mamoru team to develop a website that promotes global sustainability.",
                "Utilized React.js to build the frontend, provided code reviews, and mentorship to junior team members."
              ]}
            />
            <HistoryCard
              title="Coding Teaching Assistant"
              subtitle="Freelance"
              placeName="Le Wagon Tokyo"
              dateRange="07/2022 - 12/2022"
              location="Tokyo, Japan"
              tasks={[
                "Collaborated with a coding instructor in a coding bootcamp, providing guidance and mentorship to students on website development using Ruby on Rails.",
              ]}
            />
          </CardContainer>
        </div>
        {/* Right column */}
        <div className="col-12 col-lg-6">
          <CardContainer title="Skills">
            <BadgeContainer contents={skills} />
          </CardContainer>
          <CardContainer title="Languages">
            <div className="row">
              <div className="col-12 col-lg-4">
                <p className="mb-0">Thai</p>
                <p className="text-muted fst-italic">{"Native / Billingual"}</p>
              </div>
              <div className="col-12 col-lg-4">
                <p className="mb-0">English</p>
                <p className="text-muted fst-italic">{"Native / Billingual"}</p>
              </div>
              <div className="col-12 col-lg-4">
                <p className="mb-0">Japanese</p>
                <p className="text-muted fst-italic">{"Conversational"}</p>
              </div>
            </div>
          </CardContainer>
          <CardContainer title="Education">
            <HistoryCard
              title="Web Development Bootcamp"
              placeName="Le Wagon Tokyo"
              dateRange="07/2021 - 09/2021"
              location="Tokyo, Japan"
            />
            <HistoryCard
              title="Information Technology"
              subtitle="Bachelor's degree"
              placeName="Thai-Nichi Institute of Technology"
              dateRange="07/2011 - 06/2015"
              location="Bangkok, Thailand"
            />
          </CardContainer>
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
