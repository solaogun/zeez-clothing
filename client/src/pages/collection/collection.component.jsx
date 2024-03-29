import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector'
// import './collection.style.scss'
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.style'

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector(selectCollection(collectionId))
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default CollectionPage