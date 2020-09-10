export const dialogs = {
  state: () => ({
    showEventActionDialog: false
  }),

  mutations: {
    setEventActionDialog(state, val) {
      state.showEventActionDialog = val;
    }
  }
};
