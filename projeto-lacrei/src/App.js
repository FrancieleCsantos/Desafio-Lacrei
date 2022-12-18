
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header'
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      {/* 
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people' element={<Personuser />} />
          <Route path='/professional' element={<Home />} />
        </Routes>
      </Router> */}

      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
