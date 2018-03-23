import getStore from '../src/store';
import { loadState } from '../src/localStorage';


function getTestStore() {
  const persistedState = loadState();

  return getStore(persistedState);
}

module.exports = getTestStore;