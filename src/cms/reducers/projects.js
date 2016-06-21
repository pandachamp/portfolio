import {
  FETCH_PROJECTS, 
  FETCH_PROJECT,
  FETCH_NEW_PROJECT,
  SAVE_PROJECT,
  TOGGLE_PROJECT
} from '../constants';

const INITIAL_STATE = { 
  projects: [],
  project: {},
  error: null 
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PROJECTS.SUCCESS:
      return { ...state, projects: action.payload.projects };
    case FETCH_PROJECT.SUCCESS:
      return { ...state, project: action.payload.project };
    case FETCH_NEW_PROJECT.SUCCESS:
      return { ...state, project: {} };
    case TOGGLE_PROJECT.SUCCESS:
      const project = { ...state.projects[action.payload.sortRank], ...action.payload };
      const projects = [...state.projects.slice(0, action.payload.sortRank), project, ...state.projects.slice(action.payload.sortRank + 1)];
      return { ...state, projects };
    case FETCH_PROJECTS.FAILURE:
    case FETCH_PROJECT.FAILURE:
    case SAVE_PROJECT.FAILURE:
    case TOGGLE_PROJECT.FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}