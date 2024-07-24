const Dashboard = {
  async init() {
    await this._initialData()
  },

  async _initialData() {
    try {
      const response = await fetch('/data/data.json')
      const responseJson = await response.json()

      if (!responseJson.error) {
        this._populateStoryDataToCard(responseJson.listStory)
      }
    } catch (error) {
      console.error(error.message)
    }
  },

  _populateStoryDataToCard(storyData = null) {
    if (!(typeof storyData === 'object')) {
      throw new Error(`Parameter responseRecords should be an object.`)
    }

    if (!Array.isArray(storyData)) {
      throw new Error('Parameter transactionsHistory should be an array.')
    }

    const storyList = document.querySelector('story-list .row')

    const stories = storyData.map((item) => {
      const storyCard = document.createElement('story-card')
      storyCard.classList.add('col-md-6')
      storyCard.setAttribute('imageUrl', item.photoUrl)
      storyCard.setAttribute('description', item.description)
      storyCard.setAttribute('date', this._formatDate(item.createdAt))

      return storyCard
    })

    console.log(storyList)
    console.log(...stories)

    storyList.append(...stories)
  },

  _formatDate(dateStr) {
    const date = new Date(dateStr)

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }

    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date)
    return formattedDate
  }
}

export default Dashboard
