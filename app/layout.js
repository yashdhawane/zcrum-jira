import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";


const inter = Inter({subsets:["latin"]})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Zcrum",
  description: "Project management app",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
      >
    <html lang="en">

      <body
        className={`${inter.className} dotted-background`}
        > <ThemeProvider attribute="class" defaultTheme="dark">
        <Header/>
            <main className="min-h-screen">
            <Toaster richColors />
            {children}
            </main>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-gray-200 text-center">
                <p>Made by yash</p>
              </div>
             
            </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
