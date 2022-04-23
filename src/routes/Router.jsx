import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "views/Home";
import Header from "components/header/header";
import Cart from "components/Cart";
import Footer from "components/footer/footer";
import PlusZone from "views/other/pluszone";
import LoginPage from "components/login/loginPage";
import Travel from "views/other/travel";
import MyProfile from "views/other/MyProfile";
import ProductDescription from "views/Products/ProductDescription";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plus" component={PlusZone} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/:productId" component={ProductDescription} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
