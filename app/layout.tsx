import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Online Courses, Start Learning and Explore Many More || ImmverseAI - Professional LMS Online Education Course",
  description:
    "Elevate your e-learning content with ImmverseAI, the most impressive LMS for online courses, education and LMS platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
     
      </head>
      <body className={inter.className}>
       
        {children}
      </body>
    </html>
  );
}
