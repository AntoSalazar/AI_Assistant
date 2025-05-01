// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define your translation resources
// For larger apps, load these from JSON files (e.g., using i18next-http-backend)
const resources = {
  en: { // English
    translation: { // Default namespace 'translation'
      // Settings Page
      settingsTitle: 'Settings',
      dashboardOverviewTitle: "Dashboard Overview",
      chartTitleConversationsOverTime: "Conversations Over Time",
      accountSettingsTitle: 'Account Settings',
      loggedInAs: 'Logged in as:',
      changePassword: 'Change Password',
      logout: 'Logout',
      systemSettingsTitle: 'System Settings',
      notifications: 'Notifications',
      emailAlerts: 'Email Alerts',
      language: 'Language',
      selectLanguagePlaceholder: 'Select language',
      langEnglish: 'English',
      langSpanish: 'Spanish',
      langFrench: 'French',
      langGerman: 'German',
      langChinese: 'Chinese',
      whatsappConnectionTitle: 'WhatsApp Connection',
      status: 'Status:',
      connected: 'Connected',
      reconnectWhatsapp: 'Reconnect WhatsApp',
      phoneNumber: 'Phone Number:',
      saveChanges: 'Save Changes',
      // Sidebar
      dashboard: "Dashboard",
      conversations: "Conversations",
      knowledgeBase: "Knowledge Base",
      analytics: "Analytics",
      llmConfiguration: "LLM Configuration",
      userManagement: "User Management",
      // Other Components (Add keys as needed)
      mainNavigation: "MAIN NAVIGATION",
      totalConversations: "Total Conversations",
      aiResolutionRate: "AI Resolution Rate",
      avgResponseTime: "Avg. Response Time",
      userSatisfaction: "User Satisfaction",
      analyticsTitle: "Analytics Dashboard", // New
      overview: "Overview", 
      userIntents: "User Intents",
      performance: "Performance",
      conversationsTitle: "Conversations",              // New
      allConversations: "All Conversations",          // New
      activeConversations: "Active",                  // New
      escalatedConversations: "Escalated",              // New
      resolvedConversations: "Resolved",              // New
      savedConversations: "Saved", 
      noConversationIdProvided: "No conversation ID provided", // New
      conversationDetailsTitle: "Conversation Details",       // New
      backToConversations: "Back to Conversations", 
      knowledgeBaseTitle: "Knowledge Base Management",
      knowledgeBaseSubtitle: "Create, manage, and organize your AI knowledge resources",
      contentLibrary: "Content Library",
      productCatalog: "Product Catalog",
      faqManager: "FAQ Manager",
      contentInsights: "Content Insights",
      searchKnowledgeBasePlaceholder: "Search knowledge base...",
      categoryAll: "All Categories",
      categoryProductGuides: "Product Guides",
      categoryPolicies: "Policies",
      categoryPromotions: "Promotions",
      categoryProductInfo: "Product Info",
      categoryShipping: "Shipping",
      categorySupport: "Support",
      addNew: "+ Add New",
      tableColTitle: "Title",
      tableColCategory: "Category",
      tableColLastUpdated: "Last Updated",
      tableColStatus: "Status",
      tableColActions: "Actions",
      statusActive: "Active",
      statusUpdating: "Updating",
      statusArchived: "Archived",
      edit: "Edit",
      view: "View",
      showingItems: "Showing 1-{{count}} of {{count}} items", // Interpolation key
      quickPreviewTitle: "Quick Content Preview",
      previewLabelCategory: "Category:",
      previewLabelLastUpdated: "Last Updated:",
      previewLabelStatus: "Status:",   
      llmConfigurationTitle: "LLM Configuration",   // New
      promptTemplates: "Prompt Templates",        // New
      modelParameters: "Model Parameters",        // New
      testingPlayground: "Testing Playground",    // New
      performanceMetrics: "Performance Metrics",
      userManagementTitle: "User Management", // New
      customers: "Customers",             // New
      supportAgents: "Support Agents",        // New
      adminUsers: "Admin Users",    
      dateRange: "Date Range:",                 // New
      selectPeriodPlaceholder: "Select period",       // New
      last7Days: "Last 7 days",               // New
      last30Days: "Last 30 days",              // New
      last90Days: "Last 90 days",              // New
      yearToDate: "Year to date",             // New
      customRange: "Custom range",            // New
      aiModel: "AI Model:",      
      selectModelPlaceholder: "Select model",       // New
      allModels: "All Models",                // New
      exportLabel: "Export:",
      totalConversations: "Total Conversations",
      aiResolutionRate: "AI Resolution Rate",
      avgResponseTime: "Avg. Response Time",
      userSatisfaction: "User Satisfaction",
      changeFromPreviousPeriod: "+{{value}} from previous period",
      changeSecondsFromPreviousPeriod: "{{value}}s from previous period",
      fewerThanLastPeriod: "{{count}} fewer than last period",
      conversationAnalyticsTitle: "Conversation Analytics",
      conversationAnalyticsDesc: "View detailed conversation trends and patterns",
      viewConversationDetails: "View Conversation Details",
      userIntentAnalysisTitle: "User Intent Analysis",
      userIntentAnalysisDesc: "Explore what your users are asking about",
      viewIntentDetails: "View Intent Details",
      knowledgeBasePerformanceTitle: "Knowledge Base Performance",
      contentUtilized: "Content Utilized",
      contentGaps: "Content Gaps",
      outdatedContent: "Outdated Content",
      recommendedActionsTitle: "Recommended Actions",
      actionAddressGaps: "Address content gaps in {{topic}}",
      actionUserQueriesNoAnswers: "{{count}} user queries without answers",
      actionUpdateSpecs: "Update product specifications for {{topic}}",
      actionLastUpdated: "Last updated {{count}} days ago",
      actionAddDetails: "Add more details to FAQs for {{topic}}",
      actionNeedsEnhancement: "High usage content needs enhancement",
      addContent: "Add Content",
      update: "Update",
      enhance: "Enhance",   
      averageMessages: "Average Messages",
      avgDuration: "Avg. Duration",
      humanEscalations: "Human Escalations",
      changePercentFromPreviousPeriod: "{{value}} from previous period", // Example for % specific
      perConversation: "per conversation",
      conversationStatusDistributionTitle: "Conversation Status Distribution",
      hourlyConversationDistributionTitle: "Hourly Conversation Distribution",
      averageByHourOfDay: "Average by hour of day",
      responseTimeByTopicTitle: "Response Time by Conversation Topic",
      avgResponseTimeSeconds: "Average response time (seconds)",
      peakHours: "Peak: {{hours}}h",
      topic: "Topic",
      resolutionRate: "Resolution Rate",
      statusResolvedAI: "Resolved (AI)",
      statusResolvedHuman: "Resolved (Human)",
      statusAbandoned: "Abandoned",
      statusActive: "Active",
      statusScheduledFollowUp: "Scheduled Follow-up",
      topicProductInquiry: "Product Inquiry",
      topicOrderStatus: "Order Status",
      topicSupportQuery: "Support Query",
      topicWarrantyClaim: "Warranty Claim",
      topicReturnRequest: "Return Request",
      topicTechnicalIssue: "Technical Issue",  
      knowledgeBaseAnalyticsTitle: "Knowledge Base Analytics",
      changePercentFromLastPeriod: "{{value}} from last period", // Or reuse existing change key
      knowledgeBaseCoverageTitle: "Knowledge Base Coverage",
      topPerformingContentTitle: "Top Performing Content",
      contentGapAreasTitle: "Content Gap Areas",
      resolutionPercentage: "({{value}}% resolution)",
      visualSummaryTitle: "Visual Summary",
      mostSearched: "Most Searched",
      searchCount: "({{count}} searches)",
      knowledgeBaseInsightsButton: "Knowledge Base Insights",
      avgTokenUsage: "Avg. Token Usage",
      perResponse: "per response",
      responseTimeTrendTitle: "Response Time Trend",
      modelComparisonTitle: "Model Comparison",
      topFailingIntentsTitle: "Top Failing Intents",
      resourceUsageTitle: "Resource Usage",
      dailyTokenTrendDesc: "Daily token consumption trend",
      averageTokensDaily: "Avg: {{value}} tokens/day",
      totalTokens: "Total: {{value}} tokens",
      metric: "Metric",
      tokenUsage: "Token Usage",
      avgConfidence: "Avg. Confidence",
      intentTechnicalSupport: "Technical Support",
      intentWarrantyClaims: "Warranty Claims",
      intentDeviceCompatibility: "Device Compatibility",
      userIntentsAnalyticsTitle: "User Intents Analytics",
      intentBreakdownTitle: "Intent Breakdown",
      intentBreakdownDesc: "Product inquiries continue to be the leading user intent, followed by order status checks.",
      intentProductInquiry: "Product Inquiry", // Already exists, potentially reusable? Ensure consistency
      intentOrderStatus: "Order Status",     // Already exists, potentially reusable? Ensure consistency
      intentSupportQuery: "Support Query",     // Already exists, potentially reusable? Ensure consistency
      viewDetailedAnalysisButton: "View Detailed Analysis",
      trendingIntentsTitle: "Trending Intents",
      trendIncreasing: "INCREASING",
      trendDecreasing: "DECREASING",
      trendNew: "NEW",
      // intentTechnicalSupport: "Technical Support", // Already exists
      intentReturnsRefunds: "Returns & Refunds",
      intentWarrantyExtensions: "Warranty Extensions",
      trendIncreasedBy: "+{{value}} from last period", // Interpolation for value
      trendDecreasedBy: "-{{value}} from last period", // Interpolation for value
      trendNewShare: "{{value}} of total inquiries",
      backToListButton: "Back to List",
      conversationTopicLabel: "Topic:",
      conversationStartedLabel: "Started", // Only the label part
      roleAiAssistant: "AI Assistant", // Translatable role name
      typeYourMessagePlaceholder: "Type your message...",
      sendButton: "Send",
      handledByLabel: "Handled by:",
      endConversationButton: "End Conversation",
      escalateToAgentButton: "Escalate to Agent",
      attachFileButtonLabel: "Attach File", // Accessibility label
      messageInputLabel: "Message Input", // Accessibility label
      unknownHandler: "Unknown", 
      filterSearchPlaceholder: "Search conversations...",
      filterSearchButton: "Search",
      filterStatusLabel: "Status:",
      filterStatusAll: "All",          // Display text for value="all"
      filterStatusActive: "Active",      // Display text for value="active"
      filterStatusEscalated: "Escalated",  // Display text for value="escalated"
      filterStatusResolved: "Resolved",   // Display text for value="resolved"
      filterStatusPending: "Pending",    // Display text for value="pending"
      filterDateLabel: "Date:",
      filterDateToday: "Today",           // Display text for value="today"
      filterDateLast7Days: "Last 7 days", // Display text for value="7days"
      filterDateLast30Days: "Last 30 days",// Display text for value="30days"
      filterDateCustomRange: "Custom range",// Display text for value="custom"
      filterNewMessageButton: "New Message",
      tableHeaderUser: "User",
      tableHeaderTime: "Time",
      tableHeaderTopic: "Topic",
      tableHeaderStatus: "Status",
      tableHeaderHandledBy: "Handled By",
      tableHeaderActions: "Actions",
      statusActive: "Active",          // Badge text for 'active' status
      statusEscalated: "Escalated",      // Badge text for 'escalated' status
      statusCompleted: "Completed",      // Badge text for 'completed' status
      statusPending: "Pending",        // Badge text for 'pending' status
      actionButtonView: "View",
      actionButtonEnd: "End",
      actionButtonTake: "Take",
      actionButtonSave: "Save",
      paginationShowingInfo: "Showing {{start}} to {{end}} of {{total}} entries", // Interpolation key
      tableNoResults: "No conversations found matching the criteria.",
      metricTitleTotalConversations: "Total Conversations",
      metricTitleAvgResponseTime: "Avg. Response Time",
      metricTitleResolutionRate: "Resolution Rate",
      metricTitleHumanEscalations: "Human Escalations",

      // Keys for MetricCard change phrases (mapped from parsed prop)
      metricChangeFromLastWeek: "{{value}} from last week", // Interpolation
      metricChangeGeneric: "{{value}}", 
      recentConversationsTitle: "Recent Conversations",
      tableHeaderUser: "User",
      tableHeaderTime: "Time",
      tableHeaderIntent: "Intent",
      tableHeaderStatus: "Status",
      tableHeaderResolution: "Resolution",
      tableHeaderActions: "Actions",
      statusActive: "Active",          // Display text for 'active' status badge
      statusEscalated: "Escalated",      // Display text for 'escalated' status badge
      statusCompleted: "Completed",      // Display text for 'completed' status badge
      resolutionAiHandled: "AI Handled",    // Display text for resolution
      resolutionHumanAgent: "Human Agent", // Display text for resolution
      actionButtonView: "View",
         // Keys for TopIntentsChart component
         chartTitleTopUserIntents: "Top User Intents",
         tooltipLabelPercentage: "Percentage", // Label used within the chart tooltip
           // Keys for AIPreview component
      aiPreviewTitle: "AI Response Preview",
      aiPreviewDisclaimer: "This is a preview of how the AI might respond to this FAQ. The actual response may vary based on the context of the conversation.",

       // Keys for ContentInsights Component
      // Filters
      contentInsightsFilterDateRangeLabel: "Date Range",
      contentInsightsFilterContentTypeLabel: "Content Type",
      contentInsightsFilterDateRangePlaceholder: "Select period",
      contentInsightsFilterContentTypePlaceholder: "Select content type",
      contentInsightsFilterDateRangeOpt7: "Last 7 Days",
      contentInsightsFilterDateRangeOpt30: "Last 30 Days",
      contentInsightsFilterDateRangeOpt90: "Last 90 Days",
      contentInsightsFilterDateRangeOptCustom: "Custom Range",
      contentInsightsFilterContentTypeOptAll: "All Content",
      contentInsightsFilterContentTypeOptFaqs: "FAQs",
      contentInsightsFilterContentTypeOptProducts: "Product Information",
      contentInsightsFilterContentTypeOptPolicies: "Policies",
      contentInsightsApplyButton: "Apply",
      contentInsightsExportButton: "Export Report",

      // Metrics (Mapped from data titles)
      contentInsightsMetricTitleTotalItems: "Total Knowledge Items",
      contentInsightsMetricTitleUsageRate: "Content Usage Rate",
      contentInsightsMetricTitleAvgAge: "Avg. Content Age",
      contentInsightsMetricTitleGaps: "Content Gaps",

      // Section Titles
      contentInsightsMostUsedTitle: "Most Used Content",
      contentInsightsGapsTitle: "Content Gaps",
      contentInsightsRecommendationsTitle: "Content Update Recommendations",

      // Content Gaps Table Headers
      contentInsightsGapsHeaderIssue: "Missing Information",
      contentInsightsGapsHeaderFrequency: "Frequency",

      // Update Recommendations Table Headers
      contentInsightsRecommendationsHeaderItem: "Content Item",
      contentInsightsRecommendationsHeaderIssue: "Issue",
      contentInsightsRecommendationsHeaderLastUpdated: "Last Updated",
      contentInsightsRecommendationsHeaderPriority: "Priority",
      contentInsightsRecommendationsHeaderAction: "Action",

      // Frequency / Priority Badge Text (used by getLevelTranslationKey)
      levelHigh: "High",
      levelMedium: "Medium",
      levelLow: "Low",

      // Update Button
      contentInsightsUpdateButton: "Update",
       // Key for FAQCategories component
       faqCategoriesTitle: "Categories",

        // Keys for FAQEditor component
      faqEditorTitleAdd: "Add New FAQ",
      faqEditorTitleEdit: "Edit FAQ",
      faqEditorBackButton: "Back",
      faqEditorSaveButton: "Save",
      faqEditorDeleteButton: "Delete",
      faqEditorSectionBasicInfo: "Basic Information",
      faqEditorSectionAnswer: "Answer",
      faqEditorLabelQuestion: "Question",
      faqEditorLabelCategory: "Category",
      faqEditorLabelProduct: "Related Product",
      faqEditorLabelStatus: "Status",
      faqEditorPlaceholderQuestion: "Enter the frequently asked question",
      faqEditorPlaceholderAnswer: "Enter the answer to this question",
      faqEditorPlaceholderCategory: "Select category",
      faqEditorPlaceholderProduct: "Select related product",
      faqEditorStatusActive: "Active",
      faqEditorStatusInactive: "Inactive",
      faqEditorConfirmDeletePrompt: "Are you sure you want to delete this FAQ?",

       // Keys for FAQList component
       faqListHeaderDesc: "{{count}} frequently asked questions about this category", // Interpolation
       faqListStatusInactive: "Inactive",
       faqListPaginationInfo: "Showing {{start}}-{{end}} of {{total}} FAQs", // Interpolation
       faqListNoResults: "No FAQs found matching your criteria.",
       faqListEditButtonLabel: "Edit FAQ", // Accessibility label for icon button

        // Keys for FAQManager component
      faqManagerSearchPlaceholder: "Search FAQs...",
      faqManagerSelectAllCategories: "All Categories", // Default option in select
      faqManagerButtonAddNew: "Add New",
      faqManagerButtonImport: "Import FAQs",
      faqManagerCategorySelectLabel: "Filter by category", // Accessibility label

           // Key for ProductCatalog component
           productCatalogNoResults: "No products found matching your filters.",

        // Keys for ProductFilters component
        productFiltersSearchPlaceholder: "Search products...",
        productFiltersCategorySelectLabel: "Filter by category", // Accessibility label
        productFiltersSelectAllCategories: "All Categories",// Default option
        productFiltersStatusSelectLabel: "Filter by status", // Accessibility label
        productFiltersSelectAllStatuses: "All Statuses", // Default option
        productFiltersStatusActive: "Active",             // Status option
        productFiltersStatusPreOrder: "Pre-order",          // Status option
        productFiltersStatusSoldOut: "Sold Out",  // Status option
        productFiltersButtonAddNew: "Add New",
        productFiltersButtonGridViewLabel: "Grid View", // Accessibility label
        productFiltersButtonListViewLabel: "List View",// Accessibility label
  
 // Keys for ProductList component
 productListHeaderProduct: "Product",
 productListHeaderCategory: "Category",
 productListHeaderSku: "SKU",
 productListHeaderStatus: "Status",
 productListHeaderActions: "Actions",
 productListButtonEdit: "Edit",
 productListButtonView: "View",
 productListNoResults: "No products to display.",

       // Keys for ProductPreview component
       productPreviewTitle: "Product Details",
       productPreviewBackButton: "Back",
       productPreviewEditButton: "Edit",
       productPreviewLabelCategory: "Category:",
       productPreviewLabelSku: "SKU:",
       productPreviewLabelPrice: "Price Range:",
       productPreviewLabelAvailability: "Availability:",
       productPreviewLabelLastUpdated: "Last Updated:",
       productPreviewValueNotAvailable: "N/A", // Fallback for empty data fields
       productPreviewSectionColors: "Color Variants",
       productPreviewSectionAiResponse: "Sample AI Response",
       productPreviewTabDescription: "Description",
       productPreviewTabSpecifications: "Specifications",
       productPreviewTabFeatures: "Features",
       productPreviewTabRelated: "Related Info",
       productPreviewDescNotAvailable: "No description available.",
       productPreviewSpecPlaceholder: "Specifications information will be displayed here.",
       productPreviewFeaturesPlaceholder: "Features information will be displayed here.",
       productPreviewRelatedPlaceholder: "Related information will be displayed here.",

        // Keys for SimilarQuestions component
      similarQuestionsTitle: "Similar Questions (Alternative Phrasings)",
      similarQuestionsPlaceholder: "Enter a similar question",
      similarQuestionsAddButton: "Add another similar question",
      similarQuestionsRemoveButtonLabel: "Remove question", // Accessibility label
      similarQuestionsInputLabel: "Similar question", // Accessibility label prefix


      // Keys for LLMPerformanceMetrics component
      // Metric Cards
      llmMetricsTitleResponseTime: "Average Response Time",
      llmMetricsTitleAccuracy: "Accuracy Score",
      llmMetricsTitleSatisfaction: "User Satisfaction",
      llmMetricsChangeDesc: "{{arrow}} {{value}} {{phrase}}", // Interpolation key for change description
      llmMetricsPhraseFromLastMonth: "from last month", // Phrase for change description

      // Trends Card
      llmMetricsTitleTrends: "Performance Trends",
      llmMetricsSelectPlaceholder: "Select timeframe",
      llmMetricsSelectOpt7d: "Last 7 days",
      llmMetricsSelectOpt1m: "Last month",
      llmMetricsSelectOpt3m: "Last 3 months",
      llmMetricsSelectOpt1y: "Last year",

      // Chart Legend
      llmMetricsLegendResponseTime: "Response Time (s)",
      llmMetricsLegendAccuracy: "Accuracy (%)",
      llmMetricsLegendSatisfaction: "Satisfaction (%)",

      // Intents Card
      llmMetricsTitleIntents: "Most Common User Intents",
      llmMetricsIntentProductInfo: "Product Information",
      llmMetricsIntentOrderStatus: "Order Status",
      llmMetricsIntentTechSupport: "Technical Support",
      llmMetricsIntentComplaint: "Complaint Handling",

      // Errors Card
      llmMetricsTitleErrors: "Top Error Categories",
      llmMetricsErrorIncorrectInfo: "Incorrect Information",
      llmMetricsErrorMisunderstoodIntent: "Misunderstood Intent",
      llmMetricsErrorMissingContext: "Missing Context",
      llmMetricsErrorHallucinations: "Hallucinations",
 

      // Keys for LLMPromptTemplates component
      llmPromptsTitle: "Prompt Template Library",
      llmPromptsButtonAddNew: "Add New",
      llmPromptsButtonEdit: "Edit",
      llmPromptsHeaderName: "Template Name",
      llmPromptsHeaderPurpose: "Purpose",
      llmPromptsHeaderModified: "Last Modified",
      llmPromptsHeaderStatus: "Status",
      llmPromptsHeaderActions: "Actions",
      llmPromptsStatusActive: "Active", // Badge text
      llmPromptsStatusDraft: "Draft",   // Badge text

        // Keys for LLMTestingPlayground component
        llmPlaygroundTitle: "Testing Playground",
        llmPlaygroundLabelTemplate: "Template",
        llmPlaygroundLabelModel: "Model",
        llmPlaygroundLabelPrompt: "Prompt",
        llmPlaygroundLabelResponse: "Response",
        llmPlaygroundPlaceholderTemplate: "Select a template",
        llmPlaygroundPlaceholderModel: "Select a model",
        llmPlaygroundOptTemplateCustom: "Custom Prompt",
        llmPlaygroundOptTemplateProduct: "Product Inquiry Handler",
        llmPlaygroundOptTemplateSupport: "Support Query Response",
        llmPlaygroundOptTemplateOrder: "Order Status Tracker",
        llmPlaygroundOptModelGpt4o: "GPT-4o",
        llmPlaygroundOptModelGpt4oMini: "GPT-4o Mini",
        llmPlaygroundOptModelClaude3Sonnet: "Claude 3 Sonnet",
        llmPlaygroundPlaceholderPrompt: "Type your prompt here...",
        llmPlaygroundButtonGenerate: "Generate Response",
        llmPlaygroundButtonGenerating: "Generating...",


      // Keys for PromptTemplateEditor component
      promptEditorTitle: "Template Editor",
      promptEditorLabelName: "Template Name",
      promptEditorLabelPurpose: "Purpose",
      promptEditorLabelContent: "Prompt Template",
      promptEditorLabelVariables: "Available Variables",
      promptEditorPlaceholderName: "Enter template name",
      promptEditorPlaceholderPurpose: "What is this template used for?",
      promptEditorPlaceholderContent: "Write your prompt template here...",
      promptEditorButtonCancel: "Cancel",
      promptEditorButtonCreateTemplate: "Create Template", // Combined key
      promptEditorButtonSaveTemplate: "Save Template",   // Combined key

    // Keys for AdminUsers component
    adminUsersSearchPlaceholder: "Search admin users...",
    adminUsersPlaceholderAllRoles: "All Roles",
    adminUsersPlaceholderAllStatuses: "All Statuses",
    adminUsersRoleOptAll: "All Roles",
    adminUsersRoleOptSuper: "Super Admin",
    adminUsersRoleOptAdmin: "Admin",
    adminUsersRoleOptModerator: "Moderator",
    adminUsersStatusOptAll: "All Statuses",
    adminUsersStatusOptActive: "Active",
    adminUsersStatusOptInactive: "Inactive",
    adminUsersButtonNew: "New Admin",
    adminUsersHeaderUser: "Admin User",
    adminUsersHeaderDept: "Department",
    adminUsersHeaderRole: "Role",
    adminUsersHeaderStatus: "Status",
    adminUsersHeaderLogin: "Last Login",
    adminUsersHeaderActions: "Actions",
    adminUsersRoleSuper: "Super Admin", // Badge text
    adminUsersRoleAdmin: "Admin",       // Badge text
    adminUsersRoleModerator: "Moderator", // Badge text
    adminUsersStatusActive: "Active",     // Badge text
    adminUsersStatusInactive: "Inactive",   // Badge text
    adminUsersPaginationInfo: "Showing {{start}}-{{end}} of {{total}} admin users", // Interpolation
    adminUsersActionMenuLabel: "User Actions", // Accessibility label
    adminUsersActionEdit: "Edit",
    adminUsersActionChangeRole: "Change Role",
    adminUsersActionResetPassword: "Reset Password",
    adminUsersActionDelete: "Delete",
    adminUsersNoResults: "No admin users found matching your criteria.",

   
      // Keys for AgentListItem component
      agentStatusOnline: "Online",
      agentStatusOffline: "Offline",
      agentStatusMeeting: "In Meeting",
      agentListButtonView: "View",
      agentListButtonEdit: "Edit",
      agentListActionMenuLabel: "More actions", // Accessibility label
      agentListActionViewDetails: "View Details",
      agentListActionEditProfile: "Edit Profile",
      agentListActionAssignTasks: "Assign Tasks",
      agentListActionDeactivate: "Deactivate",
      // agentListActionDelete: "Delete Agent", // Example if needed

        // Keys for AgentStatistics component
        agentStatsTitle: "Agent Statistics",
        agentStatsLabelTotal: "Total Agents",
        agentStatsLabelOnline: "Currently Online",
        agentStatsLabelAvgLoad: "Average Load",
        agentStatsLabelAvgResponse: "Avg. Response Time",

          // Keys for CustomerChatView component
      chatViewTitlePrefix: "Chat History:",
      chatViewButtonBack: "Back to Profile",
      chatViewButtonExport: "Export Chat",
      chatViewButtonSend: "Send Message",
      chatViewInfoTitleConvo: "Conversation Info",
      chatViewInfoTitlePerf: "AI Performance",
      chatViewInfoTitleRelated: "Related Conversations",
      chatViewInfoLabelStart: "Start Time:",
      chatViewInfoLabelEnd: "End Time:",
      chatViewInfoLabelDuration: "Duration:",
      chatViewInfoLabelMessages: "Messages:",
      chatViewInfoLabelTopic: "Topic:",
      chatViewInfoLabelResolution: "Resolution:",
      chatViewResolutionResolved: "Resolved", // Badge text
      // chatViewResolutionUnresolved: "Unresolved", // Example if needed
      chatViewPerfLabelResponse: "Response Time:",
      chatViewPerfLabelAccuracy: "Accuracy Score:",
      chatViewPerfLabelIntent: "Intent Detection:",
      chatViewPerfLabelKnowledge: "Knowledge Used:",
      chatViewChatWindowTitlePrefix: "Conversation:",
      chatViewSenderAiAssistant: "AI Assistant", // Hardcoded sender name

      // Keys for CustomerListItem component
      customerStatusActive: "Active",
      customerStatusInactive: "Inactive",
      customerStatusBlocked: "Blocked",
      customerSegmentStandard: "Standard",
      customerSegmentPremium: "Premium",
      customerSegmentEnterprise: "Enterprise",
      customerListButtonView: "View",
      customerListButtonEdit: "Edit",
      customerListActionMenuLabel: "More actions", // Accessibility label
      customerListActionViewDetails: "View Details",
      customerListActionEditProfile: "Edit Profile",
      customerListActionBlock: "Block Customer",

         // Keys for CustomerManagement component
         customerMgmtSearchPlaceholder: "Search customers...",
         customerMgmtStatusSelectLabel: "Filter by status", // Accessibility
         customerMgmtPlaceholderAllStatuses: "All Statuses",
         customerMgmtSegmentSelectLabel: "Filter by segment", // Accessibility
         customerMgmtPlaceholderAllSegments: "All Segments",
         customerMgmtStatusOptAll: "All Statuses",
         customerMgmtStatusOptActive: "Active",
         customerMgmtStatusOptInactive: "Inactive",
         customerMgmtStatusOptBlocked: "Blocked",
         customerMgmtSegmentOptAll: "All Segments",
         customerMgmtSegmentOptStandard: "Standard",
         customerMgmtSegmentOptPremium: "Premium",
         customerMgmtSegmentOptEnterprise: "Enterprise",
         customerMgmtButtonAddNew: "Add New",
         customerMgmtHeaderCustomer: "Customer",
         customerMgmtHeaderPhone: "Phone Number",
         customerMgmtHeaderInteraction: "Last Interaction",
         customerMgmtHeaderStatus: "Status",
         customerMgmtHeaderSegment: "Segment",
         customerMgmtHeaderActions: "Actions",
         customerMgmtPaginationInfo: "Showing {{start}}-{{end}} of {{total}} customers", // Interpolation
         customerMgmtNoResults: "No customers found matching your criteria.",

       // Keys for CustomerProfile component
       customerProfileTitle: "Customer Profile",
       customerProfileButtonBack: "Back",
       customerProfileButtonEdit: "Edit",
       customerProfileButtonMessage: "Message",
       customerProfileJoinedLabel: "Customer since:",
       customerProfileButtonChangeStatus: "Change Status",
       customerProfileButtonChangeSegment: "Change Segment",
       customerProfileTabOverview: "Overview",
       customerProfileTabConvos: "Conversations",
       customerProfileTabPrefs: "Preferences",
       customerProfileTabActivity: "Activity Log",
       customerProfileCardTitleContact: "Contact Information",
       customerProfileCardTitleEngagement: "Engagement Statistics",
       customerProfileCardTitleActivity: "Recent Activity",
       customerProfileContactLabelEmail: "Email:",
       customerProfileContactLabelPhone: "Phone:",
       customerProfileContactLabelWhatsApp: "WhatsApp:",
       customerProfileContactLabelLocation: "Location:",
       customerProfileEngagementLabelTotalConvos: "Total Conversations",
       customerProfileEngagementLabelAvgResponse: "Avg. Response Time",
       customerProfileEngagementLabelResolution: "Resolution Rate",
       customerProfileEngagementLabelEscalations: "Human Escalations",
       customerProfileButtonViewChat: "View Chat",
       customerProfileButtonDetails: "Details",
       customerProfilePlaceholderConvos: "Conversation history will be displayed here.",
       customerProfilePlaceholderPrefs: "Customer preferences will be displayed here.",
       customerProfilePlaceholderActivity: "Activity log will be displayed here.",

        // Keys for SupportAgents component
      supportAgentsSearchPlaceholder: "Search agents...",
      supportAgentsStatusSelectLabel: "Filter by status", // Accessibility
      supportAgentsPlaceholderAllStatuses: "All Statuses",
      supportAgentsDeptSelectLabel: "Filter by department", // Accessibility
      supportAgentsPlaceholderAllDepts: "All Departments",
      supportAgentsStatusOptAll: "All Statuses",
      supportAgentsStatusOptOnline: "Online",
      supportAgentsStatusOptOffline: "Offline",
      supportAgentsStatusOptMeeting: "In Meeting",
      supportAgentsDeptOptAll: "All Departments",
      supportAgentsDeptOptTech: "Technical Support",
      supportAgentsDeptOptSales: "Sales Support",
      supportAgentsDeptOptCustomer: "Customer Support",
      supportAgentsButtonAddNew: "Add New",
      supportAgentsHeaderAgent: "Agent",
      supportAgentsHeaderPhone: "Phone Number",
      supportAgentsHeaderDept: "Department",
      supportAgentsHeaderStatus: "Status",
      supportAgentsHeaderLoad: "Load",
      supportAgentsHeaderActions: "Actions",
      supportAgentsNoResults: "No agents found matching your criteria.",

        // Keys for DashboardHeader component
        dashboardHeaderTitle: "WhatsApp AI Assistant Admin Dashboard",
        dashboardHeaderNotificationButtonLabel: "Notifications", // Accessibility label
        dashboardHeaderUserAvatarLabel: "User Menu", // Accessibility label
  
 
    }
  },
  es: { // Spanish
    translation: { // Default namespace 'translation'
      dashboardHeaderTitle: "Dashboard de Administración del Asistente de IA de WhatsApp",
      dashboardHeaderNotificationButtonLabel: "Notificaciones", // Accessibility label
      dashboardHeaderUserAvatarLabel: "Menú de Usuario", // Accessibility label

        // Keys for SupportAgents component (Spanish)
        supportAgentsSearchPlaceholder: "Buscar agentes...",
        supportAgentsStatusSelectLabel: "Filtrar por estado", // Accessibility
        supportAgentsPlaceholderAllStatuses: "Todos los Estados",
        supportAgentsDeptSelectLabel: "Filtrar por departamento", // Accessibility
        supportAgentsPlaceholderAllDepts: "Todos los Departamentos",
        supportAgentsStatusOptAll: "Todos los Estados",
        supportAgentsStatusOptOnline: "En Línea",
        supportAgentsStatusOptOffline: "Desconectado",
        supportAgentsStatusOptMeeting: "En Reunión",
        supportAgentsDeptOptAll: "Todos los Departamentos",
        supportAgentsDeptOptTech: "Soporte Técnico",
        supportAgentsDeptOptSales: "Soporte de Ventas",
        supportAgentsDeptOptCustomer: "Atención al Cliente",
        supportAgentsButtonAddNew: "Añadir Nuevo",
        supportAgentsHeaderAgent: "Agente",
        supportAgentsHeaderPhone: "Teléfono",
        supportAgentsHeaderDept: "Departamento",
        supportAgentsHeaderStatus: "Estado",
        supportAgentsHeaderLoad: "Carga",
        supportAgentsHeaderActions: "Acciones",
        supportAgentsNoResults: "No se encontraron agentes que coincidan con tus criterios.",
  
         // Keys for CustomerProfile component (Spanish)
         customerProfileTitle: "Perfil de Cliente",
         customerProfileButtonBack: "Volver",
         customerProfileButtonEdit: "Editar",
         customerProfileButtonMessage: "Mensaje",
         customerProfileJoinedLabel: "Cliente desde:",
         customerProfileButtonChangeStatus: "Cambiar Estado",
         customerProfileButtonChangeSegment: "Cambiar Segmento",
         customerProfileTabOverview: "Resumen",
         customerProfileTabConvos: "Conversaciones",
         customerProfileTabPrefs: "Preferencias",
         customerProfileTabActivity: "Registro Actividad",
         customerProfileCardTitleContact: "Información de Contacto",
         customerProfileCardTitleEngagement: "Estadísticas de Interacción",
         customerProfileCardTitleActivity: "Actividad Reciente",
         customerProfileContactLabelEmail: "Correo:",
         customerProfileContactLabelPhone: "Teléfono:",
         customerProfileContactLabelWhatsApp: "WhatsApp:",
         customerProfileContactLabelLocation: "Ubicación:",
         customerProfileEngagementLabelTotalConvos: "Conversaciones Totales",
         customerProfileEngagementLabelAvgResponse: "Tiempo Prom. Respuesta",
         customerProfileEngagementLabelResolution: "Tasa Resolución",
         customerProfileEngagementLabelEscalations: "Escalaciones Humanas",
         customerProfileButtonViewChat: "Ver Chat",
         customerProfileButtonDetails: "Detalles",
         customerProfilePlaceholderConvos: "El historial de conversaciones se mostrará aquí.",
         customerProfilePlaceholderPrefs: "Las preferencias del cliente se mostrarán aquí.",
         customerProfilePlaceholderActivity: "El registro de actividad se mostrará aquí.",
   

        // Keys for CustomerManagement component (Spanish)
        customerMgmtSearchPlaceholder: "Buscar clientes...",
        customerMgmtStatusSelectLabel: "Filtrar por estado", // Accessibility
        customerMgmtPlaceholderAllStatuses: "Todos los Estados",
        customerMgmtSegmentSelectLabel: "Filtrar por segmento", // Accessibility
        customerMgmtPlaceholderAllSegments: "Todos los Segmentos",
        customerMgmtStatusOptAll: "Todos los Estados",
        customerMgmtStatusOptActive: "Activo",
        customerMgmtStatusOptInactive: "Inactivo",
        customerMgmtStatusOptBlocked: "Bloqueado",
        customerMgmtSegmentOptAll: "Todos los Segmentos",
        customerMgmtSegmentOptStandard: "Estándar",
        customerMgmtSegmentOptPremium: "Premium",
        customerMgmtSegmentOptEnterprise: "Empresarial",
        customerMgmtButtonAddNew: "Añadir Nuevo",
        customerMgmtHeaderCustomer: "Cliente",
        customerMgmtHeaderPhone: "Teléfono",
        customerMgmtHeaderInteraction: "Última Interacción",
        customerMgmtHeaderStatus: "Estado",
        customerMgmtHeaderSegment: "Segmento",
        customerMgmtHeaderActions: "Acciones",
        customerMgmtPaginationInfo: "Mostrando {{start}}-{{end}} de {{total}} clientes", // Interpolation
        customerMgmtNoResults: "No se encontraron clientes que coincidan con tus criterios.",
  

       // Keys for CustomerListItem component (Spanish)
       customerStatusActive: "Activo",
       customerStatusInactive: "Inactivo",
       customerStatusBlocked: "Bloqueado",
       customerSegmentStandard: "Estándar",
       customerSegmentPremium: "Premium",
       customerSegmentEnterprise: "Empresarial",
       customerListButtonView: "Ver",
       customerListButtonEdit: "Editar",
       customerListActionMenuLabel: "Más acciones", // Accessibility label
       customerListActionViewDetails: "Ver Detalles",
       customerListActionEditProfile: "Editar Perfil",
       customerListActionBlock: "Bloquear Cliente",
      
        // Keys for CustomerChatView component (Spanish)
        chatViewTitlePrefix: "Historial de Chat:",
        chatViewButtonBack: "Volver al Perfil",
        chatViewButtonExport: "Exportar Chat",
        chatViewButtonSend: "Enviar Mensaje",
        chatViewInfoTitleConvo: "Info de Conversación",
        chatViewInfoTitlePerf: "Rendimiento IA",
        chatViewInfoTitleRelated: "Conversaciones Relacionadas",
        chatViewInfoLabelStart: "Hora Inicio:",
        chatViewInfoLabelEnd: "Hora Fin:",
        chatViewInfoLabelDuration: "Duración:",
        chatViewInfoLabelMessages: "Mensajes:",
        chatViewInfoLabelTopic: "Tema:",
        chatViewInfoLabelResolution: "Resolución:",
        chatViewResolutionResolved: "Resuelto", // Badge text
        // chatViewResolutionUnresolved: "No Resuelto", // Example if needed
        chatViewPerfLabelResponse: "Tiempo Respuesta:",
        chatViewPerfLabelAccuracy: "Puntuación Precisión:",
        chatViewPerfLabelIntent: "Detección Intención:",
        chatViewPerfLabelKnowledge: "Conocimiento Usado:",
        chatViewChatWindowTitlePrefix: "Conversación:",
        chatViewSenderAiAssistant: "Asistente IA", // Hardcoded sender name

      // Keys for AgentStatistics component (Spanish)
      agentStatsTitle: "Estadísticas de Agentes",
      agentStatsLabelTotal: "Agentes Totales",
      agentStatsLabelOnline: "Actualmente en Línea",
      agentStatsLabelAvgLoad: "Carga Promedio",
      agentStatsLabelAvgResponse: "Tiempo Prom. Respuesta",

      // Keys for AgentListItem component (Spanish)
      agentStatusOnline: "En Línea",
      agentStatusOffline: "Desconectado",
      agentStatusMeeting: "En Reunión",
      agentListButtonView: "Ver",
      agentListButtonEdit: "Editar",
      agentListActionMenuLabel: "Más acciones", // Accessibility label
      agentListActionViewDetails: "Ver Detalles",
      agentListActionEditProfile: "Editar Perfil",
      agentListActionAssignTasks: "Asignar Tareas",
      agentListActionDeactivate: "Desactivar",
 // agentListActionDelete: "Eliminar Agente", // Example if needed
      // Keys for AdminUsers component (Spanish)
      adminUsersSearchPlaceholder: "Buscar administradores...",
      adminUsersPlaceholderAllRoles: "Todos los Roles",
      adminUsersPlaceholderAllStatuses: "Todos los Estados",
      adminUsersRoleOptAll: "Todos los Roles",
      adminUsersRoleOptSuper: "Super Admin",
      adminUsersRoleOptAdmin: "Admin",
      adminUsersRoleOptModerator: "Moderador",
      adminUsersStatusOptAll: "Todos los Estados",
      adminUsersStatusOptActive: "Activo",
      adminUsersStatusOptInactive: "Inactivo",
      adminUsersButtonNew: "Nuevo Admin",
      adminUsersHeaderUser: "Usuario Admin",
      adminUsersHeaderDept: "Departamento",
      adminUsersHeaderRole: "Rol",
      adminUsersHeaderStatus: "Estado",
      adminUsersHeaderLogin: "Último Acceso",
      adminUsersHeaderActions: "Acciones",
      adminUsersRoleSuper: "Super Admin", // Badge text
      adminUsersRoleAdmin: "Admin",       // Badge text
      adminUsersRoleModerator: "Moderador", // Badge text
      adminUsersStatusActive: "Activo",     // Badge text
      adminUsersStatusInactive: "Inactivo",   // Badge text
      adminUsersPaginationInfo: "Mostrando {{start}}-{{end}} de {{total}} administradores", // Interpolation
      adminUsersActionMenuLabel: "Acciones de Usuario", // Accessibility label
      adminUsersActionEdit: "Editar",
      adminUsersActionChangeRole: "Cambiar Rol",
      adminUsersActionResetPassword: "Restablecer Contraseña",
      adminUsersActionDelete: "Eliminar",
      adminUsersNoResults: "No se encontraron administradores que coincidan con tus criterios.",


       // Keys for PromptTemplateEditor component (Spanish)
       promptEditorTitle: "Editor de Plantilla",
       promptEditorLabelName: "Nombre de Plantilla",
       promptEditorLabelPurpose: "Propósito",
       promptEditorLabelContent: "Plantilla de Prompt",
       promptEditorLabelVariables: "Variables Disponibles",
       promptEditorPlaceholderName: "Introduce el nombre de la plantilla",
       promptEditorPlaceholderPurpose: "¿Para qué se usa esta plantilla?",
       promptEditorPlaceholderContent: "Escribe tu plantilla de prompt aquí...",
       promptEditorButtonCancel: "Cancelar",
       promptEditorButtonCreateTemplate: "Crear Plantilla", // Combined key
       promptEditorButtonSaveTemplate: "Guardar Plantilla", // Combined key

      // Keys for LLMTestingPlayground component (Spanish)
      llmPlaygroundTitle: "Entorno de Pruebas",
      llmPlaygroundLabelTemplate: "Plantilla",
      llmPlaygroundLabelModel: "Modelo",
      llmPlaygroundLabelPrompt: "Prompt",
      llmPlaygroundLabelResponse: "Respuesta",
      llmPlaygroundPlaceholderTemplate: "Seleccionar una plantilla",
      llmPlaygroundPlaceholderModel: "Seleccionar un modelo",
      llmPlaygroundOptTemplateCustom: "Prompt Personalizado",
      llmPlaygroundOptTemplateProduct: "Gestor Consulta Producto",
      llmPlaygroundOptTemplateSupport: "Respuesta Consulta Soporte",
      llmPlaygroundOptTemplateOrder: "Rastreador Estado Pedido",
      llmPlaygroundOptModelGpt4o: "GPT-4o",
      llmPlaygroundOptModelGpt4oMini: "GPT-4o Mini",
      llmPlaygroundOptModelClaude3Sonnet: "Claude 3 Sonnet",
      llmPlaygroundPlaceholderPrompt: "Escribe tu prompt aquí...",
      llmPlaygroundButtonGenerate: "Generar Respuesta",
      llmPlaygroundButtonGenerating: "Generando...",

       // Keys for LLMPromptTemplates component (Spanish)
       llmPromptsTitle: "Biblioteca de Plantillas de Prompt",
       llmPromptsButtonAddNew: "Añadir Nuevo",
       llmPromptsButtonEdit: "Editar",
       llmPromptsHeaderName: "Nombre de Plantilla",
       llmPromptsHeaderPurpose: "Propósito",
       llmPromptsHeaderModified: "Última Modificación",
       llmPromptsHeaderStatus: "Estado",
       llmPromptsHeaderActions: "Acciones",
       llmPromptsStatusActive: "Activo", // Badge text
       llmPromptsStatusDraft: "Borrador", // Badge text

       // Keys for LLMPerformanceMetrics component (Spanish)
      // Metric Cards
      llmMetricsTitleResponseTime: "Tiempo Prom. Respuesta",
      llmMetricsTitleAccuracy: "Puntuación de Precisión",
      llmMetricsTitleSatisfaction: "Satisfacción del Usuario",
      llmMetricsChangeDesc: "{{arrow}} {{value}} {{phrase}}", // Interpolation key
      llmMetricsPhraseFromLastMonth: "desde el mes pasado", // Phrase

      // Trends Card
      llmMetricsTitleTrends: "Tendencias de Rendimiento",
      llmMetricsSelectPlaceholder: "Seleccionar periodo",
      llmMetricsSelectOpt7d: "Últimos 7 días",
      llmMetricsSelectOpt1m: "Último mes",
      llmMetricsSelectOpt3m: "Últimos 3 meses",
      llmMetricsSelectOpt1y: "Último año",

      // Chart Legend
      llmMetricsLegendResponseTime: "Tiempo Respuesta (s)",
      llmMetricsLegendAccuracy: "Precisión (%)",
      llmMetricsLegendSatisfaction: "Satisfacción (%)",

      // Intents Card
      llmMetricsTitleIntents: "Intenciones Más Comunes",
      llmMetricsIntentProductInfo: "Información de Producto",
      llmMetricsIntentOrderStatus: "Estado del Pedido",
      llmMetricsIntentTechSupport: "Soporte Técnico",
      llmMetricsIntentComplaint: "Gestión de Quejas",

      // Errors Card
      llmMetricsTitleErrors: "Principales Categorías de Error",
      llmMetricsErrorIncorrectInfo: "Información Incorrecta",
      llmMetricsErrorMisunderstoodIntent: "Intención Mal Interpretada",
      llmMetricsErrorMissingContext: "Contexto Faltante",
      llmMetricsErrorHallucinations: "Alucinaciones",

        // Keys for SimilarQuestions component (Spanish)
        similarQuestionsTitle: "Preguntas Similares (Formulaciones Alternativas)",
        similarQuestionsPlaceholder: "Introduce una pregunta similar",
        similarQuestionsAddButton: "Añadir otra pregunta similar",
        similarQuestionsRemoveButtonLabel: "Eliminar pregunta", // Accessibility label
        similarQuestionsInputLabel: "Pregunta similar", // Accessibility label prefix
  

 // Keys for ProductPreview component (Spanish)
 productPreviewTitle: "Detalles del Producto",
 productPreviewBackButton: "Volver",
 productPreviewEditButton: "Editar",
 productPreviewLabelCategory: "Categoría:",
 productPreviewLabelSku: "SKU:",
 productPreviewLabelPrice: "Rango de Precio:",
 productPreviewLabelAvailability: "Disponibilidad:",
 productPreviewLabelLastUpdated: "Última Actualización:",
 productPreviewValueNotAvailable: "N/D", // Not Available/No Disponible
 productPreviewSectionColors: "Variantes de Color",
 productPreviewSectionAiResponse: "Respuesta IA de Muestra",
 productPreviewTabDescription: "Descripción",
 productPreviewTabSpecifications: "Especificaciones",
 productPreviewTabFeatures: "Características",
 productPreviewTabRelated: "Info Relacionada",
 productPreviewDescNotAvailable: "No hay descripción disponible.",
 productPreviewSpecPlaceholder: "La información de especificaciones se mostrará aquí.",
 productPreviewFeaturesPlaceholder: "La información de características se mostrará aquí.",
 productPreviewRelatedPlaceholder: "La información relacionada se mostrará aquí.",


      // Keys for ProductList component (Spanish)
      productListHeaderProduct: "Producto",
      productListHeaderCategory: "Categoría",
      productListHeaderSku: "SKU",
      productListHeaderStatus: "Estado",
      productListHeaderActions: "Acciones",
      productListButtonEdit: "Editar",
      productListButtonView: "Ver",
      productListNoResults: "No hay productos para mostrar.",

      // Keys for ProductFilters component (Spanish)
      productFiltersSearchPlaceholder: "Buscar productos...",
      productFiltersCategorySelectLabel: "Filtrar por categoría", // Accessibility label
      productFiltersSelectAllCategories: "Todas las Categorías", // Default option
      productFiltersStatusSelectLabel: "Filtrar por estado",     // Accessibility label
      productFiltersSelectAllStatuses: "Todos los Estados",   // Default option
      productFiltersStatusActive: "Activo",            // Status option
      productFiltersStatusPreOrder: "Pre-pedido",         // Status option
      productFiltersStatusSoldOut: "Agotado",          // Status option
      productFiltersButtonAddNew: "Añadir Nuevo",
      productFiltersButtonGridViewLabel: "Vista de Cuadrícula", // Accessibility label
      productFiltersButtonListViewLabel: "Vista de Lista",    // Accessibility label

      // Key for ProductCatalog component (Spanish)
      productCatalogNoResults: "No se encontraron productos que coincidan con tus filtros.",


      // Keys for FAQManager component (Spanish)
      faqManagerSearchPlaceholder: "Buscar FAQs...",
      faqManagerSelectAllCategories: "Todas las Categorías", // Default option in select
      faqManagerButtonAddNew: "Añadir Nuevo",
      faqManagerButtonImport: "Importar FAQs",
      faqManagerCategorySelectLabel: "Filtrar por categoría", // Accessibility label


       // Keys for FAQList component (Spanish)
       faqListHeaderDesc: "{{count}} preguntas frecuentes sobre esta categoría", // Interpolation
       faqListStatusInactive: "Inactivo",
       faqListPaginationInfo: "Mostrando {{start}}-{{end}} de {{total}} FAQs", // Interpolation
       faqListNoResults: "No se encontraron FAQs que coincidan con tus criterios.",
       faqListEditButtonLabel: "Editar FAQ", // Accessibility label for icon button
 

        // Keys for FAQEditor component (Spanish)
        faqEditorTitleAdd: "Añadir Nueva FAQ",
        faqEditorTitleEdit: "Editar FAQ",
        faqEditorBackButton: "Volver",
        faqEditorSaveButton: "Guardar",
        faqEditorDeleteButton: "Eliminar",
        faqEditorSectionBasicInfo: "Información Básica",
        faqEditorSectionAnswer: "Respuesta",
        faqEditorLabelQuestion: "Pregunta",
        faqEditorLabelCategory: "Categoría",
        faqEditorLabelProduct: "Producto Relacionado",
        faqEditorLabelStatus: "Estado",
        faqEditorPlaceholderQuestion: "Introduce la pregunta frecuente",
        faqEditorPlaceholderAnswer: "Introduce la respuesta a esta pregunta",
        faqEditorPlaceholderCategory: "Seleccionar categoría",
        faqEditorPlaceholderProduct: "Seleccionar producto relacionado",
        faqEditorStatusActive: "Activo",
        faqEditorStatusInactive: "Inactivo",
        faqEditorConfirmDeletePrompt: "¿Estás seguro de que quieres eliminar esta FAQ?",
  
      
      // Key for FAQCategories component (Spanish)
      faqCategoriesTitle: "Categorías",

      // Keys for ContentInsights Component (Spanish)
      // Filters
      contentInsightsFilterDateRangeLabel: "Rango de Fechas",
      contentInsightsFilterContentTypeLabel: "Tipo de Contenido",
      contentInsightsFilterDateRangePlaceholder: "Seleccionar período",
      contentInsightsFilterContentTypePlaceholder: "Seleccionar tipo",
      contentInsightsFilterDateRangeOpt7: "Últimos 7 Días",
      contentInsightsFilterDateRangeOpt30: "Últimos 30 Días",
      contentInsightsFilterDateRangeOpt90: "Últimos 90 Días",
      contentInsightsFilterDateRangeOptCustom: "Rango Personalizado",
      contentInsightsFilterContentTypeOptAll: "Todo el Contenido",
      contentInsightsFilterContentTypeOptFaqs: "FAQs",
      contentInsightsFilterContentTypeOptProducts: "Información de Producto",
      contentInsightsFilterContentTypeOptPolicies: "Políticas",
      contentInsightsApplyButton: "Aplicar",
      contentInsightsExportButton: "Exportar Reporte",

      // Metrics (Mapped from data titles)
      contentInsightsMetricTitleTotalItems: "Total de Elementos de Conocimiento",
      contentInsightsMetricTitleUsageRate: "Tasa de Uso de Contenido",
      contentInsightsMetricTitleAvgAge: "Antigüedad Prom. Contenido",
      contentInsightsMetricTitleGaps: "Brechas de Contenido",

      // Section Titles
      contentInsightsMostUsedTitle: "Contenido Más Usado",
      contentInsightsGapsTitle: "Brechas de Contenido",
      contentInsightsRecommendationsTitle: "Recomendaciones de Actualización",

      // Content Gaps Table Headers
      contentInsightsGapsHeaderIssue: "Información Faltante",
      contentInsightsGapsHeaderFrequency: "Frecuencia",

      // Update Recommendations Table Headers
      contentInsightsRecommendationsHeaderItem: "Elemento de Contenido",
      contentInsightsRecommendationsHeaderIssue: "Problema",
      contentInsightsRecommendationsHeaderLastUpdated: "Última Actualización",
      contentInsightsRecommendationsHeaderPriority: "Prioridad",
      contentInsightsRecommendationsHeaderAction: "Acción",

      // Frequency / Priority Badge Text (used by getLevelTranslationKey)
      levelHigh: "Alta",
      levelMedium: "Media",
      levelLow: "Baja",

      // Update Button
      contentInsightsUpdateButton: "Actualizar",
       // Settings Page
      settingsTitle: 'Configuración',
         // Keys for TopIntentsChart component (Spanish)
         chartTitleTopUserIntents: "Principales Intenciones de Usuario",
         tooltipLabelPercentage: "Porcentaje", // Label used within the chart tooltip
   
       // Keys for AIPreview component (Spanish)
       aiPreviewTitle: "Vista Previa de Respuesta IA",
       aiPreviewDisclaimer: "Esta es una vista previa de cómo la IA podría responder a esta FAQ. La respuesta real puede variar según el contexto de la conversación.",
 
      
      recentConversationsTitle: "Conversaciones Recientes",
      tableHeaderUser: "Usuario",
      tableHeaderTime: "Hora",
      tableHeaderIntent: "Intención",
      tableHeaderStatus: "Estado",
      tableHeaderResolution: "Resolución",
      tableHeaderActions: "Acciones",
      statusActive: "Activo",          // Display text for 'active' status badge
      statusEscalated: "Escalado",      // Display text for 'escalated' status badge
      statusCompleted: "Completado",     // Display text for 'completed' status badge
      resolutionAiHandled: "Gestionado por IA", // Display text for resolution
      resolutionHumanAgent: "Agente Humano", // Display text for resolution
      actionButtonView: "Ver",
      metricTitleTotalConversations: "Conversaciones Totales",
      metricTitleAvgResponseTime: "Tiempo Prom. Respuesta",
      metricTitleResolutionRate: "Tasa de Resolución",
      metricTitleHumanEscalations: "Escalaciones Humanas",

      // Keys for MetricCard change phrases (Spanish)
      metricChangeFromLastWeek: "{{value}} desde la semana pasada", // Interpolation
      metricChangeGeneric: "{{value}}", // Fallback
      tableHeaderUser: "Usuario",
      tableHeaderTime: "Hora",
      tableHeaderTopic: "Tema",
      tableHeaderStatus: "Estado",
      tableHeaderHandledBy: "Gestionado Por",
      tableHeaderActions: "Acciones",
      statusActive: "Activo",          // Badge text for 'active' status
      statusEscalated: "Escalado",      // Badge text for 'escalated' status
      statusCompleted: "Completado",  
      chartTitleConversationsOverTime: "Conversaciones a lo Largo del Tiempo",   // Badge text for 'completed' status
      statusPending: "Pendiente",       // Badge text for 'pending' status
      actionButtonView: "Ver",
      actionButtonEnd: "Finalizar",
      actionButtonTake: "Tomar",
      actionButtonSave: "Guardar",
      paginationShowingInfo: "Mostrando {{start}} a {{end}} de {{total}} entradas", // Interpolation key
      tableNoResults: "No se encontraron conversaciones que coincidan con los criterios.",
      accountSettingsTitle: 'Configuración de la Cuenta',
      loggedInAs: 'Sesión iniciada como:',
      changePassword: 'Cambiar Contraseña',
      logout: 'Cerrar Sesión',
      systemSettingsTitle: 'Configuración del Sistema',
      notifications: 'Notificaciones',
      emailAlerts: 'Alertas por Correo Electrónico',
      language: 'Idioma',
      selectLanguagePlaceholder: 'Seleccionar idioma',
      langEnglish: 'Inglés',
      langSpanish: 'Español',
      langFrench: 'Francés',
      langGerman: 'Alemán',
      langChinese: 'Chino',
      whatsappConnectionTitle: 'Conexión de WhatsApp',
      status: 'Estado:',
      connected: 'Conectado',
      reconnectWhatsapp: 'Reconectar WhatsApp',
      phoneNumber: 'Número de Teléfono:',
      saveChanges: 'Guardar Cambios',
       // Sidebar
      dashboard: "Panel Principal",
      conversations: "Conversaciones",
      knowledgeBase: "Base de Conocimiento",
      analytics: "Analíticas",
      llmConfiguration: "Configuración de LLM",
      userManagement: "Gestión de Usuarios",
       // Other Components (Add keys as needed)
      mainNavigation: "NAVEGACIÓN PRINCIPAL",
      totalConversations: "Conversaciones Totales",
      aiResolutionRate: "Tasa de Resolución de IA",
      avgResponseTime: "Tiempo de Respuesta Prom.",
      userSatisfaction: "Satisfacción del Usuario",
      analyticsTitle: "Panel de Analíticas", // New
      overview: "Resumen General",
      userIntents: "Intenciones del Usuario",
      performance: "Rendimiento",
      conversationsTitle: "Conversaciones",             // New
      allConversations: "Todas las Conversaciones",   // New
      activeConversations: "Activas",                 // New
      escalatedConversations: "Escaladas",             // New
      resolvedConversations: "Resueltas",             // New
      savedConversations: "Guardadas",     
      noConversationIdProvided: "No se proporcionó ID de conversación", // New
      conversationDetailsTitle: "Detalles de la Conversación",       // New
      backToConversations: "Volver a Conversaciones",   
      knowledgeBaseTitle: "Gestión de la Base de Conocimiento",
      knowledgeBaseSubtitle: "Crea, gestiona y organiza tus recursos de conocimiento de IA",
      contentLibrary: "Biblioteca de Contenido",
      productCatalog: "Catálogo de Productos",
      faqManager: "Gestor de FAQ",
      contentInsights: "Estadísticas de Contenido",
      searchKnowledgeBasePlaceholder: "Buscar en la base de conocimiento...",
      categoryAll: "Todas las Categorías",
      categoryProductGuides: "Guías de Producto",
      categoryPolicies: "Políticas",
      categoryPromotions: "Promociones",
      categoryProductInfo: "Información de Producto",
      categoryShipping: "Envíos",
      categorySupport: "Soporte",
      addNew: "+ Añadir Nuevo",
      tableColTitle: "Título",
      tableColCategory: "Categoría",
      tableColLastUpdated: "Última Actualización",
      tableColStatus: "Estado",
      tableColActions: "Acciones",
      statusActive: "Activo",
      statusUpdating: "Actualizando",
      statusArchived: "Archivado",
      edit: "Editar",
      view: "Ver",
      showingItems: "Mostrando 1-{{count}} de {{count}} elementos", // Interpolation key
      quickPreviewTitle: "Vista Rápida del Contenido",
      previewLabelCategory: "Categoría:",
      previewLabelLastUpdated: "Última Actualización:",
      previewLabelStatus: "Estado:", 
      llmConfigurationTitle: "Configuración de LLM", // New
      promptTemplates: "Plantillas de Prompts",     // New
      modelParameters: "Parámetros del Modelo",     // New
      testingPlayground: "Entorno de Pruebas",     // New
      performanceMetrics: "Métricas de Rendimiento",
      userManagementTitle: "Gestión de Usuarios",   // New
      customers: "Clientes",                  // New
      supportAgents: "Agentes de Soporte",     // New
      adminUsers: "Usuarios Administradores",
      dateRange: "Rango de Fechas:",            // New
      selectPeriodPlaceholder: "Seleccionar período", // New
      last7Days: "Últimos 7 días",            // New
      last30Days: "Últimos 30 días",           // New
      last90Days: "Últimos 90 días",           // New
      yearToDate: "Año hasta la fecha",        // New
      customRange: "Rango personalizado",       // New
      aiModel: "Modelo de IA:",               // New (matches input)
      selectModelPlaceholder: "Seleccionar modelo",    // New
      allModels: "Todos los Modelos",           // New
      exportLabel: "Exportar:", 
      totalConversations: "Conversaciones Totales",
      aiResolutionRate: "Tasa de Resolución de IA",
      avgResponseTime: "Tiempo de Respuesta Prom.",
      userSatisfaction: "Satisfacción del Usuario",
      changeFromPreviousPeriod: "+{{value}} del período anterior",
      changeSecondsFromPreviousPeriod: "{{value}}s del período anterior",
      fewerThanLastPeriod: "{{count}} menos que el período pasado",
      conversationAnalyticsTitle: "Analíticas de Conversación",
      conversationAnalyticsDesc: "Ver tendencias y patrones detallados de conversación",
      viewConversationDetails: "Ver Detalles de Conversación",
      userIntentAnalysisTitle: "Análisis de Intención del Usuario",
      userIntentAnalysisDesc: "Explora sobre qué preguntan tus usuarios",
      viewIntentDetails: "Ver Detalles de Intención",
      knowledgeBasePerformanceTitle: "Rendimiento de la Base de Conocimiento",
      contentUtilized: "Contenido Utilizado",
      contentGaps: "Brechas de Contenido",
      outdatedContent: "Contenido Desactualizado",
      recommendedActionsTitle: "Acciones Recomendadas",
      actionAddressGaps: "Abordar brechas de contenido en {{topic}}",
      actionUserQueriesNoAnswers: "{{count}} consultas de usuario sin respuesta",
      actionUpdateSpecs: "Actualizar especificaciones de producto para {{topic}}",
      actionLastUpdated: "Última actualización hace {{count}} días",
      actionAddDetails: "Añadir más detalles a las FAQ de {{topic}}",
      actionNeedsEnhancement: "Contenido de alto uso necesita mejora",
      addContent: "Añadir Contenido",
      update: "Actualizar",
      enhance: "Mejorar",
      averageMessages: "Mensajes Promedio",
      avgDuration: "Duración Prom.",
      humanEscalations: "Escalaciones Humanas",
      changePercentFromPreviousPeriod: "{{value}} del período anterior", // Example for % specific
      perConversation: "por conversación",
      conversationStatusDistributionTitle: "Distribución de Estado de Conversación",
      hourlyConversationDistributionTitle: "Distribución Horaria de Conversaciones",
      averageByHourOfDay: "Promedio por hora del día",
      responseTimeByTopicTitle: "Tiempo de Respuesta por Tema de Conversación",
      avgResponseTimeSeconds: "Tiempo de respuesta promedio (segundos)",
      peakHours: "Pico: {{hours}}h",
      topic: "Tema",
      resolutionRate: "Tasa de Resolución",
      statusResolvedAI: "Resuelta (IA)",
      statusResolvedHuman: "Resuelta (Humano)",
      statusAbandoned: "Abandonada",
      statusActive: "Activa",
      statusScheduledFollowUp: "Seguimiento Programado",
      topicProductInquiry: "Consulta de Producto",
      topicOrderStatus: "Estado del Pedido",
      topicSupportQuery: "Consulta de Soporte",
      topicWarrantyClaim: "Reclamación de Garantía",
      topicReturnRequest: "Solicitud de Devolución",
      topicTechnicalIssue: "Problema Técnico",
      knowledgeBaseAnalyticsTitle: "Analíticas de Base de Conocimiento",
      changePercentFromLastPeriod: "{{value}} del período pasado", // Or reuse existing change key
      knowledgeBaseCoverageTitle: "Cobertura de la Base de Conocimiento",
      topPerformingContentTitle: "Contenido con Mejor Rendimiento",
      contentGapAreasTitle: "Áreas con Brechas de Contenido",
      resolutionPercentage: "({{value}}% resolución)",
      visualSummaryTitle: "Resumen Visual",
      mostSearched: "Más Buscado",
      searchCount: "({{count}} búsquedas)",
      knowledgeBaseInsightsButton: "Estadísticas de Base de Conocimiento",
      avgTokenUsage: "Uso Prom. Tokens",
      perResponse: "por respuesta",
      responseTimeTrendTitle: "Tendencia Tiempo de Respuesta",
      modelComparisonTitle: "Comparación de Modelos",
      topFailingIntentsTitle: "Intenciones con Más Fallos",
      resourceUsageTitle: "Uso de Recursos",
      dailyTokenTrendDesc: "Tendencia de consumo diario de tokens",
      averageTokensDaily: "Prom: {{value}} tokens/día",
      totalTokens: "Total: {{value}} tokens",
      metric: "Métrica",
      tokenUsage: "Uso de Tokens",
      avgConfidence: "Confianza Prom.",
      intentTechnicalSupport: "Soporte Técnico",
      intentWarrantyClaims: "Reclamaciones de Garantía",
      intentDeviceCompatibility: "Compatibilidad de Dispositivo",
      userIntentsAnalyticsTitle: "Analíticas de Intenciones del Usuario",
      intentBreakdownTitle: "Desglose de Intenciones",
      intentBreakdownDesc: "Las consultas de productos siguen siendo la principal intención del usuario, seguidas de las comprobaciones del estado del pedido.",
      intentProductInquiry: "Consulta de Producto", // Already exists, potentially reusable? Ensure consistency
      intentOrderStatus: "Estado del Pedido",     // Already exists, potentially reusable? Ensure consistency
      intentSupportQuery: "Consulta de Soporte",     // Already exists, potentially reusable? Ensure consistency
      viewDetailedAnalysisButton: "Ver Análisis Detallado",
      trendingIntentsTitle: "Intenciones en Tendencia",
      trendIncreasing: "AUMENTANDO",
      trendDecreasing: "DISMINUYENDO",
      trendNew: "NUEVO",
      // intentTechnicalSupport: "Soporte Técnico", // Already exists
      intentReturnsRefunds: "Devoluciones y Reembolsos",
      intentWarrantyExtensions: "Extensiones de Garantía",
      trendIncreasedBy: "+{{value}} desde el último período", // Interpolation for value
      trendDecreasedBy: "-{{value}} desde el último período", // Interpolation for value
      trendNewShare: "{{value}} de las consultas totales",
      backToListButton: "Volver a la Lista",
      conversationTopicLabel: "Tema:",
      conversationStartedLabel: "Iniciado", // Only the label part
      roleAiAssistant: "Asistente IA", // Translatable role name
      typeYourMessagePlaceholder: "Escribe tu mensaje...",
      sendButton: "Enviar",
      handledByLabel: "Gestionado por:",
      endConversationButton: "Finalizar Conversación",
      escalateToAgentButton: "Escalar a Agente",
      attachFileButtonLabel: "Adjuntar Archivo", // Accessibility label
      messageInputLabel: "Entrada de Mensaje", // Accessibility label
      unknownHandler: "Desconocido", 
      filterSearchPlaceholder: "Buscar conversaciones...",
      filterSearchButton: "Buscar",
      filterStatusLabel: "Estado:",
      dashboardOverviewTitle: "Resumen del Panel",
      filterStatusAll: "Todos",         // Display text for value="all"
      filterStatusActive: "Activo",       // Display text for value="active"
      filterStatusEscalated: "Escalado",   // Display text for value="escalated"
      filterStatusResolved: "Resuelto",    // Display text for value="resolved"
      filterStatusPending: "Pendiente",   // Display text for value="pending"
      filterDateLabel: "Fecha:",
      filterDateToday: "Hoy",            // Display text for value="today"
      filterDateLast7Days: "Últimos 7 días",// Display text for value="7days"
      filterDateLast30Days: "Últimos 30 días",// Display text for value="30days"
      filterDateCustomRange: "Rango personalizado",// Display text for value="custom"
      filterNewMessageButton: "Nuevo Mensaje",
      // ... add keys for all other translatable strings in your app
    }
  },
  // Add other languages (fr, de, zh) here...
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if detected language is not available
    // lng: 'en', // Or force a specific language, detectors override this
    debug: process.env.NODE_ENV === 'development', // Enable debug output in development
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // Cache user language preference in localStorage
      caches: ['localStorage'],
    },
    // Default namespace (optional, but good practice)
    ns: ['translation'],
    defaultNS: 'translation',
  });

export default i18n;