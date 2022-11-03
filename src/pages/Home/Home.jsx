import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardRecipe from '../../components/CardRecipe/CardRecipe';
import Item from '../../components/Item/Item';
import TabBar from '../../components/TabBar/TabBar';

import './Home.css';

const Home = () => {
    return (
        <main className='home flex'>
            <Navbar />
            <header className='home-header flex'>
                <h2>Hi, Uqie !</h2>
                <p>what food do you want to cook?</p>
                <SearchBar />
            </header>
            <section className="recent-recipes flex">
                <h3>Recent recipes</h3>
                <CardRecipe />
            </section>
            <section className="recomm-recipes flex">
                <div className="recomm-header flex">
                    <h3>Recommended</h3>
                    <p className="show">Show all</p>
                </div>
                <div className="container flex">
                    <Item />
                </div>
            </section>
            <TabBar />
        </main>
    );
}

export default Home;