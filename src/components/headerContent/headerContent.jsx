import './headerContent.css';


import { SettingOutlined } from '@ant-design/icons';

export const HeaderContent = () => (
    <header className="header">
        <div className="breadcrumbs">Главная</div>
        <div className="title-wrapper">
            <h1 className="title">
                Приветствуем тебя в CleverFit — приложении,<br /> которое поможет тебе добиться своей
                мечты!
            </h1>
            
            <div className="settings">
                <SettingOutlined className='settings-icon' />
                <span className="icon-title">Настройки</span>
            </div>
        </div>
    </header>
);
