import styled, {css} from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

const Scrollable = css`
    overflow-y: scroll;
`;

const getScrollable = (props: CartItemsContainerProps) => {
    if (props.isScrollable){
        return Scrollable;
    }
}

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;
CartDropdownContainer.displayName = 'CartDropdownContainer';

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;
EmptyMessageContainer.displayName = 'EmptyMessageContainer';

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;
CartDropdownButton.displayName = 'CartDropdownButton';

export const CartItemsContainer = styled.div<CartItemsContainerProps>`
    height: 240px;
    display: flex;
    flex-direction: column;

    ${getScrollable};
`;
CartItemsContainer.displayName = 'CartItemsContainer';