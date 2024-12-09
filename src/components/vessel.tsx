import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";

interface Props {
  vesselName: string;
  capacity: number;
  values: number[];
  remainingSpace?: number;
}

const StyledVessel = styled.div`
  height: 200px;
  width: 200px;
  background-color: rgba(255, 247, 144, 0.46);
  margin-right: 16px;
  border: 2px solid black;
  padding: 8px !important;
`;

const Vessel:FC<Props> = ({vesselName, capacity, values, remainingSpace}) => {

  return (
    <div style={{marginTop: '24px'}}>
    <StyledVessel>
      <h3>{vesselName}</h3>
      <p>Capacity: {capacity}</p>
      <p>Values: {values.join(', ')}</p>
      <p>Free space: {remainingSpace}</p>
    </StyledVessel>
    </div>
  )
}

export default Vessel;
