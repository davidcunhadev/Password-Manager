import { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Title } from './components/Header/Header';
import { RegisterButton } from './components/RegisterButton/RegisterButton';

function App() {
  const [IsRegisterNewPasswordVisible, setIsRegisterNewPasswordVisible] = useState(false);

  const handleShowForm = () => {
    setIsRegisterNewPasswordVisible(!IsRegisterNewPasswordVisible);
  };

  return (
    <div className="container">

      <Title />
      {IsRegisterNewPasswordVisible
        ? <Form changeState={ handleShowForm } />
        : <RegisterButton changeState={ handleShowForm } />}

      <hr />
    </div>
  );
}

export default App;
