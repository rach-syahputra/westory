import Story from '../network/services/story'

const Dashboard = {
  async init() {
    await this._initialData()
  },

  async _initialData() {
    this._showPlacehoder()

    try {
      const storyId = this._getStoryId()

      const response = await Story.getStoryDetail(storyId)

      this._populateStoryDataToCard(response.data.story)
    } catch (error) {
      console.error(error)
    }

    this._hidePlacehoder()
  },

  _populateStoryDataToCard(storyData = null) {
    if (!(typeof storyData === 'object')) {
      throw new Error(`Parameter responseRecords should be an object.`)
    }

    const storyContainer = document.querySelector('#storyContainer')

    const storyCard = document.createElement('story-card')
    storyCard.setAttribute('userName', storyData.name)
    storyCard.setAttribute('imageUrl', storyData.photoUrl)
    storyCard.setAttribute('description', storyData.description)
    storyCard.setAttribute('date', this._formatDate(storyData.createdAt))
    storyCard.setAttribute('height', '350')

    storyContainer.append(storyCard)
  },

  _formatDate(dateStr) {
    const date = new Date(dateStr)

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return formattedDate
  },

  _getStoryId() {
    const searchParam = new URLSearchParams(window.location.search)
    return searchParam.has('id') ? searchParam.get('id') : null
  },

  _showPlacehoder() {
    const StoryCardPlaceholder = document.querySelector('story-card-placeholder')

    StoryCardPlaceholder.style.display = 'block'
  },

  _hidePlacehoder() {
    const StoryCardPlaceholder = document.querySelector('story-card-placeholder')
    StoryCardPlaceholder.style.display = 'none'
  },
}

export default Dashboard
