import { Button } from '../../components/button/Button';
import { Icon } from '../../components/icon/Icon';

import './style.css'

function App() {

  return (

    <div className="container">
      <div className='profile-photo'>
        <img src="https://github.com/dkat-davi.png" alt="profile-photo" />
      </div>

      <a href="#" className='user'>dkat-davi</a>

      <Button url="https://www.linkedin.com/in/dkat-davi/" text="Linkedin"/>

      <Button url="https://github.com/dkat-davi" text="GitHub"/>

      <Button url="https://www.instagram.com/dkatdavi/" text="Instagram"/>

      <div className='icons'>
        <Icon linkUrl="https://www.linkedin.com/in/dkat-davi/" imageUrl="src/assets/linkedin.svg"/>

        <Icon linkUrl="https://github.com/dkat-davi" imageUrl="src/assets/github.svg"/>

        <Icon linkUrl="https://www.instagram.com/dkatdavi/" imageUrl="src/assets/instagram.svg"/>
      </div>

    </div>

  )
}

export default App
