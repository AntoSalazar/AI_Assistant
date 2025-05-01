
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import KnowledgeBase from "./pages/KnowledgeBase";
import LLMConfiguration from "./pages/LLMConfiguration";
import UserManagement from "./pages/UserManagement";
import CustomerProfile from "./components/user-management/CustomerProfile";
import CustomerChatView from "./components/user-management/CustomerChatView";
import FAQEditor from "./components/knowledge-base/FAQEditor";
import Analytics from "./pages/Analytics";
import Conversations from "./pages/Conversations";
import ConversationView from "./pages/ConversationView";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/knowledge-base/faq/new" element={<KnowledgeBase initialTab="faq-editor" />} />
          <Route path="/knowledge-base/faq/:faqId" element={<KnowledgeBase initialTab="faq-editor" />} />
          <Route path="/llm-config" element={<LLMConfiguration />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/users/:tab" element={<UserManagement />} />
          <Route path="/users/customers/:customerId" element={<CustomerProfile />} />
          <Route path="/users/customers/:customerId/chat/:chatId" element={<CustomerChatView />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analytics/:tab" element={<Analytics />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/conversations/:conversationId" element={<ConversationView />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
