import './footer.css';
import android from '../../images/android.svg';
import ios from '../../images/ios.svg';

export const Footer = () => (
    <div className="footer-content">
            <a href='!#' className='footer-link footer-content-link'>
                Смотреть отзывы
            </a>
            <div className='footer-content-box'>
                <div className='footer-content-description'>
                    <a href='!#' className='footer-link footer-description-link'>
                        Скачать на телефон
                    </a>
                    <p className='footer-text'>Доступно в PRO-тарифе</p>
                </div>
                <div className='footer-buttons-links'>
                    <button className='footer-btn'>
                        <img src={android} alt='android' />
                        <span className='name-btn'>Android&nbsp;OS</span>
                    </button>
                    <button className='footer-btn'>
                        <img src={ios} alt='ios' />
                        <span className='name-btn'>Apple&nbsp;iOS</span>
                    </button>
                </div>
            </div>
        </div>
);
