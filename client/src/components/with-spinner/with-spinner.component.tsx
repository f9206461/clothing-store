import React from "react";

import Spinner from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent: () => JSX.Element) => ({ isLoading, ...otherProps}: any) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;