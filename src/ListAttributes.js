import React, { Component } from 'react';
import {Panel, FormControl, Table, Button} from 'react-bootstrap';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';


const SortableItem = SortableElement(({key, index, attr, collection}) =>
    <tr key={key}>{Object.keys(attr).map((key, index) => (
            <td key={index}><FormControl type="text" defaultValue={attr[key]}/></td> 
        ))}
    </tr>
);

const SortableList = SortableContainer(({attrs, collection}) => {
  return (
    <tbody>
      {attrs.map((attr, index) => (
        <SortableItem key={`item-${index}`} index={index} attr={attr} collection={collection} />
      ))}
    </tbody>
  );
});



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
                    <SortableList attrs={this.props.attrs} collection={this.props.title} onSortEnd={this.props.onSortEnd} />
                </Table>
                <Button onClick={this.props.handleClick} bsStyle="success">Add New {this.props.title}</Button>
            </Panel>
        );
    }
}

export default ListAttributes;