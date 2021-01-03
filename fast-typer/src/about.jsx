import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

// const useStyles = makeStyles(() => ({

// }));

function About() {
  const { t } = useTranslation();
  //   const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          {t('About.Project')}
        </Typography>
        <Typography>
          {t('About.desc')}
        </Typography>
      </Container>
    </div>
  );
}

export default About;
