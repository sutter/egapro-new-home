import {
  Footer as DsfrFooter,
  FooterBody,
  FooterBodyItem,
  FooterBottom,
  Link,
  Logo,
  FooterLink,
} from "@dataesr/react-dsfr"

const Footer = () => (
  <DsfrFooter>
    <FooterBody description="Egapro a été développé par les équipes de la fabrique numérique des ministères sociaux.">
      <Logo href="https://travail-emploi.gouv.fr/">
        Ministère du Travail, de l’Emploi et de l’Insertion
      </Logo>
      <FooterBodyItem>
        <Link
          href="https://jedonnemonavis.numerique.gouv.fr/Demarches/2240?&view-mode=formulaire-avis&nd_mode=en-ligne-enti%C3%A8rement&nd_source=button&key=73366ddb13d498f4c77d01c2983bab48"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donnez-nous votre avis
        </Link>
      </FooterBodyItem>
      <FooterBodyItem>
        <Link
          href="https://github.com/SocialGouv/egapro"
          target="_blank"
          rel="noopener noreferrer"
        >
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
    </FooterBottom>
  </DsfrFooter>
)

export default Footer
