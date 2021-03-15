import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext from "./context/CartContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import DataBaseContext from "./context/DataBaseContextProvider";
import CartContainer from "./containers/CartContainer";
import ItemInWidgetContainer from "./containers/ItemInWidgetContainer";
  
function App() {
  return (
    <BrowserRouter>
      <DataBaseContext>
      <UserContextProvider>
        <CartContext>
          <NavBar />
          <ItemInWidgetContainer/>
          <Switch>
            <Route exact path="/" children={<ItemListContainer />} />
            <Route exact path="/category"/>
            <Route
              exact
              path="/category/:id"
              children={<ItemDetailContainer />}
            />
            <Route exact path="/item/:id" children={<ItemDetailContainer />} />
            <Route exact path="/cart" children={<CartContainer />} />
            <Route path="*" children={<div>404</div>} />
          </Switch>
        </CartContext>
        </UserContextProvider>
      </DataBaseContext>
    </BrowserRouter>
  );
}
export default App;
