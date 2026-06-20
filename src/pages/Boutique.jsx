import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Boutique.css'
import puzzleImg from '../assets/photo/puzzle.webp'
import blocNoteImg from '../assets/photo/Bloc-Note.webp'
import hoodieImg from '../assets/photo/Hoodie.webp'
import bagImg from '../assets/photo/Shopping_Bag_Mockup_v01.jpg'
import logoImg from '../assets/photo/Logo.png'

// Filtres de la galerie boutique (le premier affiche tout)
const FILTERS = ['Tous les objets', 'Éditions', 'Textile', 'Papeterie']

// Catalogue affiché dans la galerie filtrable
const SHOP_PRODUCTS = [
  {
    id: 1,
    filter: 'Éditions',
    cat: 'Éditions Limitées',
    name: 'Puzzle · Façade',
    desc: "Assembler la mosquée pièce par pièce. Ce que des mains ont bâti, d'autres mains le reconstituent.",
    price: '45.000 FCFA',
    img: puzzleImg,
    badge: 'Édition limitée',
  },
  {
    id: 2,
    filter: 'Textile',
    cat: 'Textiles',
    name: 'Tote Bag · Jub',
    desc: 'Les trois mots en calligraphie sur le fond vert de la mosquée. Le message à porter chaque jour.',
    price: '15.000 FCFA',
    img: bagImg,
  },
  {
    id: 3,
    filter: 'Textile',
    cat: 'Textiles',
    name: 'Hoodie · Héritage',
    desc: "Molleton lourd, coupe architecturale et insigne brodé de Masdjidou Rabbani.",
    price: '25.000 FCFA',
    img: hoodieImg,
  },
  {
    id: 4,
    filter: 'Papeterie',
    cat: "Papeterie d'art",
    name: 'Carnet · 1973',
    desc: 'Couverture inspirée du cahier où Sangabi a dessiné la mosquée révélée en songe.',
    price: '20.000 FCFA',
    img: blocNoteImg,
  },
]

