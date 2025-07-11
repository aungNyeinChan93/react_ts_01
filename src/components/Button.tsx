import React from 'react';
import type { FC } from 'react';

type ButtonProps = {
    label?: string,
    onClick?: () => void,
    status?: boolean,
}

const Button: FC<ButtonProps> = ({ label = 'click', onClick, status = false }) => {
    return (
        <React.Fragment>
            <button type='button' onClick={onClick} disabled={status}>{label}</button>
        </React.Fragment>
    );
};

export default Button;