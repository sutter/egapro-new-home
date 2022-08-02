import {
  Footer as DsfrFooter,
  FooterBody,
  FooterBodyItem,
  FooterBottom,
  Link,
  Logo,
  FooterLink,
  FooterCopy,
} from "@dataesr/react-dsfr"

const Footer = () => (
  <DsfrFooter>
    <FooterBody description="Egapro a été développé par les équipes de la fabrique numérique des ministères sociaux.">
      <Logo href="https://travail-emploi.gouv.fr/">
        Ministère du travail, du plein l’emploi et de l’insertion
      </Logo>
      <FooterBodyItem>
        <Link
          href="https://jedonnemonavis.numerique.gouv.fr/Demarches/2240?&view-mode=formulaire-avis&nd_mode=en-ligne-enti%C3%A8rement&nd_source=button&key=73366ddb13d498f4c77d01c2983bab48"
          target="_blank"
        >
          Donnez-nous votre avis
        </Link>
      </FooterBodyItem>
      <FooterBodyItem>
        <Link href="https://github.com/SocialGouv/egapro" target="_blank">
          Contribuez sur Github
        </Link>
      </FooterBodyItem>
    </FooterBody>
    <FooterBottom>
      <FooterLink href={"/"}>Mentions légales</FooterLink>
      <FooterLink href={"/"}>
        Accessibilité&nbsp;: partiellement conforme
      </FooterLink>
      <FooterLink href={"/"}>
        Conditions générales d&lsquo;utilisation
      </FooterLink>
      <FooterLink href={"/"}>Politique de confidentialité</FooterLink>
      <FooterCopy>
        <p>
          Sauf mention contraire, tous les contenus de ce site sont sous{" "}
          <a
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            target="_blank"
            rel="noreferrer"
          >
            licence etalab-2.0
          </a>
        </p>
      </FooterCopy>
    </FooterBottom>
  </DsfrFooter>
)

export default Footer
