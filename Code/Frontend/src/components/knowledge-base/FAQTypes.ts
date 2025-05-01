
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  isExpanded?: boolean;
  isActive?: boolean;
  relatedProduct?: string;
  similarQuestions?: string[];
}

export interface CategoryList {
  name: string;
  count: number;
  selected: boolean;
}
