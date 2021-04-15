<template>
	<nav id="nav">
		<router-link :to="{ name: 'about' }"><span>Home</span></router-link>
		<!-- <router-link :to="{ name: 'docs' }"><span>Docs</span></router-link> -->
		<router-link :to="{ name: 'resume' }"
			><span>Resumé & Courses</span></router-link
		>
		<router-link :to="{ name: 'portfolio' }"
			><span>Portfolio</span></router-link
		>
		<router-link
			:to="{ name: 'posts', query: { page: '1' } }"
			:class="manualActiveClass"
		>
			<span>Blog</span>
		</router-link>
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

	a {
		display: inline-block;
		margin: 0 0.875rem 0.875rem !important;
		text-decoration: none;
		text-align: center;
		background-image: none;

		&:nth-of-type(3),
		&:nth-of-type(4) {
			@media all and (max-width: $breakpoint-sm) {
				margin-bottom: 0.5rem !important;
			}
		}

		@media all and (max-width: $breakpoint-sm) {
			margin-right: 0;
		}

		&:hover {
			&.router-link-exact-active {
				span {
					background-color: $white;
				}
			}
		}

		span {
			display: inline-block;
			color: $color-primary;
			background-color: $white;
			text-transform: uppercase;
			font-weight: 900;
			font-family: $font-secondary;
			box-shadow: $box-shadow-md-transparent;
			text-align: center;
			letter-spacing: 1px;
			display: inline-block;
			padding: 4px 7px;
			border-radius: 4px;
			transition: all 0.3s ease;
			box-sizing: border-box;

			@media all and (max-width: $breakpoint-md) {
				font-size: 13px;
				padding: 2px 5px;
			}

			&:hover {
				box-shadow: $box-shadow-sm;
				text-decoration: none;
				color: $nav-text-hover;
			}
		}

		&.router-link-exact-active {
			span {
				color: $black;
				font-weight: 800;
				text-decoration: none;
				box-shadow: $box-shadow-md;
				border-radius: 4px;
			}
		}
	}
}
</style>
