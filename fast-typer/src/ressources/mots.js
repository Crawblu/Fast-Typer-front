function getWordsFr() {
  const mots = [
    'fusent',
    'bâfrerait',
    'rappropriées',
    'désannexerai',
    'margottâmes',
    'soupa',
    'cartonnages',
    'barbier',
    'timbaliers',
    'télégraphe',
    'atténuerons',
    'carbonaterait',
    'ragaillardirons',
    'ruilerons',
    'noverons',
    'entrismes',
    'foisonnassent',
    'préformations',
    'musses',
    'gêneuses',
    'romancerons',
    'glapissait',
  ];

  const alea = Math.floor(Math.random() * Math.floor(mots.length));

  return (mots[alea]);
}

export default getWordsFr();
