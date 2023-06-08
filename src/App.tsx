import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { RegisterButton } from './components/RegisterButton';
import { InputTypes } from './InputTypes';
import { CardInfos } from './components/CardInfos';

function App() {
  const [IsRegisterNewPasswordVisible, setIsRegisterNewPasswordVisible] = useState(false);

  const [getCardInfos, setGetCardInfos] = useState<InputTypes[]>([]);

  const handleShowForm = () => {
    setIsRegisterNewPasswordVisible(!IsRegisterNewPasswordVisible);
  };

  const handleCardInfos = (infosData: InputTypes) => {
    const ID = Date.now();
    const newCard = {
      ...infosData,
      ID,
    };
    setGetCardInfos([...getCardInfos, newCard]);
    setIsRegisterNewPasswordVisible(false);
  };

  return (
    <div className="container">

      <Header />
      {IsRegisterNewPasswordVisible
        ? <Form handleSubmit={ handleCardInfos } changeState={ handleShowForm } />
        : <RegisterButton changeState={ handleShowForm } />}

      <hr />

      <div className="cardList-container">
        {getCardInfos.length === 0 ? (
          <div>
            <p className="initialPText">Não há nenhuma senha cadastrada...</p>

            <div className="locker-container">
              <img className="lockerIMG" src="./locker-img.svg" alt="lockerIMG" />
            </div>
          </div>)
          : getCardInfos.map((card) => (<CardInfos key={ card.ID } formData={ card } />))}
      </div>
    </div>
  );
}

export default App;
