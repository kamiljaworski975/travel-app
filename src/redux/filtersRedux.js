/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

// Utils
const addTags = (tag, arr) => {
  if (arr.includes(tag)) {
    const index = arr.indexOf(tag);
    arr.splice(index, 1);
  } else {
    arr.push(tag);
  }
  return arr;
};

/* ACTIONS */

// action name creator
const reducerName = "filters";
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName("CHANGE_PHRASE");
export const CHANGE_TAGS = createActionName("CHANGE_TAGS");
export const CHANGE_DURATION = createActionName("CHANGE_DURATION");
// action creators
export const changeSearchPhrase = (payload) => ({
  payload,
  type: CHANGE_PHRASE,
});
// TODO - add other action creators
export const changeTags = (payload) => ({ payload, type: CHANGE_TAGS });
export const changeDuration = (payload) => {
  return { payload, type: CHANGE_DURATION };
};
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_TAGS:
      return {
        ...statePart,
        tags: addTags(action.payload, statePart.tags),
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          from:
            action.payload[0] == "from"
              ? action.payload[1]
              : statePart.duration.from,
          to:
            action.payload[0] == "to"
              ? action.payload[1]
              : statePart.duration.to,
        },
      };
    default:
      return statePart;
  }
}
