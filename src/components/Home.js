import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from './Layoutes/MetaData';
import { getProducts } from './../action/productAction';
import Product from './Product/Product';
import { Link } from 'react-router-dom';
import Loader from './Layoutes/Loader';
import { useAlert } from 'react-alert';

const Home = () => {

    const alert = useAlert()

    const dispatch = useDispatch()

    const { loading, products, error, productsCount } = useSelector(state => state.products)
    

    useEffect(() => {

        if(error){
            alert.success('success')
            alert.error(error)
        }

        dispatch(getProducts())

    }, [dispatch, alert, error])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Buy Best Products Online'} />

                    <h1 id="products_heading">Latest Products ({productsCount})</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))}
                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;