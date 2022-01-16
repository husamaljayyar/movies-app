import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MoviiesScreen";
import { Route, Switch } from "react-router";

function App() {
  return (
    <MainContainer>
      <Nav />
      <Switch>
        <Route path={"/"} exact={true} component={HomeScreen} />
        <Route path={"/movie/:id/:name"} exact={true} component={MovieScreen} />

      </Switch>
    </MainContainer>
  );
}

export default App;
