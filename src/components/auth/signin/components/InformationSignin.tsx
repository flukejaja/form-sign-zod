"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Mail, LockKeyhole } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { nanoid } from "nanoid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputIcon } from "@/components/auth/signin/widget/InputWithIcon";
import countyCode from "@/files/CountyCode/data.json";
import useProvinceStore from "@/stores/province";
import useCustomerStore from "@/stores/customer";
import { CustomerSchema } from "@/models/customer";
import { toast } from "sonner";
import { useEffect } from "react";

const DialCode = countyCode.map((el) => ({
  id: nanoid(3),
  dial_code: el.dial_code,
}));

const InformationSignin = () => {
  const form = useForm<z.infer<typeof CustomerSchema>>({
    resolver: zodResolver(CustomerSchema),
  });

  const {
    province,
    amphures,
    tambons,
    handleAmphuresStore,
    handleProvinceStore,
    handleTambonsStore,
  } = useProvinceStore((state) => ({ ...state }));

  const { handleState, ImageFile } = useCustomerStore((state) => ({
    ...state,
  }));

  const onSubmit = (values: z.infer<typeof CustomerSchema>) => {
    if (!ImageFile) {
      toast.error("Please Upload Image");
      return;
    }
    handleState({ ...values, isLoggin: true });
    form.reset({
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
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-4 "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <InputIcon
                  icon={Mail}
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <InputIcon
                  icon={LockKeyhole}
                  type="password"
                  placeholder="Enter your Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <InputIcon
                  icon={LockKeyhole}
                  type="password"
                  placeholder="Enter your Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-3 border-b" />
        <span className="col-span-3 font-bold">Information</span>
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Company Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="taxId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tax ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter Tax ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countyCode.map((item, idx) => {
                      return (
                        <SelectItem key={idx} value={item.name}>
                          {item.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <div className="flex flex-row space-x-2">
                  <Select>
                    <SelectTrigger className="w-1/4 min-w-fit px-4">
                      <SelectValue placeholder="+00" />
                    </SelectTrigger>
                    <SelectContent>
                      {DialCode.map((item) => {
                        return (
                          <SelectItem value={item.id} key={item.id}>
                            {item.dial_code}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Enter Phone Number"
                    className="w-3/4"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Enter Website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-1 row-span-2 flex flex-col  ">
              <FormLabel className="my-[5px]">Address</FormLabel>
              <FormControl className="flex-grow">
                <Textarea
                  placeholder="Address"
                  className="resize-none  "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State/Province</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(e) => {
                    field.onChange(e);
                    handleProvinceStore(e);
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose province" />
                  </SelectTrigger>
                  <SelectContent>
                    {province.map((item, idx) => {
                      return (
                        <SelectItem key={idx} value={item.id + ""}>
                          {item.name_th}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subDistrict"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sub-District</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(e) => {
                    field.onChange(e);
                    handleTambonsStore(e);
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose province" />
                  </SelectTrigger>
                  <SelectContent>
                    {tambons.map((item) => {
                      return (
                        <SelectItem key={item.id} value={item.id + ""}>
                          {item.name_th}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City/District</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(e) => {
                    field.onChange(e);
                    handleAmphuresStore(e);
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose District" />
                  </SelectTrigger>
                  <SelectContent>
                    {amphures.map((item, idx) => {
                      return (
                        <SelectItem key={idx} value={item.id + ""}>
                          {item.name_th}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City/District</FormLabel>
              <FormControl>
                <Input placeholder="Enter Zip Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" col-span-3 w-full flex justify-around">
          <Button>cancel</Button>
          <Button type="submit">submit</Button>
        </div>
      </form>
    </Form>
  );
};
export default InformationSignin;
