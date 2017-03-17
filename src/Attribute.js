import React, { Component } from 'react';
import {ControlLabel, FormGroup, FormControl} from 'react-bootstrap';

class Attribute extends Component {
    render() {
        return (<FormGroup bsSize="sm">
            <ControlLabel>{this.props.name}</ControlLabel>
            {' '}
            <FormControl type="text" defaultValue={this.props.value}/>
        </FormGroup>    
        );
    }

}

export default Attribute;