import React from "react";
import { shallow } from 'enzyme';
import { CollectionItem } from "./collection-item.component";

describe('collection-item', () => {
    const mockItem = {
        name: 'jacket', 
        price: 90, 
        imageUrl: 'https://www.testImage.com'
    };
    const addItem = jest.fn();
    const mockProps = { 
        item: mockItem, 
        addItem
    }
    const wrapper = shallow(<CollectionItem {...mockProps} />);

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call addItem when CustomButton is clicked', () => {
        wrapper.find('CustomButtonCont').simulate('click');
        expect(addItem).toHaveBeenCalled();
    });

    it('should render imageUrl as a prop on BackgroundImage', () => {
        expect(wrapper.find('ImgCont').prop('imageUrl')).toBe(mockItem.imageUrl);
    });
    
    it('should render name prop in NameContainer', () => {
        expect(wrapper.find('NameCont').text()).toBe(mockItem.name);
    });
    
    it('should render price prop in PriceContainer', () => {
        const price = parseInt(wrapper.find('PriceCont').text());
        expect(price).toBe(mockItem.price);
    });
})