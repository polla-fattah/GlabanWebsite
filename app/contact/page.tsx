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
import { Building2, Check, Clock, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

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

type ContactInfoItem = {
  label: string;
  value: string;
  subtext?: string;
  href?: string;
  icon: LucideIcon;
};

const info: ContactInfoItem[] = [
  {
    label: "Company",
    value: "Glaban Technologies",
    subtext: "Enterprise Fuel & Energy Operations Platform",
    icon: Building2,
  },
  {
    label: "Phone",
    value: "+964 750 6611033",
    subtext: "Direct engineering & sales line",
    href: "tel:+9647506611033",
    icon: Phone,
  },
  {
    label: "Email",
    value: "info@glaban.com",
    subtext: "Guaranteed 1-business-day response",
    href: "mailto:info@glaban.com",
    icon: Mail,
  },
  {
    label: "Office Location",
    value: "Glaban Office, Makhmur Road",
    subtext: "Erbil, Kurdistan Region (KRG), Iraq",
    icon: MapPin,
  },
  {
    label: "Working Hours",
    value: "Saturday – Thursday, 8:00 – 18:00",
    subtext: "Closed on Fridays (Emergency SLAs active 24/7)",
    icon: Clock,
  },
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
    <div className="bg-void min-h-screen">
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your operation"
        subtitle="Tell us about your business and what you need — we'll follow up within one business day."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-12">
        <div className="flex flex-col gap-4">
          {info.map((c) => (
            <div
              key={c.label}
              className="group relative overflow-hidden bg-carbon border border-graphite rounded-lg p-5 sm:p-6 hover:border-smoke hover:bg-cinder transition-all duration-300 flex items-start gap-4 sm:gap-5 shadow-sm"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon badge */}
              <div className="w-12 h-12 rounded-xl bg-obsidian border border-graphite flex items-center justify-center text-orange shrink-0 group-hover:border-smoke transition-all duration-300 shadow-sm">
                <c.icon className="text-[18px]" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="text-[12px] font-semibold tracking-wider uppercase text-ash mb-1">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-[16px] font-semibold text-white hover:text-orange transition-colors break-words inline-flex items-center gap-2 group/link"
                  >
                    <span>{c.value}</span>
                    <ExternalLink className="text-[12px] text-ash group-hover/link:text-orange transition-colors" />
                  </a>
                ) : (
                  <div className="text-[16px] font-semibold text-white leading-snug break-words">
                    {c.value}
                  </div>
                )}
                {c.subtext && (
                  <div className="text-[13.5px] text-fog mt-1 leading-relaxed">
                    {c.subtext}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Card className="bg-carbon border border-graphite rounded-lg shadow-none">
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
                          <FormLabel className="text-[13px] font-medium text-mist">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              className="h-10 bg-obsidian border-graphite text-white placeholder:text-steel shadow-none focus-visible:ring-0 focus-visible:border-smoke"
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
                          <FormLabel className="text-[13px] font-medium text-mist">
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Company Ltd"
                              className="h-10 bg-obsidian border-graphite text-white placeholder:text-steel shadow-none focus-visible:ring-0 focus-visible:border-smoke"
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
                          <FormLabel className="text-[13px] font-medium text-mist">
                            Job Title
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Operations Manager"
                              className="h-10 bg-obsidian border-graphite text-white placeholder:text-steel shadow-none focus-visible:ring-0 focus-visible:border-smoke"
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
                          <FormLabel className="text-[13px] font-medium text-mist">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="+964..."
                              className="h-10 bg-obsidian border-graphite text-white placeholder:text-steel shadow-none focus-visible:ring-0 focus-visible:border-smoke"
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
                        <FormLabel className="text-[13px] font-medium text-mist">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@company.com"
                            className="h-10 bg-obsidian border-graphite text-white placeholder:text-steel shadow-none focus-visible:ring-0 focus-visible:border-smoke"
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
                          <FormLabel className="text-[13px] font-medium text-mist">
                            Industry Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-obsidian border-graphite text-white h-10 shadow-none focus:ring-0">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-carbon border-graphite text-white shadow-none">
                              {industryOptions.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o}
                                  className="focus:bg-obsidian focus:text-white"
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
                          <FormLabel className="text-[13px] font-medium text-mist">
                            Product / Service of Interest
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full bg-obsidian border-graphite text-white h-10 shadow-none focus:ring-0">
                                <SelectValue placeholder="Select interest" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-carbon border-graphite text-white shadow-none">
                              {interestOptions.map((o) => (
                                <SelectItem
                                  key={o}
                                  value={o}
                                  className="focus:bg-obsidian focus:text-white"
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
                        <FormLabel className="text-[13px] font-medium text-mist">
                          Preferred Contact Method
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-obsidian border-graphite text-white h-10 shadow-none focus:ring-0">
                              <SelectValue placeholder="Select contact method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-carbon border-graphite text-white shadow-none">
                            {contactMethods.map((o) => (
                              <SelectItem
                                key={o}
                                value={o}
                                className="focus:bg-obsidian focus:text-white"
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
                        <FormLabel className="text-[13px] font-medium text-mist">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            className="bg-obsidian border-graphite text-white placeholder:text-steel shadow-none focus-visible:ring-0 focus-visible:border-smoke"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <div className="text-rose-500 text-[13.5px] py-2">
                      {error}
                    </div>
                  )}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="bg-orange hover:bg-orangeDark text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md shadow-none transition-all"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-obsidian border border-graphite text-orange flex items-center justify-center text-xl mx-auto mb-4 shadow-none">
                  <Check />
                </div>
                <div className="font-medium text-[20px] text-white mb-2 tracking-[-0.01em]">
                  Message sent
                </div>
                <p className="text-[14.5px] text-fog m-0 leading-[1.6]">
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
