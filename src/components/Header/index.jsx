import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <img src={Logo} style={{ width: 450 }} alt="logo-dev-movies" />
    </div>
  );
}

export default Header;
