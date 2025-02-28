import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Worksheet4a from './pages/Worksheet_4a';
import Worksheet4b from './pages/Worksheet_4b';
import Worksheet4c from './pages/Worksheet_4c';
import Worksheet4d from './pages/Worksheet_4d';
import Worksheet4e from './pages/Worksheet_4e';
import Worksheet4f from './pages/Worksheet_4f';
import Worksheet4g from './pages/Worksheet_4g';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/demo">
          <Demo />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/worksheet_4a">
          <Worksheet4a />
        </Route>
        <Route exact path="/worksheet_4b">
          <Worksheet4b />
        </Route>
        <Route exact path="/worksheet_4c">
          <Worksheet4c />
        </Route>
        <Route exact path="/worksheet_4d">
          <Worksheet4d />
        </Route>
        <Route exact path="/worksheet_4e">
          <Worksheet4e />
        </Route>
        <Route exact path="/worksheet_4f">
          <Worksheet4f />
        </Route>
        <Route exact path="/worksheet_4g">
          <Worksheet4g />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
