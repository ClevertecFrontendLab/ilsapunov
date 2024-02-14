import './homeCards.css';
import { HeartTwoTone, CalendarTwoTone, IdcardTwoTone } from '@ant-design/icons';


export const HomeCards = () => (
    <div className='cards-wrapper'>
                <div className="card-item">
                    <p className='card-text'>Расписать тренировки</p>
                    <div className='card-description'>
                        <div className='card-description-box'>
                            <HeartTwoTone twoToneColor={['#2f54eb', '#2f54eb']}/>
                            <span>Тренировки</span>
                        </div>
                    </div>
                </div>
                <div className="card-item">
                    <p className='card-text'>Назначить календарь</p>
                    <div className='card-description'>
                        <div className='card-description-box'>
                            <CalendarTwoTone twoToneColor={['#2f54eb', '#2f54eb']}/>
                            <span>Календарь</span>
                        </div>
                    </div>
                </div>
                <div className="card-item">
                    <p className='card-text'>Заполнить профиль</p>
                    <div className='card-description'>
                        <div className='card-description-box'>
                            <IdcardTwoTone twoToneColor={['#2f54eb', '#fff']} />
                            <span>Профиль</span>
                        </div>
                    </div>
                </div>
            </div>
);
