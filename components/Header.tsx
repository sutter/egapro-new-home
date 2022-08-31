import Link from "next/link"
import React, { useState } from "react"

const Header = () => {
  const [modalMenuOpen, setModalMenuOpen] = useState(false)
  const items = [
    { title: "Accueil", href: "/" },
    { title: "Calculer - Déclarer mon Index", href: "/index" },
    { title: "Déclarer mes Écarts", href: "/ecart-rep" },
  ]
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    <Link href="/">
                      <a title="MonPsy" target="_self">
                        Ministère
                        <br />
                        du Travail,
                        <br />
                        du plein Emploi
                        <br />
                        et de l&#39;insertion
                      </a>
                    </Link>
                  </p>
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    onClick={() => setModalMenuOpen(true)}
                    data-fr-opened="false"
                    aria-controls="modal-main-nav"
                    aria-haspopup="menu"
                    title="Menu"
                    id="fr-btn-menu-mobile-4"
                  >
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <Link href="/">
                  <a title="MonPsy" target="_self">
                    <p className="fr-header__service-title">Egapro</p>
                  </a>
                </Link>
                <p className="fr-header__service-tagline">
                  Index de l’égalité professionnelle et répartition équilibrée
                  femmes – hommes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          modalMenuOpen
            ? "fr-header__menu fr-modal fr-modal--opened"
            : "fr-header__menu fr-modal"
        }
        id="modal-main-nav"
        aria-labelledby="fr-btn-menu-mobile-4"
      >
        <div className="fr-container">
          <button
            className="fr-link--close fr-link"
            aria-controls="modal-main-nav"
            onClick={() => setModalMenuOpen(false)}
          >
            Fermer
          </button>
          <div className="fr-header__menu-links" />
          <nav
            className="fr-nav"
            id="navigation-main-nav"
            role="navigation"
            aria-label="Menu principal"
          >
            <ul className="fr-nav__list">
              {items.map((item, index) => (
                <li className="fr-nav__item" key={item.title}>
                  <Link href={item.href}>
                    <a
                      className="fr-nav__link"
                      role="menuitem"
                      tabIndex={index + 1}
                      onKeyPress={() => {
                        setModalMenuOpen(false)
                      }}
                      onClick={() => {
                        setModalMenuOpen(false)
                      }}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
