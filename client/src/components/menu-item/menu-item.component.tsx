import React from "react";

import {
  MenuItemContainer,
  BgImage,
  ContentCont,
  Title,
  Subtitle,
} from "./menu-item.styles";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

const MenuItem = ({ title, imageUrl, size, linkUrl }: Props) => {
  const navigate = useNavigate();
  return (
    <MenuItemContainer className={size} onClick={() => navigate(linkUrl)}>
      <BgImage
        className="bg-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BgImage>
      <ContentCont className="content">
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ContentCont>
    </MenuItemContainer>
  );
};

export default MenuItem;
