"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LuLoader } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { delay } from "../utility/helper";
import BasicService from "../service-api/base-api-service";

const formSchema = z.object({
  email_address: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email format." }),
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(30, { message: "Name must be less than 30 characters." }),
  enquiry_type: z.string().min(1, { message: "Service Type is required." }),
  contact_number: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits." })
    .regex(/^[0-9]+$/, { message: "Phone number must be numeric." }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email_address: "",
      name: "",
      enquiry_type: "",
      contact_number: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await BasicService.enquirySend(values);
      console.log(response.data, "Response");

      toast.success(response?.data?.message ?? "Enquiry Sent Successfully!", {
        position: "top-right",
        style: {
          backgroundColor: "#55387A",
          color: "#ffffff",
        },
        duration: 2000,
      });

      form.reset();
    } catch (error) {
      const message = error?.response?.data?.message ?? error.message;
      toast.error(message, {
        position: "top-right",
        style: {
          backgroundColor: "#55387A",
          color: "#ffffff",
        },
      });
    }
  };

  // 🛑 Prevent Direct Email Display & Use Obfuscation
  const getEmail = () => {
    const user = "contact"; // Example email: contact@yourcompany.com
    const domain = "yourcompany";
    const tld = "com";
    return `${user}@${domain}.${tld}`;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:gap-2 md:mt-6 lg:mt-0 lg:pt-0 lg:justify-between"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full name <small className="text-red-500">*</small>
              </FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="e.g., John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Email (Obfuscated for Protection) */}
        <FormField
          control={form.control}
          name="email_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Work email address <small className="text-red-500">*</small>
              </FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Obfuscated Email Display (Instead of Plain Text) */}
        <p className="text-sm text-gray-500">
          Need help? Contact us at{" "}
          <a
            href={`mailto:${getEmail()}`}
            className="text-blue-600 underline"
          >
            {getEmail()}
          </a>
        </p>

        {/* Enquiry Type */}
        <FormField
          control={form.control}
          name="enquiry_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What is your inquiry about? <small className="text-red-500">*</small>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full form-input opacity-70">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key="1" value="sale">
                      Sale
                    </SelectItem>
                    <SelectItem key="2" value="service">
                      Service
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Mobile Number */}
        <FormField
          control={form.control}
          name="contact_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone Number <small className="text-red-500">*</small>
              </FormLabel>
              <FormControl>
                <Input
                  className="form-input"
                  placeholder="Full Number (incl. prefix)"
                  {...field}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          variant="primary"
          className="w-full flex gap-2"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <LuLoader className="animate-spin" /> : null}
          Submit Enquiry
        </Button>
      </form>
    </Form>
  );
}
