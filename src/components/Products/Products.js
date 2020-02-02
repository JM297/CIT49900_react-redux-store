import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Products(props){
    let renderItems = props.products.map((p, idx)=>
        <div key={idx} className="item">
            <h2><Link to={`products/item/${p.id}`}>Item {p.id}: {p.name}</Link></h2>
        </div>
    );
    return(
        <div className="products">
            <h1>Products</h1>
            {renderItems}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(Products);