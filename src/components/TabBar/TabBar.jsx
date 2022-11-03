import React from 'react';

function importAll(r) {

    //// Use these line if you like to access arrays using an integer index.
    let images = [];
    r.keys().map((item, index) => { images.push(r(item)); });

    ////Use these line if you want to access each image using the file name.
    //let images = {};
    //r.keys().map((item, index) => { images[item.replace('./','')] = r(item); });

    return images;
}

//Param 1: The path or route to the directory you want to import.
//Param 2 (optional): Include directories?
//Param 3 (optional): Use a regular expression (regex) such as "/\.(png|jpe?g|svg)$/" to select only certain file types.
const images = importAll(require.context('../../assets/icons/tab-bar-icons', false, /\.(png|jpe?g|svg)$/));

  //The index can be up to the number of images in the folder - 1;

const TabBar = () => {
    return (
        <section clarrssName='tab-bar'>
            { images.map( img => {
                return (
                    <img width={20} src={img} alt='tab bar icon' />
                );
            })}
            {/* <img width={100} src={images[0]} alt="image-1" /> */}
            {/* <img width={100} src={images[1]} alt="image-1" /> */}
            {/* <img width={100} src={images[2]} alt="image-1" /> */}
        </section>
    );
};

export default TabBar;