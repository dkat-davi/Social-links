import React, { useState, useEffect } from 'react';

import { Button } from '../../components/button/Button';
import { Icon } from '../../components/icon/Icon';

import './style.css'

function App() {
  const [user, setUser] = useState({login: '', avatar: '', html_url: ''});

  useEffect( () => {
    fetch("https://api.github.com/users/dkat-davi")
    .then(response => response.json())
    .then(data => {
      setUser({
        login: data.login,
        avatar: data.avatar_url,
        html_url: data.html_url
      })
    })
    .catch(error => console.error(error))
  }, [])

  return (

    <div className="container">
      <div className='profile-photo'>
        <img src={ user.avatar } alt="profile-photo" />
      </div>

      <a href={ user.html_url } target="_blank" className='user'>{ user.login }</a>

      <Button url="https://www.linkedin.com/in/dkat-davi/" text="Linkedin"/>

      <Button url={ user.html_url } text="GitHub"/>

      <Button url="https://www.instagram.com/dkatdavi/" text="Instagram"/>

      <div className='icons'>
        <Icon linkUrl="https://www.linkedin.com/in/dkat-davi/" imageUrl="src/assets/linkedin.svg"/>

        <Icon linkUrl={ user.html_url } imageUrl="src/assets/github.svg"/>

        <Icon linkUrl="https://www.instagram.com/dkatdavi/" imageUrl="src/assets/instagram.svg"/>
      </div>

    </div>

  )
}

export default App
