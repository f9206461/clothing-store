import React from "react";
import { shallow } from 'enzyme';
import { CheckoutItem } from "./checkout-item.component";

describe('checkout-item', () => {
    const mockItem = {
        name: 'jacket', 
        price: 90, 
        quantity: 2, 
        imageUrl: 'https://www.testImage.com'
    };
    const clearItem = jest.fn();
    const addItem = jest.fn(); 
    const removeItem = jest.fn();
    const mockProps = {
        cartItem: mockItem, 
        clearItem, 
        addItem,  
        removeItem
    }
    const wrapper = shallow(<CheckoutItem {...mockProps} />);

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call removeItem when left arrow clicked', () => {
        wrapper.find('QtyCont').childAt(0).simulate('click');
        expect(removeItem).toHaveBeenCalled();
    });

    it('should call addItem when right arrow clicked', () => {
        wrapper.find('QtyCont').childAt(2).simulate('click');
        expect(addItem).toHaveBeenCalled();
    });

    it('should call clearItem when cross is clicked', () => {
        wrapper.find('RemoveBtnCont').simulate('click');
        expect(clearItem).toHaveBeenCalled();
    })
})