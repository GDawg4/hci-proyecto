import * as types from '../types/messages';

export const startConversation = (conversationID, messageID, text, content, transmitter, receiver) =>({
    type:types.CONVERSATION_STARTED,
    payload:{conversationID, messageID, text, content, transmitter, receiver}
});

export const sendMessage = (conversationID, messageID, text, content) =>({
    type:types.MESSAGE_ANSWERED,
    payload:{conversationID, messageID, text, content}
});

export const likeMessage = (messageID) =>({
    type:types.MESSAGE_LIKED,
    payload:{messageID}
});

export const deleteMessage = (messageID) =>({
    type:types.MESSAGE_DELETED,
    payload:{messageID}
});