import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Home from './Home';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>Fast Typer</Typography>
            <button type="button" onClick={() => changeLanguage('fr')}>FR</button>
            <button type="button" onClick={() => changeLanguage('en')}>EN</button>
          </Toolbar>
        </AppBar>
      </div>
      <Home />
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('Home')}</h2>
    </div>
  );
}

// function About() {
//   const { t } = useTranslation();
//   return (
//     <div>
//       <h2>{t('About')}</h2>
//     </div>
//   );
// }

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
