'use client';
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    const { error } = await supabase.from("feedback").insert([
      { name, email, message, submitted_at: new Date().toISOString() },
    ]);

    if (error) {
      setError("There was an error submitting your feedback.");
    } else {
      setSuccess(true);
      setError("");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact" className="h-[60vh] flex justify-center items-center gap-2 xl:gap-4 mb-12 px-4 xl:px-0">
      <div className="w-2/3 xl:w-1/3">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tighter my-4 text-center xl:text-left">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full"/>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full"/>
          <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full"/>
          <Button type="submit" className="w-full">Submit</Button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">Feedback submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
}
