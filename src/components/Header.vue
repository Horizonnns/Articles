<script setup>
const navs = [
	{
		id: 1,
		title: 'Главная',
	},
	{
		id: 2,
		title: 'Заметки',
	},
	{
		id: 3,
		title: 'Ночь/День',
	},
];
</script>

<template>
	<header class="bg-[#f7f8f8]">
		<nav
			class="container w-full flex justify-between py-4"
		>
			<h1
				class="text-3xl font-bold cursor-pointer"
			>
				Kasim
			</h1>

			<div
				class="flex items-center space-x-6 text-blue-800 font-bold"
			>
				<ul v-for="nav in navs" :key="nav.id">
					<li
						class="cursor-pointer hover:text-gray-500"
					>
						{{ nav.title }}
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>
