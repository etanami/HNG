import './App.css';
import Header from './components/ProfileHeader';
import Socials from './components/Socials';
import Footer from './components/Footer';
import LinkSection from './components/LinkSection';

function App() {
  return (
    <div className="App">
      <Header />
      <LinkSection />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
