import { Question } from '@/types';

/**
 * Official questions from civic education test
 * Total: 383 questions
 * - CR (Connaissance Réfugiés): 169 questions
 * - CSP (Connaissance Statut Personnel): 154 questions
 * - SUPP (Supplementary): 60 questions
 */
export const questions: Question[] = [
  {
    "id": "cr-1",
    "question": "Qu'est-ce que l'État de droit ?",
    "options": [
      "Un État où seul le gouvernement fait les lois",
      "Un État où tous les citoyens et pouvoirs publics sont soumis à la loi",
      "Un État qui peut modifier les lois à tout moment",
      "Un État dirigé uniquement par des juges"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "L'État de droit est un principe fondamental selon lequel tous les citoyens et les pouvoirs publics (exécutif, législatif, judiciaire) sont soumis à la loi. Personne n'est au-dessus de la loi, y compris les dirigeants politiques."
  },
  {
    "id": "cr-2",
    "question": "Le président de la République a commis un crime. Quelle proposition est correcte ?",
    "options": [
      "Il ne peut pas être poursuivi car il est président",
      "Il peut être destitué et poursuivi par la justice",
      "Seul le peuple peut le juger par référendum",
      "Il doit attendre la fin de son mandat pour être jugé"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Dans un État de droit, personne n'est au-dessus de la loi. Le président peut être destitué par la Haute Cour en cas de manquement à ses devoirs manifestement incompatible avec l'exercice de son mandat, et peut être poursuivi par la justice."
  },
  {
    "id": "cr-3",
    "question": "La loi est l'expression de :",
    "options": [
      "La volonté du président",
      "La volonté du gouvernement",
      "La volonté générale",
      "La volonté des juges"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Article 6 de la Déclaration des Droits de l'Homme et du Citoyen de 1789 : 'La loi est l'expression de la volonté générale'. La loi représente la volonté du peuple souverain, exprimée par ses représentants élus."
  },
  {
    "id": "cr-4",
    "question": "Quelle est la durée du mandat du conseil municipal et du maire ?",
    "options": [
      "4 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Les conseillers municipaux et le maire sont élus pour un mandat de 6 ans. Les élections municipales ont lieu tous les 6 ans."
  },
  {
    "id": "cr-5",
    "question": "Que garantit l'État de droit ?",
    "options": [
      "Que seul l'État peut faire ce qu'il veut",
      "Que tous sont égaux devant la loi",
      "Que le droit peut changer selon les personnes",
      "Que les riches ont plus de droits"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "L'État de droit garantit l'égalité de tous devant la loi, la protection des libertés fondamentales et que tous les pouvoirs publics respectent les règles de droit. C'est un principe essentiel de la démocratie."
  },
  {
    "id": "cr-6",
    "question": "Une personne peut-elle voter à la place d'une autre ?",
    "options": [
      "Oui, avec une procuration",
      "Oui, si c'est un membre de la famille",
      "Non, jamais",
      "Oui, si l'autre personne est malade"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Une personne peut voter à la place d'une autre uniquement avec une procuration officielle établie préalablement. Sans procuration valide, voter à la place d'une autre personne est illégal."
  },
  {
    "id": "cr-7",
    "question": "Est-ce que le vote est obligatoire ?",
    "options": [
      "Oui, c'est obligatoire sous peine d'amende",
      "Non, c'est un droit mais pas une obligation",
      "Oui, seulement pour les élections présidentielles",
      "Oui, seulement pour les hommes"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "En France, le vote est un droit et non une obligation. Les citoyens sont libres de voter ou non. L'abstention n'est pas sanctionnée."
  },
  {
    "id": "cr-8",
    "question": "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?",
    "options": [
      "Oui, s'il le décide",
      "Oui, si le gouvernement est d'accord",
      "Non, il doit organiser de nouvelles élections",
      "Oui, en cas de crise nationale"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Dans une démocratie, le président ne peut pas décider seul de rester au pouvoir. À la fin de son mandat de 5 ans, de nouvelles élections présidentielles doivent être organisées. C'est un principe fondamental de la démocratie."
  },
  {
    "id": "cr-9",
    "question": "Qui dirige l'action du Gouvernement ?",
    "options": [
      "Le président de la République",
      "Le Premier ministre",
      "L'Assemblée nationale",
      "Le ministre de l'Intérieur"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Selon l'article 21 de la Constitution de la Vème République, le Premier ministre dirige l'action du Gouvernement. Il est responsable de la mise en œuvre de la politique de la Nation."
  },
  {
    "id": "cr-10",
    "question": "Qui nomme le Premier ministre ?",
    "options": [
      "Les citoyens par vote direct",
      "L'Assemblée nationale",
      "Le président de la République",
      "Le Sénat"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Selon l'article 8 de la Constitution, le président de la République nomme le Premier ministre. C'est l'une de ses principales prérogatives."
  },
  {
    "id": "cr-11",
    "question": "Quelle est l'organisation administrative de la France ?",
    "options": [
      "Seulement l'État central",
      "L'État et les collectivités territoriales (régions, départements, communes)",
      "Seulement les communes",
      "L'État et les provinces"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La France a une organisation administrative décentralisée comprenant l'État et trois niveaux de collectivités territoriales : les régions, les départements et les communes."
  },
  {
    "id": "cr-12",
    "question": "Qu'est-ce que le pouvoir législatif ? Le pouvoir :",
    "options": [
      "De faire appliquer les lois",
      "De voter et élaborer les lois",
      "De juger les infractions à la loi",
      "De nommer les ministres"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le pouvoir législatif est celui qui vote et élabore les lois. En France, il est exercé par le Parlement (Assemblée nationale et Sénat)."
  },
  {
    "id": "cr-13",
    "question": "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    "options": [
      "Pour rendre le système plus compliqué",
      "Pour éviter les abus de pouvoir et garantir les libertés",
      "Pour créer plus d'emplois",
      "Pour que chacun travaille séparément"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La séparation des trois pouvoirs (exécutif, législatif, judiciaire) est un principe fondamental de Montesquieu qui vise à éviter la concentration des pouvoirs et les abus. Chaque pouvoir contrôle et équilibre les autres pour garantir les libertés."
  },
  {
    "id": "cr-14",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "options": [
      "La police",
      "Le maire",
      "Le juge",
      "Le président"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le pouvoir judiciaire, exercé par les juges, est seul compétent pour sanctionner les infractions. La police arrête les suspects, mais seul le juge peut prononcer une sanction après un procès."
  },
  {
    "id": "cr-15",
    "question": "Quel est le rôle du gouvernement ?",
    "options": [
      "Voter les lois",
      "Juger les criminels",
      "Mettre en œuvre la politique de la Nation",
      "Élire le président"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le Gouvernement, dirigé par le Premier ministre, est chargé de mettre en œuvre la politique de la Nation. Il fait partie du pouvoir exécutif et applique les lois votées par le Parlement."
  },
  {
    "id": "cr-16",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "options": [
      "Rien, il est protégé par sa fonction",
      "Il peut être poursuivi en justice",
      "Seul le président peut le sanctionner",
      "Il doit payer une petite amende"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Dans un État de droit, personne n'est au-dessus de la loi. Un ministre qui ne respecte pas la loi peut être poursuivi en justice. Il peut être jugé par la Cour de Justice de la République pour les actes commis dans l'exercice de ses fonctions."
  },
  {
    "id": "cr-17",
    "question": "Combien de députés composent l'Assemblée nationale ?",
    "options": [
      "348",
      "577",
      "678",
      "450"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "L'Assemblée nationale est composée de 577 députés élus au suffrage universel direct pour un mandat de 5 ans."
  },
  {
    "id": "cr-18",
    "question": "Qui peut voter aux élections en France ?",
    "options": [
      "Tous les résidents de France",
      "Les citoyens français majeurs inscrits sur les listes électorales",
      "Seulement les hommes",
      "Tous les européens vivant en France"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Pour voter aux élections nationales en France, il faut être citoyen français, être majeur (18 ans), jouir de ses droits civiques et être inscrit sur les listes électorales. Pour les élections locales et européennes, les citoyens de l'UE résidant en France peuvent aussi voter."
  },
  {
    "id": "cr-19",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "options": [
      "5 ans",
      "6 ans",
      "7 ans",
      "9 ans"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Les sénateurs sont élus pour un mandat de 6 ans. Le Sénat est renouvelé par moitié tous les 3 ans."
  },
  {
    "id": "cr-20",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "options": [
      "Le pouvoir royal, militaire et religieux",
      "Le pouvoir exécutif, législatif et judiciaire",
      "Le pouvoir présidentiel, parlementaire et local",
      "Le pouvoir économique, social et culturel"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La séparation des pouvoirs distingue trois pouvoirs : le pouvoir exécutif (qui applique les lois), le pouvoir législatif (qui vote les lois) et le pouvoir judiciaire (qui juge). C'est un principe fondamental de Montesquieu pour éviter les abus de pouvoir."
  },
  {
    "id": "cr-21",
    "question": "Est-ce que le président de la République a tous les pouvoirs ?",
    "options": [
      "Oui, il peut tout décider seul",
      "Non, ses pouvoirs sont limités par la Constitution et contrôlés par d'autres institutions",
      "Oui, sauf en temps de paix",
      "Non, il n'a aucun pouvoir réel"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le président de la République a des pouvoirs importants définis par la Constitution, mais ils sont limités et contrôlés par d'autres institutions (Parlement, justice, etc.). C'est le principe de la séparation des pouvoirs."
  },
  {
    "id": "cr-22",
    "question": "Qui est le préfet ?",
    "options": [
      "Le maire de la plus grande ville du département",
      "Le représentant de l'État dans le département",
      "Un élu local du conseil départemental",
      "Le chef de la police départementale"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le préfet est le représentant de l'État dans le département. Il est nommé par le gouvernement et est responsable de l'application des lois et de la politique du gouvernement au niveau local."
  },
  {
    "id": "cr-23",
    "question": "Quelle condition est nécessaire pour voter aux élections ?",
    "options": [
      "Avoir un emploi",
      "Être inscrit sur les listes électorales",
      "Avoir un diplôme",
      "Être propriétaire"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Pour voter, il faut obligatoirement être inscrit sur les listes électorales. Il faut aussi être majeur, de nationalité française (pour les élections nationales), et jouir de ses droits civiques."
  },
  {
    "id": "cr-24",
    "question": "Qui dirige la commune ?",
    "options": [
      "Le préfet",
      "Le président de la République",
      "Le maire",
      "Le député"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le maire dirige la commune. Il est élu par le conseil municipal et est responsable de l'administration communale et de l'exécution des décisions du conseil municipal."
  },
  {
    "id": "cr-25",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "options": [
      "Une monarchie constitutionnelle",
      "Une République",
      "Un empire",
      "Une dictature"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La France est une République depuis 1870 (à l'exception de Vichy 1940-1944). Actuellement, c'est la Vème République, établie en 1958."
  },
  {
    "id": "cr-26",
    "question": "Qu'est-ce que l'Hôtel de Matignon ?",
    "options": [
      "Un musée parisien",
      "La résidence et le bureau du Premier ministre",
      "La résidence du président de la République",
      "Le siège de l'Assemblée nationale"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "L'Hôtel de Matignon, situé rue de Varenne à Paris, est la résidence officielle et le lieu de travail du Premier ministre français."
  },
  {
    "id": "cr-27",
    "question": "Le Parlement est composé :",
    "options": [
      "Uniquement de l'Assemblée nationale",
      "De l'Assemblée nationale et du Sénat",
      "Uniquement du Sénat",
      "Du gouvernement et de l'Assemblée nationale"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le Parlement français est composé de deux chambres : l'Assemblée nationale (577 députés élus au suffrage universel direct) et le Sénat (348 sénateurs élus au suffrage universel indirect)."
  },
  {
    "id": "cr-28",
    "question": "Quel est le rôle du président de la République ?",
    "options": [
      "Voter les lois",
      "Être le chef de l'État et garant des institutions",
      "Juger les criminels",
      "Diriger les communes"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le président de la République est le chef de l'État. Il est le garant de l'indépendance nationale, de l'intégrité du territoire et du respect de la Constitution. Il nomme le Premier ministre et préside le Conseil des ministres."
  },
  {
    "id": "cr-29",
    "question": "Quel est le rôle du Premier ministre ?",
    "options": [
      "Élire le président",
      "Diriger l'action du Gouvernement",
      "Présider l'Assemblée nationale",
      "Commander l'armée"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le Premier ministre dirige l'action du Gouvernement. Il est responsable de la mise en œuvre de la politique de la Nation et de l'application des lois."
  },
  {
    "id": "cr-30",
    "question": "Qui est le chef du Gouvernement ?",
    "options": [
      "Le président de la République",
      "Le Premier ministre",
      "Le ministre de l'Intérieur",
      "Le président de l'Assemblée nationale"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le Premier ministre est le chef du Gouvernement. Il dirige l'action du Gouvernement et coordonne le travail des ministres."
  },
  {
    "id": "cr-31",
    "question": "Combien y a-t-il de régions en France ?",
    "options": [
      "13 en métropole + 5 d'outre-mer",
      "22 en métropole + 5 d'outre-mer",
      "18 en métropole + 5 d'outre-mer",
      "26 en métropole + 5 d'outre-mer"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Depuis la réforme territoriale de 2016, la France compte 13 régions en métropole et 5 régions d'outre-mer (Guadeloupe, Guyane, Martinique, Mayotte, La Réunion), soit 18 régions au total."
  },
  {
    "id": "cr-32",
    "question": "Quel est le rôle du Défenseur des droits ?",
    "options": [
      "Défendre le président en justice",
      "Défendre les droits et libertés des citoyens face aux administrations",
      "Défendre la France contre les attaques",
      "Être l'avocat du gouvernement"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le Défenseur des droits est une autorité constitutionnelle indépendante chargée de défendre les droits et libertés des citoyens dans leurs relations avec les administrations publiques. Il peut être saisi gratuitement par toute personne."
  },
  {
    "id": "cr-33",
    "question": "Depuis quand l'euro est-elle la monnaie unique ?",
    "options": [
      "1992",
      "1999 (sous forme scripturale) et 2002 (billets et pièces)",
      "2005",
      "1989"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "L'euro a été introduit comme monnaie scripturale (pour les transactions électroniques) le 1er janvier 1999. Les billets et pièces en euros sont entrés en circulation le 1er janvier 2002."
  },
  {
    "id": "cr-34",
    "question": "Quel est le rôle principal du département ?",
    "options": [
      "Gérer l'éducation nationale",
      "Gérer l'action sociale, les collèges, les routes départementales",
      "Gérer la défense nationale",
      "Gérer les universités"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le département est une collectivité territoriale qui gère notamment l'action sociale (aide aux personnes âgées, handicapées, RSA), les collèges, les routes départementales et les services d'incendie et de secours."
  },
  {
    "id": "cr-35",
    "question": "Quel est le rôle principal des communes ?",
    "options": [
      "Gérer les hôpitaux",
      "Gérer les services de proximité (état civil, urbanisme, écoles primaires)",
      "Gérer l'armée",
      "Voter les lois nationales"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Les communes gèrent les services de proximité : état civil, urbanisme, écoles primaires, voirie communale, équipements sportifs et culturels, etc. C'est le niveau de collectivité le plus proche des citoyens."
  },
  {
    "id": "cr-36",
    "question": "Combien de communes environ existe-t-il en France ?",
    "options": [
      "5 000",
      "15 000",
      "35 000",
      "50 000"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La France compte environ 35 000 communes (environ 34 900 actuellement), ce qui en fait le pays d'Europe avec le plus grand nombre de communes."
  },
  {
    "id": "cr-37",
    "question": "Quel traité concerne la construction de l'Union européenne ?",
    "options": [
      "Le traité de Versailles",
      "Le traité de Maastricht",
      "Le traité de Paris de 1815",
      "Le traité de l'Atlantique Nord"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le traité de Maastricht, signé en 1992, a créé l'Union européenne telle que nous la connaissons aujourd'hui. Il a établi l'union politique et préparé la monnaie unique (l'euro)."
  },
  {
    "id": "cr-38",
    "question": "Quel État a quitté l'Union européenne en 2020 ?",
    "options": [
      "La Suisse",
      "Le Royaume-Uni",
      "La Norvège",
      "L'Islande"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le Royaume-Uni a officiellement quitté l'Union européenne le 31 janvier 2020, suite au référendum du Brexit de 2016."
  },
  {
    "id": "cr-39",
    "question": "Quelle est la devise de l'Union européenne ?",
    "options": [
      "Liberté, Égalité, Fraternité",
      "Unie dans la diversité",
      "Force et honneur",
      "Paix et prospérité"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La devise de l'Union européenne est 'Unie dans la diversité'. Elle exprime la façon dont les Européens se sont unis pour œuvrer en faveur de la paix et de la prospérité, tout en étant enrichis par les nombreuses cultures, traditions et langues du continent."
  },
  {
    "id": "cr-40",
    "question": "Quel est l'hymne de l'Union européenne ?",
    "options": [
      "La Marseillaise",
      "L'Ode à la joie de Beethoven",
      "God Save the King",
      "L'hymne de la paix"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "L'hymne de l'Union européenne est l'Ode à la joie, tirée de la 9ème symphonie de Ludwig van Beethoven. C'est un symbole d'unité dans la diversité et de paix."
  },
  {
    "id": "cr-41",
    "question": "De quoi est composé le drapeau européen ?",
    "options": [
      "De 12 étoiles jaunes sur fond bleu",
      "De 27 étoiles blanches sur fond rouge",
      "De 15 étoiles dorées sur fond vert",
      "D'une seule grande étoile sur fond bleu"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le drapeau européen est composé de 12 étoiles dorées (jaunes) disposées en cercle sur fond bleu. Le nombre 12 symbolise la perfection et l'unité, et ne change pas selon le nombre d'États membres."
  },
  {
    "id": "cr-42",
    "question": "De quelle couleur est le drapeau européen ?",
    "options": [
      "Rouge et blanc",
      "Bleu avec des étoiles jaunes/dorées",
      "Vert et blanc",
      "Bleu, blanc, rouge"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le drapeau européen est bleu avec 12 étoiles jaunes (ou dorées) disposées en cercle. Le bleu représente le ciel de l'Occident."
  },
  {
    "id": "cr-43",
    "question": "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
    "options": [
      "1989",
      "1992",
      "1995",
      "2000"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le traité de Maastricht a été signé le 7 février 1992 et est entré en vigueur le 1er novembre 1993. Il a créé l'Union européenne et préparé l'introduction de l'euro."
  },
  {
    "id": "cr-44",
    "question": "Où est le siège du Parlement européen ?",
    "options": [
      "Paris",
      "Strasbourg",
      "Bruxelles",
      "Luxembourg"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le siège officiel du Parlement européen est à Strasbourg, en France. Les séances plénières s'y tiennent. Bruxelles accueille les commissions parlementaires et certaines sessions supplémentaires."
  },
  {
    "id": "cr-45",
    "question": "Où est le siège de la Commission européenne ?",
    "options": [
      "Strasbourg",
      "Bruxelles",
      "Luxembourg",
      "Francfort"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Le siège de la Commission européenne est à Bruxelles, en Belgique. C'est l'organe exécutif de l'Union européenne."
  },
  {
    "id": "cr-46",
    "question": "Quel État n'est pas membre de l'Union européenne ?",
    "options": [
      "La Suisse",
      "La Belgique",
      "Le Portugal",
      "L'Autriche"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La Suisse n'est pas membre de l'Union européenne. Elle a rejeté l'adhésion par référendum et maintient des relations bilatérales avec l'UE."
  },
  {
    "id": "cr-47",
    "question": "Quand célèbre-t-on la journée de l'Europe ?",
    "options": [
      "Le 1er janvier",
      "Le 9 mai",
      "Le 14 juillet",
      "Le 1er mai"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La journée de l'Europe est célébrée le 9 mai. Cette date commémore la déclaration de Robert Schuman du 9 mai 1950, considérée comme l'acte fondateur de la construction européenne."
  },
  {
    "id": "cr-48",
    "question": "À quelle fréquence les élections européennes sont-elles organisées ?",
    "options": [
      "Tous les 3 ans",
      "Tous les 4 ans",
      "Tous les 5 ans",
      "Tous les 7 ans"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Les élections européennes ont lieu tous les 5 ans dans tous les États membres de l'Union européenne pour élire les députés européens au Parlement européen."
  },
  {
    "id": "cr-49",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "options": [
      "Être seulement français",
      "Être citoyen de l'Union européenne et résider dans un pays membre",
      "Avoir plus de 21 ans",
      "Avoir un diplôme universitaire"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "Pour voter aux élections européennes en France, il faut être citoyen de l'Union européenne (français ou d'un autre État membre de l'UE), avoir 18 ans, résider en France et être inscrit sur les listes électorales."
  },
  {
    "id": "cr-50",
    "question": "Quel pays est un pays fondateur de l'Union européenne ?",
    "options": [
      "Le Royaume-Uni",
      "La France",
      "L'Espagne",
      "La Suède"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CR",
    "explanation": "La France est l'un des six pays fondateurs de la Communauté européenne du charbon et de l'acier (CECA) en 1951, ancêtre de l'UE. Les six fondateurs sont : France, Allemagne, Italie, Belgique, Pays-Bas et Luxembourg."
  },
  {
    "id": "cr-51",
    "question": "À quelle liberté la PMA fait-elle référence ?",
    "options": [
      "La liberté d'expression",
      "La liberté de disposer de son corps",
      "La liberté de religion",
      "La liberté de circulation"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La PMA (Procréation Médicalement Assistée) fait référence au droit fondamental de disposer de son corps et au droit de fonder une famille. C'est une liberté individuelle liée aux choix personnels concernant la procréation."
  },
  {
    "id": "cr-52",
    "question": "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    "options": [
      "Au nom de l'économie",
      "Au nom de l'intérêt général et de l'ordre public",
      "Au nom du président",
      "Au nom de la tradition"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "L'État peut limiter certaines libertés au nom de l'intérêt général et de l'ordre public. Ces restrictions doivent être proportionnées, nécessaires et prévues par la loi pour protéger la sécurité, la santé publique ou les droits d'autrui."
  },
  {
    "id": "cr-53",
    "question": "Concernant le droit de se marier, quelle proposition est correcte ?",
    "options": [
      "Seuls les couples de sexe différent peuvent se marier",
      "Le mariage est possible pour tous les couples, indépendamment du sexe",
      "Il faut l'autorisation des parents pour se marier",
      "Le mariage n'est plus possible en France"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Depuis la loi du 17 mai 2013 (mariage pour tous), le mariage est ouvert à tous les couples, qu'ils soient de sexe différent ou de même sexe. C'est un droit fondamental."
  },
  {
    "id": "cr-54",
    "question": "Est-il toujours possible de divorcer ?",
    "options": [
      "Non, seulement si l'autre personne est d'accord",
      "Oui, le divorce est toujours possible",
      "Non, il faut une raison grave",
      "Non, c'est interdit"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "En France, le divorce est toujours possible. Il existe plusieurs types de divorce (par consentement mutuel, pour faute, pour altération définitive du lien conjugal, par acceptation du principe). La liberté de divorcer est un droit fondamental."
  },
  {
    "id": "cr-55",
    "question": "La peine de mort est :",
    "options": [
      "Encore appliquée pour les crimes graves",
      "Abolie en France depuis 1981",
      "Appliquée seulement en temps de guerre",
      "Décidée par référendum au cas par cas"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La peine de mort a été abolie en France en 1981 sous la présidence de François Mitterrand, avec la loi portée par Robert Badinter. Cette abolition a ensuite été inscrite dans la Constitution en 2007."
  },
  {
    "id": "cr-56",
    "question": "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ?",
    "options": [
      "Tous pour un, un pour tous",
      "Les hommes naissent et demeurent libres et égaux en droits",
      "L'union fait la force",
      "Aide-toi, le ciel t'aidera"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "L'article 1 de la Déclaration des Droits de l'Homme et du Citoyen de 1789 proclame : 'Les hommes naissent et demeurent libres et égaux en droits'. C'est un principe fondamental de la République française."
  },
  {
    "id": "cr-57",
    "question": "Le recours à l'avortement est-il autorisé ?",
    "options": [
      "Non, c'est interdit",
      "Oui, c'est un droit garanti par la loi",
      "Seulement en cas de danger pour la mère",
      "Seulement avec l'autorisation du mari"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "L'avortement est légal en France depuis la loi Veil de 1975. C'est un droit fondamental garanti par la loi. Toute femme enceinte peut demander l'interruption volontaire de grossesse (IVG) jusqu'à 14 semaines de grossesse."
  },
  {
    "id": "cr-58",
    "question": "Que contient la Constitution ?",
    "options": [
      "Seulement les noms des présidents",
      "Les règles d'organisation des pouvoirs publics et les droits fondamentaux",
      "La liste des lois françaises",
      "Le budget de l'État"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La Constitution est le texte juridique suprême qui définit l'organisation des pouvoirs publics (exécutif, législatif, judiciaire), leurs relations, et garantit les droits et libertés fondamentaux des citoyens."
  },
  {
    "id": "cr-59",
    "question": "Que garantit la liberté de la presse ?",
    "options": [
      "Que les journalistes peuvent dire ce qu'ils veulent sans limites",
      "Que les médias peuvent informer librement dans le respect de la loi",
      "Que seul l'État peut publier des informations",
      "Que les journaux sont gratuits"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La liberté de la presse garantit que les médias peuvent informer librement le public sans censure préalable, dans le respect de la loi (pas de diffamation, respect de la vie privée, etc.). C'est un pilier de la démocratie."
  },
  {
    "id": "cr-60",
    "question": "Que prévoit la Charte de l'environnement ?",
    "options": [
      "La protection de l'économie",
      "Le droit de vivre dans un environnement sain et le devoir de protéger l'environnement",
      "L'interdiction des voitures",
      "La construction de plus d'usines"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La Charte de l'environnement, intégrée à la Constitution en 2005, reconnaît le droit de chacun de vivre dans un environnement équilibré et respectueux de la santé, et établit le devoir de chacun de protéger et améliorer l'environnement."
  },
  {
    "id": "cr-61",
    "question": "Que signifie la dignité humaine ?",
    "options": [
      "Que seuls les riches ont de la valeur",
      "Que chaque être humain a une valeur qui doit être respectée",
      "Qu'il faut toujours porter de beaux vêtements",
      "Que seuls les citoyens ont des droits"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La dignité humaine est le principe selon lequel chaque être humain possède une valeur intrinsèque qui doit être respectée. C'est un principe fondamental des droits de l'homme, protégé par la loi."
  },
  {
    "id": "cr-62",
    "question": "Que signifie le droit de manifester ?",
    "options": [
      "Le droit de faire du bruit",
      "Le droit d'exprimer collectivement ses opinions dans la rue de manière pacifique",
      "Le droit de bloquer les routes",
      "Le droit de se battre"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le droit de manifester est une liberté fondamentale qui permet d'exprimer collectivement et publiquement ses opinions de façon pacifique. Les manifestations doivent généralement être déclarées à la préfecture."
  },
  {
    "id": "cr-63",
    "question": "Que signifie PMA ?",
    "options": [
      "Pays Membres Associés",
      "Procréation Médicalement Assistée",
      "Protection des Mineurs Actifs",
      "Plan Médical Annuel"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "PMA signifie Procréation Médicalement Assistée. Ce sont des techniques médicales pour aider les personnes à avoir un enfant (insémination artificielle, fécondation in vitro, etc.)."
  },
  {
    "id": "cr-64",
    "question": "Quel texte est le plus difficile à modifier ?",
    "options": [
      "Une loi ordinaire",
      "La Constitution",
      "Un décret",
      "Un arrêté municipal"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La Constitution est le texte le plus difficile à modifier. Sa révision nécessite une procédure spéciale : vote par les deux assemblées puis référendum ou vote du Congrès (réunion de l'Assemblée nationale et du Sénat) à la majorité des 3/5."
  },
  {
    "id": "cr-65",
    "question": "Quelle liberté permet à une personne de croire en la religion de son choix ?",
    "options": [
      "La liberté d'expression",
      "La liberté de conscience et de culte",
      "La liberté d'association",
      "La liberté de circulation"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La liberté de conscience et de culte permet à chacun de choisir sa religion, de pratiquer ou de ne pas pratiquer de religion. C'est un droit fondamental garanti par la laïcité."
  },
  {
    "id": "cr-66",
    "question": "Qu'est-ce que le droit de grève ?",
    "options": [
      "Le droit de ne jamais travailler",
      "Le droit de cesser collectivement le travail pour défendre ses intérêts professionnels",
      "Le droit de casser du matériel",
      "Le droit de manifester violemment"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le droit de grève est un droit constitutionnel qui permet aux salariés de cesser collectivement le travail pour défendre leurs intérêts professionnels (salaires, conditions de travail, etc.). Il est encadré par la loi."
  },
  {
    "id": "cr-67",
    "question": "Qu'est-ce que la Constitution ?",
    "options": [
      "Un journal officiel",
      "La loi fondamentale qui organise les pouvoirs publics et garantit les droits fondamentaux",
      "Un décret présidentiel",
      "Le code pénal"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La Constitution est la loi fondamentale et suprême d'un État. Elle définit l'organisation des pouvoirs publics, leurs rapports et garantit les droits et libertés fondamentaux."
  },
  {
    "id": "cr-68",
    "question": "Qui peut demander à avorter ?",
    "options": [
      "Seulement les femmes mariées",
      "Toute femme enceinte qui le souhaite",
      "Seulement en cas de danger médical",
      "Avec l'accord du conjoint obligatoire"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "En France, toute femme enceinte, majeure ou mineure, peut demander une IVG (interruption volontaire de grossesse) si elle le souhaite, jusqu'à 14 semaines de grossesse. C'est un droit fondamental garanti par la loi Veil de 1975."
  },
  {
    "id": "cr-69",
    "question": "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?",
    "options": [
      "Non, seuls les hommes votent",
      "Oui, femmes et hommes ont le droit de vote",
      "Seulement si elle est mariée",
      "Seulement avec l'autorisation de son mari"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Depuis 1944, les femmes françaises ont le droit de vote comme les hommes. L'égalité entre femmes et hommes est un principe constitutionnel."
  },
  {
    "id": "cr-70",
    "question": "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?",
    "options": [
      "On peut tout dire sans conséquence",
      "On doit respecter la loi (pas d'injures, diffamation, incitation à la haine)",
      "C'est un espace sans règles",
      "Seuls les mineurs ont des limites"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Sur les réseaux sociaux, la loi s'applique comme ailleurs. Il est interdit de tenir des propos injurieux, diffamatoires, racistes, ou d'inciter à la haine. Les violations peuvent être poursuivies en justice."
  },
  {
    "id": "cr-71",
    "question": "Jeter un mégot par terre est :",
    "options": [
      "Autorisé partout",
      "Interdit et passible d'amende",
      "Autorisé seulement en ville",
      "Seulement interdit dans les parcs"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Jeter un mégot par terre est interdit et constitue une infraction passible d'une amende. C'est une atteinte à l'environnement et à la propreté publique."
  },
  {
    "id": "cr-72",
    "question": "L'État peut-il limiter les droits et libertés ?",
    "options": [
      "Non, jamais",
      "Oui, pour protéger l'ordre public et l'intérêt général, de manière proportionnée",
      "Oui, sans limite",
      "Seulement en dictature"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "L'État peut limiter certaines libertés pour protéger l'ordre public, la sécurité, la santé ou les droits d'autrui. Ces limitations doivent être prévues par la loi, nécessaires et proportionnées à l'objectif poursuivi."
  },
  {
    "id": "cr-73",
    "question": "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l'environnement ?",
    "options": [
      "Jeter ses déchets n'importe où",
      "Trier ses déchets et réduire sa consommation",
      "Utiliser uniquement sa voiture",
      "Gaspiller l'eau et l'électricité"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Adopter une attitude respectueuse de l'environnement implique de trier ses déchets, réduire sa consommation, économiser l'énergie et l'eau, utiliser les transports en commun, etc. C'est un devoir citoyen inscrit dans la Charte de l'environnement."
  },
  {
    "id": "cr-74",
    "question": "Quelle proposition constitue une obligation ?",
    "options": [
      "Regarder la télévision",
      "Respecter les lois",
      "Avoir une voiture",
      "Partir en vacances"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Respecter les lois est une obligation pour toute personne résidant en France. C'est un devoir fondamental dans un État de droit."
  },
  {
    "id": "cr-75",
    "question": "Pour quel motif peut-on limiter la liberté d'expression ?",
    "options": [
      "Pour protéger la dignité humaine et empêcher l'incitation à la haine",
      "Parce que l'opinion ne plaît pas au gouvernement",
      "Pour éviter toute critique",
      "On ne peut jamais la limiter"
    ],
    "correctAnswer": 0,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La liberté d'expression peut être limitée pour protéger la dignité humaine, empêcher l'incitation à la haine, la diffamation, les injures, l'apologie de crimes. Ces limites protègent l'ordre public et les droits d'autrui."
  },
  {
    "id": "cr-76",
    "question": "Pourquoi doit-on trier ses déchets ?",
    "options": [
      "Ce n'est pas obligatoire",
      "Pour permettre le recyclage et protéger l'environnement",
      "Seulement pour faire plaisir à la mairie",
      "C'est interdit de trier"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le tri des déchets permet le recyclage des matériaux, réduit la pollution et préserve les ressources naturelles. C'est une obligation légale et un geste citoyen pour protéger l'environnement."
  },
  {
    "id": "cr-77",
    "question": "Que doit faire une victime de violences ?",
    "options": [
      "Ne rien faire et se cacher",
      "Porter plainte auprès de la police ou de la gendarmerie",
      "Se venger elle-même",
      "Déménager sans rien dire"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Une victime de violences doit porter plainte auprès de la police ou de la gendarmerie. Elle peut aussi contacter le 3919 (violences conjugales) ou le 17 (urgence). L'État protège les victimes et poursuit les auteurs."
  },
  {
    "id": "cr-78",
    "question": "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    "options": [
      "Les ignorer",
      "Les respecter car ils représentent l'autorité de l'État",
      "Discuter pour négocier",
      "Fuir"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Les policiers et gendarmes représentent l'autorité de l'État. Leurs ordres légitimes doivent être respectés. Le refus d'obtempérer est une infraction. En cas de désaccord, on peut contester après coup, mais il faut obéir sur le moment."
  },
  {
    "id": "cr-79",
    "question": "Quel est le rôle de la police ?",
    "options": [
      "Faire les lois",
      "Assurer la sécurité des personnes et des biens et faire respecter la loi",
      "Juger les criminels",
      "Diriger le pays"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le rôle de la police (et de la gendarmerie) est d'assurer la sécurité des personnes et des biens, de maintenir l'ordre public et de faire respecter la loi. Elle arrête les suspects mais ne les juge pas (c'est le rôle des juges)."
  },
  {
    "id": "cr-80",
    "question": "Quel est un exemple d'assistance à personne en danger ?",
    "options": [
      "Passer son chemin devant quelqu'un en difficulté",
      "Appeler les secours (15, 17, 18, 112) pour aider quelqu'un en danger",
      "Filmer la personne en danger sans l'aider",
      "Attendre que d'autres agissent"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "L'assistance à personne en danger est une obligation légale. Si on voit quelqu'un en danger, on doit l'aider dans la mesure de ses moyens sans se mettre soi-même en danger, par exemple en appelant les secours (15: SAMU, 17: police, 18: pompiers, 112: urgences européen)."
  },
  {
    "id": "cr-81",
    "question": "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?",
    "options": [
      "Interdire aux gens de penser",
      "Limiter la vitesse sur les routes pour protéger la sécurité de tous",
      "Interdire de lire des livres",
      "Interdire de parler"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La limitation de vitesse sur les routes est un exemple de restriction de liberté (liberté de circuler comme on veut) justifiée par l'intérêt général (sécurité routière, protection des vies)."
  },
  {
    "id": "cr-82",
    "question": "Quelle est l'attitude à avoir lorsque qu'on est témoin de violences ?",
    "options": [
      "Ne rien faire",
      "Alerter les forces de l'ordre et porter assistance à la victime si possible",
      "Filmer et diffuser sur les réseaux sociaux",
      "Encourager la violence"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Témoin de violences, on doit alerter immédiatement les forces de l'ordre (17 ou 112) et porter assistance à la victime si on peut le faire sans danger. Le non-assistance à personne en danger est un délit."
  },
  {
    "id": "cr-83",
    "question": "Quelle est l'infraction la plus grave ?",
    "options": [
      "La contravention",
      "Le crime",
      "Le délit",
      "L'amende"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le crime est l'infraction la plus grave (meurtre, viol, etc.), jugé par la cour d'assises avec jury populaire. Viennent ensuite le délit (vol, escroquerie, etc.) jugé par le tribunal correctionnel, puis la contravention (excès de vitesse, etc.)."
  },
  {
    "id": "cr-84",
    "question": "Quelle obligation concerne toutes les personnes résidant en France quelle que soit leur nationalité ?",
    "options": [
      "Voter aux élections",
      "Respecter les lois françaises",
      "Servir dans l'armée",
      "Avoir la nationalité française"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Toutes les personnes résidant en France, quelle que soit leur nationalité, doivent respecter les lois françaises. C'est une obligation fondamentale pour vivre en société."
  },
  {
    "id": "cr-85",
    "question": "Quelle proposition représente un exemple de crime ?",
    "options": [
      "Un excès de vitesse",
      "Un meurtre",
      "Un vol à l'étalage",
      "Jeter un papier par terre"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le meurtre est un crime, l'infraction la plus grave. Les crimes sont jugés par la cour d'assises et peuvent être punis de peines de prison très lourdes."
  },
  {
    "id": "cr-86",
    "question": "Quelle proposition représente un exemple de délit ?",
    "options": [
      "Un meurtre",
      "Un vol",
      "Un stationnement interdit",
      "Un génocide"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "Le vol est un délit, une infraction de gravité moyenne. Les délits sont jugés par le tribunal correctionnel et punis de peines d'amendes ou de prison jusqu'à 10 ans."
  },
  {
    "id": "cr-87",
    "question": "Qui veille au maintien de l'ordre public ?",
    "options": [
      "Les citoyens uniquement",
      "La police et la gendarmerie",
      "Les avocats",
      "Les juges"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "La police nationale et la gendarmerie nationale sont chargées de veiller au maintien de l'ordre public et de la sécurité. Elles dépendent du ministère de l'Intérieur."
  },
  {
    "id": "cr-88",
    "question": "S'agissant des déchets, quelle proposition est correcte ?",
    "options": [
      "On peut les jeter n'importe où",
      "On doit les trier et les jeter dans les poubelles appropriées",
      "Seuls les déchets plastiques doivent être triés",
      "Le tri est facultatif"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CR",
    "explanation": "On doit trier ses déchets et les jeter dans les poubelles appropriées (recyclables, ordures ménagères, verre, etc.). Le tri sélectif est obligatoire et permet le recyclage pour protéger l'environnement."
  },
  {
    "id": "cr-89",
    "question": "Quel était le surnom de Louis XIV ?",
    "options": [
      "Le Roi-Soleil",
      "Le Roi-Lune",
      "Le Grand Charles",
      "Le Roi-Lion"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Louis XIV (1638-1715) était surnommé le Roi-Soleil. Il a régné pendant 72 ans et a fait construire le château de Versailles. Il représente l'apogée de la monarchie absolue en France."
  },
  {
    "id": "cr-90",
    "question": "Quel roi de France a été exécuté pendant la Révolution française ?",
    "options": [
      "Louis XIV",
      "Louis XVI",
      "François Ier",
      "Henri IV"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Louis XVI a été guillotiné le 21 janvier 1793 pendant la Révolution française. Sa mort marque la fin de la monarchie et le début de la Première République."
  },
  {
    "id": "cr-91",
    "question": "En quelle année Napoléon Ier est-il devenu empereur ?",
    "options": [
      "1789",
      "1804",
      "1815",
      "1830"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Napoléon Bonaparte est devenu empereur des Français le 2 décembre 1804, sacré à Notre-Dame de Paris. Il a régné jusqu'en 1814 (puis brièvement en 1815 pendant les Cent-Jours)."
  },
  {
    "id": "cr-92",
    "question": "Lequel de ces personnages a un lien avec la République française ?",
    "options": [
      "Louis XVI",
      "Charles de Gaulle",
      "Napoléon III",
      "Louis XIV"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Charles de Gaulle est fortement lié à la République française : héros de la Résistance (appel du 18 juin 1940), fondateur de la Vème République (1958), et président de 1959 à 1969. Les autres sont des rois ou empereurs."
  },
  {
    "id": "cr-93",
    "question": "De quand date l'appel à la résistance du général de Gaulle ?",
    "options": [
      "14 juillet 1789",
      "18 juin 1940",
      "8 mai 1945",
      "11 novembre 1918"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'appel du 18 juin 1940 est le discours du général de Gaulle depuis Londres, appelant les Français à continuer le combat contre l'Allemagne nazie malgré l'armistice. C'est l'acte fondateur de la Résistance française."
  },
  {
    "id": "cr-94",
    "question": "Pourquoi la Shoah est-elle étudiée à l'école ?",
    "options": [
      "Pour divertir les élèves",
      "Pour comprendre l'histoire, prévenir le racisme et transmettre la mémoire",
      "Parce que c'est obligatoire sans raison",
      "Pour faire peur"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Shoah (génocide des Juifs par les nazis, 1941-1945) est étudiée pour comprendre l'histoire, prévenir le racisme et l'antisémitisme, transmettre la mémoire des victimes et enseigner les dangers des idéologies totalitaires."
  },
  {
    "id": "cr-95",
    "question": "Quel pays a été colonisé par la France ?",
    "options": [
      "L'Espagne",
      "L'Algérie",
      "L'Allemagne",
      "La Russie"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'Algérie a été colonisée par la France de 1830 à 1962. La France a eu un vaste empire colonial, notamment en Afrique (Algérie, Sénégal, Mali, etc.), en Asie (Vietnam, Cambodge, etc.) et aux Antilles."
  },
  {
    "id": "cr-96",
    "question": "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    "options": [
      "Depuis 1958",
      "Depuis 1962",
      "Depuis 1981",
      "Depuis 2000"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Depuis 1962, suite au référendum voulu par le général de Gaulle, le président de la République est élu au suffrage universel direct par tous les citoyens. Avant, il était élu par un collège de grands électeurs."
  },
  {
    "id": "cr-97",
    "question": "Quelle est la première étape de la construction européenne en 1951 ?",
    "options": [
      "La création de l'euro",
      "La Communauté Européenne du Charbon et de l'Acier (CECA)",
      "Le traité de Maastricht",
      "L'Union européenne"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La CECA (Communauté Européenne du Charbon et de l'Acier) créée en 1951 est la première étape de la construction européenne. Elle réunissait 6 pays (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg) pour gérer ensemble le charbon et l'acier."
  },
  {
    "id": "cr-98",
    "question": "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?",
    "options": [
      "Charles de Gaulle",
      "François Mitterrand",
      "Jacques Chirac",
      "Georges Pompidou"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La peine de mort a été abolie en France le 9 octobre 1981 sous la présidence de François Mitterrand, grâce à la loi portée par le ministre de la Justice Robert Badinter."
  },
  {
    "id": "cr-99",
    "question": "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?",
    "options": [
      "L'Empire",
      "La République",
      "La monarchie constitutionnelle",
      "La dictature"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Première République française a été proclamée le 21 septembre 1792, après l'abolition de la monarchie. C'est un moment fondateur de l'histoire républicaine française."
  },
  {
    "id": "cr-100",
    "question": "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    "options": [
      "Napoléon Bonaparte",
      "Jean Moulin",
      "Louis XVI",
      "François Ier"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Jean Moulin (1899-1943) était un héros de la Résistance française. Il a unifié les mouvements de résistance sous l'autorité du général de Gaulle. Arrêté et torturé par la Gestapo, il est mort en déportation. Il repose au Panthéon."
  },
  {
    "id": "cr-101",
    "question": "En 1944, qu'est-ce qui a changé pour les femmes ?",
    "options": [
      "Elles ont obtenu le droit de conduire",
      "Elles ont obtenu le droit de vote",
      "Elles ont obtenu le droit de travailler",
      "Elles ont obtenu le droit au divorce"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "En 1944, le gouvernement provisoire du général de Gaulle a accordé le droit de vote aux femmes françaises par l'ordonnance du 21 avril 1944. Elles ont voté pour la première fois en 1945."
  },
  {
    "id": "cr-102",
    "question": "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?",
    "options": [
      "L'Union européenne",
      "L'Organisation des Nations Unies (ONU)",
      "L'OTAN",
      "La Croix-Rouge"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'ONU (Organisation des Nations Unies) a été créée le 24 octobre 1945 après la Seconde Guerre mondiale pour maintenir la paix et la sécurité internationale."
  },
  {
    "id": "cr-103",
    "question": "Quelle peine a été supprimée en 1981 ?",
    "options": [
      "La prison à vie",
      "La peine de mort",
      "Les travaux forcés",
      "L'amende"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La peine de mort a été abolie en France le 9 octobre 1981 sous la présidence de François Mitterrand, grâce à la loi portée par Robert Badinter."
  },
  {
    "id": "cr-104",
    "question": "En quelle année l'euro est-elle devenue la monnaie utilisée en France ?",
    "options": [
      "1999",
      "2002",
      "2005",
      "2010"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'euro est devenu la monnaie utilisée en France (billets et pièces) le 1er janvier 2002, remplaçant le franc français."
  },
  {
    "id": "cr-105",
    "question": "En quelle année a commencé la Première Guerre mondiale ?",
    "options": [
      "1914",
      "1918",
      "1939",
      "1945"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Première Guerre mondiale a commencé en 1914 (déclenchée par l'assassinat de l'archiduc François-Ferdinand) et s'est terminée en 1918."
  },
  {
    "id": "cr-106",
    "question": "Où a eu lieu le débarquement en 1944 ?",
    "options": [
      "En Normandie",
      "En Bretagne",
      "En Provence",
      "Dans le Nord"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Le débarquement du 6 juin 1944 (Jour-J, D-Day) a eu lieu en Normandie sur les plages françaises. C'était une opération militaire des Alliés pour libérer la France de l'occupation nazie."
  },
  {
    "id": "cr-107",
    "question": "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?",
    "options": [
      "L'Europe",
      "L'Afrique",
      "L'Amérique",
      "L'Océanie"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'Afrique a été le continent le plus concerné par la décolonisation française après 1945. De nombreux pays africains sont devenus indépendants dans les années 1960 (Sénégal, Mali, Côte d'Ivoire, Algérie, etc.)."
  },
  {
    "id": "cr-108",
    "question": "Que fête-t-on le 8 mai ?",
    "options": [
      "La fête du travail",
      "La victoire des Alliés de 1945 (fin de la Seconde Guerre mondiale en Europe)",
      "La Révolution française",
      "L'armistice de 1918"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Le 8 mai est la commémoration de la victoire des Alliés sur l'Allemagne nazie le 8 mai 1945, marquant la fin de la Seconde Guerre mondiale en Europe."
  },
  {
    "id": "cr-109",
    "question": "Quelle mer ou océan borde la France métropolitaine ?",
    "options": [
      "La mer Méditerranée",
      "La mer Noire",
      "La mer Baltique",
      "L'océan Indien"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La France métropolitaine est bordée par plusieurs mers et océans : la mer Méditerranée au sud, l'océan Atlantique à l'ouest, et la Manche au nord."
  },
  {
    "id": "cr-110",
    "question": "Quel pays a une frontière terrestre avec la France métropolitaine ?",
    "options": [
      "L'Espagne",
      "Le Royaume-Uni",
      "Les Pays-Bas",
      "L'Autriche"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'Espagne partage une frontière terrestre avec la France au sud-ouest, au niveau des Pyrénées. La France a aussi des frontières avec la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, Monaco et Andorre."
  },
  {
    "id": "cr-111",
    "question": "Quelle ville française est un port maritime ?",
    "options": [
      "Marseille",
      "Lyon",
      "Toulouse",
      "Strasbourg"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Marseille est le plus grand port maritime français, situé sur la mer Méditerranée. D'autres ports importants incluent Le Havre, Brest, Bordeaux, Nantes."
  },
  {
    "id": "cr-112",
    "question": "Quelle mer se situe entre la France et l'Angleterre ?",
    "options": [
      "La Manche",
      "La mer du Nord",
      "La mer Méditerranée",
      "La mer Baltique"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Manche (English Channel en anglais) est la mer qui sépare la France de l'Angleterre. Le tunnel sous la Manche relie les deux pays."
  },
  {
    "id": "cr-113",
    "question": "Qu'est ce que la France d'outre-mer ?",
    "options": [
      "Les pays voisins de la France",
      "Les territoires français situés en dehors de l'Europe",
      "Les anciennes colonies",
      "Les ambassades françaises"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La France d'outre-mer désigne les territoires français situés en dehors de l'Europe métropolitaine : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Nouvelle-Calédonie, Polynésie française, etc."
  },
  {
    "id": "cr-114",
    "question": "Quelle chaîne de montagnes est située entre la France et l'Espagne ?",
    "options": [
      "Les Pyrénées",
      "Les Alpes",
      "Le Jura",
      "Les Vosges"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Les Pyrénées forment une frontière naturelle entre la France et l'Espagne. Cette chaîne de montagnes s'étend sur environ 430 km de l'océan Atlantique à la mer Méditerranée."
  },
  {
    "id": "cr-115",
    "question": "Quelle île française se trouve dans l'océan Indien ?",
    "options": [
      "La Réunion",
      "La Corse",
      "La Guadeloupe",
      "La Martinique"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Réunion est un département et une région française situés dans l'océan Indien, à l'est de Madagascar. Mayotte est également dans l'océan Indien."
  },
  {
    "id": "cr-116",
    "question": "Quelle est la population approximative de la France en 2025 ?",
    "options": [
      "68 millions d'habitants",
      "50 millions d'habitants",
      "100 millions d'habitants",
      "40 millions d'habitants"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La France compte environ 68 millions d'habitants en 2025 (y compris les territoires d'outre-mer)."
  },
  {
    "id": "cr-117",
    "question": "Quel fleuve traverse Paris ?",
    "options": [
      "La Seine",
      "La Loire",
      "Le Rhône",
      "La Garonne"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Seine est le fleuve qui traverse Paris. C'est un symbole de la capitale française avec ses ponts célèbres (Pont-Neuf, Pont Alexandre III, etc.)."
  },
  {
    "id": "cr-118",
    "question": "Lequel de ces pays partage des frontières terrestres avec la France ?",
    "options": [
      "La Belgique",
      "Le Royaume-Uni",
      "Le Portugal",
      "Les Pays-Bas"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La Belgique partage une frontière terrestre avec la France au nord. La France a 8 pays voisins par voie terrestre : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne, Andorre."
  },
  {
    "id": "cr-119",
    "question": "Quel pays a une frontière avec la France métropolitaine au nord-est ?",
    "options": [
      "L'Allemagne",
      "L'Autriche",
      "La Pologne",
      "La République tchèque"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'Allemagne partage une frontière avec la France au nord-est, dans la région du Rhin (Alsace). C'est une frontière historiquement importante."
  },
  {
    "id": "cr-120",
    "question": "Où se trouvent les principales activités économiques en France ?",
    "options": [
      "Dans les zones rurales uniquement",
      "Dans les grandes villes et métropoles",
      "Seulement à Paris",
      "Dans les montagnes"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Les principales activités économiques en France se concentrent dans les grandes villes et métropoles : Paris (Île-de-France), Lyon, Marseille, Toulouse, Lille, Bordeaux, etc."
  },
  {
    "id": "cr-121",
    "question": "Parmi ces pays, lequel attire le plus de visiteurs chaque année ?",
    "options": [
      "La France",
      "L'Allemagne",
      "Le Royaume-Uni",
      "L'Italie"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La France est le pays le plus visité au monde avec environ 90 millions de touristes étrangers par an, attirés par Paris, la Côte d'Azur, les châteaux de la Loire, les Alpes, etc."
  },
  {
    "id": "cr-122",
    "question": "Où habite la majorité des Français ?",
    "options": [
      "Dans les zones rurales",
      "Dans les villes et zones urbaines",
      "À la montagne",
      "Dans les îles"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Environ 80% des Français vivent dans des zones urbaines (villes et agglomérations). La France connaît une urbanisation continue depuis le XXe siècle."
  },
  {
    "id": "cr-123",
    "question": "Quelle région est la plus peuplée ?",
    "options": [
      "L'Île-de-France",
      "La Bretagne",
      "La Normandie",
      "L'Occitanie"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "L'Île-de-France (région parisienne) est de loin la région la plus peuplée avec environ 12 millions d'habitants, soit près d'1 Français sur 5."
  },
  {
    "id": "cr-124",
    "question": "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    "options": [
      "Lyon",
      "Dijon",
      "Brest",
      "Perpignan"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Lyon est la 3ème plus grande métropole française après Paris et Marseille. Les 10 plus grandes sont : Paris, Marseille, Lyon, Toulouse, Lille, Bordeaux, Nice, Nantes, Strasbourg, Toulon."
  },
  {
    "id": "cr-125",
    "question": "Lequel de ces départements de France est le plus touristique ?",
    "options": [
      "Paris (75)",
      "Le Cantal",
      "La Creuse",
      "L'Eure"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Paris (département 75) est le département le plus touristique de France avec ses monuments emblématiques (Tour Eiffel, Louvre, Notre-Dame, Arc de Triomphe, etc.)."
  },
  {
    "id": "cr-126",
    "question": "Quand peut-on visiter gratuitement des lieux culturels en France ?",
    "options": [
      "Jamais",
      "Le premier dimanche de chaque mois dans certains musées",
      "Tous les jours",
      "Seulement pour les étrangers"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "De nombreux musées nationaux proposent la gratuité le premier dimanche de chaque mois. Certains musées sont aussi gratuits pour les moins de 26 ans résidant dans l'UE."
  },
  {
    "id": "cr-127",
    "question": "Combien de personnes parlent français dans le monde ?",
    "options": [
      "Environ 300 millions",
      "Environ 50 millions",
      "Environ 1 milliard",
      "Environ 100 millions"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Environ 300 millions de personnes parlent français dans le monde, sur les 5 continents. Le français est la 5ème langue la plus parlée au monde."
  },
  {
    "id": "cr-128",
    "question": "Qui était Marguerite Yourcenar ?",
    "options": [
      "Une écrivaine française, première femme élue à l'Académie française",
      "Une reine de France",
      "Une scientifique",
      "Une actrice"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Marguerite Yourcenar (1903-1987) était une écrivaine française célèbre, auteure notamment des 'Mémoires d'Hadrien'. Elle fut la première femme élue à l'Académie française en 1980."
  },
  {
    "id": "cr-129",
    "question": "Quel peintre est français ?",
    "options": [
      "Claude Monet",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Claude Monet (1840-1926) était un peintre français, fondateur de l'impressionnisme. Ses œuvres les plus célèbres incluent les Nymphéas et la série des Cathédrales de Rouen."
  },
  {
    "id": "cr-130",
    "question": "Quel musée est situé à Paris ?",
    "options": [
      "Le Louvre",
      "Le Prado",
      "Le British Museum",
      "Les Offices"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Le Louvre est le plus grand musée de Paris et du monde par sa surface d'exposition. Il abrite la Joconde de Léonard de Vinci, la Vénus de Milo, etc."
  },
  {
    "id": "cr-131",
    "question": "Qui était Auguste Rodin ?",
    "options": [
      "Un sculpteur français",
      "Un président français",
      "Un écrivain français",
      "Un musicien français"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Auguste Rodin (1840-1917) était un célèbre sculpteur français. Ses œuvres les plus connues sont 'Le Penseur', 'Le Baiser' et 'Les Bourgeois de Calais'."
  },
  {
    "id": "cr-132",
    "question": "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?",
    "options": [
      "5ème langue la plus parlée",
      "1ère langue la plus parlée",
      "20ème langue la plus parlée",
      "10ème langue la plus parlée"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Le français est la 5ème langue la plus parlée au monde avec environ 300 millions de locuteurs, après le chinois, l'anglais, l'espagnol et l'arabe."
  },
  {
    "id": "cr-133",
    "question": "Quelle cathédrale célèbre a été en partie détruite par un incendie en 2019 ?",
    "options": [
      "Notre-Dame de Paris",
      "La cathédrale de Reims",
      "La cathédrale de Chartres",
      "La Sainte-Chapelle"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "La cathédrale Notre-Dame de Paris a été gravement endommagée par un incendie le 15 avril 2019. Sa flèche s'est effondrée. Des travaux de restauration sont en cours."
  },
  {
    "id": "cr-134",
    "question": "Qui était une écrivaine française célèbre ?",
    "options": [
      "Simone de Beauvoir",
      "Jane Austen",
      "Virginia Woolf",
      "Emily Brontë"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Simone de Beauvoir (1908-1986) était une écrivaine, philosophe et féministe française célèbre. Son œuvre majeure est 'Le Deuxième Sexe' (1949)."
  },
  {
    "id": "cr-135",
    "question": "Qui était un célèbre musicien français ?",
    "options": [
      "Claude Debussy",
      "Wolfgang Amadeus Mozart",
      "Johann Sebastian Bach",
      "Ludwig van Beethoven"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Claude Debussy (1862-1918) était un célèbre compositeur français, figure majeure de la musique impressionniste. Ses œuvres célèbres incluent 'Clair de lune' et 'La Mer'."
  },
  {
    "id": "cr-136",
    "question": "Qui était Auguste Renoir ?",
    "options": [
      "Un peintre impressionniste français",
      "Un homme politique",
      "Un scientifique",
      "Un architecte"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Auguste Renoir (1841-1919) était un peintre impressionniste français célèbre. Ses œuvres représentent souvent des scènes joyeuses de la vie parisienne, avec des couleurs vives."
  },
  {
    "id": "cr-137",
    "question": "Quelle fête est française ?",
    "options": [
      "Le 14 juillet (fête nationale)",
      "Thanksgiving",
      "Halloween",
      "La Saint-Patrick"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CR",
    "explanation": "Le 14 juillet est la fête nationale française, commémorant la prise de la Bastille le 14 juillet 1789, symbole du début de la Révolution française. C'est un jour férié avec défilé militaire, feux d'artifice et bals."
  },
  {
    "id": "cr-138",
    "question": "Quel mariage est reconnu par l'État ?",
    "options": [
      "Seul le mariage civil célébré à la mairie",
      "Seul le mariage religieux",
      "Tout type de cérémonie",
      "Seulement le mariage traditionnel"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Seul le mariage civil célébré à la mairie par un officier d'état civil est reconnu par l'État français. Le mariage religieux n'a pas de valeur juridique en France (laïcité)."
  },
  {
    "id": "cr-139",
    "question": "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    "options": [
      "La mairie",
      "La préfecture",
      "Le tribunal",
      "La police"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Les parents doivent inscrire leur enfant à l'école publique auprès de la mairie de leur commune. La mairie délivre un certificat d'inscription nécessaire pour l'inscription à l'école."
  },
  {
    "id": "cr-140",
    "question": "En cas de divorce, qui exerce l'autorité parentale ?",
    "options": [
      "Seulement la mère",
      "Les deux parents sauf décision contraire du juge",
      "Seulement le père",
      "Les grands-parents"
    ],
    "correctAnswer": 1,
    "theme": "histoire",
    "source": "CR",
    "explanation": "En cas de divorce, l'autorité parentale est exercée conjointement par les deux parents, sauf décision contraire du juge aux affaires familiales pour protéger l'intérêt de l'enfant."
  },
  {
    "id": "cr-141",
    "question": "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    "options": [
      "L'aide juridictionnelle",
      "Le RSA",
      "La CAF",
      "L'assurance maladie"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "L'aide juridictionnelle permet aux personnes ayant des ressources insuffisantes d'être assistées par un avocat gratuitement ou partiellement pris en charge par l'État."
  },
  {
    "id": "cr-142",
    "question": "Où faut-il déclarer la naissance d'un enfant ?",
    "options": [
      "À la mairie",
      "À la préfecture",
      "Au commissariat",
      "À l'hôpital uniquement"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "La naissance d'un enfant doit être déclarée à la mairie du lieu de naissance dans les 5 jours suivant l'accouchement. C'est une obligation légale qui permet d'établir l'acte de naissance."
  },
  {
    "id": "cr-143",
    "question": "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
    "options": [
      "Avoir 18 ans minimum",
      "Avoir un diplôme universitaire",
      "Être propriétaire d'une voiture",
      "Habiter en ville"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Pour passer le permis de conduire B (voiture), il faut avoir au moins 18 ans. On peut commencer la formation (conduite accompagnée) dès 15 ans."
  },
  {
    "id": "cr-144",
    "question": "Un bail locatif est valide s'il est :",
    "options": [
      "Écrit",
      "Seulement oral",
      "Fait sans témoin",
      "Verbal entre amis"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Un bail (contrat de location) doit être écrit pour être valide et protéger les droits du locataire et du propriétaire. Il doit respecter un modèle type fixé par la loi."
  },
  {
    "id": "cr-145",
    "question": "Où peut-on déposer un lave-vaisselle cassé ?",
    "options": [
      "Dans une déchetterie",
      "Dans la poubelle normale",
      "N'importe où dans la rue",
      "Dans les conteneurs de recyclage du verre"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Les gros électroménagers cassés (lave-vaisselle, réfrigérateur, etc.) doivent être déposés dans une déchetterie pour être recyclés correctement. On peut aussi les faire reprendre par le magasin lors de l'achat d'un nouvel appareil."
  },
  {
    "id": "cr-146",
    "question": "Quel numéro d'urgence permet d'appeler la police ?",
    "options": [
      "17",
      "15",
      "18",
      "112"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le 17 est le numéro d'urgence pour contacter la police ou la gendarmerie en France. Le 15 est le SAMU, le 18 les pompiers, et le 112 le numéro d'urgence européen."
  },
  {
    "id": "cr-147",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "options": [
      "Tout le monde peut consulter un médecin",
      "Seuls les riches peuvent consulter",
      "Il faut une autorisation préalable pour tout",
      "C'est interdit pour les étrangers"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "En France, toute personne peut consulter un médecin. L'Assurance Maladie rembourse une grande partie des soins. Pour les personnes en difficulté, il existe l'Aide Médicale d'État (AME) et la Complémentaire Santé Solidaire."
  },
  {
    "id": "cr-148",
    "question": "À qui est accessible la contraception ?",
    "options": [
      "À toutes les femmes qui le souhaitent",
      "Seulement aux femmes mariées",
      "Seulement aux femmes de plus de 30 ans",
      "Avec l'autorisation du conjoint"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "La contraception est accessible à toutes les femmes qui le souhaitent, mineures ou majeures, sans autorisation nécessaire. C'est un droit fondamental garanti par la loi depuis 1967 (loi Neuwirth)."
  },
  {
    "id": "cr-149",
    "question": "Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?",
    "options": [
      "Les informations médicales sont publiques",
      "Le secret médical protège les informations de santé du patient",
      "Seule la famille peut connaître les informations",
      "Tout le monde peut accéder au dossier médical"
    ],
    "correctAnswer": 1,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le secret médical est un principe fondamental qui garantit que les informations concernant la santé d'un patient restent confidentielles et ne peuvent être divulguées sans son consentement."
  },
  {
    "id": "cr-150",
    "question": "L'inscription à l'Assurance maladie est :",
    "options": [
      "Obligatoire pour toute personne résidant en France de manière stable",
      "Facultative",
      "Seulement pour les Français",
      "Payante et très chère"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "L'inscription à l'Assurance Maladie est obligatoire pour toute personne résidant en France de manière stable et régulière. C'est la Protection Universelle Maladie (PUMa)."
  },
  {
    "id": "cr-151",
    "question": "Qui peut demander un congé parental d'éducation ?",
    "options": [
      "Le père ou la mère",
      "Seulement la mère",
      "Seulement le père",
      "Personne"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le congé parental d'éducation peut être demandé par le père ou la mère pour s'occuper de leur enfant. C'est un droit pour les salariés ayant au moins un an d'ancienneté."
  },
  {
    "id": "cr-152",
    "question": "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    "options": [
      "Les litiges entre employeurs et salariés",
      "Les divorces",
      "Les crimes",
      "Les infractions routières"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le conseil de prud'hommes est une juridiction spécialisée qui règle les conflits individuels du travail entre employeurs et salariés (licenciement, salaires, conditions de travail, etc.)."
  },
  {
    "id": "cr-153",
    "question": "Travailler sans être déclaré est :",
    "options": [
      "Interdit et sanctionné par la loi (travail au noir)",
      "Autorisé",
      "Obligatoire",
      "Recommandé"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le travail au noir (travail dissimulé, sans déclaration) est strictement interdit et sanctionné par la loi. C'est une fraude qui prive le salarié de ses droits sociaux et l'État de cotisations."
  },
  {
    "id": "cr-154",
    "question": "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    "options": [
      "Il doit proposer des heures supplémentaires payées",
      "Le salarié doit accepter sans compensation",
      "C'est interdit dans tous les cas",
      "Le salarié doit payer une pénalité"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Si l'employeur demande au salarié de travailler au-delà de la durée légale ou contractuelle, ce sont des heures supplémentaires qui doivent être payées avec une majoration (généralement 25% ou 50% selon le cas)."
  },
  {
    "id": "cr-155",
    "question": "Quelle est la mission de France Travail ?",
    "options": [
      "Aider les demandeurs d'emploi à trouver un travail et verser les allocations chômage",
      "Construire des routes",
      "Gérer les hôpitaux",
      "Enseigner à l'école"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "France Travail (anciennement Pôle emploi) a pour mission d'accompagner les demandeurs d'emploi dans leur recherche de travail, de les former, et de verser les allocations chômage."
  },
  {
    "id": "cr-156",
    "question": "Dans une entreprise, le droit syndical permet :",
    "options": [
      "De se regrouper pour défendre les intérêts des salariés",
      "De ne jamais travailler",
      "De ne pas respecter les règles",
      "D'insulter l'employeur"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le droit syndical permet aux salariés de créer ou adhérer à un syndicat pour défendre collectivement leurs intérêts professionnels (salaires, conditions de travail, etc.). C'est un droit constitutionnel."
  },
  {
    "id": "cr-157",
    "question": "Dans une entreprise, le droit de grève autorise :",
    "options": [
      "À arrêter collectivement le travail pour faire entendre des revendications professionnelles",
      "À détruire les machines",
      "À voler dans l'entreprise",
      "À ne jamais revenir travailler"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le droit de grève permet aux salariés de cesser collectivement le travail pour faire entendre des revendications professionnelles. C'est un droit constitutionnel, mais il doit être exercé dans le respect de la loi."
  },
  {
    "id": "cr-158",
    "question": "Quelles sont les conditions pour toucher les allocations chômage ?",
    "options": [
      "Avoir travaillé suffisamment et être inscrit à France Travail",
      "Ne jamais avoir travaillé",
      "Refuser tous les emplois proposés",
      "Être en vacances"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Pour bénéficier des allocations chômage, il faut avoir travaillé un certain temps (généralement 6 mois sur les 24 derniers mois), être involontairement privé d'emploi, être inscrit à France Travail et rechercher activement un emploi."
  },
  {
    "id": "cr-159",
    "question": "Qu'est-ce que l'école maternelle ?",
    "options": [
      "L'école pour les enfants de 3 à 6 ans",
      "L'école pour apprendre à être mère",
      "L'école pour les adultes",
      "L'école pour les bébés"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "L'école maternelle accueille les enfants de 3 à 6 ans. Elle est obligatoire depuis 3 ans (loi de 2019) et prépare les enfants aux apprentissages fondamentaux."
  },
  {
    "id": "cr-160",
    "question": "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?",
    "options": [
      "Le Brevet (DNB - Diplôme National du Brevet)",
      "Le Baccalauréat",
      "Le CAP",
      "La Licence"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "À la fin du collège (classe de 3ème), les élèves passent le Brevet (DNB - Diplôme National du Brevet). C'est le premier diplôme national de la scolarité."
  },
  {
    "id": "cr-161",
    "question": "Les parents d'élève ont le droit de :",
    "options": [
      "Être informés et participer à la vie scolaire via les associations de parents d'élèves",
      "Diriger l'école",
      "Choisir les professeurs",
      "Donner les notes"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Les parents d'élèves ont le droit d'être informés sur la scolarité de leur enfant, de rencontrer les enseignants, et de participer à la vie scolaire via les associations de parents d'élèves et les conseils d'école."
  },
  {
    "id": "cr-162",
    "question": "Qui peut manger à la cantine scolaire ?",
    "options": [
      "Tous les élèves inscrits",
      "Seulement les élèves riches",
      "Seulement les professeurs",
      "Personne"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "La cantine scolaire est accessible à tous les élèves qui s'inscrivent. Les tarifs sont souvent calculés en fonction des revenus des familles (quotient familial) pour garantir l'accès à tous."
  },
  {
    "id": "cr-163",
    "question": "À quel âge commence l'instruction obligatoire des enfants ?",
    "options": [
      "3 ans",
      "6 ans",
      "10 ans",
      "16 ans"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Depuis 2019, l'instruction est obligatoire dès 3 ans (abaissement de 6 à 3 ans). Elle est obligatoire jusqu'à 16 ans."
  },
  {
    "id": "cr-164",
    "question": "Quel est l'âge de la majorité ?",
    "options": [
      "18 ans",
      "16 ans",
      "21 ans",
      "25 ans"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "L'âge de la majorité en France est 18 ans. À partir de cet âge, une personne devient juridiquement adulte avec tous les droits et devoirs qui en découlent (voter, contracter, etc.)."
  },
  {
    "id": "cr-165",
    "question": "À l'école, il est interdit aux parents de :",
    "options": [
      "Gifler leur enfant ou tout acte de violence",
      "Parler aux enseignants",
      "Assister aux réunions",
      "S'intéresser à la scolarité"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Les violences physiques (gifles, fessées, etc.) sur les enfants sont interdites en France depuis 2019 (loi anti-violences éducatives ordinaires). À l'école comme ailleurs, tout acte de violence est interdit."
  },
  {
    "id": "cr-166",
    "question": "Quel motif d'absence est accepté par l'école ?",
    "options": [
      "Maladie de l'enfant",
      "Faire les courses",
      "Partir en vacances pendant les cours",
      "Rester à la maison sans raison"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Les absences justifiées à l'école sont la maladie de l'enfant, des obligations légales (convocation tribunal, etc.), ou des événements familiaux graves. Les vacances pendant le temps scolaire ne sont pas un motif valable."
  },
  {
    "id": "cr-167",
    "question": "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    "options": [
      "Une amende et/ou une peine de prison",
      "Rien",
      "Juste un avertissement",
      "Une médaille"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Le non-respect de l'obligation d'instruction est un délit pénal. Les parents risquent une amende de 7 500 euros et jusqu'à 6 mois de prison. Des sanctions administratives peuvent aussi être prises (suppression d'allocations familiales)."
  },
  {
    "id": "cr-168",
    "question": "Quand ont lieu les vacances scolaires de Noël ?",
    "options": [
      "Fin décembre/début janvier",
      "En été",
      "En avril",
      "En septembre"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "Les vacances scolaires de Noël ont lieu fin décembre et début janvier, généralement 2 semaines autour du 25 décembre et du Nouvel An."
  },
  {
    "id": "cr-169",
    "question": "À l'école, un enfant en situation de handicap :",
    "options": [
      "A le droit d'être scolarisé avec les aménagements nécessaires",
      "Ne peut pas aller à l'école",
      "Doit aller dans une école spéciale obligatoirement",
      "N'a aucun droit"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CR",
    "explanation": "La loi de 2005 garantit le droit à la scolarisation de tous les enfants en situation de handicap. L'école doit mettre en place les aménagements nécessaires (AVS, matériel adapté, etc.) pour permettre leur scolarisation en milieu ordinaire autant que possible."
  },
  {
    "id": "csp-1",
    "question": "Qui nomme le Premier ministre ?",
    "options": [
      "Les citoyens par vote direct",
      "L'Assemblée nationale",
      "Le président de la République",
      "Le Sénat"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Selon l'article 8 de la Constitution, le président de la République nomme le Premier ministre. C'est l'une de ses principales prérogatives."
  },
  {
    "id": "csp-2",
    "question": "Le Parlement est composé :",
    "options": [
      "Uniquement de l'Assemblée nationale",
      "De l'Assemblée nationale et du Sénat",
      "Uniquement du Sénat",
      "Du gouvernement et de l'Assemblée nationale"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le Parlement français est composé de deux chambres : l'Assemblée nationale (577 députés) et le Sénat (348 sénateurs)."
  },
  {
    "id": "csp-3",
    "question": "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :",
    "options": [
      "De voter les lois",
      "De faire appliquer les lois et de gouverner",
      "De juger les infractions",
      "D'élire le président"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le pouvoir exécutif est celui qui fait appliquer les lois et gouverne. En France, il est exercé par le président de la République et le Gouvernement (Premier ministre et ministres)."
  },
  {
    "id": "csp-4",
    "question": "Les dirigeants sont élus par les citoyens dans :",
    "options": [
      "Une dictature",
      "Une démocratie",
      "Une monarchie absolue",
      "Un empire"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Dans une démocratie, le pouvoir appartient au peuple qui élit ses représentants. C'est le principe du suffrage universel."
  },
  {
    "id": "csp-5",
    "question": "A-t-on le droit de ne pas respecter une loi ?",
    "options": [
      "Oui, si on n'est pas d'accord",
      "Non, la loi s'impose à tous",
      "Oui, si personne ne nous voit",
      "Seulement pour les petites lois"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Dans un État de droit, la loi s'impose à tous sans exception. Ne pas respecter la loi expose à des sanctions. On peut contester une loi par les voies légales, mais pas la violer."
  },
  {
    "id": "csp-6",
    "question": "Qui doit respecter la loi ?",
    "options": [
      "Seulement les étrangers",
      "Tous les citoyens et toutes les personnes résidant en France",
      "Seulement les pauvres",
      "Personne"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La loi s'applique à tous sans distinction : citoyens, résidents, étrangers de passage. Dans un État de droit, personne n'est au-dessus de la loi."
  },
  {
    "id": "csp-7",
    "question": "Quel est le rôle de l'autorité judiciaire ?",
    "options": [
      "Faire les lois",
      "Faire appliquer et respecter les lois, juger et sanctionner",
      "Gouverner le pays",
      "Élire le président"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "L'autorité judiciaire (les juges) a pour rôle de faire respecter les lois, de juger les personnes accusées d'infractions et de prononcer des sanctions. C'est le pouvoir judiciaire."
  },
  {
    "id": "csp-8",
    "question": "Quel pouvoir détient un juge ? Le pouvoir :",
    "options": [
      "Législatif",
      "Judiciaire",
      "Exécutif",
      "Militaire"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les juges exercent le pouvoir judiciaire, qui consiste à rendre la justice en appliquant les lois aux cas particuliers."
  },
  {
    "id": "csp-9",
    "question": "L'autorité judiciaire est exercée par :",
    "options": [
      "Le président",
      "Les juges et magistrats",
      "Les députés",
      "La police"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "L'autorité judiciaire est exercée par les juges et magistrats qui sont indépendants du pouvoir politique pour garantir une justice impartiale."
  },
  {
    "id": "csp-10",
    "question": "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    "options": [
      "Rien, il est protégé",
      "Il peut être poursuivi en justice",
      "Seul le président peut le sanctionner",
      "Il doit payer une petite amende"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Dans un État de droit, personne n'est au-dessus de la loi. Un ministre qui ne respecte pas la loi peut être poursuivi en justice, notamment devant la Cour de Justice de la République."
  },
  {
    "id": "csp-11",
    "question": "Qui est élu lors des élections législatives ?",
    "options": [
      "Le président",
      "Les députés",
      "Les sénateurs",
      "Les maires"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les élections législatives permettent d'élire les 577 députés de l'Assemblée nationale au suffrage universel direct."
  },
  {
    "id": "csp-12",
    "question": "Combien de députés composent l'Assemblée nationale ?",
    "options": [
      "348",
      "577",
      "678",
      "450"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "L'Assemblée nationale est composée de 577 députés élus au suffrage universel direct pour un mandat de 5 ans."
  },
  {
    "id": "csp-13",
    "question": "Quand sont élus les sénateurs ?",
    "options": [
      "Lors des élections sénatoriales au suffrage universel indirect",
      "Lors des élections présidentielles",
      "Lors des élections législatives",
      "Ils ne sont pas élus"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les sénateurs sont élus au suffrage universel indirect par un collège de grands électeurs (élus locaux principalement). Les élections sénatoriales ont lieu tous les 3 ans pour renouveler la moitié du Sénat."
  },
  {
    "id": "csp-14",
    "question": "Qui est élu lors des élections municipales ?",
    "options": [
      "Les conseillers municipaux",
      "Le président",
      "Les députés",
      "Les préfets"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les élections municipales permettent d'élire les conseillers municipaux qui forment le conseil municipal. Ensuite, les conseillers municipaux élisent le maire parmi eux."
  },
  {
    "id": "csp-15",
    "question": "Qui est élu lors des élections présidentielles ?",
    "options": [
      "Le Premier ministre",
      "Le président de la République",
      "Les députés",
      "Les sénateurs"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les élections présidentielles permettent d'élire le président de la République au suffrage universel direct pour un mandat de 5 ans."
  },
  {
    "id": "csp-16",
    "question": "À partir de quel âge a-t-on le droit de voter ?",
    "options": [
      "16 ans",
      "18 ans",
      "21 ans",
      "25 ans"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le droit de vote est accordé à partir de 18 ans en France. C'est l'âge de la majorité civile et politique."
  },
  {
    "id": "csp-17",
    "question": "Pour combien de temps est élu le président de la République française ?",
    "options": [
      "4 ans",
      "5 ans",
      "7 ans",
      "10 ans"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le président de la République est élu pour un mandat de 5 ans (quinquennat) depuis la réforme constitutionnelle de 2000. Avant, c'était 7 ans (septennat)."
  },
  {
    "id": "csp-18",
    "question": "Pour combien de temps sont élus les députés ?",
    "options": [
      "3 ans",
      "5 ans",
      "6 ans",
      "7 ans"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les députés sont élus pour un mandat de 5 ans lors des élections législatives."
  },
  {
    "id": "csp-19",
    "question": "Pour combien de temps sont élus les sénateurs ?",
    "options": [
      "5 ans",
      "6 ans",
      "7 ans",
      "9 ans"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les sénateurs sont élus pour un mandat de 6 ans. Le Sénat est renouvelé par moitié tous les 3 ans."
  },
  {
    "id": "csp-20",
    "question": "Qui possède le pouvoir exécutif ?",
    "options": [
      "L'Assemblée nationale",
      "Le président de la République et le Gouvernement",
      "Les juges",
      "Les préfets uniquement"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le pouvoir exécutif est partagé entre le président de la République et le Gouvernement (Premier ministre et ministres)."
  },
  {
    "id": "csp-21",
    "question": "Quelle condition est nécessaire pour voter aux élections ?",
    "options": [
      "Avoir un emploi",
      "Être inscrit sur les listes électorales",
      "Avoir un diplôme",
      "Être propriétaire"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Pour voter, il faut obligatoirement être inscrit sur les listes électorales, avoir 18 ans, être de nationalité française (pour les élections nationales) et jouir de ses droits civiques."
  },
  {
    "id": "csp-22",
    "question": "Qui peut voter aux élections en France ?",
    "options": [
      "Tous les résidents",
      "Les citoyens français majeurs inscrits sur les listes électorales",
      "Seulement les hommes",
      "Tous les Européens"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Pour voter aux élections nationales (présidentielles, législatives), il faut être citoyen français, majeur (18 ans), inscrit sur les listes électorales et jouir de ses droits civiques."
  },
  {
    "id": "csp-23",
    "question": "Que signifie « suffrage universel » ?",
    "options": [
      "Seuls les riches peuvent voter",
      "Tous les citoyens majeurs peuvent voter",
      "Seuls les hommes peuvent voter",
      "Seuls les diplômés peuvent voter"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le suffrage universel signifie que tous les citoyens majeurs, sans distinction de sexe, de richesse, de religion ou d'éducation, ont le droit de vote."
  },
  {
    "id": "csp-24",
    "question": "Concernant les partis politiques, quelle proposition est correcte ?",
    "options": [
      "Les partis politiques sont interdits",
      "Chacun est libre de créer ou d'adhérer à un parti politique",
      "Seul un parti est autorisé",
      "Il faut une autorisation du président"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La liberté d'association politique est garantie par la Constitution. Chacun est libre de créer ou d'adhérer à un parti politique, dans le respect de la loi."
  },
  {
    "id": "csp-25",
    "question": "Quel est le rôle des députés ?",
    "options": [
      "Appliquer les lois",
      "Voter les lois et contrôler le Gouvernement",
      "Juger les criminels",
      "Nommer les ministres"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les députés siègent à l'Assemblée nationale. Leur rôle est de voter les lois, de voter le budget et de contrôler l'action du Gouvernement."
  },
  {
    "id": "csp-26",
    "question": "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    "options": [
      "Le pouvoir royal, militaire et religieux",
      "Le pouvoir exécutif, législatif et judiciaire",
      "Le pouvoir présidentiel, parlementaire et local",
      "Le pouvoir économique, social et culturel"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La séparation des pouvoirs distingue le pouvoir exécutif (qui applique les lois), le pouvoir législatif (qui vote les lois) et le pouvoir judiciaire (qui juge). C'est un principe de Montesquieu."
  },
  {
    "id": "csp-27",
    "question": "Qui possède le pouvoir législatif ?",
    "options": [
      "Le président",
      "Le Parlement (Assemblée nationale et Sénat)",
      "Le Gouvernement",
      "Les juges"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le pouvoir législatif appartient au Parlement, c'est-à-dire à l'Assemblée nationale et au Sénat, qui votent les lois."
  },
  {
    "id": "csp-28",
    "question": "Qui sanctionne l'auteur d'un vol ?",
    "options": [
      "La police",
      "Le maire",
      "Le juge",
      "Le président"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Seul le juge (pouvoir judiciaire) peut sanctionner l'auteur d'un vol après un procès. La police arrête les suspects mais ne peut pas les juger."
  },
  {
    "id": "csp-29",
    "question": "Qui élit les députés ?",
    "options": [
      "Le président",
      "Les citoyens français majeurs au suffrage universel direct",
      "Les sénateurs",
      "Le gouvernement"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les députés sont élus au suffrage universel direct par les citoyens français majeurs inscrits sur les listes électorales."
  },
  {
    "id": "csp-30",
    "question": "Qui vote les lois ?",
    "options": [
      "Le président",
      "Le Parlement (députés et sénateurs)",
      "Le gouvernement",
      "Les citoyens"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les lois sont votées par le Parlement, c'est-à-dire par les députés de l'Assemblée nationale et les sénateurs du Sénat. C'est le pouvoir législatif."
  },
  {
    "id": "csp-31",
    "question": "Qui réside au palais de l'Élysée ?",
    "options": [
      "Le Premier ministre",
      "Le président de la République",
      "Le président de l'Assemblée nationale",
      "Le maire de Paris"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le palais de l'Élysée, situé à Paris, est la résidence officielle et le lieu de travail du président de la République française."
  },
  {
    "id": "csp-32",
    "question": "Combien y a-t-il de départements en France ?",
    "options": [
      "96 départements métropolitains",
      "101 départements (96 métropolitains + 5 d'outre-mer)",
      "50 départements",
      "150 départements"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La France compte 101 départements : 96 en métropole et 5 en outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)."
  },
  {
    "id": "csp-33",
    "question": "Qui représente l'État dans un département ?",
    "options": [
      "Le maire",
      "Le préfet",
      "Le député",
      "Le président du conseil départemental"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le préfet est le représentant de l'État dans le département. Il est nommé par le gouvernement et applique la politique de l'État au niveau local."
  },
  {
    "id": "csp-34",
    "question": "Qui dirige la commune ?",
    "options": [
      "Le préfet",
      "Le président",
      "Le maire",
      "Le député"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le maire dirige la commune. Il est élu par le conseil municipal et est responsable de l'administration communale."
  },
  {
    "id": "csp-35",
    "question": "Est-ce que le président de la République a tous les pouvoirs ?",
    "options": [
      "Oui, il peut tout décider",
      "Non, ses pouvoirs sont limités par la Constitution et contrôlés par d'autres institutions",
      "Oui, sauf en temps de paix",
      "Non, il n'a aucun pouvoir"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le président a des pouvoirs importants définis par la Constitution, mais ils sont limités et contrôlés par d'autres institutions (Parlement, justice). C'est le principe de la séparation des pouvoirs."
  },
  {
    "id": "csp-36",
    "question": "Qui est le préfet ?",
    "options": [
      "Le maire de la plus grande ville",
      "Le représentant de l'État dans le département",
      "Un élu local",
      "Le chef de la police"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le préfet est le représentant de l'État dans le département. Il est nommé par le gouvernement et assure l'application des lois au niveau local."
  },
  {
    "id": "csp-37",
    "question": "Quel est le rôle du Parlement ?",
    "options": [
      "Appliquer les lois",
      "Voter les lois et contrôler le Gouvernement",
      "Juger les criminels",
      "Diriger l'armée"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Le Parlement (Assemblée nationale + Sénat) vote les lois, vote le budget et contrôle l'action du Gouvernement. C'est le pouvoir législatif."
  },
  {
    "id": "csp-38",
    "question": "Quel est le régime politique de la France aujourd'hui ?",
    "options": [
      "Une monarchie",
      "Une République",
      "Un empire",
      "Une dictature"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La France est une République depuis 1870 (sauf Vichy 1940-1944). C'est actuellement la Vème République, établie en 1958."
  },
  {
    "id": "csp-39",
    "question": "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    "options": [
      "27 États membres",
      "15 États membres",
      "28 États membres",
      "50 États membres"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Depuis le départ du Royaume-Uni (Brexit) en 2020, l'Union européenne compte 27 États membres."
  },
  {
    "id": "csp-40",
    "question": "Quel État n'est pas membre de l'Union européenne ?",
    "options": [
      "La Suisse",
      "La Belgique",
      "Le Portugal",
      "L'Autriche"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La Suisse n'est pas membre de l'Union européenne. Elle a rejeté l'adhésion par référendum et maintient des relations bilatérales avec l'UE."
  },
  {
    "id": "csp-41",
    "question": "Quelle condition est nécessaire pour voter aux élections européennes ?",
    "options": [
      "Être français seulement",
      "Être citoyen de l'UE et résider dans un pays membre",
      "Avoir plus de 21 ans",
      "Avoir un diplôme"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Pour voter aux élections européennes en France, il faut être citoyen de l'UE (français ou d'un autre État membre), avoir 18 ans, résider en France et être inscrit sur les listes électorales."
  },
  {
    "id": "csp-42",
    "question": "À quelle fréquence les élections européennes sont-elles organisées ?",
    "options": [
      "Tous les 3 ans",
      "Tous les 4 ans",
      "Tous les 5 ans",
      "Tous les 7 ans"
    ],
    "correctAnswer": 2,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les élections européennes ont lieu tous les 5 ans dans tous les États membres pour élire les députés européens au Parlement européen."
  },
  {
    "id": "csp-43",
    "question": "Quel pays est un pays fondateur de l'Union européenne ?",
    "options": [
      "Le Royaume-Uni",
      "La France",
      "L'Espagne",
      "La Suède"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La France est l'un des six pays fondateurs de la CECA (1951), ancêtre de l'UE : France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg."
  },
  {
    "id": "csp-44",
    "question": "Quelle est la monnaie utilisée en France ?",
    "options": [
      "Le franc",
      "L'euro",
      "La livre",
      "Le dollar"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La France utilise l'euro depuis 2002, la monnaie unique européenne qui a remplacé le franc français."
  },
  {
    "id": "csp-45",
    "question": "Qui élit les députés européens ?",
    "options": [
      "Les citoyens de l'Union européenne au suffrage universel direct",
      "Les présidents européens",
      "La Commission européenne",
      "Le Conseil européen"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "Les députés européens sont élus au suffrage universel direct par les citoyens de l'Union européenne tous les 5 ans."
  },
  {
    "id": "csp-46",
    "question": "Quand célèbre-t-on la journée de l'Europe ?",
    "options": [
      "Le 1er janvier",
      "Le 9 mai",
      "Le 14 juillet",
      "Le 25 décembre"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "CSP",
    "explanation": "La journée de l'Europe est célébrée le 9 mai, en mémoire de la déclaration de Robert Schuman du 9 mai 1950, acte fondateur de la construction européenne."
  },
  {
    "id": "csp-47",
    "question": "Comment s'appelle la Constitution actuelle de la France ?",
    "options": [
      "La Constitution de la IVème République",
      "La Constitution de la Vème République",
      "La Charte constitutionnelle",
      "La Déclaration des droits"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La Constitution actuelle est celle de la Vème République, adoptée par référendum le 28 septembre 1958 et entrée en vigueur le 4 octobre 1958."
  },
  {
    "id": "csp-48",
    "question": "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    "options": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "Le règlement intérieur",
      "Le Code pénal"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La Déclaration des Droits de l'Homme et du Citoyen de 1789 énonce les droits fondamentaux. Elle fait partie du bloc de constitutionnalité avec la Constitution et le Préambule de 1946."
  },
  {
    "id": "csp-49",
    "question": "Concernant les droits individuels, quelle proposition est correcte ?",
    "options": [
      "Les droits ne peuvent jamais être limités",
      "Les droits peuvent être limités pour protéger l'intérêt général",
      "Seuls les riches ont des droits",
      "Les droits n'existent pas"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Les droits individuels peuvent être limités par la loi pour protéger l'intérêt général, l'ordre public ou les droits d'autrui. Ces limitations doivent être proportionnées et nécessaires."
  },
  {
    "id": "csp-50",
    "question": "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    "options": [
      "1789",
      "1792",
      "1848",
      "1958"
    ],
    "correctAnswer": 0,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La Déclaration des Droits de l'Homme et du Citoyen a été adoptée le 26 août 1789 pendant la Révolution française. C'est un texte fondateur qui proclame les droits naturels et universels."
  },
  {
    "id": "csp-51",
    "question": "Lequel de ces droits est un droit fondamental ?",
    "options": [
      "Le droit d'avoir une voiture",
      "Le droit à la liberté d'expression",
      "Le droit d'avoir un téléphone",
      "Le droit de voyager en avion"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La liberté d'expression est un droit fondamental garanti par la Déclaration des Droits de l'Homme et du Citoyen. Les autres ne sont pas des droits fondamentaux."
  },
  {
    "id": "csp-52",
    "question": "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    "options": [
      "Le Code de la route",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "Le règlement intérieur",
      "Le journal officiel"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La Déclaration des Droits de l'Homme et du Citoyen de 1789, avec la Constitution, garantit les droits et libertés fondamentaux en France."
  },
  {
    "id": "csp-53",
    "question": "Qu'est-ce que la liberté d'expression ?",
    "options": [
      "Le droit de tout dire sans limite",
      "Le droit d'exprimer ses opinions dans le respect de la loi",
      "Le droit de mentir",
      "Le droit d'insulter"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La liberté d'expression est le droit d'exprimer ses opinions, mais dans le respect de la loi (pas de diffamation, incitation à la haine, injures, etc.)."
  },
  {
    "id": "csp-54",
    "question": "Quel droit permet à une personne de se défendre devant la justice ?",
    "options": [
      "Le droit à un procès équitable et à un avocat",
      "Le droit de fuir",
      "Le droit de mentir",
      "Le droit de corrompre"
    ],
    "correctAnswer": 0,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Le droit à un procès équitable (droit de la défense) garantit qu'une personne peut se défendre, être assistée d'un avocat et bénéficier d'un procès juste."
  },
  {
    "id": "csp-55",
    "question": "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?",
    "options": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen de 1789",
      "Le règlement européen",
      "Le Code pénal"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La Déclaration des Droits de l'Homme et du Citoyen de 1789 est le texte fondateur qui établit les droits et devoirs fondamentaux."
  },
  {
    "id": "csp-56",
    "question": "Quel texte a été adopté pendant la Révolution française ?",
    "options": [
      "La Constitution de la Vème République",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "Le traité de Maastricht",
      "La Charte de l'environnement"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La Déclaration des Droits de l'Homme et du Citoyen a été adoptée le 26 août 1789 pendant la Révolution française."
  },
  {
    "id": "csp-57",
    "question": "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    "options": [
      "La liberté d'expression",
      "La liberté de conscience",
      "La liberté de circulation",
      "La liberté d'association"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La liberté de conscience permet à chacun de croire ou de ne pas croire en une religion. C'est un droit fondamental garanti par la laïcité."
  },
  {
    "id": "csp-58",
    "question": "Une femme peut avorter :",
    "options": [
      "Jamais",
      "Si elle le souhaite, jusqu'à 14 semaines de grossesse",
      "Seulement avec l'accord du mari",
      "Seulement en cas de danger médical"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "En France, l'IVG (interruption volontaire de grossesse) est un droit. Toute femme enceinte peut demander une IVG si elle le souhaite, jusqu'à 14 semaines de grossesse."
  },
  {
    "id": "csp-59",
    "question": "Est-il toujours possible de divorcer ?",
    "options": [
      "Non, jamais",
      "Oui, le divorce est toujours possible",
      "Seulement avec l'accord du conjoint",
      "Seulement pour faute grave"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "En France, le divorce est toujours possible. Il existe plusieurs types de divorce, dont certains ne nécessitent pas l'accord des deux parties."
  },
  {
    "id": "csp-60",
    "question": "La peine de mort est :",
    "options": [
      "Encore appliquée",
      "Abolie depuis 1981",
      "Appliquée seulement pour les crimes graves",
      "Décidée au cas par cas"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La peine de mort a été abolie en France en 1981 sous François Mitterrand (loi Badinter). Cette abolition a été inscrite dans la Constitution en 2007."
  },
  {
    "id": "csp-61",
    "question": "Concernant les limites aux libertés individuelles, quelle proposition est correcte ?",
    "options": [
      "Les libertés ne peuvent jamais être limitées",
      "Les libertés peuvent être limitées pour protéger l'ordre public et l'intérêt général",
      "Seuls les étrangers ont des limites",
      "Les limites sont arbitraires"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Les libertés individuelles peuvent être limitées par la loi pour protéger l'ordre public, la sécurité, la santé ou les droits d'autrui. Ces limitations doivent être proportionnées."
  },
  {
    "id": "csp-62",
    "question": "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    "options": [
      "Oui",
      "Non, la polygamie est interdite",
      "Oui, avec autorisation",
      "Seulement pour les hommes"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La polygamie (être marié à plusieurs personnes en même temps) est strictement interdite en France. C'est une infraction pénale."
  },
  {
    "id": "csp-63",
    "question": "Faut-il réduire ses déchets ?",
    "options": [
      "Non, ce n'est pas important",
      "Oui, c'est un devoir pour protéger l'environnement",
      "Seulement pour les entreprises",
      "C'est interdit"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Réduire ses déchets est un devoir citoyen pour protéger l'environnement, conformément à la Charte de l'environnement inscrite dans la Constitution."
  },
  {
    "id": "csp-64",
    "question": "Jeter une bouteille dans la rue est :",
    "options": [
      "Autorisé",
      "Interdit et passible d'amende",
      "Recommandé",
      "Obligatoire"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Jeter des déchets dans la rue est interdit et constitue une infraction passible d'amende. C'est une atteinte à la propreté publique et à l'environnement."
  },
  {
    "id": "csp-65",
    "question": "Pourquoi les libertés individuelles peuvent-elles être limitées ?",
    "options": [
      "Par caprice du gouvernement",
      "Pour protéger l'ordre public et les droits d'autrui",
      "Pour punir les gens",
      "Elles ne peuvent jamais être limitées"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Les libertés peuvent être limitées pour protéger l'ordre public, la sécurité, la santé publique ou les droits et libertés d'autrui. Ces limites doivent être prévues par la loi et proportionnées."
  },
  {
    "id": "csp-66",
    "question": "Que doit faire une personne en cas d'accident ?",
    "options": [
      "Fuir",
      "Porter secours aux victimes et appeler les secours",
      "Ne rien faire",
      "Filmer et diffuser sur les réseaux"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "En cas d'accident, il faut porter secours aux victimes dans la mesure de ses moyens et appeler les secours (15, 17, 18, 112). Le non-assistance à personne en danger est un délit."
  },
  {
    "id": "csp-67",
    "question": "Que permet la citoyenneté française ?",
    "options": [
      "De voter aux élections nationales et d'être élu",
      "Seulement de payer des impôts",
      "De ne pas respecter les lois",
      "Rien de spécial"
    ],
    "correctAnswer": 0,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La citoyenneté française donne le droit de voter aux élections nationales, d'être élu, d'accéder à certains emplois publics, et confère des devoirs (respecter les lois, participer à la défense, etc.)."
  },
  {
    "id": "csp-68",
    "question": "Que risque une personne qui ne respecte pas la loi ?",
    "options": [
      "Rien",
      "Des sanctions pénales (amendes, prison) ou civiles",
      "Des félicitations",
      "Une médaille"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Une personne qui ne respecte pas la loi risque des sanctions : amendes, peines de prison pour les infractions pénales, ou réparations pour les fautes civiles."
  },
  {
    "id": "csp-69",
    "question": "Quel est le rôle de la gendarmerie ?",
    "options": [
      "Faire les lois",
      "Assurer la sécurité et faire respecter la loi",
      "Juger les criminels",
      "Diriger le pays"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La gendarmerie nationale, comme la police, a pour mission d'assurer la sécurité des personnes et des biens et de faire respecter la loi, principalement dans les zones rurales."
  },
  {
    "id": "csp-70",
    "question": "Quel est le rôle de la police ?",
    "options": [
      "Voter les lois",
      "Assurer la sécurité et faire respecter la loi",
      "Juger les infractions",
      "Gouverner le pays"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La police nationale a pour mission d'assurer la sécurité des personnes et des biens, de maintenir l'ordre public et de faire respecter la loi, principalement dans les zones urbaines."
  },
  {
    "id": "csp-71",
    "question": "Qu'est-ce qu'une infraction ?",
    "options": [
      "Une bonne action",
      "Une violation de la loi",
      "Un droit",
      "Une liberté"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Une infraction est une violation de la loi pénale. Il existe trois catégories : les contraventions (les moins graves), les délits et les crimes (les plus graves)."
  },
  {
    "id": "csp-72",
    "question": "Comment peut-on réduire ses déchets ?",
    "options": [
      "En achetant plus d'emballages",
      "En triant, recyclant et évitant le gaspillage",
      "En jetant tout à la poubelle",
      "En ne faisant rien"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "On réduit ses déchets en triant pour recycler, en évitant les emballages inutiles, en compostant, en réparant plutôt que jeter, et en évitant le gaspillage alimentaire."
  },
  {
    "id": "csp-73",
    "question": "Déposer une machine à laver cassée sur le trottoir est :",
    "options": [
      "Autorisé",
      "Interdit, il faut l'apporter en déchetterie",
      "Recommandé",
      "Obligatoire"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Déposer des gros appareils sur le trottoir est interdit. Il faut les apporter en déchetterie ou utiliser le service de reprise des magasins lors de l'achat d'un nouvel appareil."
  },
  {
    "id": "csp-74",
    "question": "En quoi consiste la traite des êtres humains ?",
    "options": [
      "Le commerce d'animaux",
      "L'exploitation de personnes (esclavage moderne, travail forcé, prostitution forcée)",
      "Le commerce de marchandises",
      "Le tourisme"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "La traite des êtres humains est un crime qui consiste à exploiter des personnes : esclavage moderne, travail forcé, prostitution forcée, prélèvement d'organes. C'est une violation grave des droits humains."
  },
  {
    "id": "csp-75",
    "question": "Que doit faire une victime de violences ?",
    "options": [
      "Se cacher et ne rien dire",
      "Porter plainte et demander de l'aide (police, associations, 3919)",
      "Se venger",
      "Accepter la situation"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Une victime de violences doit porter plainte auprès de la police ou gendarmerie, et demander de l'aide (numéro d'écoute 3919 pour violences conjugales, associations spécialisées, etc.)."
  },
  {
    "id": "csp-76",
    "question": "Quelle est l'infraction la plus grave ?",
    "options": [
      "La contravention",
      "Le crime",
      "Le délit",
      "L'avertissement"
    ],
    "correctAnswer": 1,
    "theme": "institutions",
    "source": "CSP",
    "explanation": "Le crime est l'infraction la plus grave (meurtre, viol, etc.), jugé par la cour d'assises. Viennent ensuite le délit, puis la contravention."
  },
  {
    "id": "csp-77",
    "question": "En quelle année a débuté la Révolution française ?",
    "options": [
      "1789",
      "1792",
      "1804",
      "1815"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Révolution française a débuté en 1789 avec la prise de la Bastille le 14 juillet et l'adoption de la Déclaration des Droits de l'Homme le 26 août."
  },
  {
    "id": "csp-78",
    "question": "Qui était Napoléon Ier ?",
    "options": [
      "Un roi de France",
      "Un empereur français",
      "Un président",
      "Un révolutionnaire"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Napoléon Bonaparte (1769-1821) est devenu empereur des Français en 1804. Il a régné jusqu'en 1814 (et brièvement en 1815). Il a réformé la France (Code civil) et conquis une grande partie de l'Europe."
  },
  {
    "id": "csp-79",
    "question": "Lequel de ces personnages historiques est français ?",
    "options": [
      "Napoléon Bonaparte",
      "Winston Churchill",
      "George Washington",
      "Giuseppe Garibaldi"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Napoléon Bonaparte était français (né en Corse en 1769). Churchill était britannique, Washington américain, et Garibaldi italien."
  },
  {
    "id": "csp-80",
    "question": "Dans quelle République est-on aujourd'hui ?",
    "options": [
      "La IIIème République",
      "La Vème République",
      "La IVème République",
      "La VIème République"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La France est actuellement dans la Vème République, établie en 1958 par le général de Gaulle."
  },
  {
    "id": "csp-81",
    "question": "Qu'est-ce que la Shoah ?",
    "options": [
      "Une fête juive",
      "Le génocide des Juifs par les nazis pendant la Seconde Guerre mondiale",
      "Une bataille",
      "Un traité"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Shoah (ou Holocauste) est le génocide des Juifs d'Europe par les nazis pendant la Seconde Guerre mondiale (1941-1945). Environ 6 millions de Juifs ont été assassinés."
  },
  {
    "id": "csp-82",
    "question": "Quel pays ou région du monde a été colonisé par la France ?",
    "options": [
      "L'Allemagne",
      "L'Algérie",
      "La Russie",
      "La Chine"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "L'Algérie a été colonisée par la France de 1830 à 1962. La France a eu un vaste empire colonial en Afrique, Asie et Amérique."
  },
  {
    "id": "csp-83",
    "question": "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    "options": [
      "Napoléon",
      "Jules Ferry",
      "Charles de Gaulle",
      "François Mitterrand"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Jules Ferry, ministre de l'Instruction publique, a rendu l'école primaire gratuite (1881), laïque et obligatoire (1882) pour les enfants de 6 à 13 ans."
  },
  {
    "id": "csp-84",
    "question": "Quand a eu lieu la Seconde Guerre mondiale ?",
    "options": [
      "1914-1918",
      "1939-1945",
      "1939-1940",
      "1950-1960"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Seconde Guerre mondiale s'est déroulée de 1939 à 1945. Elle a opposé les Alliés aux puissances de l'Axe (Allemagne nazie, Italie fasciste, Japon)."
  },
  {
    "id": "csp-85",
    "question": "Quand a eu lieu la Première Guerre mondiale ?",
    "options": [
      "1914-1918",
      "1939-1945",
      "1870-1871",
      "1900-1905"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Première Guerre mondiale s'est déroulée de 1914 à 1918. Elle a causé des millions de morts et a profondément marqué la France."
  },
  {
    "id": "csp-86",
    "question": "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    "options": [
      "1945",
      "1957",
      "1992",
      "2002"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Communauté Économique Européenne (CEE) a été créée par le traité de Rome signé le 25 mars 1957. C'est l'ancêtre de l'Union européenne actuelle."
  },
  {
    "id": "csp-87",
    "question": "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    "options": [
      "La fête nationale",
      "L'armistice de 1918 (fin de la Première Guerre mondiale)",
      "La libération de 1945",
      "La Révolution française"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Le 11 novembre commémore l'armistice de 1918 qui a mis fin à la Première Guerre mondiale. C'est un jour férié en France."
  },
  {
    "id": "csp-88",
    "question": "Qui a été le premier Président élu sous la Ve République ?",
    "options": [
      "François Mitterrand",
      "Charles de Gaulle",
      "Georges Pompidou",
      "Valéry Giscard d'Estaing"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Charles de Gaulle a été le premier président de la Vème République, élu en 1958. Il a été réélu en 1965 (première élection au suffrage universel direct)."
  },
  {
    "id": "csp-89",
    "question": "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    "options": [
      "1789",
      "1848",
      "1881",
      "1945"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "L'esclavage a été aboli définitivement en France en 1848 par le décret Schoelcher sous la IIème République. (Il avait été aboli une première fois en 1794 puis rétabli par Napoléon en 1802)."
  },
  {
    "id": "csp-90",
    "question": "Depuis quelle année l'école publique est-elle gratuite ?",
    "options": [
      "1789",
      "1881",
      "1945",
      "2000"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "L'école primaire publique est devenue gratuite en 1881 grâce aux lois de Jules Ferry sur l'instruction."
  },
  {
    "id": "csp-91",
    "question": "Combien y a-t-il eu de républiques en France ?",
    "options": [
      "3",
      "5",
      "7",
      "10"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Il y a eu 5 républiques en France : Ière (1792-1804), IIème (1848-1852), IIIème (1870-1940), IVème (1946-1958), et Vème (depuis 1958)."
  },
  {
    "id": "csp-92",
    "question": "Qui était le roi de France au moment de la Révolution française ?",
    "options": [
      "Louis XIV",
      "Louis XVI",
      "Henri IV",
      "François Ier"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Louis XVI était roi de France au moment de la Révolution française. Il a été renversé et guillotiné en 1793."
  },
  {
    "id": "csp-93",
    "question": "Qui a fondé la Ve République ?",
    "options": [
      "Napoléon Bonaparte",
      "Charles de Gaulle",
      "François Mitterrand",
      "Jules Ferry"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Le général Charles de Gaulle a fondé la Vème République en 1958 en rédigeant sa Constitution, adoptée par référendum."
  },
  {
    "id": "csp-94",
    "question": "Que célèbre-t-on le 14 juillet ?",
    "options": [
      "La victoire de 1945",
      "La fête nationale (prise de la Bastille en 1789)",
      "L'abolition de l'esclavage",
      "Le traité de Versailles"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Le 14 juillet est la fête nationale française qui commémore la prise de la Bastille le 14 juillet 1789, symbole du début de la Révolution française."
  },
  {
    "id": "csp-95",
    "question": "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    "options": [
      "La guerre de Cent Ans",
      "La Première Guerre mondiale",
      "La Seconde Guerre mondiale",
      "La guerre de 1870"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Première Guerre mondiale s'est déroulée de 1914 à 1918. C'est un conflit majeur qui a impliqué de nombreux pays et causé des millions de morts."
  },
  {
    "id": "csp-96",
    "question": "Pourquoi l'année 1958 est importante pour la France ?",
    "options": [
      "Fin de la guerre",
      "Création de la Vème République",
      "Abolition de la peine de mort",
      "Introduction de l'euro"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "1958 marque la création de la Vème République avec l'adoption de la Constitution par référendum et l'élection de Charles de Gaulle comme premier président."
  },
  {
    "id": "csp-97",
    "question": "Quel fleuve coule en France ?",
    "options": [
      "La Seine",
      "Le Nil",
      "Le Danube",
      "Le Rhin uniquement"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Seine est un fleuve français qui traverse Paris. La France a plusieurs fleuves : Seine, Loire, Rhône, Garonne, Rhin (frontière)."
  },
  {
    "id": "csp-98",
    "question": "Quelle ville est française ?",
    "options": [
      "Lyon",
      "Bruxelles",
      "Genève",
      "Rome"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Lyon est une grande ville française, 3ème ville de France. Bruxelles est en Belgique, Genève en Suisse, et Rome en Italie."
  },
  {
    "id": "csp-99",
    "question": "Quel océan borde la côte ouest française ?",
    "options": [
      "L'océan Pacifique",
      "L'océan Atlantique",
      "L'océan Indien",
      "L'océan Arctique"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "L'océan Atlantique borde la côte ouest de la France métropolitaine (Bretagne, Pays de la Loire, Aquitaine, etc.)."
  },
  {
    "id": "csp-100",
    "question": "Qu'est-ce que Paris ?",
    "options": [
      "Un pays",
      "La capitale de la France",
      "Une région",
      "Un fleuve"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Paris est la capitale de la France. C'est la plus grande ville française avec environ 2,2 millions d'habitants (12 millions dans l'agglomération)."
  },
  {
    "id": "csp-101",
    "question": "Quelle est la capitale de la France ?",
    "options": [
      "Lyon",
      "Paris",
      "Marseille",
      "Toulouse"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Paris est la capitale de la France, siège des institutions politiques et centre culturel majeur."
  },
  {
    "id": "csp-102",
    "question": "Sur quel continent se situe la France métropolitaine ?",
    "options": [
      "L'Afrique",
      "L'Europe",
      "L'Asie",
      "L'Amérique"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La France métropolitaine se situe en Europe, à l'ouest du continent européen."
  },
  {
    "id": "csp-103",
    "question": "Quelle île est un département d'outre-mer français ?",
    "options": [
      "La Corse",
      "La Réunion",
      "La Sardaigne",
      "La Sicile"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Réunion est un département et une région d'outre-mer français situé dans l'océan Indien. La Guadeloupe et la Martinique sont aussi des DOM insulaires."
  },
  {
    "id": "csp-104",
    "question": "Combien y a-t-il de régions en France métropolitaine ?",
    "options": [
      "13 régions",
      "22 régions",
      "18 régions",
      "26 régions"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions (+ 5 régions d'outre-mer)."
  },
  {
    "id": "csp-105",
    "question": "Quelle ville est un grand port maritime ?",
    "options": [
      "Paris",
      "Marseille",
      "Lyon",
      "Strasbourg"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Marseille est le plus grand port maritime de France, situé sur la Méditerranée. Le Havre et Bordeaux sont aussi de grands ports."
  },
  {
    "id": "csp-106",
    "question": "Quelle est la mer au sud de la France métropolitaine ?",
    "options": [
      "La mer du Nord",
      "La mer Méditerranée",
      "La mer Baltique",
      "La mer Noire"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La mer Méditerranée borde le sud de la France métropolitaine (Côte d'Azur, Languedoc, etc.)."
  },
  {
    "id": "csp-107",
    "question": "Quelle ville est située au bord de la mer Méditerranée ?",
    "options": [
      "Nice",
      "Lille",
      "Strasbourg",
      "Nantes"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Nice est située au bord de la mer Méditerranée, sur la Côte d'Azur. Marseille, Toulon et Montpellier aussi."
  },
  {
    "id": "csp-108",
    "question": "Où se situe la Corse ?",
    "options": [
      "Dans l'océan Atlantique",
      "Dans la mer Méditerranée",
      "Dans la Manche",
      "Dans l'océan Indien"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La Corse est une île française située dans la mer Méditerranée, au sud-est de la France métropolitaine."
  },
  {
    "id": "csp-109",
    "question": "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    "options": [
      "Les Pyrénées",
      "Les Alpes",
      "Le Jura",
      "Les Vosges"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Les Alpes forment une frontière naturelle entre la France et l'Italie. Le Mont Blanc (4809m) est le point culminant."
  },
  {
    "id": "csp-110",
    "question": "Qui était Molière ?",
    "options": [
      "Un acteur et auteur de théâtre français",
      "Un roi de France",
      "Un scientifique",
      "Un peintre"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Molière (1622-1673) était un dramaturge, acteur et metteur en scène français célèbre pour ses comédies ('Le Malade imaginaire', 'Tartuffe', 'L'Avare', etc.)."
  },
  {
    "id": "csp-111",
    "question": "Qui était Charles Baudelaire ?",
    "options": [
      "Un peintre",
      "Un poète français",
      "Un musicien",
      "Un homme politique"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Charles Baudelaire (1821-1867) était un poète français, auteur des 'Fleurs du Mal', figure majeure du symbolisme."
  },
  {
    "id": "csp-112",
    "question": "Qui était George Sand ?",
    "options": [
      "Une écrivaine française",
      "Une reine",
      "Une scientifique",
      "Une actrice"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "George Sand (1804-1876), pseudonyme d'Aurore Dupin, était une écrivaine française célèbre et une figure féministe pionnière."
  },
  {
    "id": "csp-113",
    "question": "Qui était Simone de Beauvoir ?",
    "options": [
      "Une actrice",
      "Une écrivaine et philosophe féministe française",
      "Une chanteuse",
      "Une reine"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Simone de Beauvoir (1908-1986) était une écrivaine, philosophe et féministe française, auteure du 'Deuxième Sexe'."
  },
  {
    "id": "csp-114",
    "question": "Qui était Albert Camus ?",
    "options": [
      "Un écrivain et philosophe français, prix Nobel de littérature",
      "Un peintre",
      "Un musicien",
      "Un homme politique"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Albert Camus (1913-1960) était un écrivain, philosophe et journaliste français, prix Nobel de littérature en 1957 ('L'Étranger', 'La Peste')."
  },
  {
    "id": "csp-115",
    "question": "Qui était Paul Cézanne ?",
    "options": [
      "Un peintre français",
      "Un écrivain",
      "Un musicien",
      "Un architecte"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Paul Cézanne (1839-1906) était un peintre français post-impressionniste, précurseur du cubisme."
  },
  {
    "id": "csp-116",
    "question": "Qui était Marc Chagall ?",
    "options": [
      "Un peintre ayant vécu en France",
      "Un écrivain",
      "Un musicien",
      "Un homme politique"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Marc Chagall (1887-1985) était un peintre d'origine russe naturalisé français, célèbre pour ses œuvres colorées et oniriques."
  },
  {
    "id": "csp-117",
    "question": "Qui était Joséphine Baker ?",
    "options": [
      "Une danseuse, chanteuse et résistante, panthéonisée en 2021",
      "Une reine",
      "Une scientifique",
      "Une écrivaine"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Joséphine Baker (1906-1975) était une danseuse, chanteuse et résistante française d'origine américaine. Elle a été la première femme noire au Panthéon (2021)."
  },
  {
    "id": "csp-118",
    "question": "Qui était une chanteuse française célèbre ?",
    "options": [
      "Édith Piaf",
      "Maria Callas",
      "Aretha Franklin",
      "Whitney Houston"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Édith Piaf (1915-1963) était une chanteuse française iconique, surnommée 'la Môme Piaf', célèbre pour 'La Vie en rose' et 'Non, je ne regrette rien'."
  },
  {
    "id": "csp-119",
    "question": "Qu'est-ce que le Louvre ?",
    "options": [
      "Un château royal",
      "Le plus grand musée de Paris et du monde",
      "Une cathédrale",
      "Un théâtre"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Le Louvre est le plus grand musée de Paris et du monde par sa surface d'exposition. Il abrite la Joconde, la Vénus de Milo, etc."
  },
  {
    "id": "csp-120",
    "question": "Qui était Jean de la Fontaine ?",
    "options": [
      "Un poète français célèbre pour ses fables",
      "Un roi",
      "Un peintre",
      "Un musicien"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Jean de la Fontaine (1621-1695) était un poète français célèbre pour ses Fables ('Le Corbeau et le Renard', 'La Cigale et la Fourmi', etc.)."
  },
  {
    "id": "csp-121",
    "question": "Quel écrivain est français ?",
    "options": [
      "Victor Hugo",
      "William Shakespeare",
      "Goethe",
      "Dante"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Victor Hugo (1802-1885) était un écrivain français majeur, auteur des 'Misérables' et de 'Notre-Dame de Paris'."
  },
  {
    "id": "csp-122",
    "question": "Dans quelle ville se trouve la tour Eiffel ?",
    "options": [
      "Lyon",
      "Paris",
      "Marseille",
      "Nice"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "La tour Eiffel se trouve à Paris. Construite pour l'Exposition universelle de 1889, elle est devenue le symbole de Paris et de la France."
  },
  {
    "id": "csp-123",
    "question": "Quand célèbre-t-on Noël ?",
    "options": [
      "Le 25 décembre",
      "Le 1er janvier",
      "Le 14 juillet",
      "Le 25 mars"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "CSP",
    "explanation": "Noël est célébré le 25 décembre. C'est une fête chrétienne et culturelle majeure en France."
  },
  {
    "id": "csp-124",
    "question": "Quel numéro d'urgence permet d'appeler le SAMU ?",
    "options": [
      "15",
      "17",
      "18",
      "112"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Le 15 est le numéro d'urgence du SAMU (Service d'Aide Médicale Urgente) pour les urgences médicales."
  },
  {
    "id": "csp-125",
    "question": "Quel numéro d'urgence permet d'appeler les pompiers ?",
    "options": [
      "15",
      "17",
      "18",
      "112"
    ],
    "correctAnswer": 2,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Le 18 est le numéro d'urgence pour appeler les pompiers en France."
  },
  {
    "id": "csp-126",
    "question": "Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    "options": [
      "L'assurer",
      "Rien de plus",
      "Attendre 5 ans",
      "Payer une taxe spéciale"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Pour pouvoir conduire légalement, il faut obligatoirement assurer son véhicule (au minimum l'assurance responsabilité civile), en plus d'avoir le permis de conduire."
  },
  {
    "id": "csp-127",
    "question": "À quelles conditions un mariage est-il reconnu juridiquement ?",
    "options": [
      "S'il est célébré à la mairie par un officier d'état civil",
      "S'il est célébré à l'église",
      "S'il est célébré en privé",
      "S'il est célébré à l'étranger uniquement"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Pour être reconnu juridiquement en France, un mariage doit être célébré civilement à la mairie par un officier d'état civil. Le mariage religieux seul n'a pas de valeur juridique."
  },
  {
    "id": "csp-128",
    "question": "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    "options": [
      "Dans les 5 jours suivant la naissance",
      "Dans le mois suivant la naissance",
      "Dans l'année suivant la naissance",
      "Quand on veut"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "La naissance d'un enfant doit être déclarée à la mairie dans les 5 jours suivant l'accouchement. C'est une obligation légale."
  },
  {
    "id": "csp-129",
    "question": "Le travail non déclaré est :",
    "options": [
      "Autorisé",
      "Interdit et sanctionné (travail au noir)",
      "Recommandé",
      "Obligatoire"
    ],
    "correctAnswer": 1,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Le travail non déclaré (travail au noir) est strictement interdit et sanctionné. C'est une fraude qui prive le salarié de droits et l'État de cotisations."
  },
  {
    "id": "csp-130",
    "question": "Que doit faire un employeur pour fixer un salaire ?",
    "options": [
      "Respecter au minimum le SMIC et les conventions collectives",
      "Payer ce qu'il veut",
      "Ne rien payer",
      "Payer seulement si le salarié le demande"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Un employeur doit respecter au minimum le SMIC (Salaire Minimum Interprofessionnel de Croissance) et les conventions collectives de la branche professionnelle."
  },
  {
    "id": "csp-131",
    "question": "Qu'est-ce que le SMIC ?",
    "options": [
      "Le Salaire Minimum Interprofessionnel de Croissance",
      "Un impôt",
      "Une allocation",
      "Une taxe"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Le SMIC est le Salaire Minimum Interprofessionnel de Croissance, le salaire horaire minimum légal en France en dessous duquel un employeur ne peut pas payer un salarié."
  },
  {
    "id": "csp-132",
    "question": "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    "options": [
      "S'inscrire à France Travail (Pôle emploi)",
      "Attendre chez soi",
      "Partir en vacances",
      "Rien faire"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Pour chercher un emploi et bénéficier d'un accompagnement et d'allocations, il faut s'inscrire à France Travail (anciennement Pôle emploi)."
  },
  {
    "id": "csp-133",
    "question": "Quelle est la durée légale du temps de travail par semaine ?",
    "options": [
      "30 heures",
      "35 heures",
      "40 heures",
      "50 heures"
    ],
    "correctAnswer": 1,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "La durée légale du travail en France est de 35 heures par semaine. Au-delà, ce sont des heures supplémentaires payées avec majoration."
  },
  {
    "id": "csp-134",
    "question": "Qui est aidé par France Travail ?",
    "options": [
      "Les demandeurs d'emploi",
      "Les touristes",
      "Les étudiants uniquement",
      "Personne"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "France Travail (anciennement Pôle emploi) aide les demandeurs d'emploi à trouver un travail, les accompagne et verse les allocations chômage."
  },
  {
    "id": "csp-135",
    "question": "Une personne étrangère en situation régulière peut créer son entreprise :",
    "options": [
      "Oui, sous certaines conditions selon le titre de séjour",
      "Non, jamais",
      "Oui, sans aucune condition",
      "Seulement après 50 ans"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Une personne étrangère en situation régulière peut créer son entreprise en France, sous certaines conditions qui dépendent de son titre de séjour."
  },
  {
    "id": "csp-136",
    "question": "Une femme peut-elle créer son entreprise ?",
    "options": [
      "Oui, avec les mêmes droits que les hommes",
      "Non",
      "Seulement avec l'autorisation du mari",
      "Seulement après 40 ans"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Une femme peut créer son entreprise librement et dans les mêmes conditions qu'un homme. L'égalité hommes-femmes est un principe constitutionnel."
  },
  {
    "id": "csp-137",
    "question": "À partir de quel âge un mineur peut-il travailler ?",
    "options": [
      "14 ans (avec conditions strictes)",
      "12 ans",
      "10 ans",
      "À n'importe quel âge"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "En France, un mineur peut travailler à partir de 14 ans (pendant les vacances scolaires avec conditions strictes) ou 16 ans de façon plus générale, avec autorisation parentale et respect du Code du travail."
  },
  {
    "id": "csp-138",
    "question": "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    "options": [
      "L'Assurance Maladie (Sécurité sociale)",
      "La mairie",
      "La préfecture",
      "La police"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "C'est auprès de l'Assurance Maladie (Sécurité sociale) qu'il faut demander le remboursement des frais de santé. La mutuelle complémentaire rembourse le reste."
  },
  {
    "id": "csp-139",
    "question": "Qu'est-ce qu'un numéro d'urgence ?",
    "options": [
      "Un numéro gratuit pour appeler les secours 24h/24",
      "Un numéro payant",
      "Un numéro de loterie",
      "Un code postal"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Un numéro d'urgence (15, 17, 18, 112) est un numéro gratuit accessible 24h/24 pour contacter rapidement les secours en cas de danger ou d'urgence."
  },
  {
    "id": "csp-140",
    "question": "Concernant l'accès aux soins, quelle proposition est correcte ?",
    "options": [
      "Tout le monde peut consulter un médecin",
      "Seuls les riches peuvent consulter",
      "C'est interdit aux étrangers",
      "Il faut une autorisation spéciale"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "En France, toute personne peut consulter un médecin. L'Assurance Maladie rembourse les soins. Des aides existent pour les personnes en difficulté (AME, CSS)."
  },
  {
    "id": "csp-141",
    "question": "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    "options": [
      "Au médecin traitant",
      "Aux urgences de l'hôpital",
      "À la police",
      "À la mairie"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "En cas de problème de santé non urgent, il faut d'abord consulter son médecin traitant. Les urgences hospitalières sont réservées aux situations graves."
  },
  {
    "id": "csp-142",
    "question": "Quel est le rôle du médecin traitant ?",
    "options": [
      "Assurer le suivi médical régulier et coordonner les soins",
      "Faire les opérations chirurgicales",
      "Vendre des médicaments",
      "Gérer l'hôpital"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Le médecin traitant assure le suivi médical régulier du patient, coordonne les soins et oriente vers des spécialistes si nécessaire. C'est le médecin de référence."
  },
  {
    "id": "csp-143",
    "question": "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
    "options": [
      "En cas d'urgence vitale ou de problème grave nécessitant des soins immédiats",
      "Pour un simple rhume",
      "Pour toute consultation",
      "Pour acheter des médicaments"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Les urgences hospitalières sont pour les situations graves nécessitant des soins immédiats : accident grave, douleur intense, problème vital. Pour les petits problèmes, consulter le médecin traitant."
  },
  {
    "id": "csp-144",
    "question": "Quel est l'objectif des vaccinations obligatoires ?",
    "options": [
      "Protéger contre les maladies graves et éviter les épidémies",
      "Gagner de l'argent",
      "Faire mal aux enfants",
      "Rien de particulier"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Les vaccinations obligatoires visent à protéger les individus et la collectivité contre des maladies graves et à éviter les épidémies (immunité collective)."
  },
  {
    "id": "csp-145",
    "question": "À quoi sert la carte Vitale ?",
    "options": [
      "À faciliter le remboursement des frais de santé par l'Assurance Maladie",
      "À payer les impôts",
      "À voter",
      "À conduire"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "La carte Vitale est la carte d'assuré social qui permet de faciliter et accélérer le remboursement des frais de santé par l'Assurance Maladie."
  },
  {
    "id": "csp-146",
    "question": "À quoi sert une mutuelle santé ?",
    "options": [
      "À compléter le remboursement de l'Assurance Maladie",
      "À remplacer l'Assurance Maladie",
      "À payer les impôts",
      "À rien"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "La mutuelle santé (complémentaire santé) complète le remboursement de l'Assurance Maladie en prenant en charge tout ou partie du reste à charge (ticket modérateur)."
  },
  {
    "id": "csp-147",
    "question": "Jusqu'à quel âge l'école est-elle obligatoire ?",
    "options": [
      "14 ans",
      "16 ans",
      "18 ans",
      "21 ans"
    ],
    "correctAnswer": 1,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "L'instruction est obligatoire de 3 ans à 16 ans en France. Ensuite, c'est facultatif."
  },
  {
    "id": "csp-148",
    "question": "L'autorité parentale prévoit l'obligation :",
    "options": [
      "De protéger, éduquer et assurer la sécurité de l'enfant",
      "De laisser l'enfant faire ce qu'il veut",
      "De battre l'enfant",
      "De ne pas s'occuper de l'enfant"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "L'autorité parentale comporte des droits et devoirs : protéger l'enfant, assurer sa sécurité, sa santé, son éducation, et contribuer à son entretien."
  },
  {
    "id": "csp-149",
    "question": "Pour qui l'école est-elle obligatoire ?",
    "options": [
      "Pour tous les enfants de 3 à 16 ans résidant en France",
      "Seulement pour les Français",
      "Seulement pour les riches",
      "Pour personne"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "L'instruction est obligatoire pour tous les enfants de 3 à 16 ans résidant en France, quelle que soit leur nationalité."
  },
  {
    "id": "csp-150",
    "question": "Quel diplôme obtient-on à la fin du lycée ?",
    "options": [
      "Le Brevet",
      "Le Baccalauréat",
      "Le CAP",
      "La Licence"
    ],
    "correctAnswer": 1,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "À la fin du lycée (classe de Terminale), les élèves passent le Baccalauréat (Bac), diplôme qui permet d'accéder à l'enseignement supérieur."
  },
  {
    "id": "csp-151",
    "question": "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    "options": [
      "Au collège",
      "Au lycée",
      "À l'université",
      "À l'école maternelle"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Après l'école élémentaire (CP-CM2), les élèves vont au collège (6ème à 3ème), puis au lycée (Seconde à Terminale)."
  },
  {
    "id": "csp-152",
    "question": "Pour qui l'école est elle obligatoire ?",
    "options": [
      "Pour tous les enfants de 3 à 16 ans",
      "Seulement pour les garçons",
      "Seulement pour les filles",
      "Pour personne"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "L'instruction est obligatoire pour tous les enfants, filles et garçons, de 3 à 16 ans résidant en France."
  },
  {
    "id": "csp-153",
    "question": "Un enfant inscrit à l'école :",
    "options": [
      "Doit être assidu et ne peut s'absenter que pour des motifs valables",
      "Peut venir quand il veut",
      "N'a pas besoin de venir",
      "Peut partir en vacances quand il veut"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Un enfant inscrit à l'école doit être assidu. Les absences doivent être justifiées par des motifs valables (maladie, obligations légales, etc.)."
  },
  {
    "id": "csp-154",
    "question": "Les enfants qui ne parlent pas français :",
    "options": [
      "Ont le droit d'aller à l'école et bénéficient d'un accompagnement",
      "Ne peuvent pas aller à l'école",
      "Doivent attendre de parler français",
      "Sont refusés"
    ],
    "correctAnswer": 0,
    "theme": "histoire",
    "source": "CSP",
    "explanation": "Tous les enfants ont le droit à l'instruction. Les enfants ne parlant pas français sont accueillis à l'école et bénéficient d'un accompagnement spécifique (UPE2A) pour apprendre le français."
  },
  {
    "id": "supp-1",
    "question": "Qu'est-ce que la laïcité ?",
    "options": [
      "L'interdiction de toute religion",
      "La séparation de l'État et des religions, garantissant la liberté de conscience",
      "L'obligation d'être athée",
      "La religion officielle de l'État"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "La laïcité est un principe fondamental en France depuis 1905. Elle signifie la séparation de l'État et des religions, garantissant la liberté de conscience et l'égalité de tous devant la loi, quelle que soit leur religion ou conviction."
  },
  {
    "id": "supp-2",
    "question": "Dans les services publics et les écoles publiques, les agents et enseignants doivent :",
    "options": [
      "Afficher leur religion librement",
      "Respecter la neutralité religieuse (ne pas porter de signes religieux ostentatoires)",
      "Imposer une religion",
      "Interdire toute discussion sur la religion"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Dans les services publics et les écoles publiques, les agents de l'État doivent respecter la neutralité religieuse et ne peuvent pas porter de signes religieux ostentatoires ni manifester leurs convictions religieuses dans l'exercice de leurs fonctions."
  },
  {
    "id": "supp-3",
    "question": "Les élèves dans les écoles publiques peuvent-ils porter des signes religieux ?",
    "options": [
      "Oui, tous les signes religieux sont autorisés",
      "Non, les signes religieux ostentatoires sont interdits depuis 2004",
      "Oui, mais seulement le vendredi",
      "Non, aucun signe religieux n'est autorisé, même discret"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Depuis la loi de 2004, le port de signes ou tenues manifestant ostensiblement une appartenance religieuse est interdit dans les écoles, collèges et lycées publics. Les signes discrets restent autorisés."
  },
  {
    "id": "supp-4",
    "question": "Pour louer un appartement en France, quels documents sont généralement demandés ?",
    "options": [
      "Seulement une pièce d'identité",
      "Pièce d'identité, justificatifs de revenus, et parfois un garant",
      "Aucun document n'est nécessaire",
      "Seulement de l'argent liquide"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Pour louer un logement, le propriétaire demande généralement une pièce d'identité, des justificatifs de revenus (bulletins de salaire, avis d'imposition), et souvent un garant. La liste des documents exigibles est limitée par la loi."
  },
  {
    "id": "supp-5",
    "question": "Qu'est-ce qu'un bail de location ?",
    "options": [
      "Un simple accord oral",
      "Un contrat écrit qui fixe les droits et obligations du locataire et du propriétaire",
      "Une facture de loyer",
      "Un document uniquement pour le propriétaire"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le bail (ou contrat de location) est un contrat écrit qui fixe les conditions de la location : montant du loyer, durée, dépôt de garantie, charges, et les droits et obligations de chacun."
  },
  {
    "id": "supp-6",
    "question": "Combien de temps à l'avance un locataire doit-il prévenir son propriétaire avant de quitter un logement non meublé ?",
    "options": [
      "1 mois",
      "3 mois",
      "6 mois",
      "1 semaine"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Pour un logement non meublé, le locataire doit donner son préavis 3 mois à l'avance (1 mois dans certaines zones tendues ou pour un logement meublé)."
  },
  {
    "id": "supp-7",
    "question": "Qu'est-ce que le dépôt de garantie (ou caution) ?",
    "options": [
      "Le premier mois de loyer",
      "Une somme versée au propriétaire en garantie, restituée en fin de bail si le logement est en bon état",
      "Une assurance habitation",
      "Les charges locatives"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le dépôt de garantie est une somme (maximum 1 mois de loyer pour un logement non meublé) versée au propriétaire en garantie. Elle est restituée en fin de bail, déduction faite des éventuels dégâts."
  },
  {
    "id": "supp-8",
    "question": "Pour ouvrir un compte bancaire en France, quels documents sont nécessaires ?",
    "options": [
      "Pièce d'identité, justificatif de domicile et parfois justificatif de revenus",
      "Seulement une carte d'identité",
      "Un passeport international uniquement",
      "Aucun document"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Pour ouvrir un compte bancaire, il faut généralement présenter une pièce d'identité valide, un justificatif de domicile récent (facture, quittance), et parfois un justificatif de revenus ou de situation professionnelle."
  },
  {
    "id": "supp-9",
    "question": "Qu'est-ce que le droit au compte ?",
    "options": [
      "Le droit de la banque de refuser un client",
      "Le droit pour toute personne d'avoir un compte bancaire, garanti par la Banque de France",
      "Le droit de ne pas payer de frais bancaires",
      "Le droit d'emprunter de l'argent"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le droit au compte permet à toute personne résidant en France, même si elle est refusée par les banques, de demander à la Banque de France de lui désigner un établissement qui devra lui ouvrir un compte avec services de base gratuits."
  },
  {
    "id": "supp-10",
    "question": "Qu'est-ce qu'un RIB (Relevé d'Identité Bancaire) ?",
    "options": [
      "Un document contenant les coordonnées bancaires pour recevoir ou effectuer des paiements",
      "Une carte de crédit",
      "Un relevé de compte",
      "Un chéquier"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le RIB est un document qui contient les coordonnées bancaires (numéro de compte, code banque, code guichet, IBAN) nécessaires pour recevoir des virements ou mettre en place des prélèvements automatiques."
  },
  {
    "id": "supp-11",
    "question": "Qu'est-ce qu'un contrat de travail à durée indéterminée (CDI) ?",
    "options": [
      "Un contrat sans date de fin prévue",
      "Un contrat de 6 mois",
      "Un contrat d'un an",
      "Un contrat temporaire"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le CDI (Contrat à Durée Indéterminée) est un contrat de travail sans date de fin prévue. C'est la forme normale et générale de la relation de travail en France, offrant le plus de stabilité."
  },
  {
    "id": "supp-12",
    "question": "Qu'est-ce qu'un CDD ?",
    "options": [
      "Un contrat sans fin",
      "Un Contrat à Durée Déterminée, avec une date de fin fixée",
      "Un compte bancaire",
      "Un diplôme"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le CDD (Contrat à Durée Déterminée) est un contrat de travail avec une date de fin fixée à l'avance. Il ne peut être utilisé que dans des cas précis (remplacement, surcroît d'activité, travail saisonnier)."
  },
  {
    "id": "supp-13",
    "question": "Qu'est-ce que la période d'essai ?",
    "options": [
      "Une période de formation obligatoire",
      "Une période au début du contrat permettant à l'employeur ou au salarié de rompre facilement le contrat",
      "Une période de vacances",
      "Une période de stage non payée"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La période d'essai, prévue dans le contrat de travail, permet à l'employeur d'évaluer les compétences du salarié et au salarié d'apprécier si le poste lui convient. Pendant cette période, la rupture est facilitée pour les deux parties."
  },
  {
    "id": "supp-14",
    "question": "Qu'indique une fiche de paie (bulletin de salaire) ?",
    "options": [
      "Le salaire brut, les cotisations sociales, et le salaire net à percevoir",
      "Seulement le montant à payer",
      "Seulement les heures travaillées",
      "Le contrat de travail"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La fiche de paie détaille le salaire brut, les cotisations sociales (sécurité sociale, retraite, chômage, etc.), les éventuelles heures supplémentaires, et le salaire net que le salarié va effectivement percevoir."
  },
  {
    "id": "supp-15",
    "question": "Quelle est la différence entre salaire brut et salaire net ?",
    "options": [
      "Il n'y a pas de différence",
      "Le salaire net est le salaire brut moins les cotisations sociales",
      "Le salaire brut est plus petit",
      "Le salaire net inclut les impôts"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le salaire brut est le salaire avant déduction des cotisations sociales. Le salaire net est ce qui reste après déduction de ces cotisations, c'est ce que le salarié reçoit effectivement sur son compte bancaire."
  },
  {
    "id": "supp-16",
    "question": "Combien de semaines de congés payés minimum un salarié a-t-il droit par an en France ?",
    "options": [
      "2 semaines",
      "5 semaines",
      "8 semaines",
      "10 semaines"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Tout salarié en France a droit à 5 semaines de congés payés minimum par an (soit 2,5 jours ouvrables par mois travaillé). C'est un droit acquis dès 1936 et étendu à 5 semaines en 1982."
  },
  {
    "id": "supp-17",
    "question": "Qu'est-ce que le prélèvement à la source ?",
    "options": [
      "Un impôt sur les entreprises",
      "Le prélèvement de l'impôt sur le revenu directement sur le salaire chaque mois",
      "Une taxe sur les produits",
      "Une cotisation sociale"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Depuis 2019, l'impôt sur le revenu est prélevé à la source, c'est-à-dire directement sur le salaire chaque mois par l'employeur, selon un taux calculé par l'administration fiscale."
  },
  {
    "id": "supp-18",
    "question": "Qu'est-ce que la Sécurité sociale ?",
    "options": [
      "La police",
      "Le système de protection sociale qui couvre santé, retraite, famille et chômage",
      "Une assurance privée",
      "Un service de sécurité privée"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La Sécurité sociale est le système de protection sociale créé en 1945. Elle couvre les risques maladie, maternité, invalidité, vieillesse (retraite), accidents du travail et prestations familiales grâce aux cotisations sociales."
  },
  {
    "id": "supp-19",
    "question": "Qu'est-ce que les Allocations Familiales (CAF) ?",
    "options": [
      "Des aides financières versées aux familles avec enfants",
      "Une assurance automobile",
      "Un crédit bancaire",
      "Une taxe sur les familles"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Les Allocations Familiales sont des aides financières versées par la Caisse d'Allocations Familiales (CAF) aux familles pour les aider à élever leurs enfants. Elles sont versées à partir de 2 enfants à charge."
  },
  {
    "id": "supp-20",
    "question": "Qu'est-ce que le RSA (Revenu de Solidarité Active) ?",
    "options": [
      "Une allocation pour les personnes avec faibles ou sans ressources",
      "Un compte bancaire",
      "Une assurance voiture",
      "Un diplôme"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le RSA est une allocation versée par la CAF aux personnes de plus de 25 ans (ou parents isolés) ayant de faibles ou aucunes ressources. Il assure un revenu minimum et encourage le retour à l'emploi."
  },
  {
    "id": "supp-21",
    "question": "À quoi servent les cotisations sociales prélevées sur les salaires ?",
    "options": [
      "À financer la Sécurité sociale (santé, retraite, chômage, famille)",
      "À payer l'armée",
      "À construire des routes",
      "À financer les écoles uniquement"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Les cotisations sociales prélevées sur les salaires financent la Sécurité sociale et ses différentes branches : assurance maladie, retraite, allocations familiales, assurance chômage. C'est le principe de solidarité nationale."
  },
  {
    "id": "supp-22",
    "question": "Qu'est-ce que l'assurance chômage ?",
    "options": [
      "Une assurance qui verse des allocations aux personnes ayant perdu leur emploi",
      "Une assurance voiture",
      "Une assurance habitation",
      "Un compte épargne"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "L'assurance chômage, gérée par France Travail (ex-Pôle emploi), verse des allocations (ARE - Allocation de Retour à l'Emploi) aux salariés qui ont perdu leur emploi involontairement, sous certaines conditions de cotisation."
  },
  {
    "id": "supp-23",
    "question": "Qu'est-ce que la CMU-C (Complémentaire santé solidaire) ?",
    "options": [
      "Une aide pour avoir une complémentaire santé gratuite ou à faible coût pour les personnes à faibles revenus",
      "Une université",
      "Une carte de transport",
      "Un permis de conduire"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La Complémentaire santé solidaire (ex-CMU-C) est une protection complémentaire santé gratuite ou à tarif réduit pour les personnes aux revenus modestes. Elle complète les remboursements de l'Assurance Maladie."
  },
  {
    "id": "supp-24",
    "question": "Qu'est-ce que le numéro de Sécurité sociale ?",
    "options": [
      "Un numéro d'identification unique attribué à chaque personne pour les prestations sociales",
      "Un numéro de téléphone",
      "Un code postal",
      "Un numéro de compte bancaire"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le numéro de Sécurité sociale (NIR - 15 chiffres) est un identifiant unique attribué à chaque personne dès la naissance ou lors de la première activité en France. Il permet l'accès aux prestations de la Sécurité sociale."
  },
  {
    "id": "supp-25",
    "question": "Qu'est-ce que le congé maternité ?",
    "options": [
      "Un congé payé pour les femmes enceintes avant et après l'accouchement",
      "Des vacances supplémentaires",
      "Un congé pour les pères uniquement",
      "Un arrêt maladie"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le congé maternité est un congé payé (indemnités journalières de la Sécurité sociale) accordé aux femmes salariées avant et après l'accouchement. Il dure minimum 16 semaines (6 semaines avant, 10 après), plus long pour les grossesses multiples."
  },
  {
    "id": "supp-26",
    "question": "Qu'est-ce que le congé paternité ?",
    "options": [
      "Un congé pour le père après la naissance d'un enfant",
      "Un congé uniquement pour la mère",
      "Des vacances d'été",
      "Une formation professionnelle"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le congé paternité et d'accueil de l'enfant permet au père (ou second parent) de s'absenter de son travail après la naissance ou l'adoption d'un enfant. Depuis 2021, il est de 25 jours calendaires (32 jours pour naissances multiples)."
  },
  {
    "id": "supp-27",
    "question": "Qu'est-ce que l'égalité entre les femmes et les hommes en France ?",
    "options": [
      "Un principe constitutionnel garantissant les mêmes droits aux femmes et aux hommes",
      "Une simple recommandation",
      "Un principe applicable uniquement au travail",
      "Une loi qui n'existe pas"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "L'égalité entre les femmes et les hommes est un principe constitutionnel inscrit dans le Préambule de la Constitution de 1946. La loi garantit des droits égaux dans tous les domaines : travail, politique, vie familiale, éducation."
  },
  {
    "id": "supp-28",
    "question": "Est-ce qu'un employeur peut refuser d'embaucher une femme parce qu'elle est enceinte ?",
    "options": [
      "Oui, c'est autorisé",
      "Non, c'est une discrimination interdite et sanctionnée",
      "Oui, mais seulement dans certains métiers",
      "Oui, si elle le demande"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Refuser d'embaucher une femme en raison de sa grossesse est une discrimination interdite par la loi. De même, un employeur ne peut pas licencier une salariée parce qu'elle est enceinte. Ces discriminations sont sanctionnées pénalement."
  },
  {
    "id": "supp-29",
    "question": "Qu'est-ce que la discrimination ?",
    "options": [
      "Traiter différemment des personnes sur des critères interdits (origine, sexe, religion, handicap, etc.)",
      "Une préférence personnelle",
      "Un choix libre",
      "Une opinion"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "La discrimination est le fait de traiter différemment des personnes en raison de critères interdits par la loi : origine, sexe, religion, handicap, âge, orientation sexuelle, etc. C'est interdit et sanctionné pénalement (amendes et prison)."
  },
  {
    "id": "supp-30",
    "question": "Que faire si on est victime ou témoin de discrimination ?",
    "options": [
      "Ne rien faire",
      "Contacter le Défenseur des droits et/ou porter plainte",
      "Se venger",
      "Partir du pays"
    ],
    "correctAnswer": 1,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "En cas de discrimination, on peut contacter le Défenseur des droits (autorité indépendante), porter plainte auprès de la police ou gendarmerie, et saisir le conseil de prud'hommes (pour discrimination au travail) ou les tribunaux."
  },
  {
    "id": "supp-31",
    "question": "Comment peut-on devenir français par naturalisation ?",
    "options": [
      "En demandant la naturalisation après 5 ans de résidence régulière, sous conditions",
      "Automatiquement après 1 an",
      "En achetant un bien immobilier",
      "C'est impossible"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "On peut demander la naturalisation française après 5 ans de résidence régulière en France (2 ans si diplôme français supérieur, moins si services rendus). Il faut justifier d'une intégration (langue, valeurs républicaines, situation stable)."
  },
  {
    "id": "supp-32",
    "question": "Quelles sont les conditions pour obtenir la nationalité française par naturalisation ?",
    "options": [
      "Résidence régulière, intégration républicaine, connaissance du français, et moralité",
      "Seulement parler français",
      "Avoir beaucoup d'argent",
      "Être né en France"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Pour la naturalisation, il faut : résidence régulière et continue, intégration dans la communauté française (adhésion aux valeurs républicaines), connaissance suffisante du français (niveau B1 oral), et absence de condamnations pénales."
  },
  {
    "id": "supp-33",
    "question": "Qu'est-ce que le droit du sol ?",
    "options": [
      "Le droit d'acquérir la nationalité du pays où l'on est né, sous conditions",
      "Le droit d'acheter un terrain",
      "Le droit de cultiver la terre",
      "Le droit de voter"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Le droit du sol permet d'acquérir la nationalité d'un pays en raison de sa naissance sur le territoire. En France, un enfant né en France de parents étrangers peut devenir français à sa majorité s'il a résidé en France."
  },
  {
    "id": "supp-34",
    "question": "À partir de quel âge peut-on passer le permis de conduire (permis B) en France ?",
    "options": [
      "16 ans",
      "18 ans",
      "21 ans",
      "25 ans"
    ],
    "correctAnswer": 1,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "On peut passer le permis de conduire B (voiture) à partir de 18 ans en France. La conduite accompagnée peut commencer à 15 ans, mais le permis ne peut être obtenu qu'à 18 ans."
  },
  {
    "id": "supp-35",
    "question": "Quel est le taux d'alcoolémie maximum autorisé pour conduire en France ?",
    "options": [
      "0,5 g/l de sang (0,25 mg/l d'air expiré)",
      "1,0 g/l de sang",
      "0 g/l (zéro alcool)",
      "2,0 g/l de sang"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le taux d'alcoolémie maximum autorisé est de 0,5 g/l de sang (0,25 mg/l d'air expiré) pour les conducteurs confirmés, et 0,2 g/l pour les jeunes conducteurs (permis de moins de 3 ans). Au-delà, c'est un délit."
  },
  {
    "id": "supp-36",
    "question": "Qu'est-ce que le système de points du permis de conduire ?",
    "options": [
      "Un système où chaque conducteur a 12 points, retirés en cas d'infraction",
      "Un système de récompenses",
      "Un jeu vidéo",
      "Une loterie"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Chaque permis de conduire dispose d'un capital de 12 points (6 en période probatoire). En cas d'infraction, des points sont retirés. Si on perd tous ses points, le permis est invalidé et il faut le repasser."
  },
  {
    "id": "supp-37",
    "question": "Qu'est-ce qu'une contravention ?",
    "options": [
      "Une infraction mineure sanctionnée par une amende",
      "Un crime grave",
      "Une récompense",
      "Un diplôme"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Une contravention est une infraction mineure (la moins grave des infractions) sanctionnée principalement par une amende. Exemples : excès de vitesse, stationnement interdit, non-port de la ceinture."
  },
  {
    "id": "supp-38",
    "question": "Est-il obligatoire de trier ses déchets (verre, papier, plastique) ?",
    "options": [
      "Oui, c'est une obligation légale pour protéger l'environnement",
      "Non, c'est facultatif",
      "Seulement dans certaines villes",
      "C'est interdit"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le tri des déchets est obligatoire en France pour tous les citoyens. C'est un devoir environnemental inscrit dans la Charte de l'environnement. Le non-respect peut entraîner des amendes."
  },
  {
    "id": "supp-39",
    "question": "Qu'est-ce que la Charte de l'environnement ?",
    "options": [
      "Un texte constitutionnel qui reconnaît les droits et devoirs environnementaux",
      "Une association écologique",
      "Un guide touristique",
      "Un magazine"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La Charte de l'environnement, intégrée à la Constitution en 2005, reconnaît les droits de vivre dans un environnement sain et les devoirs de préserver l'environnement pour les générations futures."
  },
  {
    "id": "supp-40",
    "question": "Qu'est-ce que le développement durable ?",
    "options": [
      "Un développement qui répond aux besoins du présent sans compromettre ceux des générations futures",
      "Un développement économique rapide",
      "Un type de construction",
      "Une mode passagère"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le développement durable vise à concilier développement économique, protection de l'environnement et progrès social, pour répondre aux besoins actuels sans compromettre ceux des générations futures."
  },
  {
    "id": "supp-41",
    "question": "Qu'est-ce qu'un médiateur ou Défenseur des droits ?",
    "options": [
      "Une autorité indépendante qui défend les droits des citoyens face aux administrations",
      "Un avocat privé",
      "Un policier",
      "Un juge"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le Défenseur des droits est une autorité constitutionnelle indépendante qui défend les droits et libertés des citoyens (discriminations, relations avec l'administration, droits de l'enfant, etc.). Ses services sont gratuits."
  },
  {
    "id": "supp-42",
    "question": "Comment s'appelle le document qui permet de circuler librement dans l'espace Schengen ?",
    "options": [
      "Carte d'identité ou passeport d'un pays Schengen",
      "Permis de conduire",
      "Carte bancaire",
      "Carte Vitale"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "L'espace Schengen permet la libre circulation sans contrôles aux frontières entre les pays membres. Les citoyens peuvent voyager avec une carte d'identité ou un passeport valide."
  },
  {
    "id": "supp-43",
    "question": "Qu'est-ce qu'une association loi 1901 ?",
    "options": [
      "Un groupement de personnes autour d'un projet commun à but non lucratif",
      "Une entreprise commerciale",
      "Un parti politique obligatoire",
      "Une école"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Une association loi 1901 est un groupement de personnes volontaires réunies autour d'un projet commun à but non lucratif (sport, culture, solidarité, etc.). C'est un pilier de l'engagement citoyen en France."
  },
  {
    "id": "supp-44",
    "question": "Qu'est-ce que le bénévolat ?",
    "options": [
      "Une activité non rémunérée au service d'une cause ou organisation",
      "Un emploi payé",
      "Une obligation légale",
      "Un impôt"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Le bénévolat est une activité volontaire et non rémunérée exercée au sein d'une association ou organisation. C'est une forme d'engagement citoyen très répandue en France (sport, culture, action sociale, etc.)."
  },
  {
    "id": "supp-45",
    "question": "Qu'est-ce que le service civique ?",
    "options": [
      "Un engagement volontaire de 6 à 12 mois dans une mission d'intérêt général pour les jeunes",
      "Le service militaire obligatoire",
      "Un stage en entreprise",
      "Une formation professionnelle"
    ],
    "correctAnswer": 0,
    "theme": "principes-valeurs",
    "source": "SUPP",
    "explanation": "Le service civique est un engagement volontaire ouvert aux 16-25 ans (30 ans pour les personnes en situation de handicap) pour des missions d'intérêt général (éducation, environnement, solidarité). Il est indemnisé."
  },
  {
    "id": "supp-46",
    "question": "Qu'est-ce qu'un syndicat ?",
    "options": [
      "Une organisation qui défend les intérêts des salariés",
      "Une entreprise privée",
      "Un parti politique",
      "Une banque"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Un syndicat est une organisation qui défend les droits et intérêts collectifs des salariés (conditions de travail, salaires, etc.). La liberté syndicale est un droit fondamental en France."
  },
  {
    "id": "supp-47",
    "question": "Qu'est-ce que le droit de grève ?",
    "options": [
      "Le droit pour les salariés de cesser le travail collectivement pour défendre leurs revendications",
      "Le droit de partir en vacances",
      "Le droit de démissionner",
      "Le droit de changer d'emploi"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le droit de grève est un droit constitutionnel qui permet aux salariés de cesser collectivement le travail pour défendre leurs revendications professionnelles. Il est encadré par la loi."
  },
  {
    "id": "supp-48",
    "question": "À quoi sert la mairie ?",
    "options": [
      "À fournir des services administratifs locaux (état civil, élections, urbanisme)",
      "Seulement à organiser des fêtes",
      "À vendre des produits",
      "À rien"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La mairie fournit de nombreux services : état civil (naissances, mariages, décès), cartes d'identité, inscriptions électorales, urbanisme, action sociale locale. C'est l'administration de proximité."
  },
  {
    "id": "supp-49",
    "question": "À quoi sert la préfecture ?",
    "options": [
      "À délivrer les titres de séjour, passeports, cartes grises et représenter l'État",
      "Seulement à surveiller",
      "À vendre des voitures",
      "À organiser des concerts"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La préfecture représente l'État dans le département. Elle délivre les titres de séjour pour étrangers, les passeports, les cartes grises, et gère la sécurité et l'ordre public."
  },
  {
    "id": "supp-50",
    "question": "Qu'est-ce qu'un titre de séjour ?",
    "options": [
      "Un document autorisant un étranger à résider en France",
      "Un billet de train",
      "Une carte bancaire",
      "Un permis de conduire"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le titre de séjour est un document officiel délivré par la préfecture qui autorise un étranger à résider en France pour une durée déterminée. Il existe différents types selon la situation (étudiant, salarié, vie privée et familiale, etc.)."
  },
  {
    "id": "supp-51",
    "question": "Qu'est-ce que le mariage civil en France ?",
    "options": [
      "Un contrat juridique célébré à la mairie créant une union légale",
      "Une simple fête",
      "Un mariage religieux",
      "Un contrat commercial"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le mariage civil, célébré à la mairie par un officier d'état civil, est le seul mariage ayant une valeur juridique en France. Il crée des droits et devoirs entre époux. Le mariage religieux est facultatif et sans valeur légale."
  },
  {
    "id": "supp-52",
    "question": "Qu'est-ce que le PACS ?",
    "options": [
      "Un Pacte Civil de Solidarité, contrat entre deux personnes majeures pour organiser leur vie commune",
      "Une assurance",
      "Un parti politique",
      "Un diplôme"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le PACS (Pacte Civil de Solidarité) est un contrat conclu entre deux personnes majeures (de sexe différent ou de même sexe) pour organiser leur vie commune. Il offre un cadre juridique intermédiaire entre le concubinage et le mariage."
  },
  {
    "id": "supp-53",
    "question": "Le mariage forcé est-il autorisé en France ?",
    "options": [
      "Non, c'est strictement interdit et constitue un crime",
      "Oui, c'est autorisé",
      "Oui, avec l'accord des parents",
      "Cela dépend des régions"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le mariage forcé est strictement interdit en France. C'est un crime puni de 3 ans de prison et 45 000 € d'amende. Le consentement libre et éclairé des deux époux est une condition essentielle de validité du mariage."
  },
  {
    "id": "supp-54",
    "question": "À partir de quel âge peut-on se marier en France ?",
    "options": [
      "18 ans pour tous",
      "16 ans",
      "21 ans",
      "14 ans"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Depuis 2006, l'âge minimum pour se marier est de 18 ans pour tous (hommes et femmes), sans exception. C'était auparavant 18 ans pour les hommes et 15 ans pour les femmes avec autorisation."
  },
  {
    "id": "supp-55",
    "question": "Qu'est-ce que l'autorité parentale ?",
    "options": [
      "L'ensemble des droits et devoirs des parents pour protéger, éduquer et élever leur enfant",
      "Le droit de punir les enfants",
      "Une autorisation administrative",
      "Un pouvoir absolu sur les enfants"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "L'autorité parentale est l'ensemble des droits et devoirs des parents envers leur enfant mineur : le protéger, assurer sa sécurité, sa santé, son éducation et son développement. Elle est exercée conjointement par les deux parents."
  },
  {
    "id": "supp-56",
    "question": "Les violences conjugales sont-elles tolérées en France ?",
    "options": [
      "Non, elles sont strictement interdites et sévèrement punies",
      "Oui, dans le cadre privé",
      "Cela dépend des cas",
      "Seulement si c'est léger"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Les violences conjugales (physiques, psychologiques, sexuelles, économiques) sont strictement interdites et constituent des infractions pénales sévèrement punies. Numéro d'aide : 3919 (gratuit et anonyme)."
  },
  {
    "id": "supp-57",
    "question": "Qu'est-ce que le 3919 ?",
    "options": [
      "Le numéro national d'écoute et d'orientation pour les victimes de violences conjugales",
      "Le numéro des pompiers",
      "Un code postal",
      "Un numéro de téléphone fixe"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le 3919 est le numéro national d'écoute, d'information et d'orientation des femmes victimes de violences. Il est gratuit, anonyme, et accessible 24h/24 et 7j/7."
  },
  {
    "id": "supp-58",
    "question": "Qu'est-ce que la protection des données personnelles (RGPD) ?",
    "options": [
      "Un ensemble de règles protégeant les données personnelles des citoyens européens",
      "Une assurance",
      "Un anti-virus",
      "Un réseau social"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le RGPD (Règlement Général sur la Protection des Données) est une loi européenne qui protège les données personnelles des citoyens : consentement, droit d'accès, de rectification, d'effacement de ses données."
  },
  {
    "id": "supp-59",
    "question": "Qu'est-ce que la CNIL ?",
    "options": [
      "La Commission Nationale de l'Informatique et des Libertés, qui protège les données personnelles",
      "Une banque",
      "Un parti politique",
      "Une école"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "La CNIL est l'autorité française indépendante qui veille à la protection des données personnelles et à la vie privée dans le monde numérique. On peut la saisir en cas de problème avec ses données."
  },
  {
    "id": "supp-60",
    "question": "Est-ce légal de télécharger illégalement des films, musiques ou logiciels protégés ?",
    "options": [
      "Non, c'est une violation du droit d'auteur, sanctionnée par la loi",
      "Oui, c'est totalement autorisé",
      "Oui, si c'est pour un usage personnel",
      "Cela dépend du pays d'origine"
    ],
    "correctAnswer": 0,
    "theme": "vie-quotidienne",
    "source": "SUPP",
    "explanation": "Le téléchargement illégal (piratage) de contenus protégés par le droit d'auteur (films, musiques, logiciels, livres) est interdit et sanctionné. C'est une contrefaçon punissable d'amendes et de peines de prison."
  }
];
