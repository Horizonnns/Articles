<script setup>
const navs = [
	{
		id: 1,
		title: 'telegram',
	},
	{
		id: 2,
		title: 'insta',
	},
	{
		id: 3,
		title: 'github',
	},
];
</script>

<template>
	<footer class="bg-[#f7f8f8]">
		<div
			class="container w-full flex justify-between py-4"
		>
			<div class="text-gray-400 text-xl">
				<p class="font-bold">Kasim</p>
				<p>Frontend Developer</p>
			</div>

			<div
				class="flex items-center space-x-6 text-blue-800 font-bold"
			>
				<ul v-for="nav in navs" :key="nav.id">
					<li
						class="cursor-pointer text-gray-400 hover:text-gray-500"
					>
						{{ nav.title }}
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>
