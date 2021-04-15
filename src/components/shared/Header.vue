<template>
	<header v-if="globals" class="app-container text-center">
		<div class="logo">
			<img
				src="@/assets/images/global/square-portrait.png"
				alt="globals.name"
			/>
		</div>
		<div class="site-title">
			<h2 class="title">
				<router-link :to="{ name: 'about' }">
					{{ globals.name }}
				</router-link>
			</h2>
			<p class="subtitle">{{ globals.jobTitle }}</p>
		</div>
		<Nav />
	</header>
</template>

<script lang="ts">
import Nav from "@/components/shared/Nav.vue"

export default {
	name: "Header",
	props: {
		globals: {},
	},
	components: {
		Nav,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/_variables.scss";
.logo {
	margin: 1.5rem auto 0;
	width: 100%;
	text-align: center;

	@media all and (min-width: $breakpoint-lg-min) {
		padding-top: 0.5rem;
	}

	img {
		height: 9.375rem;
		width: 9.375rem;
		border-radius: 50%;
		vertical-align: middle;
		margin: 0 auto;
		border-radius: 50%;
		display: block;
		border: 1px solid $border-med-gray;
		box-shadow: $rainbow-box-shadow-dark;
	}
}
.site-title {
	.title,
	.title a,
	.subtitle {
		margin: 0;
		font-family: $font-tertiary;
		color: $color-primary;
	}
	.title a {
		font-weight: 500;
		text-transform: uppercase;
		font-size: 1.45rem;
		line-height: 1.25rem;
		text-decoration: none;
		letter-spacing: 1px;
		padding: 0;
		background-image: none;
		vertical-align: bottom;
		transition: all 0.4s ease-in-out;

		&:hover {
			text-decoration: underline;
		}
	}
	.subtitle {
		font-style: italic;
		font-weight: 300;
		margin: 0.4688rem 0;
		display: inline-block;
		padding: 0 0.1875rem;
		color: $color-primary;
		border-radius: 4px;
		font-size: 1rem;
		font-family: $font-tertiary;
		letter-spacing: 1px;
		background-color: $highlight-yellow;
	}
}
</style>
