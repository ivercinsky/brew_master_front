import React from 'react';
import { Panel, FormControl, Table, Button } from 'react-bootstrap';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';


const SortableItem = SortableElement(({data, key, index, attr, collection, colName, handleChange}) => {
    return (
        <tr data={data} key={key}>
            {Object.keys(attr).map((key2, index) => {
                if (key2 === 'id') return null;
                return (<td key={colName + "_" + key2}><FormControl name={colName + "_" + key2 + "_" + attr.id} data={colName + "_" + key2 + "_" + attr.id} type="text" value={attr[key2]} onChange={(e) => handleChange(attr.id, key2, e.target.value)} /></td>);
            })}
        </tr>
    )
});

const SortableList = SortableContainer(({hops, collection, handleChange}) => {
    return (
        <tbody>
            {hops.map((attr, index) => {
                return (<SortableItem data={collection + "_" + attr.id} key={collection + "_" + attr.id} index={index} attr={attr} collection={collection} colName={collection} handleChange={handleChange} />);
            })}
        </tbody>
    );
});


const Hops = ({hops, title, handleClick, onSortEnd, handleChange}) => {
    return (
       <Panel header={`${title}s` || "no title"}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Extracto</th>
                        <th>Color</th>
                        <th>Cantidad</th>
                        <th>Uso</th>
                    </tr>
                </thead>
                <SortableList hops={hops} collection={title} onSortEnd={onSortEnd} handleChange={handleChange} />
            </Table>
            <Button onClick={() => {handleClick()}} bsStyle="success">Agregar Nueva {title}</Button>
        </Panel>
    )
}

export default Hops;