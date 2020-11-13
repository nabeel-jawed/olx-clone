import React, { useState , useEffect } from 'react';
import Product from '../Containers/product';
import { db } from '../config/firebase'
import Header from '../components/Header';
import Categories from '../components/categories';
import Banner from '../components/Banner';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import BannerTwo from '../components/Banner2';
import LastBanner from '../components/BotttomBanner';



function Home(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        db.collection('products').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc =>({
                id:doc.id,
                product: doc.data()
            })));
        });
    }, []);

        return (
            <div>
                <Header />
                <Categories />
                <Banner />
                <BannerTwo />
              

<div className="app__products">
{
 
 products.map(({id, product}) => (
    
    <Link to="/clicked_item" ><Product 
        key={id}
        title={product.title}
        description={product.description}
        phone={product.phone}
        price={product.price} 
        url={product.url} /></Link>
    
    ))
    
}
</div>


                <LastBanner />
                <Footer />
            </div>
        )
    } 


export default Home;

