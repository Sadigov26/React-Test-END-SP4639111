import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/Cards/ProductCard';
import axios from 'axios';
import styles from "./ProsSec.module.css";

const ProSec = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []); 

    const getProducts = () => { 
        axios.get('https://dummyjson.com/products/category/smartphones')
            .then(res => {
                setProducts(res.data.products);
            })
            .catch(error => {
                console.error('Ürünleri alma sırasında bir hata oluştu:', error);
            });
    };

    return (
        <div className={styles.sj}>
            {products.map(item => <ProductCard key={item.id} item={item} />)}
        </div>
    );
};


export default ProSec;
