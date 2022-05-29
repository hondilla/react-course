export const columnVisibility = (state, { type, payload }) => {
  switch (type) {
    case "SET_VISIBILITY":
      const newState = structuredClone(state);
      const column = newState.find(({ alias }) => alias === payload.name);
      column.isVisible = payload.checked;
      return newState;
    default:
      return state;
  }
}