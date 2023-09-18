import button from '@/assets/scss/common/button.module.scss'

const Button = ({ name, color, onClick }) => { 
    return (
        <div className={button.button}>
            <button onClick={onClick} className={color && button[`bg-${color}`]}>{name}</button>
        </div>
    );
};

export default Button;