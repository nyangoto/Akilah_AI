import { ActionType } from '../action-types';
import { Action, Answer } from '../actions/answer.action.interface';

interface AnswerState {
  loading: boolean;
  error: string | null;
  answer: Answer;
}

const initialState: AnswerState = {
  loading: false,
  error: null,
  answer: { answer: '', confidence_score: '' },
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: AnswerState = initialState,
  action: Action
): AnswerState => {
  switch (action.type) {
    case ActionType.CHECK_ANSWER:
      return {
        ...state,
        loading: true,
        error: null,
        answer: { answer: '', confidence_score: '' },
      };
    case ActionType.CHECK_ANSWER_SUCCESS:
      return { ...state, loading: false, error: null, answer: action.payload };
    case ActionType.CHECK_ANSWER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        answer: { answer: '', confidence_score: '' },
      };
    default:
      return state;
  }
};

export default reducer;
