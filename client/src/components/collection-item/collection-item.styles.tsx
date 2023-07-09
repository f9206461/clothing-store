import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemCont = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
          opacity: 0.8;
        }
        button {
          opacity: 0.85;
          display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;
        margin-bottom: 15px;

        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }
`;
CollectionItemCont.displayName = 'CollectionItemCont';

export const ImgCont = styled.div<ImgContProps>`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
ImgCont.displayName = 'ImgCont';

export const CollectionFooterCont = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;
CollectionFooterCont.displayName = 'CollectionFooterCont';

export const NameCont = styled.span`
    width: 85%;
    height: 140%;
    //margin-bottom: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;
NameCont.displayName = 'NameCont';

export const PriceCont = styled.span`
    width: 15%;
    text-align: right;
`;
PriceCont.displayName = 'PriceCont';

export const CustomButtonCont = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;
CustomButtonCont.displayName = 'CustomButtonCont';