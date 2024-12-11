import { VesselI } from "@/types/vessel.interface";
import { firstFit } from "@/utils/firstFit";
import { expect, describe, it } from "@jest/globals";

describe('firstFit', () => {
    it('should add value to the first vessel with enough remaining space', () => {
      const vessels: VesselI[] = [
        { capacity: 10, remainingSpace: 5, name: 'Vessel 1', values: [] },
        { capacity: 10, remainingSpace: 10, name: 'Vessel 2', values: [] },
      ];
      const value = 6;
      const updatedVessels = firstFit(value, vessels);
  
      expect(updatedVessels[0].remainingSpace).toBe(5);
      expect(updatedVessels[1].remainingSpace).toBe(4);
      expect(updatedVessels[1].values).toContain(value);
    });
  
    it('should not add value if no vessel has enough remaining space', () => {
      const vessels: VesselI[] = [
        { capacity: 10, remainingSpace: 5, name: 'Vessel 1', values: [] },
        { capacity: 10, remainingSpace: 4, name: 'Vessel 2', values: [] },
      ];
      const value = 6;
      const updatedVessels = firstFit(value, vessels);
  
      expect(updatedVessels[0].remainingSpace).toBe(5);
      expect(updatedVessels[1].remainingSpace).toBe(4);
      expect(updatedVessels[0].values).not.toContain(value);
      expect(updatedVessels[1].values).not.toContain(value);
    });
  
    it('should add value to the first suitable vessel and not to others', () => {
      const vessels: VesselI[] = [
        { capacity: 10, remainingSpace: 10, name: 'Vessel 1', values: [] },
        { capacity: 10, remainingSpace: 10, name: 'Vessel 2', values: [] },
      ];
      const value = 6;
      const updatedVessels = firstFit(value, vessels);
  
      expect(updatedVessels[0].remainingSpace).toBe(4);
      expect(updatedVessels[0].values).toContain(value);
      expect(updatedVessels[1].remainingSpace).toBe(10);
      expect(updatedVessels[1].values).not.toContain(value);
    });
  });