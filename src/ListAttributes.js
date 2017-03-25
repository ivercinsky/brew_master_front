import React, { Component } from 'react';
import {Panel, FormControl, Table, Button} from 'react-bootstrap';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';


const SortableItem = SortableElement(({key, index, attr, collection}) =>
    <tr key={key}>
        {Object.keys(attr).map((key2, index) => {
            if (key2=='id') return;
            return (<td key={collection + "_" + key2}><FormControl type="text" defaultValue={attr[key2]}/></td> );
        })}
    </tr>
);

const SortableList = SortableContainer(({attrs, collection}) => {
  return (
    <tbody>
      {attrs.map((attr, index) => {
        return (<SortableItem key={collection + "_" + attr.id} index={index} attr={attr} collection={collection} />);
      })}
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
                                Object.keys(this.props.attrs[0]).map((key) => {
                                    if (key=='id') return;
                                    return (<th key={key}>{this.capitilize(key)}</th>);
                                })
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