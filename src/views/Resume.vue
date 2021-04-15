<template>
	<main
		v-if="visible"
		class="resume-page app-container site-content container-fluid"
	>
		<PageHeader
			iconClass="fad fa-file-user"
			text="Resumé & Courses"
		></PageHeader>
		<div v-if="data.jobTitle" class="row resume-row">
			<div class="col-lg-7 col-md-12 left-column">
				<span class="rule"></span>
				<div class="work-history">
					<div class="rule"></div>
					<h3>
						<i class="fal fa-briefcase"></i>
						<span>Work History</span>
					</h3>
					<div class="timeline">
						<ResumeItem
							:item="job"
							itemClass="work-item"
							:key="index"
							v-for="(job, index) in data.experience"
						/>
					</div>
				</div>
			</div>

			<!-- BEGIN RIGHT COLUMN -->
			<div class="col-lg-5 col-md-12 right-column">
				<h3>
					<i class="fal fa-hands-heart"></i>
					<span>Service</span>
				</h3>
				<div class="service">
					<ResumeItem
						v-for="(service, index) in data.volunteering"
						class="service-item"
						descItemClass="list-style-none"
						descClass="pl-0"
						:item="service"
						:key="index"
					/>
				</div>

				<h3>
					<i class="fal fa-code"></i>
					<span>Skills</span>
				</h3>
				<div class="skills">
					<Skill
						v-for="(skill, index) in data.skills"
						:skill="skill"
						:key="index"
					/>
				</div>

				<h3>
					<i class="fal fa-gem adjust-top"></i>
					<span>Assets</span>
				</h3>
				<div class="assets pb-3">
					<ul class="mt-0">
						<li
							v-for="(asset, index) in data.assets"
							:key="index"
							class="asset-item"
						>
							<i class="far fa-check"></i>
							<span v-html="asset"></span>
						</li>
					</ul>
				</div>

				<h3>
					<i class="fal fa-graduation-cap"></i>
					<span>Education</span>
				</h3>
				<div class="education">
					<ResumeItem
						:item="edu"
						:key="index"
						itemClass="edu-item"
						descClass="pl-0"
						descItemClass="list-style-none"
						v-for="(edu, index) in data.education"
					/>
				</div>

				<div class="quote">
					<blockquote>
						<p>
							<i class="fas fa-quote-left"></i>
							<span
								>How we spend our days is, of course, how we spend our lives.
								What we do with this hour, and that one, is what we are
								doing.</span
							>
						</p>
						<cite title="Annie Dillard">— Annie Dillard</cite>
					</blockquote>
				</div>

				<div class="connect">
					<div class="row">
						<div
							v-for="(profile, index) in globals.profiles"
							:key="index"
							class="col-lg-2 col-md-4 col-sm-4 col-6"
						>
							<Icon
								:classes="profile.icon + ` icon-dark icon-rainbow-dark-border`"
								:text="profile.text"
								:url="profile.link"
							></Icon>
						</div>
					</div>
				</div>
			</div>
		</div>

		<PageHeader iconClass="fal fa-pencil" text="Recent Coursework" />
		<div v-if="courseData" class="row">
			<div
				v-for="(course, cIndex) in courseData"
				:key="cIndex"
				class="col-12 col-sm-6 col-md-6 col-lg-4 course"
			>
				<figure>
					<img
						:data-url="course.img"
						:src="course.img"
						:alt="course.name"
						:title="course.name"
					/>
				</figure>
				<h3>
					<a :href="course.url" target="_blank" rel="noopener noreferrer">
						{{ course.name }}
					</a>
				</h3>
				<h4>
					<span class="company">{{ course.company }}</span>
					<span v-if="course.instructor">
						<span class="instructor">&nbsp;|&nbsp;{{ course.instructor }}</span>
					</span>
				</h4>
				<p class="description">
					{{ course.description }}
					<a
						v-if="course.certificate_url"
						:href="course.certificate_url"
						class="btn-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Certificate <i class="far fa-external-link"></i>
					</a>
				</p>
			</div>
		</div>
	</main>
</template>

<script>
import Icon from "@/components/shared/Icon"
import PageHeader from "@/components/shared/PageHeader"
import resumeData from "../../data/resume"
import courseData from "../../data/courses"
import ResumeItem from "@/components/ResumeItem"
import Skill from "@/components/Skill"

