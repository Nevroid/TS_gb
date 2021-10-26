import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, setNewUser } from './user.js'
import { gatherSearchData, randomize, renderToast, search, testFunction } from './lib.js'
import { chekinDate, chekoutDate } from './dates.js'

setNewUser('Testina', 'img/avatar.png')


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Testina')
  renderSearchFormBlock(chekinDate, chekoutDate)
  renderSearchStubBlock()
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'OK', handler: () => {console.log('Уведомление закрыто')}}
  // )
  document.getElementById('searchBtn').addEventListener('click', (event) => {
    event.preventDefault()
    search(gatherSearchData, testFunction(randomize))  
  })
})


