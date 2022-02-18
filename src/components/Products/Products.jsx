import React from "react";
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'


const products = [
    { id: 1, name: 'Shoes', description: 'Baby shoes', price: '$5', image: 'https://i5.walmartimages.com/asr/379f4418-81cb-4e59-a2d8-c8994aad44a3.ec38dda51e5340ef84e7b08bb44f09c4.jpeg'},
    { id: 2, name: 'Jersey', description: 'Baby jersey', price: '$10', image: 'https://m.media-amazon.com/images/S/aplus-media/sc/2b809147-177c-43b9-8643-71e08d7725d3.__CR0,0,970,600_PT0_SX970_V1___.jpg'}
]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>

    )
}

export default Products