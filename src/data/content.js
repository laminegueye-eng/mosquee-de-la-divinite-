// Contenu du site centralisé (textes + médias) — source unique de vérité.
import fayfaat from '../assets/Fayfaat.jpg'
import khalife from '../assets/Khalife de Dieu.jpg'
import expoImg from '../assets/Exposition.jpg'
import expo2Img from '../assets/Exposition-2.jpg'
import fajrImg from '../assets/Fajr.jpg'
import ishaImg from '../assets/Isha.jpg'
import imamsImg from '../assets/Imams.jpg'
import journeesImg from '../assets/Journées prieres.jpg'
import aab from '../assets/_AAB2590.jpg'
import sirat from '../assets/Sirat.jpg'
import aerial from '../assets/DJI_0681.jpg'
import korite from '../assets/Korite.jpg'
import maghribImg from '../assets/MAGHRIB.jpg'
import heroVideo from '../assets/hero.mp4'
import heroVideo3 from '../assets/hero3.mp4'
import dji0419 from '../assets/DJI_0419.jpg'

export const VIDEO = heroVideo
export const VIDEO3 = heroVideo3

export const images = {
  fayfaat, khalife, sirat, aerial, korite, maghribImg, dji0419,
  expoImg, expo2Img, fajrImg, ishaImg, imamsImg, journeesImg, aab,
}

// Navigation : libellé, ancre, et sous-menu éventuel
export const NAV = [
  ['Histoire', '#histoire', [
    ['Sangabi', '#sangabi'],
    ['La construction', '#construction'],
    ['Timeline', '#timeline'],
  ]],
  ['Visiter', '#visiter', [
    ['Informations pratiques', '#visiter'],
    ['Exposition', '#exposition'],
  ]],
  ['Prier', '#prier', [
    ['Les cinq prières', '#prier'],
    ['Jumaah', '#jumaah'],
    ['Prières spéciales', '#prieres-speciales'],
    ['Événements', '#evenements'],
  ]],
  ['Le Message', '#message'],
  ['Communauté', '#communaute'],
  ['Rénovation', '#renovation'],
  ['Boutique', '#boutique'],
  ['Faire un don', '#renovation'],
]

export const FOOTER_NAV = [
  ['Histoire', '#histoire'], ['Visiter', '#visiter'], ['Prier', '#prier'],
  ['Le Message', '#message'], ['Communauté', '#communaute'],
  ['Rénovation', '#renovation'], ['Boutique', '#boutique'],
]

// ===== HERO =====
export const HERO_STATS = [
  ['1973', 'Révélation fondatrice'],
  ['5 ans 5 mois', 'De construction'],
  ['45 m', 'Hauteur des minarets'],
  ['80 t', 'Coupole béton armé'],
  ['5', 'Mosquées divines au monde'],
]

// ===== HISTOIRE =====
export const HISTOIRE_INTRO = [
  'Une mosquée sur la Corniche de Ouakam. Deux minarets de 45 mètres face à l’océan. Une coupole de 80 tonnes suspendue dans l’air marin.',
  'Elle existe parce qu’un homme a reçu un message, un ordre, une vision, et a choisi de ne pas le garder pour lui.',
  'Cet homme s’appelle Mouhamed Gorgui Seyni Gueye, dit Sangabi.',
  'Sangabi a dessiné la mosquée depuis sa révélation de 1973. Cheikh Ngom, architecte de renom, a traduit fidèlement ces esquisses en plans. Un cabinet d’ingénierie reconnu a établi les plans techniques. La construction elle-même, chaque pierre posée, chaque minaret érigé, chaque sac de ciment porté, c’est la communauté qui l’a faite. De ses mains. Quartier par quartier. Famille par famille.',
  'Cette même communauté l’a aussi financée. Chacun selon ses moyens. Étape par étape.',
  'La vision venait d’en haut. Les esquisses venaient de Sangabi. L’édifice venait de la communauté.',
]

