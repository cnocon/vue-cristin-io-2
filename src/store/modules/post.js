import PostService from "@/services/PostService"

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
	SET_POST(state, post) {
		state.post = post
	},
	SET_TOTAL_POSTS(state, totalPosts) {
		state.totalPosts = totalPosts
	},
}

export const actions = {
	fetchPosts({ commit }, { page, perPage, excludeBody }) {
		return PostService.getPosts({ page, perPage, excludeBody })
			.then((response) => {
				commit("SET_POSTS", response.data.data)
				commit("SET_TOTAL_POSTS", response.data.meta.count)
			})
			.catch((error) => {
				console.log(error)
			})
	},
	getPost({ commit }, postSlug) {
		PostService.getPost(postSlug).then((response) => {
			commit("SET_POST", response.data.data)
		})
	},
}

export const getters = {}
