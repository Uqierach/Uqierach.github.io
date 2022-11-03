import React from 'react';

import bookmark from '../../assets/icons/bookmark.svg';
import img1 from '../../assets/images/classic-thai-food.jpg';
import img2 from '../../assets/images/delicious-bakso-bowl.jpg';
import './CardRecipe.css';

const card = [
    {
        title: 'Tasty Serbian food',
        imageURL: img1
    },
    {
        title: 'Delicious bakso bowl',
        imageURL: img2
    },
];
    
const CardRecipe = () => {

    return (
        <section className='card-container flex'>
            {card.map(card => (
                <article className='card'>
                    <div className="card-text-container flex">
                        <div className="card-icon">
                            <img src={bookmark} alt="bookmark icon" />
                        </div>
                        <div className="card-text">
                            <h5>{card.title}</h5>
                            <p className="desc">Lorem ipsum, dolor sit amet  elit.</p>
                        </div>
                    </div>
                    <img src={card.imageURL} alt='food' />
                </article>
            ))}
        </section>
    );
}

export default CardRecipe;