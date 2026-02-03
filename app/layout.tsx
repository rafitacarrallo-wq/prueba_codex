import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Job Application Tracker",
  description: "Track applications, contacts, and company watchlist in one place."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-background text-foreground">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
