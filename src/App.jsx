
import {
  IonApp,
  IonContent as _IonContent,
  IonRouterOutlet as _IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import {
  AuthContextProvider, AuthWidget,
  logg,
  Scratchpad, SideMenu,
} from "ishlibjs"

import {
  C,
  S,
  useApi,
} from '$shared'

import StockWatches from './pages/StockWatches'

import Home from './pages/Home'

setupIonicReact()

const IonContent = styled(_IonContent)`
  align-items: center;
  display: flex;
`;

const IonRouterOutlet = styled(_IonRouterOutlet)`
  display: flex;
  justify-content: center;
  overflow: scroll;
`;

const W0 = styled.div`
  border: 2px solid cyan;

  max-width: 980px;
`;

const App = (props) => {
  // logg(props, 'App')

  const providerProps = {
    useApi,
  }

  // @TODO: specify types. path is a function!
  const listItems = [
    {
      label: 'Scratchpad',
      key: 'home',
      path: () => '/',
    }, {
      label: 'Stock Alerts',
      key: 's-a',
      path: () => '/iron_warbler/stock_alerts',
    },
  ];

  // @TODO: ionReactRouter, ionRouterOutlet, and maybe even IonPage? are fucking up my layout!

  return <IonApp >
    <ThemeProvider theme={S.lightTheme} >
      <AuthContextProvider {...providerProps} >
        <IonContent fullscreen >



            <IonReactRouter>

              <SideMenu listItems={listItems} variant={C.variants.floating} />

              <IonRouterOutlet fullscreen>
                <W0>

                  <Route exact path="/home"><Home /></Route>
                  <Route exact path="/"><Redirect to="/home" /></Route>
                  <Route exact path="/iron_warbler/stock_alerts"><StockWatches /></Route>

                </W0>
              </IonRouterOutlet>
            </IonReactRouter>

        </IonContent>
      </AuthContextProvider>
    </ThemeProvider>
  </IonApp>
}

export default App
