import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom'

import Home from '../pages/Home'
import ElectricalCabling from '../pages/Divisions/electricalCabling'
import AutomationControl from '../pages/Divisions/automationControl'
import Channelling from '../pages/Divisions/channelling'
import Illumination from '../pages/Divisions/illumination'
import Tools from '../pages/Divisions/tools'
import StructuredCable from '../pages/Divisions/structuredCable'
import DataCenter from '../pages/Divisions/dataCenter'
import RacksCabinets from '../pages/Divisions/racksCabinets'
import MeasuringEquipment from '../pages/Divisions/measuringEquipment'
import EthernetIndustrial from '../pages/Divisions/ethernetIndustrial'
import Promotions from '../pages/Promotions'
import PromotionRegister from '../pages/Promotions/PromotionRegister'
import Wiki from '../pages/Wiki'
import WikiDetails from '../pages/Wiki/WikiDetails'
import Register from '../pages/Register'

import JobPool from '../pages/JobPool'
import Contact from '../pages/Contact'
import Encabezado from '../pages/Encabezado'
import Customers from '../pages/Customers'
import Tests from '../pages/Tests'
import Privacy from '../pages/Privacy'
import Unsubscribe from '../pages/Unsubscribe'

import Shop from '../pages/Shop'
import ShopProduct from '../pages/Shop/Product'

import Construction from '../pages/Construction'
import NotFound from '../pages/NotFound'
import Layout from '../layout'
import CreditRequest from '../pages/CreditRequest'
import Login from '../pages/Login'

function _ScrollToTop(props) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/divisions/electrical-cabling"
            component={ElectricalCabling}
          />
          <Route
            exact
            path="/divisions/automation-control"
            component={AutomationControl}
          />
          <Route exact path="/divisions/channelling" component={Channelling} />
          <Route
            exact
            path="/divisions/illumination"
            component={Illumination}
          />
          <Route exact path="/divisions/tools" component={Tools} />
          <Route
            exact
            path="/divisions/structured-cable"
            component={StructuredCable}
          />
          <Route exact path="/divisions/data-center" component={DataCenter} />
          <Route
            exact
            path="/divisions/racks-cabinets"
            component={RacksCabinets}
          />
          <Route
            exact
            path="/divisions/measuring-equipment"
            component={MeasuringEquipment}
          />
          <Route
            exact
            path="/divisions/ethernet-industrial"
            component={EthernetIndustrial} 
          />
          <Route exact path="/promotions" component={Promotions} />
          <Route exact path="/promotions/:id" component={PromotionRegister} />
          <Route exact path="/wiki" component={Wiki} />
          <Route exact path="/wiki/:id" component={WikiDetails} />
          <Route exact path="/job-pool" component={JobPool} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/encabezado" component={Encabezado} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/tests/:id" component={Tests} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/construction" component={Construction} />
          <Route exact path="/credit" component={CreditRequest} />
          <Route exact path="/unsubscribe" component={Unsubscribe} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={ShopProduct} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ScrollToTop>
  </BrowserRouter>
)

export default App
