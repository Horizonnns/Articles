<script setup>
import earth from '../assets/images/articles/earth.jpg';
import vscode from '../assets/images/articles/vscode.jpg';

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
</script>

<template>
	<main class="bg-[#f7f8f8]">
		<div
			class="container flex justify-between py-10"
		>
			<div
				v-for="article in articles"
				:key="article.id"
				class="w-[495px] cursor-pointer overflow-hidden select-none bg-white rounded-xl shadow-sm hover:border hover:shadow-xl hover:-translate-y-2 duration-200"
			>
				<img :src="article.img" alt="acrticle" />

				<div class="px-8 py-4">
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
