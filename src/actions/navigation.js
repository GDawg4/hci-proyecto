import * as types from '../types/navigation';

export const changeSection = (section) =>({
    type: types.SECTION_SELECTED,
    payload: { section }
});