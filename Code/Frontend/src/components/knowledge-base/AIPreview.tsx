import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Card, CardContent } from '@/components/ui/card';

interface AIPreviewProps {
  answer: string; // Data - Not Translated
}

const AIPreview: React.FC<AIPreviewProps> = ({ answer }) => {
  const { t } = useTranslation(); // Initialize translation hook

  // Function logic remains unchanged - processes data, no UI text
  const processAnswer = (text: string) => {
    // Simple processing - in a real app this would be more sophisticated
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const firstTwoSentences = sentences.slice(0, 2).join('. ');
    return firstTwoSentences.length > 150
      ? firstTwoSentences.substring(0, 150) + '...'
      : firstTwoSentences + '.';
  };

  // Processed answer - Data - Not Translated
  const processedAnswerText = processAnswer(answer);

  return (
    // Styles remain unchanged
    <div className="space-y-4">
       {/* Title - UI Text - Translated */}
      <h2 className="text-lg font-semibold">
        {t('aiPreviewTitle', 'AI Response Preview')}
      </h2>
       {/* Card structure remains unchanged */}
      <Card className="bg-muted">
        <CardContent className="p-4">
           {/* Displaying processed answer - Data - Not Translated */}
          <div className="bg-blue-50 rounded-xl p-4 text-sm">
            "{processedAnswerText}"
          </div>
        </CardContent>
      </Card>
       {/* Disclaimer Text - UI Text - Translated */}
      <p className="text-xs text-slate-500">
        {t('aiPreviewDisclaimer', 'This is a preview of how the AI might respond to this FAQ. The actual response may vary based on the context of the conversation.')}
      </p>
    </div>
  );
};

export default AIPreview;