import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-[60dvh] flex justify-center items-center gap-4 mb-12"
    >
      <div className="w-1/3">
        <Badge variant={"secondary"} className="cursor-default">
          Contact Us
        </Badge>
        <h2 className="text-5xl font-bold tracking-tighter my-4">
          Get in Touch
        </h2>
        <form className="grid gap-2 text-white dark:text-black font-medium">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="email" />
          <Textarea placeholder="Message" />
          <Button variant="submit" type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
