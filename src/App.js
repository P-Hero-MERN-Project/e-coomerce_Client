import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from "./components/Home";
import Footer from "./components/Layoutes/Footer";
import Header from "./components/Layoutes/Header";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
