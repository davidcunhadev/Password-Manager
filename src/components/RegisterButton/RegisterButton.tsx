type RegisterButtonProps = {
  changeState: () => void
};

export function RegisterButton({ changeState }: RegisterButtonProps) {
  return (
    <div>
      <div className="containerInitialBtn">
        <button onClick={ changeState }>Cadastrar nova senha</button>
      </div>
      <p className="initialPText">Não há nenhuma senha cadastrada...</p>

      <div className="locker-container">
        <img className="lockerIMG" src="./locker.svg" alt="lockerIMG" />
      </div>
    </div>
  );
}
