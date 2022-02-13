import React from "react";
import { shallow } from 'enzyme';
import CartItem from "./cart-item.component";

describe('cart-item', () => {
    const mockItem = {
        imageUrl: 'https://www.testImage.com', 
        price: 90, 
        name: 'jackets', 
        quantity: 2
    };
    const wrapper = shallow(<CartItem item={mockItem} />);

    it('should render CartItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});