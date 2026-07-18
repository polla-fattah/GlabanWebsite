import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-void min-h-screen flex flex-col text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-[600px] mx-auto">
        <div className="font-mono text-orange text-[13px] tracking-widest mb-4">
          ERROR 404
        </div>
        <h1 className="text-[36px] font-semibold mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-fog text-[15px] leading-relaxed mb-8">
          The page or resource you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="bg-orange text-white hover:bg-orangeDark font-medium">
          <Link href="/">Return to Dashboard</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
