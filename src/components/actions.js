import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMP_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMP_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
};

export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    };
};

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
};

export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    };
};

export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    };
};
