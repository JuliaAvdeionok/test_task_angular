export interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Url {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface HighlightResult {
  title: Title;
  url: Url;
  author: Author;
}

export interface Hit {
  created_at: Date;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: any;
  comment_text?: any;
  num_comments: number;
  story_id?: any;
  story_title?: any;
  story_url?: any;
  parent_id?: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface StoryList {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
}

export interface Story {
  id: number;
  created_at: Date;
  created_at_i: number;
  type: string;
  author: string;
  title: string;
  url: string;
  text?: any;
  points: number;
  parent_id?: any;
  story_id?: any;
  children: any[];
  options: any[];
}
