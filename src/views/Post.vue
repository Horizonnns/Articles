<script setup>
import { useRoute } from 'vue-router';

const props = defineProps({
	articles: Array,
});

const route = useRoute();
const postId = route.params.id;

const selectedArticle = props.articles.find(
	(article) => article.id === parseInt(postId)
);
</script>

<template>
	<section class="container">
		<div
			class="flex flex-col bg-white rounded-2xl p-20 pr-32"
		>
			<div class="w-full max-w-4xl space-y-8">
				<div class="space-y-2">
					<h2
						class="text-[42px] leading-tight text-black font-extrabold"
					>
						{{ selectedArticle.title }}
					</h2>
					<p class="text-gray-20">
						{{ selectedArticle.tag }}
					</p>
				</div>

				<div
					class="text-xl font-sans font-light space-y-5"
				>
					<div
						:key="post"
						v-for="post in selectedArticle.fullPostInfo"
					>
						<p>{{ post.postInfo }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
