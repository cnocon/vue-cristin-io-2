import PostService from '@/services/PostService'

export const namespaced = true

export const state = {
  posts: [],
  totalPosts: 0,
  post: {},
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  fetchPosts({ commit }, { page, perPage, excludeBody }) {
    PostService.getPosts({ page, perPage, excludeBody }).then((response) => {
      commit('SET_POSTS', response.data.data)
    })
  },
}

export const getters = {}
