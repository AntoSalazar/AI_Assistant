import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LLMPromptTemplates from '@/components/llm-configuration/LLMPromptTemplates';
import LLMModelParameters from '@/components/llm-configuration/LLMModelParameters';
import LLMTestingPlayground from '@/components/llm-configuration/LLMTestingPlayground';
import LLMPerformanceMetrics from '@/components/llm-configuration/LLMPerformanceMetrics';

// Internal type definition remains in English
type TabOption = 'prompt-templates' | 'model-parameters' | 'testing-playground' | 'performance-metrics';

const LLMConfiguration = () => {
  const { t } = useTranslation(); // Get translation function
  // State and hooks remain in English
  const [activeTab, setActiveTab] = useState<TabOption>('prompt-templates');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar state listener logic remains the same
  useEffect(() => {
    const sidebarElement = document.querySelector('aside');
    if (!sidebarElement) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isNowOpen = !sidebarElement.classList.contains('w-[70px]');
          setSidebarOpen(isNowOpen);
        }
      }
    });

    observer.observe(sidebarElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    // Styles unchanged
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader /> {/* Assumes translation handled internally */}
      <Sidebar />       {/* Assumes translation handled internally */}
       {/* Styles unchanged */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'pl-[220px]' : 'pl-[70px]'} pt-16 min-h-screen`}>
         {/* Styles unchanged */}
        <div className="p-6 max-w-[1400px] mx-auto">
           {/* Styles unchanged */}
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            {/* Use translation key */}
            <h1 className="text-2xl font-bold text-gray-800">{t('llmConfigurationTitle', 'LLM Configuration')}</h1> {/* STYLE UNCHANGED, Text Translated */}
          </div>

          {/* Tab values remain in English */}
           {/* Styles unchanged */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabOption)} className="w-full">
             {/* Styles unchanged */}
            <TabsList className="mb-4">
              {/* Use translation keys for Trigger text, keep 'value' prop */}
              <TabsTrigger value="prompt-templates" className="px-6">{t('promptTemplates', 'Prompt Templates')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}

              {/* Commented out trigger remains commented out */}
              {/* <TabsTrigger value="model-parameters" className="px-6">{t('modelParameters', 'Model Parameters')}</TabsTrigger> */}
              {/* Note: If you uncomment the above, ensure 'modelParameters' key exists in i18n.js */}

              <TabsTrigger value="testing-playground" className="px-6">{t('testingPlayground', 'Testing Playground')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
              <TabsTrigger value="performance-metrics" className="px-6">{t('performanceMetrics', 'Performance Metrics')}</TabsTrigger> {/* STYLE UNCHANGED, Text Translated */}
            </TabsList>

            {/* Tab content values remain in English */}
            <TabsContent value="prompt-templates">
              <LLMPromptTemplates /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="model-parameters">
              <LLMModelParameters /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="testing-playground">
              <LLMTestingPlayground /> {/* Assumes translation handled internally */}
            </TabsContent>
            <TabsContent value="performance-metrics">
              <LLMPerformanceMetrics /> {/* Assumes translation handled internally */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default LLMConfiguration;