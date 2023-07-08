import styled from "styled-components";
import CollectionItem from "../../components/collection-item/collection-item.component";

export const CollectionPageCont = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
    margin-bottom: 60px;

    @media screen and (max-width: 800px) {
        margin: 0 auto;
        margin-bottom: 60px;
    }
`;

export const ItemsCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-row-gap: 60px;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        grid-row-gap: 30px;
        margin: 0 auto;
    }
`;

export const CollectionItemCont = styled(CollectionItem)`
    margin-bottom: 60px;
`;