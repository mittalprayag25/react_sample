export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('sample-state');
    if(serializeState === null) {
      return undefined;
    }

    return JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('sample-state', serializedState);
  } catch (err) {
    //Did not save
  }
};
