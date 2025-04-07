
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AIPreviewProps {
  answer: string;
}

const AIPreview: React.FC<AIPreviewProps> = ({ answer }) => {
  // In a real app, this might process the answer through an API
  // Here we'll just truncate it to simulate a summary
  const processAnswer = (text: string) => {
    // Simple processing - in a real app this would be more sophisticated
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const firstTwoSentences = sentences.slice(0, 2).join('. ');
    return firstTwoSentences.length > 150 
      ? firstTwoSentences.substring(0, 150) + '...' 
      : firstTwoSentences + '.';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">AI Response Preview</h2>
      <Card className="bg-muted">
        <CardContent className="p-4">
          <div className="bg-blue-50 rounded-xl p-4 text-sm">
            "{processAnswer(answer)}"
          </div>
        </CardContent>
      </Card>
      <p className="text-xs text-slate-500">
        This is a preview of how the AI might respond to this FAQ. The actual response may vary 
        based on the context of the conversation.
      </p>
    </div>
  );
};

export default AIPreview;
