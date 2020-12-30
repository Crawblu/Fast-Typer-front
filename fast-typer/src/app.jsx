import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <button type="button" onClick={() => changeLanguage('fr')}>FR</button>
      <button type="button" onClick={() => changeLanguage('en')}>EN</button>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
      </Router>
    </div>
    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //     </ul>

  //     <hr />

  //     <Suspense fallback={null}>
  //       <LanguageSelector />
  //       <Switch>
  //         <Route exact path="/">
  //           <Home />
  //         </Route>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/dashboard">
  //           <Dashboard />
  //         </Route>
  //       </Switch>
  //     </Suspense>
  //   </div>
  // </Router>
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

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('About')}</h2>
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
