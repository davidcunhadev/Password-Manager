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
    <div>

      <Title />
      {IsRegisterNewPasswordVisible
        ? <Form changeState={ handleShowForm } />
        : <RegisterButton changeState={ handleShowForm } />}

    </div>
  );
}

export default App;
