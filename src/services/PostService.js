import axios from 'axios'

const VUE_APP_BUTTERCMS_API_TOKEN = process.env.VUE_APP_BUTTERCMS_API_TOKEN

const apiClient = axios.create({
  baseURL: 'https://api.buttercms.com/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPosts({ page, perPage, excludeBody }) {
    return apiClient.get(
      `/posts/?page=${page}&page_size=${perPage}&exclude_body=${excludeBody}&auth_token=${VUE_APP_BUTTERCMS_API_TOKEN}`
    )
  },
  getPost(postSlug) {
    return apiClient.get(
      `/posts/${postSlug}?auth_token=${VUE_APP_BUTTERCMS_API_TOKEN}`
    )
  },
}
