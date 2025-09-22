import * as React from "react";
import { clsx } from "clsx";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { service: string }
>(({ className, service, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState("");

  const whatsappNumber = "254797849427";

  const handleConfirm = () => {
    const message = `Hi, my name is ${name}. I'd like to book ${service} at ${time}.`;
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
        "relative rounded-xl border border-rose-800 text-white shadow-lg overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Wavy background */}
      <div className="absolute inset-0 z-0">
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full h-75%">
          <svg viewBox="0 0 500 30" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,10 C150,20 350,0 500,10 L500,30 L0,30 Z" className="fill-rose-900" />
          </svg>
        </div>
        
        {/* Main background */}
        <div className="absolute inset-0 bg-rose-900 pt-6 pb-8"></div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full h-6">
          <svg viewBox="0 0 500 30" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,20 C150,10 350,30 500,20 L500,0 L0,0 Z" className="fill-rose-900" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {props.children}

        {/* Book Now Button */}
        <button
          onClick={() => setOpen(true)}
          className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-rose-900 font-semibold hover:bg-rose-50 transition-colors duration-200"
        >
          Book Now
        </button>

        {/* Booking Form */}
        {open && (
          <div className="mt-4 border-t border-rose-800 pt-4">
            <div className="mb-3">
              <label className="block text-sm font-medium text-rose-100">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-rose-800 bg-rose-800 text-white px-3 py-2 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-rose-100">Preferred Time</label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-md border border-rose-800 bg-rose-800 text-white px-3 py-2 placeholder-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
                placeholder="e.g. Tomorrow 3 PM"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-rose-100">Service</label>
              <input
                type="text"
                value={service}
                readOnly
                className="w-full rounded-md border border-rose-800 bg-rose-800/50 text-rose-200 px-3 py-2 cursor-not-allowed"
              />
            </div>

            {/* Confirm & Cancel */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-rose-700 px-4 py-2 text-rose-100 hover:bg-rose-800 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="rounded-lg bg-white px-4 py-2 text-rose-900 font-semibold hover:bg-rose-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!name || !time}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
Card.displayName = "Card";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={clsx("p-4 text-rose-50", className)} 
    {...props} 
  />
));
CardContent.displayName = "CardContent";