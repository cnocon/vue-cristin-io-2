<template>
	<main class="not-found-page site-content">
		<PageHeader
			iconClass="far fa-exclamation-triangle"
			text="Oops!"
		></PageHeader>
		<transition name="fade">
			<div class="text-center">
				<h1>Page Does Not Exist</h1>
				<p>The page at {{ $route.path }} cannot be found.</p>
				<i class="fad fa-bomb fa-10x"></i>
			</div>
		</transition>
	</main>
</template>

<script>
import PageHeader from "@/components/shared/PageHeader.vue"

export default {
	name: "NotFound",
	props: ["badurl"],
	components: {
		PageHeader,
	},
	created() {
		// if (this.$route.params.badurl == 'articles') {
		//   this.$router.push({
		//     path: '/articles?page=:page',
		//     name: 'posts',
		//     params: { page: this.$route.query.page },
		//   })
		// }
	},
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
</style>
