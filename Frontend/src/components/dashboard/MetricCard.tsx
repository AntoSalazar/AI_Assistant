import React from 'react';
import { useTranslation } from 'react-i18next'; // Import hook
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming this utility exists

type MetricCardProps = {
  title: string; // This will be translated based on its value
  value: string; // Data - Not translated
  change: string; // e.g., "+12% from last week" - Phrase part translated, value interpolated
  isPositive: boolean;
  isNegative?: boolean;
};

// Helper function to map known titles to translation keys
// In a larger app, this mapping might be more sophisticated or unnecessary
// if the parent component passes keys directly.
const getTitleTranslationKey = (title: string): string => {
  const keyMap: { [key: string]: string } = {
    "Total Conversations": "metricTitleTotalConversations",
    "Avg. Response Time": "metricTitleAvgResponseTime",
    "Resolution Rate": "metricTitleResolutionRate",
    "Human Escalations": "metricTitleHumanEscalations",
    // Add other known titles here
  };
  return keyMap[title] || title; // Return key or original title as fallback key/text
};

// Helper function to parse change string and identify phrase for translation
// This is brittle and depends on the format "VALUE PHRASE"
const parseChangeString = (change: string): { value: string; phrase: string } => {
    // Attempt to match pattern: (optional +/-)(digits/dots)(optional unit like % or s) followed by space and the rest
    const match = change.match(/^([+-]?[\d.]+[%s]?)\s*(.*)$/);
    if (match && match[1] && match[2]) {
        return { value: match[1], phrase: match[2] };
    }
    // Fallback if parsing fails
    return { value: change, phrase: '' };
};

// Helper function to map known change phrases to translation keys
const getChangePhraseTranslationKey = (phrase: string): string => {
    const keyMap: { [key: string]: string } = {
        "from last week": "metricChangeFromLastWeek",
        // Add other known phrases like "from last month", "since yesterday" here
    };
    // If phrase is empty or unknown, create a generic key or return the phrase itself
    return keyMap[phrase] || (phrase ? `metricChangeUnknown_${phrase.replace(/\s+/g, '_')}` : 'metricChangeGeneric');
};


const MetricCard = ({ title, value, change, isPositive, isNegative }: MetricCardProps) => {
  const { t } = useTranslation(); // Initialize translation hook

  // Translate the title based on mapping
  const titleKey = getTitleTranslationKey(title);
  const translatedTitle = t(titleKey, title); // Use original title as fallback text

  // Parse the change string and translate the phrase part
  const { value: changeValue, phrase: changePhrase } = parseChangeString(change);
  const changePhraseKey = getChangePhraseTranslationKey(changePhrase);

  // Translate the phrase, interpolating the extracted value.
  // Provide a sensible fallback including the original phrase if the key is not found.
  const translatedChange = t(changePhraseKey, `${changeValue}${changePhrase ? ' ' + changePhrase : ''}`, {
      value: changeValue // Interpolate the dynamic part
  });


  return (
    // Styles remain unchanged
    <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
       {/* Translated Title */}
      <h3 className="font-semibold text-gray-700 mb-3">{translatedTitle}</h3>
       {/* Value - Data - Not Translated */}
      <p className="text-3xl font-bold text-whatsapp-primary mb-1">{value}</p>
      <div className="flex items-center">
         {/* Styling logic remains unchanged */}
        <span className={cn(
          "text-sm flex items-center gap-1",
          isPositive && !isNegative ? "text-green-600" : "",
          isNegative ? "text-red-600" : ""
        )}>
           {/* Icons remain unchanged */}
          {isPositive && !isNegative && <TrendingUp size={16} />}
          {isNegative && <TrendingDown size={16} />}
           {/* Translated Change string with interpolation */}
          {translatedChange}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;