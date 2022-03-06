import { createSelector } from "reselect";

const applicationState = (state) => state.application;

const applicationLoaded = createSelector(applicationState, (state) => {
  return state.loaded;
});

const applicationData = createSelector(applicationState, (state) => {
  return state.data;
});

const selectors = {
  applicationData,
  applicationLoaded,
};

export default selectors;
