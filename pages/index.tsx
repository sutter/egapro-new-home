import type { NextPage } from "next"
import {
  Col,
  Container,
  Link as DSLink,
  Row,
  Text,
  Title,
} from "@dataesr/react-dsfr"
import Link from "next/link"
import Card from "../components/Card"

const Index: NextPage = () => {
  return (
    <section>
      <div className="bg-grey-975 fr-py-10w">
        <Container>
          <Row gutters>
            <Col n="lg-7 12">
              <Title as="h1" look="h1">
                Bienvenue sur Egapro
              </Title>
              <Text>
                Toutes les entreprises d’au moins 50 salariés doivent calculer
                et publier leur Index de l’égalité professionnelle entre les
                femmes et les hommes, chaque année au plus tard le 1er mars.
              </Text>
              <Text>
                Les entreprises qui emploient au moins 1 000 salariés pour le
                troisième exercice consécutif doivent également calculer et
                publier leurs écarts éventuels de représentation entre les
                femmes et les hommes parmi leurs cadres dirigeants et les
                membres de leurs instances dirigeantes, chaque année au plus
                tard le 1er mars.
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
        </Container>
      </div>
      <Container>
        <div className="fr-py-8w">
          <Row gutters>
            <Col n="md-6 12">
              <Card
                title="Index de l'égalité professionnelle femmes-hommes"
                action={
                  <Link href="/index">
                    <a className="fr-btn">Calculer - Déclarer mon Index</a>
                  </Link>
                }
              >
                <>
                  <div>
                    Calculer et/ou déclarer votre index de l&#39;égalité
                    professionnelle entre les femmes et les hommes.
                  </div>
                  <div className="fr-mt-2v">
                    <DSLink
                      className="ds-link ds-text-sm"
                      icon="ri-arrow-right-line"
                      iconPosition="right"
                      href="#"
                    >
                      Pour plus d&#39;informations sur l&#39;index Egapro
                    </DSLink>
                  </div>
                </>
              </Card>
            </Col>
            <Col n="md-6 12">
              <Card
                title="Répartition équilibrée femmes-hommes"
                action={
                  <Link href="/ecart-rep">
                    <a className="fr-btn">Déclarer mes Écarts</a>
                  </Link>
                }
              >
                <>
                  <div>
                    Déclarer vos écarts de représentation entre les femmes et
                    les hommes dans les postes de direction.
                  </div>
                  <div className="fr-mt-2v">
                    <DSLink
                      className="ds-link ds-text-sm"
                      icon="ri-arrow-right-line"
                      iconPosition="right"
                      href="#"
                    >
                      Pour plus d&#39;informations sur la répartition équilibrée
                    </DSLink>
                  </div>
                </>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Index
