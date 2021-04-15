<template>
	<nav id="nav">
		<router-link :to="{ name: 'about' }"><span>Home</span></router-link>
		<router-link
			:to="{ name: 'posts', query: { page: '1' } }"
			:class="manualActiveClass"
		>
			<span>Blog</span>
		</router-link>
		<router-link :to="{ name: 'resume' }"><span>Resumé</span></router-link>
		<router-link :to="{ name: 'portfolio' }"
			><span>Portfolio</span></router-link
		>
	</nav>
</template>

<script>
export default {
	name: "Nav",
	computed: {
		manualActiveClass() {
			return this.$route.fullPath.split("posts").length > 1
				? "router-link-active router-link-exact-active"
				: ""
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/_variables.scss";

#nav {
	display: block;
	padding: 1rem 0 0;
	text-align: center;
	color: $border-med-gray;

	@media all and (max-width: $breakpoint-sm) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	a {
		margin: 0 0.875rem 0.9375rem;
		text-decoration: none;
		background-image: none;

		@media all and (max-width: $breakpoint-sm) {
			flex-basis: calc(50% - 1.75rem);
			margin-bottom: 1rem;
			margin-top: 1rem;
		}

		&:nth-of-type(3),
		&:nth-of-type(4) {
			@media all and (max-width: $breakpoint-sm) {
				margin-bottom: 0;
			}
		}

		&.router-link-active {
			span {
				font-weight: 700;
				border-radius: 4px;
				color: $white;
				box-shadow: $box-shadow-md;
				background-color: $color-primary;
			}
		}

		&:not(.router-link-active) {
			&:hover {
				span {
					box-shadow: $box-shadow-md;
					text-decoration: none;
					color: $color-primary;
					border: 1px solid transparent;
					background-color: $white;
					border: 1px solid $color-primary;
				}
			}
		}

		span {
			text-transform: uppercase;
			font-weight: 700;
			box-shadow: $box-shadow-md-transparent;
			letter-spacing: 1px;
			padding: 0.25rem 0.4375rem;
			border-radius: 4px;
			border: 1px solid transparent;
			transition: box-shadow 0.3s ease;
		}
	}
}
</style>
