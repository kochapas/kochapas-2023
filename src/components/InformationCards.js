import { CardContainer } from "./CardContainer"

export const InformationCards = () => {
  return (
    <div className="container w-75 mt-3">
      <div className="row">
        <div className="col-6">
          <CardContainer
            title="Card 1.1"
            content={(
              <div>
                <p>
                  Hello World
                </p>
              </div>
            )}
          />
          <CardContainer
            title="Card 1.2"
            content={(
              <div>
                <p>
                  Hello World
                </p>
                <p>
                  Hello World
                </p>
              </div>
            )}
          />
        </div>
        <div className="col-6">
          <CardContainer
            title="Card 2.1"
            content={(
              <div>
                <p>
                  Hello World
                </p>
                <p>
                  Hello World
                </p>
                <p>
                  Hello World
                </p>
              </div>
            )}
          />
          <CardContainer
            title="Card 2.2"
            content={(
              <div>
                <p>
                  Hello World
                </p>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}
