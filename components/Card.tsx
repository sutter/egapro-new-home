import { FunctionComponent, ReactElement } from "react"
import { CardFooter, ButtonGroup } from "@dataesr/react-dsfr"

type CardProps = {
  title: string
  children: ReactElement
  action?: ReactElement
  detail?: string
}

const Card: FunctionComponent<CardProps> = ({
  detail,
  title,
  children,
  action,
}) => (
  <div className="fr-card fr-card--sm">
    <div className="fr-card__body fr-card__start">
      <div className="fr-card__content">
        {detail && <div className="fr-card__detail">{detail}</div>}
        <h2 className="fr-card__title">{title}</h2>
        <div className="fr-card__desc">{children}</div>
      </div>
      {action && (
        <CardFooter>
          <ButtonGroup isEquisized>{action}</ButtonGroup>
        </CardFooter>
      )}
    </div>
  </div>
)

export default Card
