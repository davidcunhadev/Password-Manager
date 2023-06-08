import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { RegisterButton } from './components/RegisterButton';

function App() {
  const [IsRegisterNewPasswordVisible, setIsRegisterNewPasswordVisible] = useState(false);

  const handleShowForm = () => {
    setIsRegisterNewPasswordVisible(!IsRegisterNewPasswordVisible);
  };

  return (
    <div className="container">

      <Header />
      {IsRegisterNewPasswordVisible
        ? <Form changeState={ handleShowForm } />
        : <RegisterButton changeState={ handleShowForm } />}

      <hr />
    </div>
  );
}

export default App;
