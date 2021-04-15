<template>
	<main v-if="visible" class="about-page site-content">
		<PageHeader
			iconClass="fal fa-user-astronaut"
			text="A Little About Me"
			alignment="left"
		></PageHeader>
		<div>
			<RotatingHeader />

			<PageHeader
				iconClass="fas fa-concierge-bell"
				text="Services"
				alignment="left"
			></PageHeader>

			<div class="row services-row">
				<div
					v-for="service in data.services"
					:key="service.title"
					class="col-12 col-sm-6 col-md-6 col-lg-3 service"
				>
					<!-- <div class="service"> -->
					<div class="icon"><Icon :classes="service.icon" /></div>
					<h6>{{ service.title }}</h6>
					<p v-html="service.body"></p>
					<!-- </div> -->
				</div>
				<div
					v-for="testo in data.testimonials"
					:key="testo.cite"
					class="col-12 col-lg-6"
				>
					<div class="testimonial">
						<blockquote>
							<i class="fas fa-quote-left"></i>
							<p v-html="testo.content"></p>
							<cite v-html="testo.cite"></cite>
							<span v-html="testo.citePosition" class="cite-info"></span>
						</blockquote>
					</div>
				</div>
			</div>

			<PageHeader
				iconClass="fas fa-rss"
				text="Latest Blog Posts"
				alignment="left"
			></PageHeader>
			<div v-if="posts" class="row posts">
				<div
					v-for="(post, index) in posts"
					:key="index"
					class="col-lg-4 col-md-6 col-sm-12"
				>
					<PostCard :post="post" />
				</div>
			</div>

			<PageHeader
				iconClass="fas fa-handshake"
				text="Connect"
				alignment="left"
			></PageHeader>
			<ul class="row list-style-none text-center connect">
				<li
					v-for="(profile, index) in globals.profiles"
					:key="index"
					class="col-lg-2 col-md-4 col-6"
				>
					<br />
					<Icon
						:classes="profile.icon + ` icon-dark icon-rainbow-dark-border`"
						:text="profile.text"
						:url="profile.link"
					></Icon>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
import { mapState } from "vuex"
import RotatingHeader from "@/components/RotatingHeader.vue"
import PostCard from "@/components/post/Card.vue"
import PageHeader from "@/components/shared/PageHeader.vue"
import Icon from "@/components/shared/Icon.vue"
import pageData from "../../data/about"

export default {
	name: "About",
	data() {
		return {
			visible: false,
			serviceIconStyle: { marginTop: "2rem", marginBottom: "1rem" },
			data: pageData.data,
		}
	},
	components: {
		PageHeader,
		Icon,
		RotatingHeader,
		PostCard,
	},
	props: {
		globals: {},
	},
	computed: mapState("post", ["posts"]),
	created() {
		this.$store.dispatch("post/fetchPosts", {
			page: 1,
			perPage: 6,
			excludeBody: true,
		})
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
.services-row {
	align-items: center;

	.service {
		display: flex;
		flex-direction: column;
		align-content: space-between;
		text-align: center;
		max-width: 22.5rem;
		margin: 0 auto 2rem;
		height: 100%;

		&:nth-child(2) {
			@media all and (max-width: $breakpoint-sm) {
				padding-bottom: 2rem;
			}

			.icon {
				@media all and (max-width: $breakpoint-sm) {
					margin-top: 0;
				}
			}
		}

		.icon {
			margin-top: 2rem;
			margin-bottom: 1rem;
		}

		h6 {
			font-weight: 700;
			font-family: inherit;
			margin-top: 0;
		}

		span {
			display: block;
		}

		p {
			margin-top: 0;
			font-size: 0.875rem;
			font-weight: 400;
		}

		strong {
			font-weight: 600;
		}
	}

	.testimonial {
		background-color: $bg-light-gray;
		border-radius: 4px;
		padding: 0 1.875rem;
		position: relative;

		@media all and (max-width: $breakpoint-lg) {
			max-width: 37.5rem;
			margin-left: auto;
			margin-right: auto;
		}

		@media all and (min-width: $breakpoint-lg-min) {
			margin-top: 3rem;
		}

		i {
			position: absolute;
			left: 1.25rem;
			top: 1.25rem;

			&::before,
			&::after {
				color: lighten($color-primary-med, 12%);
				font-size: 1.375rem;
			}
		}

		blockquote {
			padding: 1.25rem;
			box-sizing: border-box;
			left: 0;
			top: 0;

			p {
				font-weight: 400;
				margin-bottom: 0;
				padding-bottom: 5px;
			}

			cite {
				margin-top: 0.5rem;
				display: block;
				text-align: right;
				font-size: 1rem;
				font-weight: 800;
				color: lighten($color-primary-med, 5%);

				&::before {
					content: "– ";
					display: inline-block;
					padding-right: 3px;
				}
			}

			.cite-info {
				display: block;
				text-align: right;
				font-style: italic;
				font-size: 0.9375rem;
			}
		}
	}
}
.posts {
	padding-top: 3rem;

	[class^="col-"] {
		margin-bottom: 2rem;
	}

	.post {
		padding: 1.5rem;

		@media all and (max-width: $breakpoint-sm) {
			padding: 0.9375rem;
		}
	}
}
.connect {
	padding: 1.875rem 0.9375rem 0.9375rem;
}
</style>
