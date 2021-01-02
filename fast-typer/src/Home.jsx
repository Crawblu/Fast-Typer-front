import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { Grid } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

function Home() {
  // const useStyles = makeStyles(() => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   title: {
  //     flexGrow: 1,
  //   },
  // }));

  const { t } = useTranslation();
  return (
    <div>
      <Typography align="center" component="div">
        <Box fontSize="h4.fontSize">
          {t('Home.Bienvenue')}
        </Box>
        <Box fontSize="h6.fontSize">
          {t('Home.Explanation')}
        </Box>
      </Typography>
    </div>
  );
}

export default Home;
