import {
  Header as DsfrHeader,
  ToolItem,
  Logo,
  HeaderBody,
  Service,
  ToolItemGroup,
  Tool,
  HeaderNav,
  NavItem,
} from "@dataesr/react-dsfr"

const Header = () => (
  <DsfrHeader>
    <HeaderBody>
      <Logo>Ministère du travail, du plein l’emploi et de l’insertion</Logo>
      <Service
        title="Egapro"
        description="	Index égalité professionnelle et écarts de représentation femme-homme"
      />
      <Tool>
        <ToolItemGroup>
          <ToolItem icon="ri-user-fill" link="#">
            Connexion
          </ToolItem>
        </ToolItemGroup>
      </Tool>
    </HeaderBody>
    <HeaderNav>
      <NavItem title="Page d'accueil" link="/" />
      <NavItem title="Calculer - Déclarer mon index" link="/" />
      <NavItem title="Déclarer mes Écarts" link="/" />
    </HeaderNav>
  </DsfrHeader>
)

export default Header
