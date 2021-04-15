<template>
	<div class="skill-unit">
		<h4>
			<i :class="skill.icon"></i>
			{{ skill.name }}
		</h4>
		<div class="bar" :data-percent="skill.percent">
			<div class="progress" :style="progressStyle">
				<span class="score">
					{{ skill.percent }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Skill",
	props: {
		skill: Object,
	},
	computed: {
		progressStyle() {
			return { width: `${this.skill.percent}%` }
		},
	},
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.skill-unit {
	padding-bottom: 2rem;

	@media screen and (max-width: $breakpoint-sm) {
		padding-bottom: 1rem;
		padding-top: 1rem;
	}

	h4 {
		position: relative;
		z-index: 1;
		margin: 0 0 0.25rem;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 1.4em;
		vertical-align: baseline;
		font-family: $font-secondary;
		color: $color-primary;
	}

	i {
		margin: 1px 3px 0 0;
		line-height: 1em;
		vertical-align: bottom;
		font-size: 1rem;
	}

	.bar {
		position: relative;
		box-sizing: content-box;
		z-index: 0;
		background-color: $border-light-gray;
		width: 100%;
		height: 4px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
		display: block;
		outline: 0;

		.progress {
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			width: 0;
			z-index: 1;
			height: 4px;
			border-top-left-radius: 2px;
			border-bottom-left-radius: 2px;
			background-color: $border-light-gray;
			background-image: $pastel-rainbow-bar;
			background-size: cover;
			background-position: center bottom;
			background-repeat: no-repeat;
		}
	}

	.score {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 1.6875rem;
		height: 1.375rem;
		border-top-right-radius: 2px;
		border-top-left-radius: 2px;
		color: $white;
		line-height: 1.25rem;
		font-weight: 900;
		font-size: 0.875rem;
		font-family: $font-secondary;
		text-align: center;
		background-color: $color-primary;
	}
}
</style>
