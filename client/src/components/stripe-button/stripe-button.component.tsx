import React from "react";
import StripeCheckout, { type Token } from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }: { price: number }) => {
    // the price should be in CENTS!
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KGypKGUYHFoixnmnRJCGI0AqaybF80EVxt8k4PSEhiH2QeOaNlLw597I94qlFPD8w1VRU7CYWfyi8E4y6vzhNMA00ENedhF3j';

    const onToken = (token: Token) => {
        // console.log(token);
        // alert('Payment Successful');
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(resp => alert('Payment successful'))
        .catch (err => {
            console.log('Payment error: ', JSON.parse(err));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            )
        });
    }
    
    return (
        <StripeCheckout
            label="Pay Now"
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            // image="https://svgshare.com/i/CUz.svg"
            image=".\logo512.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;