import button from '@/assets/scss/common/button.module.scss'

const Button = ({ name, color, onClick, type, size }) => { 
    return (
        <div className={`${button.button} ${size ? button.button_size : ''}`}>
            <button type={type} onClick={onClick} className={color && button[`bg-${color}`]}>{name}</button>
        </div>
    );
};

export default Button;