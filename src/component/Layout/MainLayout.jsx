import { Children } from "preact/compat";
import Header from "../HeaderAndHero/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
