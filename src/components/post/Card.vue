<template>
	<router-link
		:to="{
			name: 'post',
			params: { slug: post.slug },
		}"
		class="post"
	>
		<div class="post-header">
			<div class="img-wrapper">
				<img :src="post.featured_image" :alt="post.featured_image_alt" />
			</div>
			<h6>
				<span>{{ post.title }}</span>
			</h6>
		</div>
		<p>
			<b>{{ formattedDate(post.published) }}</b>
			{{ post.summary }}
		</p>
	</router-link>
</template>

<script>
import moment from "moment"

export default {
	name: "Card",
	props: {
		post: {},
	},
	methods: {
		formattedDate(isoString) {
			return moment(isoString).format("dddd, MMMM D, YYYY")
		},
	},
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
a {
	display: flex;
	flex-direction: column;
	padding: 15px;
	border-radius: 4px;
	box-shadow: $box-shadow-md;
	background-image: $rainbow-gradient-light;
	height: 100%;
	background-size: 100% 3.5px;
	background-position: top;
	transition: all 0.3s ease;

	&:hover {
		border-radius: 4px;
		box-shadow: $box-shadow-md;
		transform: scale(1.015);

		span {
			text-decoration: none;
		}
	}
}

.post-header {
	overflow: hidden;
	margin-top: 1rem;

	.img-wrapper {
		float: left;
		position: relative;
		height: 2.625rem;
		width: 2.625rem;
		border: 1px solid $color-primary;
		margin: 0.1875rem 0.625rem 3px 3px;
		box-shadow: rgba($color-primary, 0.5) 0 1px 1px,
			rgba($color-primary, 0.5) 0 -1px 1px, rgba($color-primary, 0.5) 1px 0 1px,
			rgba($color-primary, 0.5) -1px 0 1px;
		border-radius: 50%;
		// margin-right: calc(0.9375rem + 3px);
		text-align: center;
		// box-sizing: content-box;

		img {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			max-width: 100%;
			height: 1.875rem;
			transform: translate(-50%, -50%);
		}
	}
}

h6 {
	text-transform: none;
	font-family: $font-secondary;
	margin-top: 0;

	span {
		font-weight: 800;
		max-width: calc(100% - 55px);
		display: inline-block;
		font-size: 1.125rem;
	}
}

p {
	font-weight: 400;
	font-family: $font-secondary;
	font-size: 14px;
	margin-bottom: 15px;
	line-height: 1.8491428572em;

	b {
		text-transform: uppercase;
		font-weight: 600;
	}
}
</style>
