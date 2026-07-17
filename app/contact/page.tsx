"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) return; // honeypot

    if (
      !data.get("name") ||
      !data.get("company") ||
      !data.get("phone") ||
      !data.get("email") ||
      !data.get("message")
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: data,
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
    <div>
      <Header />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your operation"
        subtitle="Tell us about your business and what you need — we'll follow up within one business day."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-12">
        <div className="flex flex-col gap-3.5">
          {info.map((c) => (
            <Card
              key={c.label}
              className="bg-white border border-navy/8 rounded-xl shadow-none"
            >
              <CardHeader className="p-5 pb-1">
                <CardTitle className="font-bold text-[15px] text-textDark">
                  {c.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 text-sm text-textBody">
                {c.value}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border border-navy/8 rounded-2xl shadow-none">
          <CardContent className="p-9">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                      Full Name *
                    </Label>
                    <Input name="name" className="h-10 bg-white" />
                  </div>
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                      Company Name *
                    </Label>
                    <Input name="company" className="h-10 bg-white" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                      Job Title
                    </Label>
                    <Input name="title" className="h-10 bg-white" />
                  </div>
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                      Phone Number *
                    </Label>
                    <Input name="phone" className="h-10 bg-white" />
                  </div>
                </div>
                <div className="mb-4">
                  <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                    Email Address *
                  </Label>
                  <Input name="email" type="email" className="h-10 bg-white" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                      Industry Type
                    </Label>
                    <Select name="industry" defaultValue={industryOptions[0]}>
                      <SelectTrigger className="w-full bg-white h-10">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industryOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                      Product / Service of Interest
                    </Label>
                    <Select
                      name="interest"
                      defaultValue={interestOptions[interestOptions.length - 1]}
                    >
                      <SelectTrigger className="w-full bg-white h-10">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mb-4">
                  <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                    Preferred Contact Method
                  </Label>
                  <Select name="contactMethod" defaultValue={contactMethods[0]}>
                    <SelectTrigger className="w-full bg-white h-10">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactMethods.map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-5.5">
                  <Label className="text-[13px] font-semibold text-textBody2 mb-1.5 block">
                    Message *
                  </Label>
                  <Textarea name="message" rows={4} className="bg-white" />
                </div>
                {error && (
                  <div className="text-destructive text-[13.5px] mb-3.5">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-orange hover:bg-orangeDark text-navy font-semibold text-[15px] px-[26px] py-3.5 h-auto rounded-lg"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-[52px] h-[52px] rounded-full bg-orangeTint text-orange flex items-center justify-center text-2xl mx-auto mb-4.5">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-[19px] text-textDark mb-2">
                  Message sent
                </div>
                <p className="text-[14.5px] text-textBody m-0">
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
