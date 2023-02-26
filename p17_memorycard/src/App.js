import './App.css';
import Header from './components/header';
import Footer from "./components/footer"
import Playground from './components/playground/playground';

function App() {
  return (
    <div className="App">
      <Header />
      <Playground />
      <Footer />
    </div>
  );
}

export default App;
