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

  const [markCheckPass, setMarkCheckPass] = useState(false);

  const handleCheckPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarkCheckPass(event.target.checked);
  };

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

  const handleDeletCard = (ID: number) => {
    const filterCard = getCardInfos.filter((card) => card.ID !== ID);
    setGetCardInfos(filterCard);
  };

  return (
    <div className="container">

      <Header />

      <main>
        {IsRegisterNewPasswordVisible
          ? <Form handleSubmit={ handleCardInfos } changeState={ handleShowForm } />
          : <RegisterButton changeState={ handleShowForm } />}

        <hr />

        {getCardInfos.length === 0 ? (
          <div>
            <p className="initialPText">Não há nenhuma senha cadastrada...</p>

            <div className="locker-container">
              <img className="lockerIMG" src="./locker-img.svg" alt="lockerIMG" />
            </div>
          </div>)
          : (
            <div className="cardList-container">
              <label htmlFor="checkboxPass">
                Esconder senhas
                <input
                  onChange={ handleCheckPass }
                  type="checkbox"
                  name="checkboxPass"
                  id="checkboxPass"
                />
              </label>
              <div className="cards-subContainer">
                {getCardInfos.map((card) => (<CardInfos
                  isShowingPass={ markCheckPass }
                  handleDeletCard={ handleDeletCard }
                  key={ card.ID }
                  card={ card }
                />))}
              </div>
            </div>)}
      </main>
    </div>
  );
}

export default App;
