import React from 'react';
import {connect} from 'react-redux';
import {ConfigureStore} from './configureStore';


class Role extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
             <div>Iam from Role Component: <span>{this.props.data}</span>
            
             </div>
        );
    }
}

export default Role;