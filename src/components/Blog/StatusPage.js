import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

function ProductPage(props) {
    const [post, setPost] = useState({ id:"", name:"", subHeader: "" });
    useEffect(()=>{
        for(let i=0; i<props.products.length; i++){
            if(props.products[i].id !== undefined){
                if(props.match.params.id === props.products[i].id){
                    setPost({
                        id:props.products[i].id,
                        name:props.products[i].name,
                        subHeader: props.products[i].subHeader
                    })
                }
            }
        }
    },[]);
    return (
        <div className="item" key={post.id}>
            <h1>{post.name}</h1>
            <h3>{post.subHeader}</h3>
            <button>
                <Link to={"/blog"}>
                    Return to Blog
                </Link>
            </button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(ProductPage);
