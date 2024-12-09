import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import  CloseIcon  from "../assets/redClose.svg";

interface Props {
  vesselName: string;
  capacity: number;
  values: number[];
  removeVessel: () => void;
  remainingSpace?: number;
}

const StyledVessel = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 200px;
  background-color: rgba(255, 247, 144, 0.46);
  margin-right: 16px;
  border: 2px solid black;
  padding: 24px !important;
`;

const Vessel:FC<Props> = ({vesselName, capacity, values, remainingSpace, removeVessel}) => {

  return (
    <div style={{marginTop: '24px'}}>
    <StyledVessel>
      <table>
        <tbody>
          <tr>
          <td>Capacity:</td>
          <td>{capacity}</td>
          </tr>
          <tr>
          <td>Values:</td>
          <td>{values.join(', ')}</td>
          </tr>
          <tr>
          <td>Free space:</td>
          <td>{remainingSpace}</td>
          </tr>
        </tbody>
      </table>
    </StyledVessel>
    </div>
  )
}

export default Vessel;
