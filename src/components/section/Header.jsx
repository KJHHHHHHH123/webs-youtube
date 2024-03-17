import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 import

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

  function onSubmitLogin() {
    navigate('/loginpage'); // '/loginpage' 경로로 이동
  }

  function onSubmitRegister() {
    navigate('/registerpage1'); // '/loginpage' 경로로 이동
  }

  return (
    <header id='header' role='banner'>
      <h1 className='header_logo'>
        <a href="/">
          <em aria-hidden='true'></em>
          <span>MOTIV</span>
        </a>
      </h1>
      <div>
        <button onClick={onSubmitLogin}>로그인 창으로 이동</button>
      </div>
      <div>
        <button onClick={onSubmitRegister}>회원가입 창으로 이동</button>
      </div>
    </header>
  );
}

export default Header;
