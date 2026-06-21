import { UI_CLOSE_MODAL, UI_OPEN_MODAL } from './uiTypes.js'
export const openModal=(name)=>({type:UI_OPEN_MODAL,payload:name})
export const closeModal=()=>({type:UI_CLOSE_MODAL})
