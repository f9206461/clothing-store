import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({ price }) => {
    // the price should be in CENTS!
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KGypKGUYHFoixnmnRJCGI0AqaybF80EVxt8k4PSEhiH2QeOaNlLw597I94qlFPD8w1VRU7CYWfyi8E4y6vzhNMA00ENedhF3j';

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