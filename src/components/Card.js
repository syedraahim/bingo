import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

 const BingoTile = ({ id, key, onToggle, isSet , data}) => {
    return (
        <Card onClick={id !== 12 ? onToggle : null} className={`tile ${isSet ? "tile--set col card border-secondary" : "col card border-secondary"}`}>
          <CardBody>
            {id != 12 && <CardTitle>{id}</CardTitle>}
            <CardText>{data}</CardText>    
          </CardBody>
        </Card>
    );
  };
  
  export default BingoTile;
  