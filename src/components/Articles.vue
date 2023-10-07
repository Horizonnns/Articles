<script setup>
import earth from '../assets/images/articles/earth.jpg';
import vscode from '../assets/images/articles/vscode.jpg';
import { useRouter } from 'vue-router';
const router = useRouter();

const articles = [
	{
		id: 1,
		tag: 'Javascript',
		title:
			'Как с помощью Dadata определить город по IP?',
		descr:
			'Делюсь информацией о том, как определить местоположение по IP',
		img: earth,
	},
	{
		id: 2,
		tag: 'Советы',
		title:
			'Мои темы и плагины для VS Code на 2019 год',
		descr:
			'Так как спрашивают не в первый раз, сделаю отдельную запись со списком тем и плагинов',
		img: vscode,
	},
];

const changePage = (article) => {
	if (article.tag) {
		router.push('/ownarticle');
	}
};
</script>

<template>
	<main
		class="container grid md:grid-cols-2 justify-between md:space-x-8 space-y-8 md:space-y-0 py-6 md:py-10"
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
