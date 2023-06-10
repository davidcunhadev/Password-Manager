import { InputTypes } from '../../InputTypes';
import './styles.css';

type CardInfosProps = {
  formData: InputTypes
  handleDeletCard: (ID: number) => void
  isShowingPass: boolean
};

export function CardInfos({ formData, handleDeletCard, isShowingPass }: CardInfosProps) {
  const { nomeDoServico, Login, Senha, URL, ID } = formData;
  return (
    <div key={ ID } className="card-container">
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
        <span className={ isShowingPass ? 'show' : 'hide' }>{Senha}</span>
        <span className={ isShowingPass ? 'hide' : 'show' }>******</span>
      </p>
      <button
        onClick={ () => handleDeletCard(ID) }
        data-testid="remove-btn"
        className="button"
      >
        <img src="./trash-img.svg" alt="" />
      </button>
    </div>
  );
}
