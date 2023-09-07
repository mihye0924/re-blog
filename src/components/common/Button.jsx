import button from '@/assets/scss/common/button.module.scss'

const Button = ({ name, color }) => { 
    return (
        <div className={button.button}>
            <button className={color && button[`bg-${color}`]}>{name}</button>
        </div>
    );
};

export default Button;