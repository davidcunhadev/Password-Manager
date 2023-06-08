import './styles.css';

type RegisterButtonProps = {
  changeState: () => void
};

export function RegisterButton({ changeState }: RegisterButtonProps) {
  return (
    <div className="containerInitialBtn">
      <button onClick={ changeState }>Cadastrar nova senha</button>
    </div>
  );
}
