import { useState } from 'react';
import { regex } from '../../passwordTips';
import { CheckPasswordTips } from '../passwordTips';
import './styles.css';

type CancelButtonFormProps = {
  changeState: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const formValues = {
  nomeDoServico: '',
  Login: '',
  Senha: '',
  URL: '',
};

export function Form({ changeState }: CancelButtonFormProps) {
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

  return (

    <section className="main-container">

      <form>
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
