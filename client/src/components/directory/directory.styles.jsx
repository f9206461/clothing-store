import styled from "styled-components";

export const DirectoryMenuCont = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
    margin-bottom: 60px;

    @media screen and (max-width: 800px) {
        font-size: 30px;
        margin-bottom: 30px;
    }
`;