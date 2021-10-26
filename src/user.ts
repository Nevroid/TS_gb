import { renderBlock } from './lib.js'

export function setNewUser(newUserName:string, avatarUrl:string):void {
  const newUser = {
    userName: newUserName,
    avatarUrl: avatarUrl,
    favoritesAmount: 0
  }
  localStorage.setItem(newUserName, JSON.stringify(newUser))
}

export function getUserData(userName: string):unknown {
  const user = JSON.parse(localStorage.getItem(userName))
  return user
}
export function getFavoritesAmount(userName:string):unknown {
  const user = JSON.parse(localStorage.getItem(userName))
  return user.favoritesAmount
}

// setNewUser('Petr', 'newUrl')
// console.log(getUserData('Petr'))
// console.log(getFavoritesAmount('Petr'))

// , avatarUrl:string, favoriteItemsAmount:number

export function renderUserBlock (name:string): void {

  const user = getUserData(name)
  console.log(user.userName)
  
  const favoriteItemsAmount = +getFavoritesAmount(name)
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  let userName = 'name'
  let avatar = 'avatar'
  if (typeof user === 'object') {
    userName = user.userName
    avatar = user.avatarUrl
  }
  


  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? 'active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )

  // renderBlock(
  //   'user-block',
  //   `
  //   <div class="header-container">
  //     <img class="avatar" src="." alt="???" />
  //     <div class="info">
  //         <p class="name">???</p>
  //         <p class="fav">
  //           <i class="heart-icon${hasFavoriteItems ? 'active' : ''}"></i>${favoritesCaption}
  //         </p>
  //     </div>
  //   </div>
  //   `
  // )

}
