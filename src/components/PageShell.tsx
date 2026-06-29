import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea className="h-screen w-full">
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ScrollArea>
  );
}
