import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import './collection-overview.style.scss'

const CollectionsOverview = ({ collections }) => {
    return (
        <div collections-overview>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)