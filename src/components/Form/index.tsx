import { useState } from 'react';
import { regex } from '../../passwordTips';
import { CheckPasswordTips } from '../passwordTips';
import './styles.css';
import { InputTypes } from '../../InputTypes';

type CancelButtonFormProps = {
  changeState: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleSubmit: (formData: InputTypes) => void
};

const formValues = {
  nomeDoServico: '',
  Login: '',
  Senha: '',
  URL: '',
  ID: 0,
};

export function Form({ changeState, handleSubmit }: CancelButtonFormProps) {
  const [formData, setformData] = useState(formValues);

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setformData({
      ...formData, [id]: value,
    });
  };

  function regexSpecialCharactPassword(str: string) {
    return regex.test(str);
  }

  const checkInputFilled = (formData.nomeDoServico.length > 0
    && formData.Login.length > 0
    && formData.URL.length > 0
    && regexSpecialCharactPassword(formData.Senha));

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setformData(formValues);
    handleSubmit(formData);
  };

  return (

    <section className="main-container">

      <form onSubmit={ submitForm }>
        <fieldset>
          <label htmlFor="nomeDoServico">
            Nome do serviço
            <input
              onChange={ handleInputs }
              type="text"
              id="nomeDoServico"
              value={ formData.nomeDoServico }
            />
          </label>
        </fieldset>

        <fieldset className="fieldsetLoginSenha">
          <label htmlFor="Login">
            Login *
            <input
              onChange={ handleInputs }
              type="text"
              id="Login"
              required
              value={ formData.Login }
            />
          </label>

          <label htmlFor="Senha">
            Senha *
            <input
              onChange={ handleInputs }
              type="password"
              id="Senha"
              required
              value={ formData.Senha }
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="URL">
            URL
            <input
              onChange={ handleInputs }
              type="text"
              id="URL"
              value={ formData.URL }
            />
          </label>
        </fieldset>

        <p>* Campos Obrigatórios</p>
        <fieldset className="fieldsetButtons">
          <button className="cancelButton" onClick={ changeState }>Cancelar</button>

          <button
            className="cadastrarButton"
            disabled={ !checkInputFilled }
          >
            Cadastrar

          </button>
        </fieldset>

      </form>

      <CheckPasswordTips formData={ formData } />

    </section>
  );
}
