import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";

interface Props {
  vesselName: string;
  capacity: number;
  newValue?: number;
}

const StyledVessel = styled.div`
  height: 200px;
  width: 200px;
  background-color: rgba(255, 247, 144, 0.46);
  border: 2px solid black;
  padding: 8px !important;
`;

const Vessel:FC<Props> = ({vesselName, capacity, newValue}) => {
  const [values, setValues] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (newValue) {
      setValues((prev) => [...prev, newValue]);
    }
  }, [newValue])

  useEffect(() => {
    if (values) {
      setTotal(values.reduce((acc, curr) => acc + curr, 0));
    }
  }, [values])

  return (
    <div style={{marginTop: '24px'}}>
    <StyledVessel>
      <h3>{vesselName}</h3>
      <p>Capacity: {capacity}</p>
      <p>Values: {values.join(', ')}</p>
      <p>Total: {total}</p>
    </StyledVessel>
    </div>
  )
}

export default Vessel;
