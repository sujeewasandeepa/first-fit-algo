"use client";

import styled from "@emotion/styled";
import { Button, Form } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import Vessel from "./vessel";
import { useForm } from "antd/es/form/Form";
import { VesselI } from "@/types/vessel.interface";
import { firstFit } from "@/utils/firstFit";

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
`;


const MainComp = () => {
  const [val, setVal] = useState<number>();
  const [vessels, setVessels] = useState<VesselI[]>([]);

  const [form] = useForm();

  const handleAddVessel = (values: {vesselName: string, capacity: number}) => {
    const newVessel = {capacity: values.capacity, remainingSpace: values.capacity, name: values.vesselName, values: []};
    setVessels((prev) => [...prev, newVessel]);
  }


  const handleAddValue = (value: number) => {
    setVessels((prevVessels) => {
      return firstFit(value, prevVessels);
    });
  };

  return (
    <Container>
      <div>
        <h1>Simulate First Fit Algorithm</h1>
        <MainContainer>
            <div>
              <div style={{display: 'flex'}}>
                <div style={{width: '50%', marginRight: '16px'}}>
                  <Form form={form} onFinish={(values) => {
                    handleAddVessel(values);
                    form.resetFields(); 
                  }}>
                    <Form.Item rules={[{required: true}]} name='vesselName'> 
                      <StyledInput placeholder="Vessel Name"/>
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]} name='capacity'>
                      <StyledInput placeholder="Capacity" type="number"/>
                    </Form.Item>
                    <StyledButton htmlType="submit" type='primary'>Add Vessel</StyledButton>
                  </Form>
                </div>
                <div>
                  <StyledInput placeholder="Enter a value" id="currValue" value={val} onChange={(e) => setVal(Number(e.target.value))}/>
                  <StyledButton
                  style={{ marginTop: '32px'}}
                    type="primary"
                    onClick={() => {
                      if (val) handleAddValue(val);
                    }}
                    disabled={vessels.length === 0}
                  >
                    Add to a Vessel
                  </StyledButton>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              {
                vessels.map((vessel, index) => (
                  <Vessel 
                    key={index} 
                    vesselName={vessel.name} 
                    capacity={vessel.capacity} 
                    remainingSpace={vessel.remainingSpace} 
                    values={vessel.values}
                    removeVessel={() => {
                      setVessels((prev) => prev.filter((_, i) => i !== index));
                    }}
                  /> 
                ))
              }
              </div>
            </div>
        </MainContainer>
      </div>
    </Container>
  );
};

export default MainComp;
