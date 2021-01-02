import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('Home')}</h2>
    </div>
  );
}

export default Home;
