import './styles.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate()

    return (

        <header>
            <h1>Lacrei</h1>
            <div className='optionsheader'>
                <h2>Home</h2>
                <h2>Pessoa Usuária</h2>
                <h2>Profissional</h2>
            </div>
        </header>
    )
}


export default Header;