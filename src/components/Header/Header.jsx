import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.heading}>Погода в Воронеже на 5 дней</h2>
        </header>
    );
};

export default Header;
