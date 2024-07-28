import { authAxios } from '../instance'
import API_ENDPOINTS from '../endpoint'

const Story = {
  getAllStories: async () => {
    return await authAxios.get(API_ENDPOINTS.STORIES)
  },

  addStory: async ({ description, photo }) => {
    const requestBody = {
      description,
      photo,
    }
    return await authAxios.post(API_ENDPOINTS.STORIES, requestBody)
  },
}

export default Story
