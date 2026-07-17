"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
import { CONTACT_FORM_ENDPOINT } from "@/lib/formEndpoints";

const industryOptions = [
  "Oil company",
  "Refinery",
  "Gas station",
  "Propane cylinder company",
  "Bulk gas delivery company",
  "Fuel distribution company",
  "Fuel depot",
  "Industrial gas customer",
  "Company with employee fuel limits",
  "Other",
];

const interestOptions = [
  "Fuel ERP",
  "Gas Station POS",
  "Fuel Card / Fleet Card System",
  "Fuel Limit / Quota System",
  "Propane Cylinder System",
  "Bulk Gas Delivery System",
  "Delivery Dispatch",
  "Location-Based Task Management",
  "CCTV and Surveillance",
  "Access Control",
  "Cybersecurity",
  "Fleet Tracking",
  "Hosting and Maintenance",
  "Custom Software",
  "Consultation",
];

const contactMethods = ["Email", "Phone", "WhatsApp"];

const info = [
  { label: "Company", value: "Glaban" },
  { label: "Phone", value: "+964 750 6611033" },
  { label: "Email", value: "info@glaban.com" },
  {
    label: "Office",
    value: "Glaban Office, Makhmur Road, Erbil, Kurdistan Region (KRG), Iraq",
  },
  { label: "Working Hours", value: "Sat–Thu, 8:00–18:00" },
];

const contactSchema = z.object({
  name: z.string().min(1, "Full name is required."),
  company: z.string().min(1, "Company name is required."),
  title: z.string().optional(),
  phone: z.string().min(1, "Phone number is required."),
  email: z
    .string()
    .min(1, "Email address is required.")
    .email("Please enter a valid email address."),
  industry: z.string().optional(),
  interest: z.string().optional(),
  contactMethod: z.string().optional(),
  message: z.string().min(1, "Message is required."),
  _gotcha: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      title: "",
      phone: "",
      email: "",
      industry: industryOptions[0],
      interest: interestOptions[interestOptions.length - 1],
      contactMethod: contactMethods[0],
      message: "",
      _gotcha: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    if (values._gotcha) return; // honeypot

    setError("");
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        "There was a problem sending your message. Please email us directly at info@glaban.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#08090a] min-h-screen">
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your operation"
        subtitle="Tell us about your business and what you need — we'll follow up within one business day."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-12">
        <div className="flex flex-col gap-4">
          {info.map((c) => (
            <Card
              key={c.label}
              className="bg-[#0f1011] border border-graphite rounded-lg shadow-none hover:border-[#383b3f] transition-all"
            >
              <CardContent className="p-5 pt-0 text-[14px] text-[#8a8f98] leading-[1.6]">
                <span className="font-medium text-[15px] text-white tracking-[-0.01em]">
                  {c.label}
                </span>{" "}
                : {c.value}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-[#0f1011] border border-graphite rounded-lg shadow-none">
          <CardContent className="p-8 sm:p-10">
            {!submitted ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    {...form.register("_gotcha")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="font-medium text-xl text-white mb-6 tracking-[-0.01em]">
                    Send us a message
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="h-10 bg-[#161718] border-graphite text-white placeholder:text-[#525866] shadow-none focus-visible:ring-0 focus-visible:border-[#383b3f]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Company Ltd"
                              className="h-10 bg-[#161718] border-graphite text-white placeholder:text-[#525866] shadow-none focus-visible:ring-0 focus-visible:border-[#383b3f]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                            Job Title
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Operations Manager"
                              className="h-10 bg-[#161718] border-graphite text-white placeholder:text-[#525866] shadow-none focus-visible:ring-0 focus-visible:border-[#383b3f]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="+964..."
                              className="h-10 bg-[#161718] border-graphite text-white placeholder:text-[#525866] shadow-none focus-visible:ring-0 focus-visible:border-[#383b3f]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@company.com"
                            className="h-10 bg-[#161718] border-graphite text-white placeholder:text-[#525866] shadow-none focus-visible:ring-0 focus-visible:border-[#383b3f]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                            Industry Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-[#161718] border-graphite text-white h-10 shadow-none focus:ring-0">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0f1011] border-graphite text-white shadow-none">
                              {industryOptions.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o}
                                  className="focus:bg-[#161718] focus:text-white"
                                >
                                  {o}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                            Product / Service of Interest
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-[#161718] border-graphite text-white h-10 shadow-none focus:ring-0">
                                <SelectValue placeholder="Select interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#0f1011] border-graphite text-white shadow-none">
                              {interestOptions.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o}
                                  className="focus:bg-[#161718] focus:text-white"
                                >
                                  {o}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                          Preferred Contact Method
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#161718] border-graphite text-white h-10 shadow-none focus:ring-0">
                              <SelectValue placeholder="Select contact method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0f1011] border-graphite text-white shadow-none">
                            {contactMethods.map((o) => (
                              <SelectItem
                                key={o}
                                value={o}
                                className="focus:bg-[#161718] focus:text-white"
                              >
                                {o}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="pt-2">
                        <FormLabel className="text-[13px] font-medium text-[#d0d6e0]">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            className="bg-[#161718] border-graphite text-white placeholder:text-[#525866] shadow-none focus-visible:ring-0 focus-visible:border-[#383b3f]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <div className="text-[#f43f5e] text-[13.5px] py-2">
                      {error}
                    </div>
                  )}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="bg-[#e4f222] hover:bg-[#e4f222]/90 text-[#08090a] font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md shadow-none transition-all"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-[#161718] border border-graphite text-[#02b8cc] flex items-center justify-center text-xl mx-auto mb-4 shadow-none">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="font-medium text-[20px] text-white mb-2 tracking-[-0.01em]">
                  Message sent
                </div>
                <p className="text-[14.5px] text-[#8a8f98] m-0 leading-[1.6]">
                  Thanks for reaching out — our team will contact you within one
                  business day.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
