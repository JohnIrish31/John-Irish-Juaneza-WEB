export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-EZL8EM64WW";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  } else {
    console.warn("Google Analytics is not loaded yet.");
  }
};


export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
 
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } else {
    console.warn("Google Analytics is not loaded yet.");
  }
};
