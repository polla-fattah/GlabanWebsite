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
import { SUPPORT_FORM_ENDPOINT } from "@/lib/formEndpoints";
import { Check } from 'lucide-react';

const productOptions = [
  "Fuel ERP",
  "Gas Station POS",
  "Fuel Card / Fleet Card",
  "Fuel Limit / Quota",
  "Propane Cylinder System",
  "Other",
];
const issueTypes = [
  "Technical Issue",
  "Bug Report",
  "Training Request",
  "Other",
];
const urgencyLevels = ["Low", "Normal", "High / Emergency"];

const channels = [
  { label: "Support Email", value: "support@glaban.com" },
  { label: "Support Phone", value: "+964 750 6611033" },
  { label: "Working Hours", value: "Sat–Thu, 8:00–18:00" },
  { label: "Emergency Support", value: "Available for critical outages" },
];

const covered = [
  "Support channels and working hours",
  "Maintenance options",
  "Update policy",
  "Bug reporting",
  "Training support",
  "Emergency support",
  "Hosting support",
  "Backup and restore support",
];

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("_gotcha")) return;

    if (
      !data.get("company") ||
      !data.get("contact") ||
      !data.get("phone") ||
      !data.get("email") ||
      !data.get("description")
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(SUPPORT_FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(
        "There was a problem sending your request. Please email us directly at support@glaban.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-void min-h-screen">
      <Header />
      <PageHero
        eyebrow="Support"
        title="We're here after go-live"
        subtitle="Reach our support team directly, or submit a request below."
      />

      <section className="max-w-[1280px] mx-auto py-16 px-8 pb-24 grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-12">
        <div>
          <div className="flex flex-col gap-4 mb-8">
            {channels.map((c) => (
              <Card
                key={c.label}
                className="bg-carbon border border-graphite rounded-lg shadow-none hover:border-smoke transition-all"
              >
                <CardHeader className="p-5 pb-2">
                  <CardTitle className="font-medium text-[15px] text-white tracking-[-0.01em]">
                    {c.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 text-[14px] text-fog leading-[1.6]">
                  {c.value}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="font-medium text-lg text-white mb-4 tracking-[-0.01em]">
            What we cover
          </div>
          <div className="flex flex-col gap-3">
            {covered.map((i) => (
              <div key={i} className="flex gap-2.5 items-start">
                <div className="text-orange text-[12px] mt-1 shrink-0">
                  <Check />
                </div>
                <span className="text-[14px] text-mist leading-[1.5]">
                  {i}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-carbon border border-graphite rounded-lg shadow-none">
          <CardContent className="p-8 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="font-medium text-xl text-white mb-6 tracking-[-0.01em]">
                  Submit a support request
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                      Company Name *
                    </Label>
                    <Input
                      name="company"
                      className="h-10 bg-obsidian border-graphite text-white shadow-none focus-visible:ring-0 focus-visible:border-smoke"
                    />
                  </div>
                  <div>
                    <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                      Contact Person *
                    </Label>
                    <Input
                      name="contact"
                      className="h-10 bg-obsidian border-graphite text-white shadow-none focus-visible:ring-0 focus-visible:border-smoke"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                      Phone Number *
                    </Label>
                    <Input
                      name="phone"
                      className="h-10 bg-obsidian border-graphite text-white shadow-none focus-visible:ring-0 focus-visible:border-smoke"
                    />
                  </div>
                  <div>
                    <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                      Email *
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      className="h-10 bg-obsidian border-graphite text-white shadow-none focus-visible:ring-0 focus-visible:border-smoke"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                    Product or System
                  </Label>
                  <Select name="product" defaultValue={productOptions[0]}>
                    <SelectTrigger className="w-full bg-obsidian border-graphite text-white h-10 shadow-none focus:ring-0">
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent className="bg-carbon border-graphite text-white shadow-none">
                      {productOptions.map((o) => (
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                      Issue Type
                    </Label>
                    <Select name="issueType" defaultValue={issueTypes[0]}>
                      <SelectTrigger className="w-full bg-obsidian border-graphite text-white h-10 shadow-none focus:ring-0">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent className="bg-carbon border-graphite text-white shadow-none">
                        {issueTypes.map((o) => (
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
                  </div>
                  <div>
                    <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                      Urgency
                    </Label>
                    <Select name="urgency" defaultValue={urgencyLevels[1]}>
                      <SelectTrigger className="w-full bg-obsidian border-graphite text-white h-10 shadow-none focus:ring-0">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent className="bg-carbon border-graphite text-white shadow-none">
                        {urgencyLevels.map((o) => (
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
                  </div>
                </div>
                <div className="mb-6">
                  <Label className="text-[13px] font-medium text-mist mb-1.5 block">
                    Issue Description *
                  </Label>
                  <Textarea
                    name="description"
                    rows={4}
                    className="bg-obsidian border-graphite text-white shadow-none focus-visible:ring-0 focus-visible:border-smoke"
                  />
                </div>
                {error && (
                  <div className="text-rose-500 text-[13.5px] mb-4">
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-orange hover:bg-orangeDark text-white font-medium text-[14.5px] px-7 py-3.5 h-auto rounded-md shadow-none transition-all"
                >
                  {submitting ? "Sending…" : "Submit Request"}
                </Button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-12 h-12 rounded-full bg-obsidian border border-graphite text-orange flex items-center justify-center text-xl mx-auto mb-4 shadow-none">
                  <Check />
                </div>
                <div className="font-medium text-[20px] text-white mb-2 tracking-[-0.01em]">
                  Request received
                </div>
                <p className="text-[14.5px] text-fog m-0 leading-[1.6]">
                  Our support team will contact you shortly.
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
