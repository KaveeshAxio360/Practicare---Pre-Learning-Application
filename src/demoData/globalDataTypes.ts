import { Colors } from "./colorCodes";

export const NewsType = {
  PRACTISE_MEMO: 1,
  PRACTICE_NEWS: 2,
  POLICY_UPDATE: 3,
  CLINICAL_UPDATE: 4,
} as const;

export const NewsPriority = {
  MANDATORY: 1,
  HIGH: 2,
  NORMAL: 3,
} as const;

export const NewsCategory = {
  GENERAL: 1,
  CLINICAL: 2,
  ADMINISTRATIVE: 3,
} as const;

/* ---------------- Labels ---------------- */

export const NewsTypeLabel: Record<number, string> = {
  [NewsType.PRACTISE_MEMO]: "Practise Memo",
  [NewsType.PRACTICE_NEWS]: "Practice News",
  [NewsType.POLICY_UPDATE]: "Policy Update",
  [NewsType.CLINICAL_UPDATE]: "Clinical Update",
};

export const NewsPriorityLabel: Record<number, string> = {
  [NewsPriority.MANDATORY]: "Mandatory",
  [NewsPriority.HIGH]: "High",
  [NewsPriority.NORMAL]: "Normal",
};

export const NewsCategoryLabel: Record<number, string> = {
  [NewsCategory.GENERAL]: "General",
  [NewsCategory.CLINICAL]: "Clinical",
  [NewsCategory.ADMINISTRATIVE]: "Administrative",
};

/* ---------------- Colors ---------------- */

export const NewsTypeColor: Record<number, string> = {
  [NewsType.PRACTISE_MEMO]: Colors.primary,
  [NewsType.PRACTICE_NEWS]: Colors.secondary,
  [NewsType.POLICY_UPDATE]: Colors.secondary,
  [NewsType.CLINICAL_UPDATE]: Colors.secondary,
};

export const NewsPriorityColor: Record<number, string> = {
  [NewsPriority.MANDATORY]: Colors.danger,
  [NewsPriority.HIGH]: Colors.warning,
  [NewsPriority.NORMAL]: Colors.secondary,
};

export const NewsBorderColor: Record<number, string> = {
  [NewsPriority.MANDATORY]: Colors.danger,
  [NewsPriority.HIGH]: Colors.warning,
  [NewsPriority.NORMAL]: Colors.primary,
};

export const NewsBackgroundColor: Record<number, string> = {
  [NewsPriority.MANDATORY]: Colors.MandatoryBG,
  [NewsPriority.HIGH]: Colors.white,
  [NewsPriority.NORMAL]: Colors.white,
};

/* ---------------- Icons ---------------- */

export const NewsTypeIcon: any = {
  [NewsType.PRACTISE_MEMO]: "file-text",
  [NewsType.PRACTICE_NEWS]: "newspaper-o",
  [NewsType.POLICY_UPDATE]: "exclamation-triangle",
  [NewsType.CLINICAL_UPDATE]: "stethoscope",
};
