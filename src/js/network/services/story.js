import { authAxios } from '../instance'
import API_ENDPOINTS from '../endpoint'

const Story = {
  getAllStories: async () => {
    return await authAxios.get(API_ENDPOINTS.GET_ALL_STORIES)
  },
}

export default Story
