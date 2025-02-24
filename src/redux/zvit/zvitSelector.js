export const selectZvitSelectedPeriod = state => state.zvit.zvitSelectedPeriod;
export const selectZvitChildrens = state => state.zvit.childrensSelected;
export const selectZvitChild = state => state.zvit.selectedChildData;

export const selectZvitLoadinge = state => state.zvit.isloading;
export const selectZvitLoadingeChildrens = state =>
  state.zvit.isloadingChildrens;
export const selectZvitLoadingeChild = state => state.zvit.isloadingChild;

export const selectZvitStatus = state => state.zvit.zvitStatus;
