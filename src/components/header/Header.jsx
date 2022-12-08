import React from "react";
import Button from '../button/Button'

const Header = () => {
    const tg = window.Telegram.WebApp;

const onClose = () => {
    tg.close()
}

    return(
        <div className='header'>
            <Button onClick={onClose}>Close</Button>
            <span className='username'>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header;