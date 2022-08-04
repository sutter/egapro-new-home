import type { NextPage } from "next"
import { Col, Container, Row, Text, Title } from "@dataesr/react-dsfr"
import Card from "../../components/Card"

const Index: NextPage = () => {
  return (
    <section>
      <div className="fr-py-10w">
        <Container>
          <Row gutters>
            <Col n="lg-7 12">
              <Title as="h1" look="h1">
                <span className="ds-block fr-h3 ds-mb-0">Bienvenue sur</span>{" "}
                Index Egapro
              </Title>
              <Text>
                L’Index de l&#39;égalité professionnelle a été conçu pour faire
                progresser au sein des entreprises l’égalité salariale entre les
                femmes et les hommes.
              </Text>
              <Text>
                Il permet aux entreprises de mesurer, en toute transparence, les
                écarts de rémunération entre les sexes et de mettre en évidence
                leurs points de progression. Lorsque des disparités salariales
                sont constatées, des mesures de correction doivent être prises.
              </Text>
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
          <Title as="h2" look="h6" className="fr-mt-6w">
            Comment calculer et déclarer l’index égalité femmes-hommes&nbsp;?
          </Title>
          <Row gutters>
            <Col n="md-6 12">
              <Card
                detail="Choix 1"
                title="Calcul et déclaration de l'index"
                action={
                  <a href="#" className="fr-btn">
                    Commencer mon calcul
                  </a>
                }
              >
                <div>
                  Vous pouvez calculer votre index égalité professionnelle
                  femmes-hommes sur Index Egapro et le déclarer, si vous le
                  souhaitez, suite au calcul.
                </div>
              </Card>
            </Col>
            <Col n="md-6 12">
              <Card
                detail="Choix 2"
                title="Déclaration directe de l'index"
                action={
                  <a href="#" className="fr-btn">
                    Déclarer directement
                  </a>
                }
              >
                <div>
                  Vous pouvez déclarer votre index égalité professionnelle
                  femmes-hommes calculé par ailleurs directement via le
                  formulaire suivant.
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Index
