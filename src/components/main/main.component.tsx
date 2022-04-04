import * as React from "react";
import Footer from "./footer.component";
import Navbar from "../navbar/navbar.component"

interface IMainProps {
  childComp?: React.ReactNode;
}

const Main: React.FC<IMainProps> = (props) => {
  const { childComp } = props;

  return (
    <div>
      
      <Navbar/>
      
      {childComp}

      <Footer />
    </div>
  );
};

export default Main;
