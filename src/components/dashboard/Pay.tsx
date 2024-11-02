"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart2, QrCode, Smartphone } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [amount, setAmount] = useState("");
  const [recipientUpi, setRecipientUpi] = useState("");

  const handlePayment = () => {
    console.log(`Paying ₹${amount} to ${recipientUpi}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <BarChart2 className="h-6 w-6" />
            Stock Tracker UPI Transfer
          </CardTitle>
          <CardDescription>Send money to other users</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="recipientUpi">Recipient's UPI ID</Label>
              <Input
                id="recipientUpi"
                placeholder="recipient@upi"
                value={recipientUpi}
                onChange={(e) => setRecipientUpi(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <Button className="w-full" onClick={handlePayment}>
              Pay ₹{amount || "0"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
