import {
  MESSAGES_SUBSCRIPTION,
  MESSAGE_EDIT_SUBSCRIPTION,
  MESSAGE_DELETE_SUBSCRIPTION,
  NEW_REACTION_SUBSCRIPTION,
  UPDATE_REACTION_SUBSCRIPTION,
  REMOVE_REACTION_SUBSCRIPTION,
} from 'apis/Message';
import { COMPANY_NAME } from 'utils/config';

const Subscribe = ({ subscribeToMore, communityUrl, channelUrl }) => {
  subscribeToMore({
    document: MESSAGES_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      const { newMessage } = subscriptionData.data;

      let result = { ...prev };
      if (result.messages[0].channel.url === newMessage.channel.url) {
        const messagesData = result.messages.filter(message => message.id === newMessage.id);
        if (messagesData.length === 0) {
          result = {
            ...result,
            messages: [...result.messages, newMessage],
          };
        } else {
          const indexE = result.messages.indexOf(messagesData[0]);
          result.messages[indexE] = newMessage;
        }
      }

      return result;
    },
  });

  subscribeToMore({
    document: MESSAGE_EDIT_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.editMessage) return prev;
      const { editMessage } = subscriptionData.data;

      const updatedMessageIndex = prev.messages.findIndex(({ id }) => id === editMessage.id);
      prev.messages.splice(updatedMessageIndex, 1, editMessage);
      return {
        ...prev,
        messages: prev.messages,
      };
    },
  });

  subscribeToMore({
    document: MESSAGE_DELETE_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.deleteMessage) return prev;
      const { deleteMessage } = subscriptionData.data;
      const updatedMessages = prev.messages.filter(({ id }) => id !== deleteMessage.id);

      return {
        ...prev,
        messages: updatedMessages,
      };
    },
  });

  subscribeToMore({
    document: NEW_REACTION_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.newReaction) return prev;
      const { newReaction: reaction } = subscriptionData.data;

      const updatedMessageIndex = prev.messages.findIndex(({ id }) => id === reaction.message.id);
      prev.messages[updatedMessageIndex].reactions.push(reaction);

      return {
        ...prev,
        messages: prev.messages,
      };
    },
  });

  subscribeToMore({
    document: UPDATE_REACTION_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.updatedReaction) return prev;
      const { updatedReaction } = subscriptionData.data;

      const updatedMessageIndex = prev.messages.findIndex(
        ({ id }) => id === updatedReaction.message.id
      );
      const updatedMessages = [...prev.messages];

      const reactionIndex = updatedMessages[updatedMessageIndex].reactions.findIndex(
        ({ id }) => id === updatedReaction.id
      );

      updatedMessages[updatedMessageIndex].reactions.splice(reactionIndex, 1, updatedReaction);

      return {
        ...prev,
        messages: updatedMessages,
      };
    },
  });

  subscribeToMore({
    document: REMOVE_REACTION_SUBSCRIPTION,
    variables: {
      channelUrl: `${communityUrl}/${channelUrl}`,
      tenant: COMPANY_NAME(),
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data || !subscriptionData.data.removedReaction) return prev;

      const { id: reactionId } = subscriptionData.data.removedReaction;

      const updatedMessages = prev.messages.map(message => ({
        ...message,
        reactions: message.reactions.filter(({ id }) => id !== reactionId),
      }));

      return {
        ...prev,
        messages: updatedMessages,
      };
    },
  });
};

export default Subscribe;
