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

	@media all and (max-width: $breakpoint-sm-min) {
		margin-bottom: 0.75rem;
	}
}

.posted-in b,
.posted-on time {
	font-size: 0.75rem;
	line-height: 1.8em;
	border-radius: 0.25rem;
	padding: 1px 0.5rem;
	margin: 0 2px;
	font-weight: 800;
	letter-spacing: 1px;
	color: $color-primary;

	@media all and (max-width: $breakpoint-sm-min) {
		line-height: 1.675rem;
		font-size: 0.6875rem;
	}
}

.posted-in {
	display: block;
	text-align: center;

	b {
		background-color: $color-primary;
		color: $white;
		font-family: $font-primary;
		font-weight: 700;
	}
}

.posted-on {
	display: block;
	text-align: center;

	time {
		text-transform: uppercase;
		border: 0;
		margin-left: 0;
		padding-left: 0.25rem;
	}
}
</style>
