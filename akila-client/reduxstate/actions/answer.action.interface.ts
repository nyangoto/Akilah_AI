import { ActionType } from '../action-types';

export interface Answer {
  answer: string;
  confidence_score: string;
}

interface CheckAnswerAction {
  type: ActionType.CHECK_ANSWER;
  payload?: any;
}

interface CheckAnswerSuccessAction {
  type: ActionType.CHECK_ANSWER_SUCCESS;
  payload: Answer;
}

interface CheckAnswerErrorAction {
  type: ActionType.CHECK_ANSWER_ERROR;
  payload: any;
}

export type Action =
  | CheckAnswerAction
  | CheckAnswerSuccessAction
  | CheckAnswerErrorAction;
