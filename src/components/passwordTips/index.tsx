import { regexLetterAndNumbs, regexOnlySpecialCharact } from '../../passwordTips';
import './styles.css';

type CheckPasswordTipsProps = {
  formData: {
    Senha: string
  }
};

export function CheckPasswordTips({ formData }: CheckPasswordTipsProps) {
  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const minLength = formData.Senha.length >= 8;

  const maxLength = formData.Senha.length > 0 && formData.Senha.length <= 16;

  const letterAndNums = formData.Senha.match(regexLetterAndNumbs);

  const specialChars = regexOnlySpecialCharact.test(formData.Senha);

  return (
    <section className="validation-display">
      <p className={ minLength ? valid : invalid }>Possuir 8 ou mais caracteres</p>
      <p className={ maxLength ? valid : invalid }>Possuir até 16 caracteres</p>
      <p className={ letterAndNums ? valid : invalid }>Possuir letras e números</p>
      <p className={ specialChars ? valid : invalid }>Possuir algum caractere especial</p>
    </section>
  );
}
