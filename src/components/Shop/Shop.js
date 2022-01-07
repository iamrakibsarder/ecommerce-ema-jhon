import React, { useEffect, useState } from 'react';
// import fakeData from "../../fakeData/products.JSON";
const Shop = () => {
    // console.log(fakeData);

    const [products, setProducts] = useState([])
    useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => setProducts(data.slice(0,10)))
    }, [])
    

    return (
        <div>
            <h1>Hello Shop is comming</h1>
            <ul>
            {
                products.map(product => <li>{product.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Shop;