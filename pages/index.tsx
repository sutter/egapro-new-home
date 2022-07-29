import type { NextPage } from "next"
import { Link as DSLink } from "@dataesr/react-dsfr"

const Index: NextPage = () => {
  return (
    <section>
      <div className="ds_banner fr-py-10w">
        <div className="fr-container">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-lg-7">
              <h1>Bienvenue sur Egapro</h1>
              <p>
                Toutes les entreprises d’au moins 50 salariés doivent calculer
                et publier leur Index de l’égalité professionnelle entre les
                femmes et les hommes, chaque année au plus tard le 1er mars.
              </p>
              <p>
                Les entreprises qui emploient au moins 1 000 salariés pour le
                troisième exercice consécutif doivent également calculer et
                publier leurs écarts éventuels de représentation entre les
                femmes et les hommes parmi leurs cadres dirigeants et les
                membres de leurs instances dirigeantes, chaque année au plus
                tard le 1er mars.
              </p>
            </div>
            <div className="fr-col-lg-5">
              <img
                src="https://via.placeholder.com/600x400"
                height="400"
                width="600"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fr-container fr-py-8w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-lg-6">
            <div>
              <div className="fr-card fr-card--no-arrow">
                <div className="fr-card__body">
                  <div className="fr-card__content">
                    <h2 className="fr-card__title">
                      Index de l'égalité professionnelle femmes-hommes
                    </h2>
                    <p className="fr-card__desc">
                      Calculer et/ou déclarer votre index de l'égalité
                      professionnelle entre les femmes et les hommes.
                    </p>
                  </div>
                  <div className="fr-card__footer">
                    <a href="#" className="fr-btn">
                      Calculer - Déclarer mon Index
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="fr-mt-3v">
              <DSLink
                className="ds-link ds-text-sm"
                icon="ri-arrow-right-line"
                iconPosition="right"
                href="#"
              >
                Pour plus d'informations sur l'index Egapro
              </DSLink>
            </div>
          </div>
          <div className="fr-col-lg-6">
            <div>
              <div className="fr-card fr-card--no-arrow fr-mb-2">
                <div className="fr-card__body">
                  <div className="fr-card__content">
                    <h2 className="fr-card__title">
                      Répartition équilibrée femmes-hommes
                    </h2>
                    <p className="fr-card__desc">
                      Déclarer vos écarts de représentation entre les femmes et
                      les hommes dans les postes de direction.
                    </p>
                  </div>
                  <div className="fr-card__footer">
                    <a href="#" className="fr-btn">
                      Déclarer mes Ecarts
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="fr-mt-3v">
              <DSLink
                className="ds-link ds-text-sm"
                icon="ri-arrow-right-line"
                iconPosition="right"
                href="#"
              >
                Pour plus d'informations sur la répartition équilibrée
              </DSLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
