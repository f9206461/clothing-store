import React from "react";
import { withRouter } from "react-router-dom";

import { MenuItemContainer, BgImage, ContentCont, Title, Subtitle } from "./menu-item.styles";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <MenuItemContainer 
            className={`${size}`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BgImage 
                className="bg-image" 
                style={{backgroundImage: `url(${imageUrl})`}}
            >
            </BgImage>
            <ContentCont className="content">
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </ContentCont>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);