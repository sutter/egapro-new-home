import React from "react"
import { Skiplinks as DsfrSkiplinks, SkiplinkItem } from "@dataesr/react-dsfr"

const SkipLinks = () => (
  <DsfrSkiplinks>
    <SkiplinkItem href="#contenu">Contenu</SkiplinkItem>
    <SkiplinkItem href="#header-navigation">Menu</SkiplinkItem>
    <SkiplinkItem href="#footer">Pied de page</SkiplinkItem>
  </DsfrSkiplinks>
)

export default SkipLinks
