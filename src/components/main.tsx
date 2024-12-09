"use client";

import styled from "@emotion/styled";
import { Button } from "antd";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";
import Vessel from "./vessel";

const StyledInput = styled(Input)`
  margin-top: 8px;
`;

const MainContainer = styled.div`
margin-top: 24px;
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

interface VesselI {
  capacity: number;
  remainingSpace: number;
  name: string;
  values: number[];
}
const MainComp = () => {
  const [numberOfBlocks, setNumberofBlocks] = useState<number>();
  const [val, setVal] = useState<number>();
  const [vessels, setVessels] = useState<VesselI[]>([]);

  return (
    <Container>
      <div>
        <h1>Simulate First Fit Algorithm</h1>
        {!numberOfBlocks && (
          <div>
            <h4 style={{ marginTop: "8px" }}>
              To proceed please enter the number of blocks.
            </h4>
            <StyledInput
              type="number"
              placeholder="Enter the number of blocks"
              value={numberOfBlocks}
              onBlur={(e) => setNumberofBlocks(Number(e.target.value))}
            />
          </div>
        )}
        <MainContainer>
          {numberOfBlocks && (
            <div>
              <StyledInput placeholder="Enter a value" id="currValue" value={val} onChange={(e) => setVal(Number(e.target.value))}/>
              <StyledButton
                type="primary"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Add to a Vessel
              </StyledButton>
              {
                vessels.map((vessel, index) => (
                  <Vessel vesselName={`Vessel`} capacity={100} /> 
                ))
              }
            </div>
          )}
        </MainContainer>
      </div>
    </Container>
  );
};

export default MainComp;
