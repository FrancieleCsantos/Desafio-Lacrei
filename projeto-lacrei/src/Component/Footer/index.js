import './styles.css'
import face from '../../assets/FacebookLogo.svg'
import insta from '../../assets/InstagramLogo.svg'
import Linkd from '../../assets/LinkedinLogo.svg'


function Footer() {
    return (
        <>
            <div className='Line'></div>
            <footer>

                <div className='footer-navigation'>
                    <h2>Home</h2>
                    <h2>Pessoa Usuária</h2>
                    <h2>Profissional</h2>
                </div>

                <div className='media-navigation'>
                    <img src={face} alt='face' />
                    <img src={insta} alt='insta' />
                    <img src={Linkd} alt='linkedin' />
                </div>
                <span>Desafio Front-end Lacrei</span>
            </footer>
        </>
    )
}

export default Footer;