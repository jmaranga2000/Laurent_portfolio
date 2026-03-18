import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sophia Laurent | Creative Portfolio",
  description:
    "A modern personal portfolio for Sophia Laurent — designer, developer, and creative visionary crafting elegant digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-surface font-body text-text antialiased">
        {children}
      </body>
    </html>
  );
}