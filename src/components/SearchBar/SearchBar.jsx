import React from 'react';

import './SearchBar.css';
import icon from '../../assets/icons/find.svg';

const SearchBar = () => {
    return(
        <div className='search-bar flex'>
            <input type="text" name="search" id="_search" placeholder='Search material....'/>
            <img src={icon} alt="find icon" width={20} />
        </div>
    );
};

export default SearchBar;