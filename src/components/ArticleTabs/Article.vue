<script setup>
import earth from '../../assets/images/articles/earth.jpg';
import vscode from '../../assets/images/articles/vscode.jpg';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
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

// Функция для обработки клика на карточке и изменения маршрута
const handleCardClick = (article) => {
	if (article.tag === 'Javascript') {
		router.push('/me'); // Изменить маршрут на /me при клике на карточку с тегом 'Javascript'
	} else {
		router.push('/home'); // Изменить маршрут на /home для других карточек
	}
};
</script>

<template>
	<main class="bg-[#f7f8f8]">
		<div
			class="flex flex-col md:flex-row justify-between md:space-x-8 space-y-8 md:space-y-0 py-10"
		>
			<div
				v-for="article in articles"
				:key="article.id"
				@click="handleCardClick(article)"
				class="cursor-pointer overflow-hidden select-none bg-white rounded-xl shadow-sm hover:shadow-article hover:-translate-y-0.5 duration-200 ease-in-out"
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
		</div>
	</main>
</template>
