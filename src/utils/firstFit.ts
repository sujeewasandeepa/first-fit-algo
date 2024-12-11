import { VesselI } from "@/types/vessel.interface";
  
  // Vessels are iterated and the remaining space is checked to see 
  // if the value can be added to the vessel
  export const firstFit = (value: number, vessels: VesselI[]): VesselI[] => {
    const updatedVessels = [...vessels];

    for (let i = 0; i < updatedVessels.length; i++) {
      if (updatedVessels[i].remainingSpace >= value) {
        updatedVessels[i] = {
          ...updatedVessels[i],
          values: [...updatedVessels[i].values, value],
          remainingSpace: updatedVessels[i].remainingSpace - value,
        };
        break;
      }
    }
    return updatedVessels;
  };