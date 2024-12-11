import styled from "@emotion/styled";
import { FC } from "react";

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
  width: 250px;
  background-color: rgba(255, 247, 144, 0.46);
  margin-right: 16px;
  border: 2px solid black;
  padding: 24px 24px 4px 24px !important;
  justify-content: space-between;
  align-items: center;
`;

const RemoveBtn = styled.div`
  &:hover {
  color: red;
  cursor: pointer;
  }
`

const Vessel:FC<Props> = ({
  vesselName, 
  capacity, 
  values, 
  remainingSpace, 
  removeVessel
}) => {

  return (
    <div style={{marginTop: '24px'}}>
    <StyledVessel>
      <table>
        <tbody style={{textAlign: 'left'}}>
          <tr style={{paddingBottom: '16px'}}>
            <th>Name:</th>
            <th>{vesselName}</th>
          </tr>
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
      <RemoveBtn onClick={removeVessel}>
        Remove
      </RemoveBtn>
    </StyledVessel>
    </div>
  )
}

export default Vessel;
