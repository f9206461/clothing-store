import styled from "styled-components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

export const CheckoutPageCont = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const CheckoutHeaderCont = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        width: 22%;
        
        &:last-child {
            width: 12%;
        }
    }
`;

export const TotalCont = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media screen and (max-width: 800px) {
        font-size: 28px;
    }
`;

export const StripeCheckoutBtnCont = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const TestWarningCont = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 24px;
    color: red;

    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`;