import * as React from "react";
import { hot } from "react-hot-loader/root";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/login.component";
import { Routes, Route ,Navigate} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.component";
import Main from "./components/main/main.component";

interface Props {
  name: string;
  

}



class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    


  function PrivateRoute({children}:{children:any}) {
    const auth = localStorage.getItem("userName");
    let condition = false
    if(auth){
      condition = true
    }

    return condition ? children : <Navigate to="/" />;
  }

    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={<PrivateRoute><Main childComp={<Dashboard />} /></PrivateRoute>}
          />
        </Routes>
      </>
    );
  }
}

export default hot(App);
