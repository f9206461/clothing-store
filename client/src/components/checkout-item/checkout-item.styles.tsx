import styled from "styled-components";

export const CheckoutItemCont = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;
CheckoutItemCont.displayName = 'CheckoutItemCont';

export const ImgCont = styled.div`
    width: 23%;
    padding-right: 15px;
`;
ImgCont.displayName = 'ImgCont';

export const ImgBox = styled.img`
    width: 100%;
    height: 100%;
`;
ImgBox.displayName = 'ImgBox';

export const TextCont = styled.span`
    width: 23%;
`;
TextCont.displayName = 'TextCont';

export const QtyCont = styled.span`
    display: flex;
    width: 23%;
`;
QtyCont.displayName = 'QtyCont';

export const ArrowCont = styled.div`
    cursor: pointer;
`;
ArrowCont.displayName = 'ArrowCont';

export const ValueCont = styled.span`
    margin: 0 10px;
`;
ValueCont.displayName = 'ValueCont';

export const RemoveBtnCont = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
RemoveBtnCont.displayName = 'RemoveBtnCont';