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

        <label htmlFor="Login">
          Login
          <input
            onChange={ handleInputs }
            type="text"
            id="Login"
            required
            value={ formData.Login }
          />
        </label>

        <label htmlFor="Senha">
          Senha
          <input
            onChange={ handleInputs }
            type="password"
            id="Senha"
            required
            value={ formData.Senha }
          />
        </label>

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

      <fieldset>

        <button onClick={ changeState }>Cancelar</button>

        <button disabled={ !checkInputFilled }>Cadastrar</button>

      </fieldset>
    </form>
  );
}
