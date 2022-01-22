import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

class ShopPage extends React.Component {
    // New feature, no need constructor, super() will be run in the bg.
    // state = {
    //     loading: true
    // };

    // unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
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
    }
    
    render() {
        const { match } = this.props;

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
};

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);