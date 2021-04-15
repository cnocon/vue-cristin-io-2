<template>
	<main class="posts-page site-content">
		<PageHeader iconClass="fad fa-rss" text="Blog" />
		<div class="container app-container">
			<div class="row post-summary-list" v-if="posts">
				<Teaser
					v-for="post in posts"
					:class="`post-summary`"
					:post="post"
					:key="post.slug"
					prevText="Newer Posts"
					nextText="Older Posts"
				/>
			</div>
			<div class="row summary-list" v-if="posts">
				<div class="col-12">
					<Pagination
						:perPage="perPage"
						:currentPage="page"
						:totalItems="totalPosts"
						routeName="posts"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { mapState } from "vuex"
import PageHeader from "@/components/shared/PageHeader.vue"
import Teaser from "@/components/post/Teaser.vue"
import Pagination from "@/components/shared/Pagination.vue"

export default {
	name: "Posts",
	data() {
		return {
			perPage: 4,
		}
	},
	components: {
		PageHeader,
		Teaser,
		Pagination,
	},
	computed: {
		page() {
			return parseInt(this.$route.query.page) || 1
		},
		...mapState("post", ["posts", "totalPosts"]),
	},
	created() {
		// const currentPage = parseInt(parseInt(this.$route.params.page)) || 1
		this.$store.dispatch("post/fetchPosts", {
			page: this.page,
			perPage: this.perPage,
			excludeBody: true,
		})
	},
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
main {
	margin: 0 auto;
}
</style>
