import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton/FlatButton';

export const Rtable = () => (


<Table ref="tbl">

  <TableHeader>
     <TableRow>
        
        <TableHeaderColumn>Subject name</TableHeaderColumn> 
        <TableHeaderColumn>Marks</TableHeaderColumn>
        <TableHeaderColumn>Grade</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>English</TableRowColumn>
        <TableRowColumn><FlatButton label="Change" />
</TableRowColumn>
        <TableRowColumn>A+</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Physics</TableRowColumn>
        <TableRowColumn>75   <FlatButton label="Change" /></TableRowColumn>
        <TableRowColumn>A</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Chemistry</TableRowColumn>
        <TableRowColumn>86   <FlatButton label="Change" /></TableRowColumn>
        <TableRowColumn>A+</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Maths</TableRowColumn>
        <TableRowColumn>69   <FlatButton label="Change" /></TableRowColumn>
        <TableRowColumn>B+</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Computer Science</TableRowColumn>
        <TableRowColumn>100   <FlatButton label="Change" /></TableRowColumn>
        <TableRowColumn>O</TableRowColumn>
      </TableRow>
    </TableBody>
    </Table>
);