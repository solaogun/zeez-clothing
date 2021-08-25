import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStart } from '../../redux/shop/shop.action'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import SHOP_DATA from './shop.data'
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import CollectionPageContainer from '../collection/collection.container'


// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component {

    componentDidMount() {

        const { fetchCollectionStart } = this.props
        fetchCollectionStart()
    }

    render() {
        const { match } = this.props
        // const { loading } = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    // render={props => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} 
                    component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`}
                    // render={props => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />)} 
                    component={CollectionPageContainer}
                />

            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     // isCollectionFetching: selectIsCollectionFetching,
//     isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(ShopPage)