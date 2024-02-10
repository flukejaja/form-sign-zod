import province from "@/filesProvince/provinces.json";
import tambons from "@/filesProvince/tambons.json";
import amphures from "@/filesProvince/amphures.json";
import { create } from "zustand";
import { Province, Amphures, Tambons } from "@/models/province";

const useProvinceStore = create<{
  province: Province[];
  amphures: Amphures[];
  tambons: Tambons[];
  zipCode: number;
  handleProvinceStore: (id: string) => void;
  handleAmphuresStore: (id: string) => void;
  handleTambonsStore: (id: string) => void;
}>((set) => ({
  province: province,
  amphures: [],
  tambons: [],
  zipCode: 0,
  handleProvinceStore: (id: string) => {
    const amphuresList = amphures.filter((el) => el.province_id + "" === id);
    set((state) => ({
      province: state.province,
      amphures: amphuresList,
      tambons: [],
    }));
  },
  handleAmphuresStore: (id: string) => {
    const tambonsList = tambons.filter((el) => el.amphure_id + "" === id);
    set((state) => ({
      province: state.province,
      amphures: state.amphures,
      tambons: tambonsList,
    }));
  },
  handleTambonsStore: (id: string) => {
    const zipCodeName = tambons.find((el) => el.id + "" === id);
    set((state) => ({
      province: state.province,
      amphures: state.amphures,
      tambons: state.tambons,
      zipCode: zipCodeName?.zip_code,
    }));
  },
}));

export default useProvinceStore;
