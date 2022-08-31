import { ReactNode } from "react"
import { CardFooter, ButtonGroup } from "@dataesr/react-dsfr"

type CardProps = {
  title: string
  children: ReactNode
  action?: ReactNode
  detail?: string
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Title = ({
  text,
  Tag,
  className,
}: {
  text: string
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
}) => {
  return <Tag className={className}>{text}</Tag>
}

const Card: React.FunctionComponent<CardProps> = ({
  detail,
  title,
  children,
  action,
  titleTag = "h2",
}) => {
  return (
    <div className="fr-card fr-card--sm">
      <div className="fr-card__body fr-card__start">
        <div className="fr-card__content">
          {detail && <div className="fr-card__detail">{detail}</div>}
          <Title Tag={titleTag} text={title} className="fr-card__title" />
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
}

export default Card
