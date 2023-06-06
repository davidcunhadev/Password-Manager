type RegisterButtonProps = {
  changeState: () => void
};

export function RegisterButton({ changeState }: RegisterButtonProps) {
  return (
    <button onClick={ changeState }>Cadastrar nova senha</button>
  );
}
