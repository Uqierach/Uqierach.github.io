import React from 'react';
import './Item.css';

import icon from '../../assets//icons/tomato.svg';
import profile from '../../assets//icons/profile.svg';

const items = [
    {
        imageIcon: icon,
        title: 'Karedok',
        price: '7.5',
        status: 'easy to make'
    },
];

const Item = () => {
    return (
        <>
            {items.map(item => {
                return (
                    <article className="item flex">
                        <div className="item-icon">
                            <img src={item.imageIcon} alt="icon" />
                        </div>
                        <div className="item-text flex">
                            <h5>{item.title}</h5>
                            <p>
                                <img src={profile} width={20} alt="profile" />
                                {item.price} K |
                                Easy to make
                            </p>
                        </div>
                    </article>)
            })}
        </>
    );
}

export default Item;