import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate()
  return (
    <header className='bg-yellow-200'>
      <li className="flex"  onClick={() => navigate(`/`)}>
        AlloMovies
      </li>
      <nav className="w-full flex justify-end">
        <li className=""  onClick={() =>{console.log("redirection"); navigate(`/favoris`)}}>
            Favoris
        </li>
        <li className="px-3"  onClick={() => navigate(`/contact`)}>
            Contact
        </li>
      </nav>

    </header>
  );
};

export default Header;
