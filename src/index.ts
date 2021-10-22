import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { chekinDate, chekoutDate } from './dates.js'


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Testina', 'img/avatar.png', 0)
  renderSearchFormBlock(chekinDate, chekoutDate)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'OK', handler: () => {console.log('Уведомление закрыто')}}
  )
})
