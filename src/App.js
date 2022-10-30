import { Button } from 'reactstrap';
import './App.css';
//import LinkButton from './components/LinkButton';
import Header from './components/ProfileHeader';
//import buttonName from './buttonNames';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Button></Button>
      <Header />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;


/*{buttonName.map(button => {
  return <LinkButton text={button.text} />
})}*/