import { ADD_COMMENT } from './actions';
import { EDIT_COMMENT } from './actions';
import { REMOVE_COMMENT } from './actions';
import { THUMB_UP_COMMENT } from './actions';
import { THUMB_DOWN_COMMENT } from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                },
                ...state
            ];
        case EDIT_COMMENT:
            return state.comments.find(comment => comment.id === action.id).text = action.text;
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
        case THUMB_UP_COMMENT:
            return state.comments.find(comment => comment.id === action.id).votes++;
        case THUMB_DOWN_COMMENT:
            return state.comments.find(comment => comment.id === action.id).votes--;
        default:
            return state;
            // eslint-disable-next-line
    };
};

export default comments;
