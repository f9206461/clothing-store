import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
        // const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionMap);
        //     updateCollections(collectionMap);
        //     this.setState({ loading: false });
        // })

        // Using promise chain style.
        // collectionRef.get().then(snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionMap);
        //     updateCollections(collectionMap);
        //     this.setState({ loading: false });
        // })

        // Using fetch
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-65f8d/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));
    }, [fetchCollectionsStart]); // So that it only fires once, just like componentDidMount().

    return (
        // The props passed in render are match, history, and location.
        <div className="shop-page">
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionOverviewContainer} 
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);