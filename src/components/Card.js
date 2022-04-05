import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

 const BingoTile = ({ id, onToggle, isSet , data}) => {
    return (
        <Card onClick={id != 12 ? onToggle : null} className={`tile col card border-secondary ${isSet ? "tile--set " : ""}`}>
          <CardBody>
            {id != 12 && <CardTitle>{id}</CardTitle>}
            <CardText>{data}</CardText>    
          </CardBody>
        </Card>
    );
  };
  
  export default BingoTile;
  