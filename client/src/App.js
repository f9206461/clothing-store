import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { GlobalStyle } from "./global.styles";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch(); // give access to actions in redux store.

  // React Hooks
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); // So that it only fires once, just like componentDidMount().

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/signin"
              element={
                currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
// Switch will only renders the first occurence of the path.

export default App;
