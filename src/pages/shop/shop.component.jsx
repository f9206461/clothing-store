import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    // New feature, no need constructor, super() will be run in the bg.
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionMap);
        //     updateCollections(collectionMap);
        //     this.setState({ loading: false });
        // })

        // Using promise chain style.
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            // console.log(collectionMap);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        })

        // Using fetch
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-65f8d/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));
    }
    
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            // The props passed in render are match, history, and location.
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => 
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                    } 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => 
                        <CollectionPageWithSpinner isLoading={loading} {...props} />
                    } 
                />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);