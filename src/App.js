import './App.css';
import Header from './components/ProfileHeader';
import Socials from './components/Socials';
import Footer from './components/Footer';
import LinkSection from './components/LinkButton';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Button></Button>
      <Header />
      <LinkSection />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
