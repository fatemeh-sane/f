import Icon from "./components/Icon";

import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { SiInstagram } from 'react-icons/si'

import "./App.css";

function App() {

  return (
    <div>
      <ul>
        <Icon icon={<FaWhatsapp />} />

        <Icon icon={<GrTwitter />} />

        <Icon icon={<SiInstagram />} />

        <Icon icon={<FaLinkedinIn />} />
      </ul>
    </div>
  );
}

export default App;