export default function BoutiquePage() {
  const [activeFilter, setActiveFilter] = useState('Tous les objets')
  const visibleProducts =
    activeFilter === 'Tous les objets'
      ? SHOP_PRODUCTS
      : SHOP_PRODUCTS.filter((p) => p.filter === activeFilter)

  useEffect(() => {
    // 1. Appliquer les styles de réinitialisation sur le body
    document.body.classList.add('boutique-body-reset')

    // 2. Ajouter les icônes Material Symbols
    const linkIcons = document.createElement('link')
    linkIcons.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    linkIcons.rel = 'stylesheet'
    linkIcons.id = 'boutique-icons'
    document.head.appendChild(linkIcons)

    // Gestion du scroll vers les ancres
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick))

    // Nettoyage au démontage
    return () => {
      document.body.classList.remove('boutique-body-reset')
      document.getElementById('boutique-icons')?.remove()
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  return (
    <div className="boutique-page-root bg-surface text-on-surface font-body" style={{ minHeight: '100vh', textDecoration: 'none' }}>
      <div>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center px-gutter-h overflow-hidden bg-surface pt-28 pb-16 md:pt-32">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-20"
              alt="A cinematic, wide shot of the Mosque of Divinity at dusk, situated on the rocky coast of Ouakam, Dakar."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPA64UfGEDiaTIZpnfdSDQ9F7risBjme1VfVgu6abSED78tTutfTmskbrV9KsKBF2AfZzshfQVinXGSxgWjgC5jEjiNRBNLOdZXxbkhlmAXHDW-zAAcR7LU1yKmQAcHWOlTvOwAcll8y2o4hvop-uGHla80FHr_n7Pv3Zvmoy4cQFBYttmuXacFVZf9p49lqECXbNUAtUPtNWKpuTvqW1hc7agOxiXHCCxtn17P_W9kOffXSR4e7PUI18bervflKDS4TtO69lto8aviA"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/95 to-surface z-10"></div>
          </div>
          <div className="relative z-20 max-w-4xl">
            <p className="text-secondary font-label tracking-[0.3em] uppercase mb-4 text-sm font-semibold">
              Boutique Officielle
            </p>
            <h2 className="font-headline text-5xl md:text-8xl italic mb-8 leading-[1.1] red-thread">
              Porter le message.<br />
              <span className="text-primary not-italic font-bold">Soutenir l'œuvre.</span>
            </h2>
            <p className="font-body text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed">
              Chaque acquisition contribue directement à la préservation et au rayonnement de la Mosquée de la Divinité.
              Un pont entre le spirituel et le matériel.
            </p>
            <div className="flex flex-wrap gap-6">
              <a className="btn-gold" href="#catalogue">
                Explorer les gammes
              </a>
              <a className="btn-gold" href="/#message">
                Notre Philosophie
              </a>
            </div>
          </div>
        </section>

        {/* Galerie filtrable — produits affichés selon la catégorie choisie */}
        <section className="shopg" id="catalogue">
          <div className="shopg-inner">
            <div className="shopg-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`shopg-filter${activeFilter === f ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="shopg-divider" />
            <div className="shopg-grid">
              {visibleProducts.map((p) => (
                <article className="shopg-card" key={p.id}>
                  <div className="shopg-media">
                    {p.badge && <span className="shopg-badge">{p.badge}</span>}
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <div className="shopg-discover">
                      <span>
                        <span className="material-symbols-outlined">visibility</span>
                        Découvrir
                      </span>
                    </div>
                  </div>
                  <div className="shopg-body">
                    <p className="shopg-cat">{p.cat}</p>
                    <h4 className="shopg-name">{p.name}</h4>
                    <p className="shopg-desc">{p.desc}</p>
                    <div className="shopg-price-row">
                      <span className="shopg-price-label">Prix</span>
                      <span className="shopg-price">{p.price}</span>
                    </div>
                    <button type="button" className="shopg-add">
                      <span className="material-symbols-outlined">shopping_bag</span>
                      Ajouter au panier
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gamme Enfants - Alassane */}
        <section className="py-section-v-desktop px-gutter-h max-w-[1440px] mx-auto" id="gamme-enfants">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-label tracking-widest uppercase text-xs mb-4 block">
                Éducation &amp; Éveil
              </span>
              <h3 className="font-headline text-5xl mb-6 italic">Gamme Yeete</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
                Inspirée par la pédagogie Montessori, cette collection propose des jeux et supports éducatifs pour
                transmettre l'héritage spirituel et architectural dès le plus jeune âge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] bg-surface-container-lowest p-6 flex flex-col justify-between group cursor-pointer hover:bg-primary/5 transition-colors">
                  <div className="w-full aspect-square overflow-hidden mb-4">
                    <img
                      className="w-full h-full object-cover"
                      alt="A collection of high-quality wooden Montessori educational toys and puzzles featuring minimalist mosque silhouettes and geometric Islamic patterns."
                      src={puzzleImg}
                    />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">
                      Jeux en bois
                    </p>
                    <h4 className="font-headline text-lg italic group-hover:text-primary transition-colors">
                      Puzzle de la Mosquée
                    </h4>
                    <p className="text-primary mt-2">15.000 FCFA</p>
                  </div>
                </div>
                <div className="aspect-[4/5] bg-surface-container-lowest p-6 flex flex-col justify-between group cursor-pointer hover:bg-primary/5 transition-colors">
                  <div className="w-full aspect-square overflow-hidden mb-4">
                    <img
                      className="w-full h-full object-cover"
                      alt="Modern educational activity books for children featuring minimalist illustrations of Islamic heritage and the Mosque of Divinity."
                      src={blocNoteImg}
                    />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">
                      Édition
                    </p>
                    <h4 className="font-headline text-lg italic group-hover:text-primary transition-colors">
                      Cahier d'activités
                    </h4>
                    <p className="text-primary mt-2">5.000 FCFA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="arch-mask aspect-[3/4] bg-surface-container-lowest overflow-hidden border border-outline-variant">
                <img
                  className="w-full h-full object-cover"
                  alt="A portrait of a young child playing with wooden geometric shapes in a bright, modern room."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTBnBKrC7af66KCvXDWm9wTTqQBZSZJMXpXJhancbiJDv7vYWuqb8SGEvuPIBz0JONEStweV9Ssjo__T56V6009yE_0pMzsyGP1yPrZkJtp89oz9aPAoFZRDPIgoHmTXGgfv30Par-vtJTzNx4Bk6Ey2-L5mo2ap9IRWO5-BySLrzSUh14Wo6H9GGP4yofG7_m96PDsdCDbm7u3vT23ivFrPlkEPx_rYDqRrZpRzlm8F_j9ZNKy9_Ouk1Z-IpLeLJN612nMtYDYCA"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 hidden md:block">
                <h4 className="font-arabic text-surface text-4xl mb-2 text-white">الأولاد</h4>
                <p className="font-label text-surface text-[10px] uppercase tracking-[0.2em] font-bold text-white">
                  Pour les futurs bâtisseurs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Textile & Accessoires Section */}
        <section className="bg-surface-container-lowest py-section-v-desktop" id="textile">
          <div className="max-w-[1440px] mx-auto px-gutter-h">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-secondary font-label tracking-widest uppercase text-xs mb-4 block">
                  Identité Visuelle
                </span>
                <h3 className="font-headline text-5xl italic mb-6">
                  Textile &amp; <span className="text-primary not-italic font-bold">Équipement</span>
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Une gamme premium conçue pour les membres, les bénévoles et les sympathisants. Chaque pièce arbore
                  l'insigne officiel de Masdjidou Rabbani.
                </p>
              </div>
              <a
                className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-4 hover:translate-x-2 transition-transform"
                href="#textile"
              >
                Voir tout le textile <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>
            <div className="shopg-grid">
              {/* Polo */}
              <article className="shopg-card">
                <div className="shopg-media shopg-media--contain">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI2A5jsXdeHKRZ0bi_Fh6z9w0fx21daIPmd1jxEsTIZ96MXF4Q4qdgK_QqZFvXjOXqqgm-420u3WwpgFYYJBoMk5Jli-mPDCAaiFVhHXogDjZ83sZi_tqHV9pP_WMU5JbiiCW3H6n_Dl2vl7v7PcsY1PLmfgbJ_rpBTRHgGgT00k-0LPVh1qXW1OQIE2A8G4vJTJB-erA8ifbYCGBa8B0-vi15kz6izW3JuaBp2BDwfhHvF7yqQNf_VnL1j4moEoCmG3sEFU_l4KY"
                    alt="Polo Officiel de la Mosquée de la Divinité"
                    loading="lazy"
                  />
                </div>
                <div className="shopg-body">
                  <p className="shopg-cat">Vêtement</p>
                  <h4 className="shopg-name">Polo Officiel</h4>
                  <p className="shopg-desc">Piqué de coton premium, broderie dorée.</p>
                  <div className="shopg-price-row">
                    <span className="shopg-price-label">Prix</span>
                    <span className="shopg-price">12.500 FCFA</span>
                  </div>
                  <button type="button" className="shopg-add">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Ajouter au panier
                  </button>
                </div>
              </article>
              {/* Hoodie */}
              <article className="shopg-card">
                <div className="shopg-media shopg-media--contain">
                  <img src={hoodieImg} alt="Hoodie Héritage de la Mosquée de la Divinité" loading="lazy" />
                </div>
                <div className="shopg-body">
                  <p className="shopg-cat">Vêtement</p>
                  <h4 className="shopg-name">Hoodie Héritage</h4>
                  <p className="shopg-desc">Molleton lourd, coupe architecturale.</p>
                  <div className="shopg-price-row">
                    <span className="shopg-price-label">Prix</span>
                    <span className="shopg-price">25.000 FCFA</span>
                  </div>
                  <button type="button" className="shopg-add">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Ajouter au panier
                  </button>
                </div>
              </article>
              {/* Thermos */}
              <article className="shopg-card">
                <div className="shopg-media shopg-media--contain">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEuLeScPPhSr3rZ5oOQQzPR43g59GId3T-v1evS_6msHXKUNvcnGuFL1c-91LZ5YeDv2YUGqVBLfYPbZ7Bk5c85Z5SLm4GEmtXV8_ikRdiT-Nks7jRHyWNkq4Youp-t3IF3WOVZEBlayZVNhS4LRXn3ZU8np1xebcFhmf-JVGXKxGD2uSFafQq1yWkBkiim-NyfhsZguRXGabG5tmC5RbZhs4QA4FnmUKU7sZ0pKKQF2omQHTS-PaBuo483Ny68-FdLYmWPWF4R8g"
                    alt="Thermos Signature"
                    loading="lazy"
                  />
                </div>
                <div className="shopg-body">
                  <p className="shopg-cat">Accessoire</p>
                  <h4 className="shopg-name">Thermos Signature</h4>
                  <p className="shopg-desc">Acier inoxydable, isolation 24h.</p>
                  <div className="shopg-price-row">
                    <span className="shopg-price-label">Prix</span>
                    <span className="shopg-price">18.000 FCFA</span>
                  </div>
                  <button type="button" className="shopg-add">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Ajouter au panier
                  </button>
                </div>
              </article>
              {/* Vestes Équipes — sur commande */}
              <article className="shopg-card">
                <div className="shopg-media shopg-media--contain shopg-media--empty">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <div className="shopg-body">
                  <p className="shopg-cat">Équipement</p>
                  <h4 className="shopg-name">Vestes Équipes</h4>
                  <p className="shopg-desc">Accueil, Logistique &amp; Media.</p>
                  <div className="shopg-price-row">
                    <span className="shopg-price-label">Disponibilité</span>
                    <span className="shopg-price shopg-price--soft">Sur commande</span>
                  </div>
                  <button type="button" className="shopg-add">
                    <span className="material-symbols-outlined">info</span>
                    Nous contacter
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Gamme Spirituelle */}
        <section className="py-section-v-desktop px-gutter-h max-w-[1440px] mx-auto" id="spirituelle">
          <div className="text-center mb-20">
            <span className="text-secondary font-label tracking-[0.4em] uppercase text-xs mb-4 block">
              La Paix Intérieure
            </span>
            <h3 className="font-headline text-6xl italic">Spirituelle</h3>
            <div className="w-24 h-[1px] bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative group">
              <div className="overflow-hidden mb-8 aspect-[4/5] bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Natte de Prière artisanale de la Mosquée"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdpNBB0x1VLUm5-zkqZ344kDsQEvkDHQSx0lo1SVxvbGOZXS6AqjpYFNJ8Xd5oFjrEe2Gf5kUbWB-6UXXgSE3SSqbOq6yuv1OkS5iKqQfQk5wjxXnn2ArWZeUjgPiaw8oATP3agtKsVDICXCIBSetIwyTua8U51b0ajyx-9g6i4N3mB3cNChRpqbAB1u2WYo8oMdsQr_Ei9dHatgjhUaiTKMGeFYStVkIEPSgElnkjI8g0c2wKv3vnWh10IRB-jbEOPGedIxaiddw"
                />
              </div>
              <div className="text-center">
                <h4 className="font-headline text-2xl mb-2 italic">Natte de Prière</h4>
                <p className="font-arabic text-primary text-xl mb-4">سجادة الصلاة</p>
                <p className="text-on-surface-variant text-sm mb-6 max-w-[280px] mx-auto">
                  Tissage artisanal, motifs géométriques inspirés de la coupole centrale.
                </p>
                <button type="button" className="btn-gold">
                  Découvrir l'artisanat
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="overflow-hidden mb-8 aspect-[4/5] bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Coffret Tasbih &amp; Parfums"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEQriJ4ddVvAoxBInGZheTFLaO3v6aMT5F1l9SZMcBc4K6okg7pUWJKl5GkQgY2_nDF33l-WbaeNBXNkcqwt_TKrzzXwbkm_QLP2FoqjpSDjaJbCKSI9-mBnrv1lRNhcIUGOh9c8UgauK39RqzYZBkTlOgEyDctoOCBGfomBK4OSfPj0uVgJAw2iIwj9R4rHw3p6CYGhwEBeoU3ehxBTRrl0WLpZeiw8LgUKVDT5gWN5-6cDclxVSrzJ-O0c9Sc68Ps7IHzeQfEeU"
                />
              </div>
              <div className="text-center">
                <h4 className="font-headline text-2xl mb-2 italic">Tasbih &amp; Parfums</h4>
                <p className="font-arabic text-primary text-xl mb-4">تسبيح و عطر</p>
                <p className="text-on-surface-variant text-sm mb-6 max-w-[280px] mx-auto">
                  Coffret précieux : bois d'ébène et essences pures de musc.
                </p>
                <button type="button" className="btn-gold">
                  Commander le coffret
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="overflow-hidden mb-8 aspect-[4/5] bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt="Dattes de Prestige"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC68NtKk33n9I93I725sljyWWRim8ZPRhtIc0lGC0FmToFW1_FPLGdznwA4GPpS-CJ5LwnnW9xzTTJv2YqaQoe5GNWv7NfZgobwzFLyOODhyD9mlX_eMKQJhQJ7W5VAKcSkCUukuSygJ-iF8DjGplnDEr_onHMVWB1Ji_IzzHumAQJwNu1WbkA-QAVDTkkNuOVBJbkjn7RfW7WxDDasSv-TQepLdbzKfs4KJichFANJHvNyGxaAQt8Uq_qIEWDumfrg9lPj-4Lc0gw"
                />
              </div>
              <div className="text-center">
                <h4 className="font-headline text-2xl mb-2 italic">Dattes de Prestige</h4>
                <p className="font-arabic text-primary text-xl mb-4">تمر مبارك</p>
                <p className="text-on-surface-variant text-sm mb-6 max-w-[280px] mx-auto">
                  Sélection exclusive pour le mois béni et les occasions sacrées.
                </p>
                <button type="button" className="btn-gold">
                  Voir les formats
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Signalétique Section (Asymmetrical 60/40) */}
        <section className="bg-surface-container-lowest border-y border-outline-variant" id="signaletique">
          <div className="grid md:grid-cols-10">
            <div className="md:col-span-6 p-gutter-h md:p-24 border-r border-outline-variant">
              <span className="text-secondary font-label tracking-widest uppercase text-xs mb-8 block">
                Institutionnel
              </span>
              <h3 className="font-headline text-6xl italic mb-12 leading-tight">
                L'Empreinte de la <span className="text-on-surface not-italic font-bold">Divinité</span>
              </h3>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="aspect-[2/3] overflow-hidden mb-6 bg-surface flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      src={bagImg}
                      alt="Tote Bag Premium Mosquée de la Divinité"
                    />
                  </div>
                  <h5 className="font-headline text-xl mb-2">Tote Bag Premium</h5>
                  <p className="text-sm text-on-surface-variant">
                    Toile de coton robuste avec marquage sérigraphié haute définition.
                  </p>
                </div>
                <div className="pt-20">
                  <div className="aspect-[2/3] overflow-hidden mb-6 bg-surface flex items-center justify-center">
                    {/* Laisser la place pour l'image de la casquette, pas d'image encore dispo */}
                    <span className="material-symbols-outlined text-primary/30 !text-6xl">face</span>
                  </div>
                  <h5 className="font-headline text-xl mb-2">Casquettes Officielles</h5>
                  <p className="text-sm text-on-surface-variant">
                    Modèles ajustables avec broderie relief de l'emblème Rabbani.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 p-gutter-h md:p-24 flex flex-col justify-center items-center text-center bg-surface">
              <h4 className="font-headline text-4xl mb-8 leading-snug italic">
                "L'achat est un don avec un objet en retour. Le don est un achat sans objet."
              </h4>
              <p className="text-on-surface-variant mb-12 italic">Philosophie de la Boutique Officielle</p>
              <div className="w-full h-[1px] bg-outline-variant mb-12"></div>
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-left">
                  <span className="font-headline text-3xl text-on-surface">01</span>
                  <div>
                    <h6 className="font-bold uppercase text-xs tracking-widest mb-1">Pérennité</h6>
                    <p className="text-xs text-on-surface-variant">Financement direct de l'entretien du site.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <span className="font-headline text-3xl text-on-surface">02</span>
                  <div>
                    <h6 className="font-bold uppercase text-xs tracking-widest mb-1">Transmission</h6>
                    <p className="text-xs text-on-surface-variant">Supports pédagogiques pour la jeunesse.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <span className="font-headline text-3xl text-on-surface">03</span>
                  <div>
                    <h6 className="font-bold uppercase text-xs tracking-widest mb-1">Patrimoine</h6>
                    <p className="text-xs text-on-surface-variant">Rayonnement de l'architecture islamique.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Livraison & Retrait */}
        <section className="py-section-v-desktop px-gutter-h" id="assistance">
          <div className="max-w-[1440px] mx-auto bg-surface-container-lowest p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <span className="material-symbols-outlined !text-[400px] text-primary rotate-12">local_shipping</span>
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-20">
              <div>
                <h3 className="font-headline text-4xl mb-6 italic">Logistique &amp; Retraits</h3>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  Nous assurons une livraison fluide sur tout le territoire sénégalais. Les commandes peuvent également
                  être retirées directement au guichet officiel de la Mosquée à Ouakam.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <span className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary material-symbols-outlined">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold text-sm">Point de Retrait Ouakam</p>
                      <p className="text-xs text-on-surface-variant">Lundi - Dimanche | 09h00 - 18h00</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary material-symbols-outlined">
                      local_shipping
                    </span>
                    <div>
                      <p className="font-bold text-sm">Livraison Dakar &amp; Régions</p>
                      <p className="text-xs text-on-surface-variant">Sous 24h à 72h ouvrés</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-10 border border-outline-variant z-10">
                <h4 className="font-headline text-2xl mb-6 italic text-primary">Besoin d'assistance ?</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="w-full bg-surface-container-lowest border-outline-variant text-on-surface p-4 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Votre nom"
                    type="text"
                  />
                  <input
                    className="w-full bg-surface-container-lowest border-outline-variant text-on-surface p-4 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Votre email"
                    type="email"
                  />
                  <textarea
                    className="w-full bg-surface-container-lowest border-outline-variant text-on-surface p-4 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Votre message"
                    rows="3"
                  ></textarea>
                  <button type="submit" className="btn-gold" style={{ width: '100%', textAlign: 'center' }}>
                    Envoyer la demande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
