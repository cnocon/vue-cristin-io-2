<template>
	<div class="post-meta">
		<span class="posted-on">
			<time class="entry-date" :datetime="post.published">
				{{ formattedDate(post.published) }}
			</time>
		</span>
		<span class="posted-in">
			<span v-for="cat in post.categories" :key="cat.slug">
				<b>{{ cat.name }}</b>
			</span>
		</span>
	</div>
</template>

<script>
import moment from "moment"

export default {
	name: "Meta",
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

.post-meta {
	font-family: $font-secondary;
	font-weight: 400;
	margin-top: 0.9375rem;
	margin-bottom: 1.25rem;
	font-size: 0.875rem;
	line-height: 1.35rem;
	vertical-align: middle;
	color: hsl(194, 10%, 70%);

	@media all and (max-width: $breakpoint-sm) {
		margin-bottom: 0.75rem;
	}
}

.posted-in b,
.posted-on time {
	font-size: 0.875rem;
	line-height: 1.8em;
	vertical-align: top;
	border-radius: 4px;
	padding: 1px 0.5rem 0.125rem;
	margin: 0 0.125rem;
	font-weight: 800;
	letter-spacing: 1px;
	color: $color-primary;
}

.posted-in {
	display: block;
	text-align: center;

	b {
		background-color: $color-primary;
		color: $white;
		font-family: $font-primary;
		font-weight: 700;

		@media all and (max-width: $breakpoint-sm) {
			font-size: 0.8125rem;
		}
	}
}

.posted-on {
	display: block;
	text-align: center;
	margin-bottom: 10px;

	time {
		text-transform: uppercase;
		border: 0;
		margin-left: 0;
		padding-left: 0.25rem;
		font-size: 1.125rem;

		@media all and (max-width: $breakpoint-sm) {
			font-size: 1rem;
		}
	}
}
</style>
