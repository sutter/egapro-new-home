import type { NextPage } from "next"
import {
  Col,
  Container,
  Row,
  Text,
  Title,
  Link as DSLink,
} from "@dataesr/react-dsfr"
import Card from "../components/Card"

const Index: NextPage = () => {
  return (
    <section>
      <div className="fr-py-10w">
        <Container>
          <Row gutters>
            <Col n="lg-7 12">
              <Title as="h1" look="h1">
                <span className="ds-block fr-h3 ds-mb-0">Bienvenue sur</span> la
                déclaration des écarts de représentation F/H dans les postes de
                direction
              </Title>
              <Text>
                <DSLink
                  className="ds-link ds-text-sm"
                  iconPosition="right"
                  href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044559192"
                  target="_blank"
                >
                  La loi du 24 décembre 2021
                </DSLink>{" "}
                visant à accélérer l’égalité économique et professionnelle a
                créé une obligation de représentation équilibrée entre les
                femmes et les hommes parmi les{" "}
                <strong>cadres dirigeants</strong> et les{" "}
                <strong>membres des instances dirigeantes</strong> des grandes
                entreprises, accompagnée d’une{" "}
                <strong>obligation de transparence</strong> en la matière.
              </Text>
              <a href="#" className="fr-btn">
                Déclarer les écarts éventuels de représentation femmes-hommes
              </a>
            </Col>
            <Col n="lg-5 12">
              <img
                src="https://via.placeholder.com/600x400"
                height="400"
                width="600"
                alt=""
                className="fr-responsive-img"
              />
            </Col>
          </Row>
          <Row gutters className="fr-mt-6w">
            <Col n="md-6 12">
              <Card
                detail="Transmission de déclaration"
                title="Suis-je éligible&nbsp;?"
              >
                <div>
                  Les entreprises qui emploient au moins 1 000 salariés pour le
                  troisième exercice consécutif doivent publier et déclarer
                  chaque année au plus tard le 1er mars leurs écarts éventuels
                  de représentation entre les femmes et les hommes parmi, d’une
                  part, leurs cadres dirigeants, et d’autre part, les membres de
                  leurs instances dirigeantes, en parallèle de la publication et
                  de la déclaration de leur Index de l’égalité professionnelle.
                </div>
              </Card>
            </Col>
            <Col n="md-6 12">
              <Card
                detail="Déclaration de vos écarts éventuels de représentation femmes-hommes"
                title="Besoin d’aide&nbsp;?"
                action={
                  <a
                    href="https://travail-emploi.gouv.fr/"
                    className="fr-btn fr-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulter le site du Ministère du Travail
                  </a>
                }
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl,
                  duis ac egestas donec tincidunt lorem. Sodales risus amet nisl
                  sed. Init tartatum designsystemus.
                </div>
              </Card>
            </Col>
          </Row>
          <div className="fr-mt-5w">
            <div className="ds-alert fr-alert fr-alert--warning">
              <i className="ds-alert__icon ri-alert-fill " />
              <h2 className="fr-alert__title">
                Calendrier exceptionnel en 2022
              </h2>
              <p>
                En 2022, pour la première année d’application, les entreprises
                ont jusqu’au 1er septembre 2022 pour procéder à cette
                publication.
              </p>
            </div>
          </div>
          <div className="fr-mt-5w">
            <div className="fr-callout">
              <ul>
                <li className="fr-mb-4v">
                  <strong>À compter de 2023</strong>, les entreprises devront
                  publier et déclarer leurs écarts éventuels de représentation
                  femmes-hommes pour les cadres dirigeants et les instances
                  dirigeantes selon le même calendrier que l’Index de l’égalité
                  professionnelle, à savoir au plus tard le 1er mars.
                </li>
                <li className="fr-mb-4v">
                  <strong>À compter du 1er mars 2026</strong>, elles devront
                  atteindre un objectif de 30% de femmes et d’hommes cadres
                  dirigeants et de 30% de femmes et d’hommes membres d’instances
                  dirigeantes. Les entreprises n’ayant pas atteint cet objectif
                  devront définir des mesures adéquates et pertinentes de
                  correction par accord collectif ou, à défaut, par décision
                  unilatérale après consultation du comité social et économique.
                </li>
                <li>
                  <strong>À compter du 1er mars 2029</strong>, elles devront
                  atteindre un objectif de 40% de femmes et d’hommes cadres
                  dirigeants et de 40% de femmes et d’hommes membres d’instances
                  dirigeantes. Les entreprises n’ayant pas atteint cet objectif
                  disposeront d’un délai de deux ans pour se mettre en
                  conformité, sous peine de pénalité financière. Elles devront
                  par ailleurs, au bout d’un an, publier des objectifs de
                  progression et les mesures de correction retenues.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Index