export default {
	name: "Resume",
	components: {
		ResumeItem,
		Skill,
		Icon,
		PageHeader,
	},
	props: {
		globals: {},
	},
	data() {
		return {
			visible: false,
			data: resumeData,
			courseData,
		}
	},
	mounted() {
		this.$nextTick(function () {
			this.visible = true
		})
	},
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.timeline {
	@media all and (min-width: $breakpoint-sm-min) {
		padding-left: 68px;
	}
}
.work-history {
	position: relative;
	z-index: 1;
	margin-bottom: 5rem;

	@media all and (min-width: $breakpoint-sm-min) {
		padding-right: 30px;
	}

	.rule {
		position: absolute;
		display: none;
		top: 33px;
		left: 26.5px;
		z-index: 0;
		width: 3px;
		height: calc(100% - 33px);
		background-color: $border-light-gray;

		@media all and (min-width: $breakpoint-sm-min) {
			display: block;
		}
	}
}

.resume-row {
	h3 {
		position: relative;
		padding: 0 0 2rem 4.25rem;
		font-size: 1rem;
		line-height: 3.5rem;
		font-weight: 900;
		font-family: $font-tertiary;
		text-transform: uppercase;

		@media all and (max-width: $breakpoint-sm) {
			&.mt-3 {
				margin-top: -1rem !important;
			}
		}

		i {
			position: absolute;
			left: 0;
			height: 3.5rem;
			width: 3.5rem;
			border-radius: 50%;
			border: 2px solid $color-primary-light;
			background-color: $white;
			z-index: 1;

			&::before {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				color: $color-primary-med;
				background-color: $white;
				font-size: 1.625rem;
			}

			&.adjust-top {
				&::before {
					top: calc(50% + 2px);
				}
			}
		}
	}
	.left-column,
	.right-column {
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
	.left-column {
		h3 {
			@media all and (max-width: $breakpoint-sm) {
				padding-left: 0;
				line-height: inherit;
				padding-bottom: 2rem;
				margin-top: 0.5rem;
			}

			span {
				background-color: $color-primary;
				color: $white;
				border-radius: 4px;
				padding-left: 6px;
				width: 100%;
				display: inline-block;

				@media all and (max-width: $breakpoint-sm) {
					text-align: center;
					width: 100%;
				}
			}

			i {
				@media all and (max-width: $breakpoint-sm) {
					display: none;
				}
			}
		}
	}
	.right-column {
		h3 {
			padding-left: 0;

			@media all and (max-width: $breakpoint-sm) {
				line-height: inherit;
				padding-bottom: 0;
				margin-top: 0;
			}

			span {
				display: inline-block;
				width: 100%;
				z-index: 2;
				background-color: $white;
				padding-left: 6px;
				color: $white;
				background-color: $color-primary;
				border-radius: 4px;

				@media all and (max-width: $breakpoint-sm) {
					text-align: center;
				}
			}

			i {
				display: none;
			}
		}
	}
}
.service {
	@media all and (max-width: $breakpoint-sm) {
		padding-bottom: 3rem;
	}

	.service-item {
		padding-bottom: 2rem;
		@media all and (max-width: $breakpoint-sm) {
			padding-bottom: 1rem;
		}
	}
}
.education {
	@media all and (max-width: $breakpoint-sm) {
		padding-top: 2rem;
	}
}
.assets {
	ul {
		list-style: none;
		padding-left: 0;

		li {
			font-size: 0.875rem;
		}
	}

	.asset-item {
		padding: 5px 0 10px;

		i {
			display: inline-block;
			margin-top: 5px;
			width: 2rem;
			vertical-align: top;
			color: $border-blue-vivid;
		}

		span {
			display: inline-block;
			font-weight: 300;
			width: calc(100% - 2rem);

			b {
				font-weight: 500;
			}
		}
	}
}
.quote {
	padding: 0 0 2rem;
	max-width: 37.5rem;
	margin: 0 auto;

	blockquote {
		background-color: $black;
		padding: 1.875rem;
		padding-bottom: 0.625rem;
		border-radius: 4px;
		left: 0;
		top: 0;

		p {
			color: $white;

			i {
				display: inline-block;
				color: lighten($color-primary, 10%);
				font-size: 1.25rem;
				width: 0.8125rem;
			}

			span {
				display: inline-block;
				padding: 5px 0 0 18px;
				margin-top: -25px;
				font-size: 22px;
				line-height: 1.3em;
				font-family: $font-primary;
				font-weight: 700;
				text-align: center;
			}
		}

		cite {
			display: block;
			color: $white;
			text-align: center;
			font-weight: 500;
			padding-bottom: 20px;
		}
	}
}
.connect {
	padding-top: 2rem;

	@media all and (max-width: $breakpoint-sm) {
		padding-bottom: 2rem;
	}

	[class^="col-"] {
		text-align: center;
		padding: 0 0 1rem;
	}
}
.course {
	margin-bottom: 4rem;
	text-align: center;

	figure {
		display: inline-block;
		text-align: center;
		height: 80px;
		padding-bottom: 1.5rem;
	}
	img {
		text-align: center;
		max-height: 80px;
	}

	h3 {
		margin-top: 0.5rem;
		line-height: 1em;

		a {
			color: $color-primary;
			font-weight: 700;
			font-size: 1.45rem;
			line-height: 1.25em;
			font-family: $font-primary;
			background-image: $rainbow-gradient-med;
			background-size: 100% 2px;
			background-position: center bottom;
			background-repeat: no-repeat;

			&:hover {
				background-image: none;
			}
		}
	}

	h4 {
		font-family: $font-secondary;
		margin-top: 0;
		font-size: 1.125rem;
	}

	.description {
		font-weight: 400;
		margin-top: 0;
	}

	.instructor,
	.company {
		font-family: $font-tertiary;
		font-weight: 400;
	}

	.btn-link {
		display: inline-block;
		line-height: 1.25em;
		font-weight: 400;
		border-bottom: 1px solid $border-med-gray;
		background-image: none;

		&:hover {
			border-bottom: 0;
		}

		i {
			font-size: 0.875rem;
			color: lighten($color-primary, 20%);
			line-height: inherit;
			vertical-align: top;
		}
	}

	// .certificate {
	// 	display: inline-block;
	// 	margin: 1rem 0 0;
	// 	border: 2px solid $color-primary;
	// 	color: $color-primary;
	// 	text-transform: uppercase;
	// 	padding: 1px 10px;
	// 	border-radius: 5px;
	// 	text-decoration: none;
	// 	font-weight: 600;
	// 	font-size: 14px;
	// 	transition: background-color 0.2s, color 0.2s;
	// 	background-image: none;

	// 	&:hover {
	// 		background-color: $color-primary;
	// 		color: $white;
	// 	}
	// }
}
</style>
