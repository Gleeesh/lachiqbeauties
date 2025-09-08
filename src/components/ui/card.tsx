import * as React from "react";
import { clsx } from "clsx";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { service: string }
>(({ className, service, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState("");

  const whatsappNumber = "254797849427"; // Replace with your WhatsApp number

  const handleConfirm = () => {
    const message = `Hi, my name is ${name}. I’d like to book ${service} at ${time}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setOpen(false);
    setName("");
    setTime("");
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "rounded-xl border bg-white text-gray-900 shadow-sm p-4",
        className
      )}
      {...props}
    >
      {props.children}

      {/* Book Now Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700"
      >
        Book Now
      </button>

      {/* Booking Form */}
      {open && (
        <div className="mt-4 border-t pt-4">
          <div className="mb-2">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium">Preferred Time</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              placeholder="e.g. Tomorrow 3 PM"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium">Service</label>
            <input
              type="text"
              value={service}
              readOnly
              className="w-full rounded-md border px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Confirm & Cancel */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border px-4 py-2"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="rounded-lg bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700"
              disabled={!name || !time}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
});
Card.displayName = "Card";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("p-4", className)} {...props} />
));
CardContent.displayName = "CardContent";
