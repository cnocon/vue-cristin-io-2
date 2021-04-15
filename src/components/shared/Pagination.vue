<template>
	<div class="row pagination">
		<div class="col-sm-12 col-md-6 prev">
			<router-link
				v-if="hasPrev"
				:to="prevRouteObj"
				class="button button-primary"
			>
				<i class="far fa-arrow-left"></i> Prev
			</router-link>
		</div>
		<div class="col-sm-12 col-md-6 next">
			<router-link
				v-if="hasNext"
				:to="nextRouteObj"
				class="button button-primary"
			>
				Next <i class="far fa-arrow-right"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Pagination",
	props: {
		perPage: Number,
		currentPage: Number,
		totalItems: Number,
		routeName: String,
	},
	computed: {
		hasPrev() {
			return parseInt(this.currentPage) != 1
		},
		hasNext() {
			return (
				parseInt(this.currentPage) < Math.ceil(this.totalItems / this.perPage)
			)
		},
		prevRouteObj() {
			return {
				name: this.routeName,
				query: {
					page: parseInt(this.currentPage) - 1,
				},
			}
		},
		nextRouteObj() {
			return {
				name: this.routeName,
				query: {
					page: parseInt(this.currentPage) + 1,
				},
			}
		},
	},
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.pagination {
	&.row {
		padding: 0;
		margin: 5.3125rem 0 0.9375rem;

		@media all and (max-width: $breakpoint-sm) {
			flex-wrap: nowrap;
		}

		.prev,
		.next {
			text-align: right;
			padding-right: 0;
		}

		.prev {
			text-align: left;
			padding-left: 0;
		}
	}
}
</style>
