
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LLMPromptTemplates from '@/components/llm-configuration/LLMPromptTemplates';
import LLMModelParameters from '@/components/llm-configuration/LLMModelParameters';
import LLMTestingPlayground from '@/components/llm-configuration/LLMTestingPlayground';
import LLMPerformanceMetrics from '@/components/llm-configuration/LLMPerformanceMetrics';

type TabOption = 'prompt-templates' | 'model-parameters' | 'testing-playground' | 'performance-metrics';

const LLMConfiguration = () => {
  const [activeTab, setActiveTab] = useState<TabOption>('prompt-templates');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Listen for sidebar state changes
  React.useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    if (!sidebarElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // Check if sidebar has collapsed class
          const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
          setSidebarOpen(isNowOpen);
        }
      }
    });

    observer.observe(sidebarElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      <Sidebar />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
        <div className="p-6 max-w-[1400px] mx-auto">
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            <h1 className="text-2xl font-bold text-gray-800">LLM Configuration</h1>
          </div>
          
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="prompt-templates" className="px-6">Prompt Templates</TabsTrigger>
              <TabsTrigger value="model-parameters" className="px-6">Model Parameters</TabsTrigger>
              <TabsTrigger value="testing-playground" className="px-6">Testing Playground</TabsTrigger>
              <TabsTrigger value="performance-metrics" className="px-6">Performance Metrics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="prompt-templates">
              <LLMPromptTemplates />
            </TabsContent>
            <TabsContent value="model-parameters">
              <LLMModelParameters />
            </TabsContent>
            <TabsContent value="testing-playground">
              <LLMTestingPlayground />
            </TabsContent>
            <TabsContent value="performance-metrics">
              <LLMPerformanceMetrics />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default LLMConfiguration;
