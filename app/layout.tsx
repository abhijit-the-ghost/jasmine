import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasmine Tiwari",
  description: "Portfolio of Jasmine Tiwari, a passionate psychology student, tutor and learner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="psychbloom" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem("jasmine-theme") || "psychbloom";
                document.documentElement.setAttribute("data-theme", savedTheme);
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
