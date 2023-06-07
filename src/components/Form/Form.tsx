import { useState } from 'react';

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

  function containsSpecialChars(str: string) {
    const specialChars = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return specialChars.test(str);
  }
  const checkInputFilled = (formData.nomeDoServico.length > 0
    && formData.Login.length > 0
    && formData.URL.length > 0
    && containsSpecialChars(formData.Senha));

  return (

    <section>

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
      <div className="validation-display">
        <p>Possuir 8 ou mais caracteres</p>
        <p>Possuir até 16 caracteres</p>
        <p>Possuir letras e números</p>
        <p>Possuir algum caractere especial</p>
      </div>
    </section>
  );
}
