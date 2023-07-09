import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonContainerProps;

const CustomButton = ({ children, ...props }: Props) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;