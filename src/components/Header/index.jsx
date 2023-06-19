import Logo from '../../assets/logo.png';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <h1>Header</h1>
      <img src={Logo} style={{ width: 450 }} alt="logo-dev-movies" />
    </Container>
  );
}

export default Header;
