import React, { Component } from 'react';
import ShopData from './ShopData';
import CollectionsPreview from '../../components/CollectionsPreview/CollectionsPreview';

class Shop extends Component {
  state = {
    collections: ShopData
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionsPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
