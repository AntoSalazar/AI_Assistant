
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface SimilarQuestionsProps {
  questions: string[];
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
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Similar Questions (Alternative Phrasings)</h2>
      <div className="space-y-2">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input 
              value={question}
              onChange={(e) => onQuestionChange(index, e.target.value)}
              placeholder="Enter a similar question"
              className="flex-1"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onRemoveQuestion(index)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
      <Button 
        variant="outline" 
        size="sm"
        onClick={onAddQuestion}
        className="flex items-center"
      >
        <Plus className="h-4 w-4 mr-1 text-whatsapp-primary" />
        <span>Add another similar question</span>
      </Button>
    </div>
  );
};

export default SimilarQuestions;
