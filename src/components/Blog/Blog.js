import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

function Blog(props){

    let renderBlog = props.products.map((p, idx)=>
        <div className="item" key={idx}>
            <h2><Link to={`blog/status/${p.id}`}>{p.name}</Link></h2>
        </div>
    );
    return(
        <div className="blog">
            <h1>Blog</h1>
            <div className="list">
                {renderBlog}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(Blog);