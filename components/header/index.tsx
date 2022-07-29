import {
  Header as DsfrHeader,
  ToolItem,
  Logo,
  HeaderBody,
  Service,
  ToolItemGroup,
  Tool,
} from "@dataesr/react-dsfr"

const Header = () => (
  <DsfrHeader>
    <HeaderBody>
      <Logo>
        Ministère du Travail, de l&lsquo;Emploi et de l&lsquo;Insertion
      </Logo>
      <Service
        title="Egapro"
        description="	Index égalité professionnelle et écarts de représentation femme-homme"
      />
      <Tool>
        <ToolItemGroup>
          <ToolItem link="/">
            <span className="fr-fi-user-fill fr-link--icon-left">
              Me connecter
            </span>
          </ToolItem>
        </ToolItemGroup>
      </Tool>
    </HeaderBody>
  </DsfrHeader>
)

export default Header
