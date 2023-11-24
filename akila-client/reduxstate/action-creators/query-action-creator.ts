import axios from 'axios';
import { Dispatch } from 'redux';
import { Action as AnswerAction } from '../actions/answer.action.interface';
import { ActionType } from '../action-types';

export const queryAnswer = (query: string) => {
  return async (dispatch: Dispatch<AnswerAction>) => {
    dispatch({ type: ActionType.CHECK_ANSWER });

    try {
      const { data } = await axios.post(
        'http://127.0.0.1:8000/chat/',
        { query },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
          },
        }
      );
      dispatch({ type: ActionType.CHECK_ANSWER_SUCCESS, payload: data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.CHECK_ANSWER_ERROR,
          payload: error.message,
        });
      }
    }
  };
};
