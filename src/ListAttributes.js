import React, { Component } from 'react';
import {Panel, FormControl, Table, Button} from 'react-bootstrap';
class ListAttributes extends Component {
    capitilize(string) {
        const words = string.split("_");
        const capWords = words.map((word) => {
            const firstLetter = word[0].toUpperCase();
            const tailWord = word.substring(1);
            return firstLetter + tailWord;
        });
        return capWords.join(" ");
    }
    render() {
        return (
            <Panel header={this.props.title || "no title"}>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            {
                                Object.keys(this.props.attrs[0]).map((key) => (
                                    <th key={key}>{this.capitilize(key)}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.attrs.map((attr, index) => (
                                <tr key={index}>{Object.keys(attr).map((key, index) => (
                                        <td key={index}><FormControl type="text" defaultValue={attr[key]}/></td> 
                                    ))}
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Button bsStyle="success">Add New {this.props.title}</Button>
            </Panel>
        );
    }
}

export default ListAttributes;