export const SANGABI_BIO = [
  'Né à Dakar, formé au dessin industriel au Lycée Maurice Delafosse, ancien comptable chez BTP Augier. Il a participé à la construction de la Grande Mosquée de Touba, comme comptable.',
  'En 1963, Dieu lui ordonna une retraite spirituelle. Il se retira du monde. Sans revenus ni moyens. Quatorze ans de silence intérieur.',
  'Sa femme, Sokhna Sagar Diagne, l’accompagna à travers ces années d’épreuve avec une foi et une dignité inébranlables.',
  'Durant cette retraite, Dieu l’investit comme Khalife de Dieu sur Terre. Et dans la nuit du 28 au 29 juin 1973, la mosquée lui fut révélée en songe. Une maquette lumineuse parachutée du ciel. ALLAHOU AKBAR en lettres d’or sur la porte de droite.',
  'Le 6 mars 1977, sa retraite achevée, Sangabi fit son premier appel public à Ouakam, appelant les hommes à revenir vers Dieu. Le mouvement Naby Allah était né.',
  'Tout au long de sa vie, il rappela le message que Dieu lui avait confié, trois principes pour quiconque veut vivre en paix avec Dieu, avec les autres et avec soi-même : Jub. Ragal Yàlla. Sellal.',
  'La mosquée, il la partagea avec la communauté. Il ne la leur confia pas de loin. Il était là. Chaque jour sur le chantier. Gérant les cotisations, suivant les travaux, travaillant avec eux.',
  'Le 1er octobre 1997, la mosquée était debout. Sangabi aussi. Dix ans plus tard, le 12 mars 2007, il s’en alla. L’œuvre et le message sont toujours là.',
]

// ===== CONSTRUCTION =====
export const CONSTRUCTION_INTRO = [
  'Pas de pelleteuse. Pas de bétonnière. Pas de grue. Le seul engin présent sur le site est tombé en panne après une semaine.',
  'Ce qui est resté : les mains des fidèles de Ouakam, Ngor, Yoff et Guédiawaye.',
  'Des enfants, des jeunes, des hommes, des femmes, des personnes âgées. Chacun selon ses moyens. Chacun selon ses forces. Les femmes ont travaillé sur le chantier aux côtés des hommes et ont assuré jour après jour la restauration des bénévoles. Quartier par quartier, famille par famille. Et parfois des inconnus, qui arrivaient, travaillaient et repartaient.',
  'Cinq ans et cinq mois. Zéro mort. Zéro blessé grave.',
]

export const FEATS = [
  ['subvention', 'Aucune subvention', 'Ni de l’État, ni de fonds étrangers. Chaque centime et chaque heure de travail venus des fidèles.'],
  ['participatif', 'Financement participatif', 'Quartier par quartier, famille par famille. Chacun a contribué selon ses moyens.'],
  ['architecture', 'Architecture révélée', 'Sangabi a dessiné la maquette dans un cahier depuis 1973. Traduite en plans par l’architecte Cheikh Ngom.'],
  ['securite', 'Zéro accident grave', 'Cinq ans de chantier rudimentaire. Des minarets à 45 m à mains nues. Aucun mort. Aucun blessé grave.'],
  ['mosquee', 'Une mosquée parmi cinq', 'La Mosquée de la Divinité est l’une des cinq mosquées divines au monde.'],
]

export const TIMELINE = [
  ['1973', 'La révélation en songe', 'Sangabi voit la maquette lumineuse descendre du ciel. Une voix le conduit jusqu’à la baie de Ouakam. ALLAHOU AKBAR en lettres d’or sur la porte de droite. Il dessine. Il attend.'],
  ['1977', 'Premier appel public à Ouakam', 'Sangabi sort du silence. Il transmet le message — Jub, Ragal Yàlla, Sellal — et appelle les hommes à revenir vers Dieu. Le mouvement Naby Allah prend forme.'],
  ['1979', 'Reconnaissance et aménagement du site', 'Sangabi confirme l’emplacement exact selon les révélations. Le 31 décembre 1979, la première manifestation a lieu sur le site.'],
  ['1992', 'Pose de la première pierre', '29 janvier 1992. Sangabi pose lui-même la première cotisation. « Dieu qui m’a demandé de construire nous donnera les moyens. » Les travaux débutent le 20 mai.'],
  ['1992–1997', 'Cinq ans et cinq mois de construction', 'Sans machines. Toute une communauté au travail. La coupole suspendue de 80 tonnes en béton armé, une prouesse architecturale réalisée à mains nues.'],
  ['1997', 'Inauguration', 'La Mosquée de la Divinité ouvre ses portes le 1er octobre. L’invité d’honneur devait être El Hadji Abdou Aziz Sy, Khalife Général des Tidianes, rappelé à Dieu le 14 septembre 1997. Son fils Mame Alpha Sy honore la cérémonie.'],
]

// ===== VISITER =====
export const VISITE_INFO = [
  ['Adresse', 'Corniche-Ouest, Ouakam, Dakar'],
  ['Accès', 'Taxi · Covoiturage · Marche depuis la Corniche-Ouest'],
  ['Tenue', 'Tenue modeste requise'],
  ['Coordonnées', '14°44′N · 17°31′W'],
]

