type CancelButtonFormProps = {
  changeState: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export function Form({ changeState }: CancelButtonFormProps) {
  return (
    <form>
      <fieldset>

        <label htmlFor="nomeDoServico">
          Nome do serviço
          <input type="text" id="nomeDoServico" />
        </label>

        <label htmlFor="Login">
          Login
          <input type="text" id="Login" />
        </label>

        <label htmlFor="Senha">
          Senha
          <input type="password" id="Senha" />
        </label>

        <label htmlFor="URL">
          URL
          <input type="text" id="URL" />
        </label>

      </fieldset>

      <fieldset>

        <button onClick={ changeState }>Cancelar</button>

        <button>Cadastrar</button>

      </fieldset>
    </form>
  );
}
