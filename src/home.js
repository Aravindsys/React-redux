import React from 'react';
import { connect } from 'react-redux'; 
import Role from './roleComponent';

const mapStateToProps = state => {
    return {
        name: state.name.name,
        role: state.role.role
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeName: (name) => dispatch({type: "Name Change",payload:{name}}),
        changeRole: (role) => dispatch({type: "Role Change",payload:{role}})
    }
}


class Home extends React.Component {
   
    constructor(props){
        super(props);
       
    }
  

    render(){
        return(
              <div>
                  Name: <span>{this.props.name}</span>
                  Role: <span>{this.props.role}</span>
                
                  <Role data={this.props.name} />
               
                 
                  <button onClick={() => this.props.changeName("Aravind")}>Change Name to Aravind</button>
                  <button onClick={() => this.props.changeRole("Manager")}>Change Role</button>
                 
              
               </div>
        );
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);