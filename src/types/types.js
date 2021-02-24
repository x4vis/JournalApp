export const types = {
  //types para AUTH
  login: '[Auth] Login',
  logout: '[Auth] Logout',
  
  //types para UI
  uiSetError: '[UI] Set Error',
  uiRmvError: '[UI] Remove Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish Loading',

  //types para NOTES
  notesAddNew: '[Notes] New notes',
  notesActive: '[Notes] Set active note',
  notesLoad: '[Notes] Load notes',
  notesUpdated: '[Notes] Updated note',
  notesFileUrl: '[Notes] Updated image url',
  notesDelete: '[Notes] Delete note',
  notesLogoutCleaning: '[Notes] Logout cleaning',
}