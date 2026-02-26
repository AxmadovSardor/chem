export type Difficulty = 'AS' | 'A2';

export type TopicCategory =
  | 'functional'
  | 'reaction'
  | 'mechanism'
  | 'structure';

export interface TopicNode {
  id: string;
  name: string;
  category: TopicCategory;
  summary: string;
  definition: string;
  formula: string;
  functionalGroup: string;
  physicalProperties: string[];
  reactions: {
    type: string;
    conditions: string;
    catalyst?: string;
    equation: string;
    mechanism: string;
  }[];
  isomerism: string[];
  examTips: string[];
  difficulty: Difficulty;
}

export interface ConnectionEdge {
  source: string;
  target: string;
  label: string;
  relationType: TopicCategory;
}
