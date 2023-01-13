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
                    <a href='https://www.facebook.com/lacrei.saude/?paipv=0&eav=AfaXFPmK5x0DY4OpphoAo5VLmpt6muyuS59HvyHcvL6o8Jl9tR-TeVd7GosU0c2oLuE&_rdr'><img src={face} alt='face' /></a>
                    <a href='https://www.instagram.com/lacrei.saude/'><img src={insta} alt='insta' /> </a>
                    <a href="https://www.linkedin.com/company/lacrei/"><img src={Linkd} alt='linkedin' /></a>
                </div>
                <span>Desafio Front-end Lacrei</span>
            </footer>
        </>
    )
}

export default Footer;