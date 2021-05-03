import "./App.css";
import { Route } from "react-router-dom";
import Login from "./screen/login";
import Layout from "./component/layout";
import Index from "./screen";
import Users from "./screen/user/users";

function App() {
  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
      <Layout>
        <Route path="/" exact component={Index} />
        <Route path="/users" exact component={Users} />
      </Layout>
    </div>
  );
}

export default App;
