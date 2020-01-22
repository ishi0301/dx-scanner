import { PracticeImpact } from '../model';

export type ArgumentsProvider = {
  uri: string;
  auth: string | undefined;
  json: boolean;
  fail: PracticeImpact | 'all'; // optional as the AP is used also with command dxs practices
  recursive: boolean; // optional as the AP is used also with command dxs practices
  ci: boolean;
};
