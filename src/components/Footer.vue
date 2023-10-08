<script setup>
import IconTelegram from './ui/IconTelegram.vue';
import IconGithub from './ui/IconGithub.vue';
import IconYtube from './ui/IconYtube.vue';
</script>

<template>
	<footer
		class="container w-full flex justify-between pt-6 md:pt-8"
	>
		<div class="text-gray-10 space-y-2">
			<p class="font-medium">
				Kasim Saidakbarovich
			</p>
			<p class="text-sm text-gray-20">
				Frontend Developer (Vue, Vite,
				TailwindCss...)
			</p>
		</div>

		<div
			class="flex items-center space-x-6 text-blue-800 font-bold"
		>
			<a
				href="https://t.me/Horizonnns"
				target="_blank"
			>
				<IconTelegram />
			</a>

			<a
				href="https://github.com/Horizonnns/"
				target="_blank"
			>
				<IconGithub />
			</a>

			<a href="#" target="_blank">
				<IconYtube />
			</a>
		</div>
	</footer>
</template>
