import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reduxstate';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