export const VISITE_CARDS = [
  ['Vue sur l’Atlantique', 'Deux minarets de 45 mètres face à l’océan. Un panorama unique, particulièrement au coucher du soleil sur la Corniche-Ouest.'],
  ['Architecture divine', 'Chaque détail fidèlement construit depuis la maquette révélée en songe en 1973. Mosaïques blanc et vert, coupole suspendue en béton armé de 80 tonnes, deux minarets face à l’Atlantique.'],
  ['Accès non-musulmans', 'Les non-musulmans sont bienvenus sur l’esplanade et dans les couloirs. La salle de prière est réservée aux musulmans. À travers les fenêtres, les visiteurs peuvent admirer l’architecture intérieure. Tenue modeste requise.'],
]

export const EXPO_THEMES = [
  ['I', 'Le Songe', '1973', 'La nuit du 28 au 29 juin. La maquette lumineuse. ALLAHOU AKBAR en lettres d’or. Un homme dessine ce qu’il a vu. Il attend.'],
  ['II', 'La Reconnaissance du site', '1979', 'L’emplacement confirmé selon les révélations. Le 31 décembre 1979, première manifestation sur le site.'],
  ['III', 'La Première Pierre', '1992', '29 janvier 1992. Cérémonie officielle. Les travaux débutent le 20 mai. Une communauté choisit de bâtir.'],
  ['IV', 'La Construction', '1992–1997', 'Cinq ans et cinq mois. Sans machines ni subventions. Les minarets de 45 m. Le pont Al Sirat. La coupole de 80 tonnes.'],
  ['V', 'L’Inauguration', '1er octobre 1997', 'La Mosquée de la Divinité ouvre ses portes. Ce qui a été reçu en songe est maintenant debout dans la pierre.'],
  ['VI', 'Aujourd’hui', '', 'La mosquée vivante — prières quotidiennes, événements, archive en construction, rénovation à venir.'],
]

// ===== PRIER =====
export const PRAYERS = [
  ['الفَجْر', 'Fajr', 'Aube', fajrImg],
  ['الظُّهْر', 'Dhuhr', 'Midi', null],
  ['العَصْر', 'Asr', 'Après-midi', null],
  ['المَغْرِب', 'Maghrib', 'Coucher du soleil', maghribImg],
  ['العِشَاء', 'Isha', 'Nuit', ishaImg],
]

export const SPECIAL = [
  ['صَلَاة الفِطْر', 'Julli Korité', 'Eid al-Fitr · généralement à 9h00'],
  ['صَلَاة الأَضْحَى', 'Julli Tabaski', 'Eid al-Adha · généralement à 9h00'],
]

export const MOSQUE_PRAYERS = [
  ['صَلَاة الفَيفَات', 'Salatul Fayfaat', 'Dernier vendredi du Ramadan, après le Jumaah.', 'Une prière de réparation. Pour les prières accomplies imparfaitement ou oubliées sans le vouloir, afin de les réparer devant Dieu.'],
  ['صَلَاة التَّسْبِيح', 'Salatul Tasbih', 'Dernier ou avant-dernier vendredi de décembre, après le Jumaah.', 'La prière de glorification. Allah pardonne vos péchés passés et futurs, grands et petits, oubliés ou intentionnels.'],
]

export const EVENTS = [
  ['Dernier samedi de mars', 'Commémoration de Mars', 'Commémoration de la descente spirituelle de Sangabi — Khalife de Dieu sur Terre. Un rassemblement annuel de recueillement, de mémoire et de fraternité.', journeesImg],
  ['Dernier samedi de juin', 'Commémoration de Juin', 'Commémoration de la descente spirituelle de la Mosquée de la Divinité — la nuit fondatrice du 28 au 29 juin 1973. Le moment le plus solennel du calendrier Naby Allah.', fayfaat],
]

export const EVENTS_MINI = [
  ['Nuit sacrée · Ramadan', 'Laylatul Qadr', 'Nuit du Destin · la nuit la plus sacrée du Ramadan · à partir de 23h00'],
  ['Nuit de célébration', 'Maouloud', 'Naissance du Prophète Muhammad ﷺ · à partir de 23h00'],
  ['Commémoration annuelle', '1er Octobre', 'Commémoration de l’inauguration de la Mosquée · 1997'],
  ['Journées de prières · Décembre', 'Journées de décembre', 'Dernier ou avant-dernier vendredi de décembre, après le Jumaah · Samedi à partir de 16h00'],
]

