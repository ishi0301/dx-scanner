import { IPractice } from '../IPractice';
import { PracticeEvaluationResult, PracticeImpact, ProgrammingLanguage, ProjectComponentPlatform } from '../../model';
import { DxPractice } from '../DxPracticeDecorator';
import { PracticeContext } from '../../contexts/practice/PracticeContext';

@DxPractice({
  id: 'JavaScript.FEBuildtoolUsed',
  name: 'Use JS Frontend Build Tools',
  impact: PracticeImpact.medium,
  suggestion: 'Use build tools to automate all the menial and error prone tasks in web development.',
  reportOnlyOnce: true,
  url: 'https://dxkb.io/p/javascript-front-end-build-tools',
})
export class JsFEBuildtoolUsedPractice implements IPractice {
  async isApplicable(ctx: PracticeContext): Promise<boolean> {
    return (
      (ctx.projectComponent.language === ProgrammingLanguage.JavaScript ||
        ctx.projectComponent.language === ProgrammingLanguage.TypeScript) &&
      ctx.projectComponent.platform === ProjectComponentPlatform.FrontEnd
    );
  }

  async evaluate(ctx: PracticeContext): Promise<PracticeEvaluationResult> {
    if (ctx.packageInspector) {
      if (ctx.packageInspector.hasOneOfPackages(['webpack', 'grunt', 'gulp', 'brunch'])) {
        return PracticeEvaluationResult.practicing;
      } else {
        return PracticeEvaluationResult.notPracticing;
      }
    }
    return PracticeEvaluationResult.unknown;
  }
}
