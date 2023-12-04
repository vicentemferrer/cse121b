async function getData(url) {
  return fetch(url).then(res => res.json())
}

async function getUserInfo(username, { limit = 30 }) {
  const accountUrl = `https://api.github.com/users/${username}`
  const reposUrl = `https://api.github.com/users/${username}/repos`

  const userInfo = {
    'login': '',
    'avatar_url': '',
    'name': '',
    'location': '',
    'bio': '',
    'created_at': '',
    'updated_at': '',
    'html_url': ''
  }

  const account = getData(accountUrl)
  const repos = getData(reposUrl)

  await Promise.allSettled([account, repos])
    .then(async ([accountInfo, reposList]) => {
      Object.keys(userInfo).forEach(key => userInfo[key] = accountInfo.value[key])

      console.log(reposList)

      reposList.value.sort((a, b) => {
        const dateA = new Date(a['updated_at'])
        const dateB = new Date(b['updated_at'])

        if (dateA < dateB) return 1
        if (dateA > dateB) return -1
        return 0
      })

      const languages = reposList.value.map(async ({ languages_url }, i) => {
        if (i < limit) {
          const languagesInfo = getData(languages_url)
          return languagesInfo
        }
      })

      await Promise.allSettled(languages)
        .then(data => userInfo['languages'] = data.map(({ value }) => (value)).filter(obj => obj && Object.getOwnPropertyNames(obj).length > 0))
    })

  return userInfo
}

function languagesTemplate(languages) {
  const languagesData = Object.fromEntries(
    [...new Set(languages.reduce((acc, elem) => [...acc, ...Object.keys(elem)], []))]
      .map((key) => [key, 0])
  )

  languages.forEach((elem) => {
    Object.keys(languagesData).forEach(key => {
      if (key in elem) languagesData[key] += elem[key]
    })
  })

  return languagesData
}

export { getUserInfo, languagesTemplate }