// ===== LE MESSAGE =====
export const MESSAGE_INTRO = [
  'En 1977, à Ouakam, Sangabi sort du silence. À partir de ce jour, il transmet un message qui n’est pas réservé aux siens. Ce n’est pas une doctrine pour initiés. C’est une direction pour quiconque veut vivre juste, quelle que soit son origine, quelle que soit sa religion.',
  'Trois mots. Trois dimensions de l’être humain complet. Personne ne les vit parfaitement. Tout le monde peut choisir de s’y orienter.',
]

export const PILLARS = [
  {
    ar: 'الهُدَى', name: 'Jub · Al Houda', subtitle: 'La Droiture',
    note: 'Ce qui se voit, et que les autres jugent avant toi.',
    body: [
      'Jub ce n’est pas ce qu’on donne en plus. C’est ce qu’on ne prend pas. Ce qu’on ne détourne pas. Ce qu’on ne travestit pas.',
      'Dans chaque transaction. Dans chaque parole donnée. Dans chaque relation, avec Dieu, avec les autres, avec soi-même. Ne jamais léser quiconque dans son corps, ses biens, sa famille ou sa dignité.',
      'Pas par peur d’être vu. Par conviction que c’est la seule manière d’être entier. Jub ne se célèbre pas. Ça se vit. En silence. Tous les jours.',
    ],
  },
  {
    ar: 'تَقْوَى اللَّه', name: 'Ragal Yàlla · Taqwa Lahi', subtitle: 'La Crainte révérencielle',
    note: 'Ce qui vit dans le cœur, et que personne d’autre ne voit.',
    body: [
      'Ragal Yàlla, c’est la conscience permanente de quelque chose de plus grand que soi. Elle se manifeste dans chaque geste, chaque pensée, chaque décision prise loin du regard des autres.',
      'C’est un combat intérieur contre les péchés, les faiblesses et les maux qui habitent chaque être humain : l’arrogance, la jalousie, l’envie, l’avarice, l’orgueil, l’injustice ou encore l’égoïsme.',
      'On ne mène pas ce combat de l’extérieur. On le mène en soi, continuellement, honnêtement. C’est invisible. Mais c’est ce qui tient tout le reste.',
    ],
  },
  {
    ar: 'أَصْلَح', name: 'Sellal · Aslaha', subtitle: 'La Réforme',
    note: 'Ce qui se fait, et qui finit par se voir.',
    body: [
      'Sellal c’est l’amélioration continue. De soi d’abord. De sa famille. De sa communauté. Penser clairement, agir justement, ne jamais se satisfaire de ce qu’on est déjà.',
      'Ce n’est pas un état qu’on atteint. C’est un mouvement qu’on ne s’arrête pas de faire.',
    ],
  },
]

// ===== COMMUNAUTÉ =====
export const COMMUNITY_INTRO = [
  'Ce sont les hommes et les femmes, les jeunes et les anciens, de Ouakam, de Ngor, de Guédiawaye — une communauté ordinaire qui a bâti quelque chose d’extraordinaire parce qu’elle a répondu à l’appel.',
  'Eux qui ont porté les sacs de ciment. Eux qui ont grimpé à 45 mètres. Eux qui ont nourri les bénévoles chaque jour pendant cinq ans.',
  'La mosquée est inaugurée en 1997. Sangabi part en 2007. La communauté, elle, ne part pas. Elle entretient la mosquée. Elle organise les événements qui rythment l’année. Elle nourrit, soigne, soutient, nettoie. Année après année. Ce n’est pas une organisation. C’est une continuité.',
]

export const ACTIONS = [
  ['Entretien de la mosquée', 'La communauté assure l’entretien quotidien du lieu — nettoyage, maintenance, accueil. Ce qui a été bâti à mains nues est gardé à mains nues.', imamsImg],
  ['Événements & prières quotidiennes', 'Commémorations de mars et de juin, Laylatul Qadr, Maouloud, 1er Octobre. Les cinq prières, le Jumaah, les prières spéciales. Le calendrier Naby Allah est porté chaque année.', journeesImg],
  ['Ndogou gratuit — Ramadan', 'Du lundi au vendredi pendant le Ramadan. La rupture du jeûne offerte sur place. 150 personnes accueillies en moyenne chaque soir.', aab],
  ['Soutien scolaire', 'Organisé par CEEMNA. 300 kits scolaires à chaque rentrée depuis 2012. Plus de 3 600 enfants accompagnés.', expo2Img],
  ['Don de sang', 'Organisé par CEEMNA avec les Scouts et Guides Musulmans du Sénégal. Chaque mars depuis 2013. Plus de 1 000 poches au total.', expoImg],
  ['Consultation médicale gratuite', 'Commission Médicale Naby Allah et Club Médical de Ouakam. Chaque mars. Des soins gratuits pour la communauté et le quartier.', khalife],
  ['Set Setal', 'Organisé par l’UFMNA, l’union des femmes musulmanes. Chaque 2e week-end de décembre. La communauté nettoie la mosquée et ses alentours.', fayfaat],
  ['Solidarité communautaire', 'Une aide aux plus démunis, tout au long de l’année. Silencieuse. Continue. Sans annonce. Sans chiffre.', sirat],
]

