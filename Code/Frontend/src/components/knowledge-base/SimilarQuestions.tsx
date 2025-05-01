import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface SimilarQuestionsProps {
  questions: string[]; // Data - Array of question strings - Not translated here
  onQuestionChange: (index: number, value: string) => void;
  onAddQuestion: () => void;
  onRemoveQuestion: (index: number) => void;
}

const SimilarQuestions: React.FC<SimilarQuestionsProps> = ({
  questions,
  onQuestionChange,
  onAddQuestion,
  onRemoveQuestion
}) => {
  const { t } = useTranslation(); // Initialize hook

  return (
    // Styles remain unchanged
    <div className="space-y-4">
      {/* Title - UI Text - Translated */}
      <h2 className="text-lg font-semibold">
        {t('similarQuestionsTitle', 'Similar Questions (Alternative Phrasings)')}
      </h2>
      <div className="space-y-2">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              value={question} // Data - Not translated
              onChange={(e) => onQuestionChange(index, e.target.value)}
              // Placeholder - UI Text - Translated
              placeholder={t('similarQuestionsPlaceholder', 'Enter a similar question')}
              className="flex-1"
              aria-label={`${t('similarQuestionsInputLabel', 'Similar question')} ${index + 1}`} // Accessibility
            />
            {/* Remove Button - Icon only, added translated aria-label */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemoveQuestion(index)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
              aria-label={t('similarQuestionsRemoveButtonLabel', 'Remove question')} // Accessibility
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
      {/* Add Button - UI Text - Translated */}
      <Button
        variant="outline"
        size="sm"
        onClick={onAddQuestion}
        className="flex items-center"
      >
        <Plus className="h-4 w-4 mr-1 text-whatsapp-primary" />
        <span>{t('similarQuestionsAddButton', 'Add another similar question')}</span>
      </Button>
    </div>
  );
};

export default SimilarQuestions;