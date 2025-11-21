"use client";

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const cardElementOptions = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export function CheckoutForm({ totalAmount }: { totalAmount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const router = useRouter();
  const { dispatch } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet. Please try again in a few seconds.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
        setError("Card element not found. Please refresh the page.");
        setLoading(false);
        return;
    }
    
    // Simulate payment processing
    setTimeout(() => {
        toast({
            title: "Payment Successful (Simulation)",
            description: "Your order has been placed. Thank you for your purchase!",
        });
        dispatch({ type: "CLEAR_CART" });
        router.push("/");
        setLoading(false);
    }, 2000);

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-md border">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Card details
        </label>
        <div className="p-3 border rounded-md bg-white dark:bg-input">
            <CardElement options={cardElementOptions} onChange={() => setError(null)} />
        </div>
      </div>
      {error && <div className="text-destructive text-sm">{error}</div>}
      <Button
        disabled={!stripe || loading}
        className="w-full"
        type="submit"
        size="lg"
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          `Pay $${totalAmount.toFixed(2)}`
        )}
      </Button>
       <p className="text-center text-xs text-muted-foreground">
          This is a demo application. No real payment will be processed.
        </p>
    </form>
  );
}
