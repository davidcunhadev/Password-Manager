import { InputTypes } from '../../InputTypes';
import './styles.css';

type CardInfosProps = {
  formData: InputTypes
};

export function CardInfos({ formData }: CardInfosProps) {
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
        <span>{Senha}</span>
      </p>
      <button className="button">
        <img src="./trash-img.svg" alt="" />
      </button>
    </div>
  );
}
