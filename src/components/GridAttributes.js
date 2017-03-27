import React, { Component } from 'react';
import './GridAttributes.css';
import {Grid, Row, Col, Panel,Form} from 'react-bootstrap';
import Attribute from "./Attribute.js"
class GridAttributes extends Component {
    capitilize(string) {
        const words = string.split("_");
        const capWords = words.map((word) => {
            const firstLetter = word[0].toUpperCase();
            const tailWord = word.substring(1);
            return firstLetter + tailWord;
        });
        return capWords.join(" ");
    }
    render_col(row_index, col_index, attrs) {
        var index = row_index*this.props.cols + col_index ;
        const keys = Object.keys(attrs);
        if (index > keys.length-1) return
        return (
            <Attribute key={index} name={this.capitilize(keys[index])} value={attrs[keys[index]]} />
        )
    }
    render_row(row_index, cols, attrs) {
        return (
            (new Array(cols).fill(0)).map((col, index) =>(<Col key={index} sm={Math.floor(12/this.props.cols)}>{this.render_col(row_index, index, attrs)}</Col>))
        );
    }
    render_grid(rows, cols, attrs) {
        return (
            (new Array(rows).fill(0)).map((row, index) => (<Row key={index}>{this.render_row(index, cols, attrs)}</Row>))
        );
    }
    render() {
        return (
            <Panel header={this.props.title || "no title"}>
              <Form id="main_attrs" inline>
                <Grid fluid={true}>
                    {this.render_grid(this.props.rows, this.props.cols, this.props.attrs)}
                </Grid>
              </Form>
            </Panel>
        );
    }
}

export default GridAttributes;