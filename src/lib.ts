import { SearchFormData } from './interfaces.js'
export function renderBlock (elementId, html) {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast (message, action) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, null)
    }
  }
}
export function search (callback):void {
  callback() ? console.log(callback()) : console.log('No data recieved')
}
export function gatherSearchData ():SearchFormData {
  const gatheredData:SearchFormData = {
    city: (<HTMLInputElement>document.getElementById('city')).value,
    checkInDate: (<HTMLInputElement>document.getElementById('check-in-date')).value,
    checkOutDate: (<HTMLInputElement>document.getElementById('check-out-date')).value
  }
  return gatheredData

}

