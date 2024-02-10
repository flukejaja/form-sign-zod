import * as z from "zod";

export const CustomerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    companyName: z.string(),
    taxId: z.string(),
    fullName: z.string(),
    country: z.string(),
    phoneNumber: z.string(),
    website: z.string().optional(),
    address: z.string(),
    province: z.string(),
    subDistrict: z.string(),
    district: z.string(),
    zipCode: z.string(),
    ImageName: z.string(),
    ImageFile: z.instanceof(File),
    isLoggin: z.boolean(),
  })
  .partial()
  .superRefine(({ confirmPassword, password }, ctx) => {
    console.log(confirmPassword, password);
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type CustomerSchemaType = z.infer<typeof CustomerSchema>;
