
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const LLMModelParameters = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Model Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">AI Model</label>
              <select 
                id="model"
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="gpt-4o">GPT-4o</option>
                <option value="gpt-4o-mini">GPT-4o Mini</option>
                <option value="claude-3">Claude 3 Sonnet</option>
                <option value="mistral">Mistral Large</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="max-tokens" className="block text-sm font-medium text-gray-700 mb-1">Max Response Length</label>
              <Input id="max-tokens" type="number" defaultValue={1024} min={1} max={4096} />
            </div>
          </div>
          
          <div className="space-y-6 mt-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">Temperature</label>
                <span className="text-sm text-gray-500">0.7</span>
              </div>
              <Slider defaultValue={[0.7]} max={1} step={0.1} />
              <p className="text-xs text-gray-500 mt-1">Controls randomness: Lower values make responses more focused, while higher values make them more creative.</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="top-p" className="block text-sm font-medium text-gray-700">Top P</label>
                <span className="text-sm text-gray-500">0.9</span>
              </div>
              <Slider defaultValue={[0.9]} max={1} step={0.1} />
              <p className="text-xs text-gray-500 mt-1">Controls diversity: Lower values make responses more focused, while higher values make them more diverse.</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="frequency-penalty" className="block text-sm font-medium text-gray-700">Frequency Penalty</label>
                <span className="text-sm text-gray-500">0.5</span>
              </div>
              <Slider defaultValue={[0.5]} max={2} step={0.1} />
              <p className="text-xs text-gray-500 mt-1">Reduces repetition by penalizing tokens that have already appeared. Higher values reduce repetition more.</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="presence-penalty" className="block text-sm font-medium text-gray-700">Presence Penalty</label>
                <span className="text-sm text-gray-500">0.5</span>
              </div>
              <Slider defaultValue={[0.5]} max={2} step={0.1} />
              <p className="text-xs text-gray-500 mt-1">Encourages new topics by penalizing tokens that have already appeared at all. Higher values encourage more new topics.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button className="bg-whatsapp-primary hover:bg-whatsapp-primary/90">
          Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default LLMModelParameters;
