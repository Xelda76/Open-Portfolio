import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import Index from "./pages/Index";
import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <div className="flex-1">
                <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-gradient-to-r from-background via-background/95 to-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 shadow-sm">
                  <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground transition-colors rounded-md" />
                  <div className="flex-1" />
                  <ThemeToggle />
                </header>
                <main>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/activity-1" element={<Activity1 />} />
                    <Route path="/activity-2" element={<Activity2 />} />
                    <Route path="/activity-3" element={<Activity3 />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
