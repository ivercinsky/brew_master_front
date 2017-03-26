import React, { Component } from 'react';
import {ControlLabel, FormGroup, FormControl} from 'react-bootstrap';

class Attribute extends Component {
    render() {
        return (<FormGroup bsSize="sm">
            <ControlLabel>{this.props.name}</ControlLabel>
            {' '}
            <FormControl type="text" value={this.props.value} onChange={() => console.log("change")}/>
        </FormGroup>    
        );
    }

}

export default Attribute;