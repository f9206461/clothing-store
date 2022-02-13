import React from "react";
import { shallow } from 'enzyme';
import CartDropdown from "./cart-dropdown.component";

// Because we are using redux
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { selectCartItems } from "../../redux/cart/cart.selectors";

/*
What we need to test:
1. Render the component
2. Call history.push when the CartDropdown button is clicked
3. The number of rendered CartItem should match the length the CartItems props
4. Render EmptyMessageContainer when the cart is empty
*/

describe('cart-dropdown', () => {
    let wrapper;
    let mockProps;
    const mockCartItems = [
        { id: 1, name: 't-shirt' }, 
        { id: 2, name: 'shoes' }, 
        { id: 3, name: 'chinos' }
    ];

    beforeEach(() => {
        const mockStore = configureStore();
        mockProps = {
            cartItems: mockCartItems
        };
        const store = mockStore(mockProps);
        wrapper = shallow(
            <Provider store={store}>
                <CartDropdown />  
            </Provider>
        );
    });
    
    it('should render cart-dropdown', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