// ===== PATRIMOINE =====
export const PATRIMOINE_INTRO = [
  'La Mosquée de la Divinité est un lieu de mémoire autant qu’un lieu de culte. Plus de 50 ans d’archives documentées. Des témoignages oraux, des photos, des documents fondateurs, un patrimoine unique en cours de numérisation et de préservation.',
  'Sangabi est mort le 12 mars 2007. Des gens qui n’étaient pas nés en 1973 portent aujourd’hui ce qu’il a commencé. Dans vingt ans, d’autres le porteront. Préserver la mémoire, c’est leur permettre de choisir en connaissance de cause.',
]

export const PATRIM = [
  ['1926', 'Naissance de Sangabi · début de l’archive'],
  ['1977', 'Premier appel public · le message transmis'],
  ['50+', 'Ans d’archives documentées'],
  ['∞', 'Témoignages à préserver'],
  ['↻', 'Archive numérique en construction'],
]

// ===== RÉNOVATION =====
export const RENOVATION_INTRO = [
  'La Mosquée de la Divinité a été construite par des mains ordinaires. Des mains qui ont porté des sacs de ciment, grimpé à 45 mètres, nourri les bénévoles chaque jour pendant cinq ans.',
  'Aujourd’hui, les mêmes éléments qui ont rendu ce chantier extraordinaire — l’air marin, le soleil de la Corniche, les années — ont laissé leurs marques sur le béton, les mosaïques, les minarets.',
  'La mosquée se dégrade. Ce n’est pas une alarme. C’est une réalité. Et une réalité qui appelle le même geste qu’en 1992 : une communauté qui choisit de ne pas laisser tomber ce qu’elle a reçu.',
]

export const RENOVATION_PROJECTS = [
  ['La rénovation de la mosquée', 'Restaurer le béton, les mosaïques, les minarets. Préserver ce lieu de prière quotidienne, ce monument vivant, cette preuve physique d’une vision reçue en songe il y a plus de cinquante ans.'],
  ['Le Complexe Mouhamed Seyni Gueye', 'Résidence d’accueil pour les pèlerins et visiteurs. Centre de conférences. Institut islamique. Continuer l’œuvre dans son nom. Ce que Sangabi a commencé ne s’arrête pas à la mosquée.'],
]

export const CONTRIBUTE = [
  ['Faire un don', 'Chaque montant compte. Un don unique ou régulier, directement vers la rénovation et l’extension. Wave · Orange Money · Carte bancaire · Virement.', 'Je fais un don'],
  ['Acheter à la boutique', 'Puzzles, tote bags, carnets, reproductions d’archives. Chaque achat est un don avec un objet en retour. Livraison au Sénégal · Retrait à la mosquée.', 'Visiter la boutique'],
  ['Partager l’appel', 'La mosquée a été construite quartier par quartier, famille par famille. Sa restauration aussi. Partager cet appel, c’est déjà contribuer.', 'Partager'],
]

// ===== BOUTIQUE =====
export const BOUTIQUE = [
  ['Puzzle · La façade de la mosquée', 'Assembler la mosquée pièce par pièce. Ce que des mains ont bâti, d’autres mains le reconstituent.', 'Édition limitée · 500 pièces'],
  ['Tote bag · Jub. Ragal Yàlla. Sellal.', 'Les trois mots en calligraphie sur fond vert de la mosquée. Le message comme objet du quotidien, pour le porter partout.', 'Livraison au Sénégal · Retrait à la mosquée'],
  ['Carnet · Maquette 1973', 'Couverture inspirée du cahier où Sangabi a dessiné la mosquée depuis sa révélation. Pour ceux qui ont aussi quelque chose à construire.', 'Livraison au Sénégal · Retrait à la mosquée'],
  ['Reproduction archive', 'Photos d’archives officielles du Mouvement Naby Allah. Formats encadrés. Édition numérotée. La mémoire comme présence dans un espace de vie.', 'Livraison au Sénégal · Retrait à la mosquée'],
]

export const SOCIALS = ['YouTube', 'Facebook', 'Instagram', 'X', 'TikTok']
