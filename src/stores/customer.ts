import { CustomerSchemaType } from "@/models/customer";
import { create } from "zustand";

type Customer = CustomerSchemaType & {
  handleSetValue: (
    key: keyof CustomerSchemaType,
    value: string | undefined | File
  ) => void;
  handleState: (data: CustomerSchemaType) => void;
};

const useCustomerStore = create<Customer>((set) => ({
  ImageName: "",
  email: "",
  password: "",
  confirmPassword: "",
  companyName: "",
  taxId: "",
  fullName: "",
  country: "",
  phoneNumber: "",
  website: "",
  address: "",
  province: "",
  subDistrict: "",
  district: "",
  zipCode: "",
  isLoggin: false,
  ImageFile: undefined,
  handleSetValue: (key: keyof CustomerSchemaType, value) => {
    set((state) => ({
      ...state,
      [key]: value,
    }));
  },
  handleState: (state) => {
    set({ ...state });
  },
}));

export default useCustomerStore;
