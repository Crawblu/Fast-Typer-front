import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import Home from './Home';
import About from './about';
import './app.css';
import FrFlag from './ressources/FranceFlag.png';
import EnFlag from './ressources/EnglishFlag.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 2,
  },
  language: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography noWrap variant="h6" className={classes.title}>Fast Typer</Typography>
              <div className={classes.menu}>
                <Grid container xs={12} spacing={10} justify="center">
                  <Grid item>
                    <Button variant="h8" className={classes.title} color="primary" to="/" component={Link}>
                      <Typography>
                        {t('Header.Home')}
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="h8" className={classes.title} to="/about" component={Link}>
                      <Typography>
                        {t('Header.About')}
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="h8" className={classes.title} to="/profil" component={Link}>
                      <Typography>
                        {t('Profil')}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.language}>
                <Grid container xs={12} spacing={2} justify="flex-end">
                  <Grid item>
                    <Button type="button" onClick={() => changeLanguage('fr')}>
                      <img className="languageButton" src={FrFlag} alt="FR" />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button type="button" onClick={() => changeLanguage('en')}>
                      <img className="languageButton" src={EnFlag} alt="EN" />
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div id="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profil">
              <ProfilPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function ProfilPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('Profil')}</h2>
    </div>
  );
}

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

/* <Router>
<div>
  <ul>
    <li>
      <Link to="/">{t('Home')}</Link>
    </li>
    <li>
      <Link to="/about">{t('About')}</Link>
    </li>
  </ul>
</div>

<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route>
    <About />
  </Route>
</Switch>
</Router> */
