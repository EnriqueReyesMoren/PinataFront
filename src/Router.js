import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import {
/*   About,
  AssetDetails,
  Assets,
  BecomeBusiness,
  BecomeCreative,
  Business,
  BusinessDetail,
  Creative,
  Faq,
  Gallery,
  Index2,
  Index3,
  Login,
  Pricing,
  PromoDetail,
  Promos,
  SignUp, */
  Welcome
} from "./pages/"

//==============================Pantalles usuario 


const  VistaDetalleProducto= () => <h1>VistaDetalleProducto</h1>
const  PantalladePago= () => <h1>PantalladePago</h1>
const  VerColecciones= () => <h1>VerColecciones</h1>
const  VerDescargas= () => <h1>VerDescargas</h1>

//==============================Pantallas creativos 

const  RegistroCreativo= () => <h1>RegistroCreativo</h1>
const  PublicarAsset= () => <h1>PublicarAsset</h1>
const  VerAssets= () => <h1>VerAssets</h1>
const  VerGanancias= () => <h1>VerGanancias</h1>
const  VerPromos= () => <h1>VerPromos</h1>
const  VerDatosGanador= () => <h1>VerDatosGanador</h1>

//==============================Pantallas business 

const  RegistroRestaurante= () => <h1>RegistroRestaurante</h1>
const  PublicarPromo= () => <h1>PublicarPromo</h1>
const  SeleccionarGanadorPromo= () => <h1>SeleccionarGanadorPromo</h1>
const  VerDatosCreativo= () => <h1>VerDatosCreativo</h1>

//==============================Pantallas Admin

const ValidarAssets= () => <h1>ValidarAssets</h1>
const VerAssetValidos= () => <h1>VerAssetValidos</h1>
const VerAssetInvalidos= () => <h1>VerAssetInvalidos</h1>
const VerPromosActivas= () => <h1>VerPromosActivas</h1>
const VerCreativos= () => <h1>VerCreativos</h1>
const VerRestaurantes= () => <h1>VerRestaurantes</h1>
const VerOrdenes= () => <h1>VerOrdenes</h1>


//======================================Pantallas Generales 


const SingUp= () => <h1>SingUp</h1>
const LogIn= () => <h1>LogIn</h1>



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/assets" component={VistaDetalleProducto} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
