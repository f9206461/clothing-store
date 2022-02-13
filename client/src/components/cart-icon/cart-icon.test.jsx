import React from "react";
import { shallow } from 'enzyme';
import { CartIcon } from "./cart-icon.component";

describe('cart-icon', () => {
    let wrapper;
    const mockToggleCartHidden = jest.fn();
    const mockItemCount = 15;

    beforeEach(() => {
        const mockProps = {
            toggleCartHidden: mockToggleCartHidden, 
            itemCount: mockItemCount
        }
        wrapper = shallow(<CartIcon { ...mockProps } />);
    });

    it ('should render CartIcon correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleCartHidden when icon is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });
    
    it('should render the itemCount as the text', () => {
        const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
        expect(itemCount).toBe(mockItemCount);
    });
});