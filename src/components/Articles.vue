<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
	articles: Array,
});

const changePage = (article) => {
	router.push(
		`/post/${article.id}/${article.title}`
	);
};
</script>

<template>
	<main
		class="container grid md:grid-cols-2 justify-between md:space-x-8 space-y-8 md:space-y-0"
	>
		<div
			v-for="article in articles"
			:key="article.id"
			@click="changePage(article)"
			class="cursor-pointer overflow-hidden select-none bg-white rounded-xl shadow-sm hover:shadow-article hover:-translate-y-0.5 duration-200 ease-in-out border border-gray-100 hover:border-gray-200"
		>
			<img :src="article.img" alt="acrticle" />

			<div class="px-8 py-6">
				<p class="text-2xl font-bold">
					{{ article.title }}
				</p>
				<p class="text-lg">
					{{ article.descr }}
				</p>
			</div>
		</div>
	</main>
</template>
