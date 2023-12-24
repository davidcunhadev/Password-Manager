import { InputTypes } from '../../InputTypes';
import './styles.css';

type CardInfosProps = {
  card: InputTypes
  handleDeletCard: (ID: number) => void
  isShowingPass: boolean
};

export function CardInfos({ card, handleDeletCard, isShowingPass }: CardInfosProps) {
  const { nomeDoServico, Login, Senha, URL, ID } = card;
  return (
    <div key={ ID } className="card">
      <div className="nav-card">
        <img src="./locker-img.svg" alt="lockerIMG" />
        <a href={ URL } target="_blank" rel="noreferrer">
          {nomeDoServico}
          <img src="./link-img.svg" alt="" />
        </a>
      </div>
      <p className="infos">
        Login
        <span>{Login}</span>
      </p>
      <p className="infos">
        Senha
        {isShowingPass ? <span>******</span> : <span>{Senha}</span>}
      </p>
      <button
        onClick={ () => handleDeletCard(ID) }
        data-testid="remove-btn"
        className="button"
      >
        <img src="./trash-img.svg" alt="trashImage" />
      </button>
    </div>
  );
}
