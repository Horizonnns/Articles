<script setup>
import { useRoute, useRouter } from 'vue-router';
import {
	TabGroup,
	TabList,
	Tab,
} from '@headlessui/vue';

const route = useRoute();
const router = useRouter();

const pages = [
	{
		name: 'Главная',
		path: '/',
	},
	{
		name: 'Заметки',
		path: '/notes',
	},
];

const changePage = (page) => {
	if (page.path === '/') {
		router.push('/');
	} else if (page.path === '/notes') {
		router.push('/notes');
	}
};
</script>

<template>
	<header
		class="container flex flex-col items-center justify-between py-6 md:py-8"
	>
		<TabGroup>
			<TabList
				class="w-full flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
			>
				<a
					href="/"
					class="text-3xl uppercase font-bold font-mono cursor-pointer"
				>
					<span>с</span>
					<span class="text-red-400">т</span>
					<span class="text-green-400">а</span>
					<span class="text-yellow-400">т</span>
					<span>ейная</span>
				</a>

				<div class="flex items-center space-x-6">
					<Tab
						class="w-full"
						v-for="page in pages"
						as="template"
						:key="page"
						@click="changePage(page)"
					>
						<button
							class="flex duration-200 outline-none font-mono"
							:class="[
								page.path === route.path
									? 'text-blue-10'
									: 'text-gray-300',
							]"
						>
							{{ page.name }}
						</button>
					</Tab>
				</div>
			</TabList>
		</TabGroup>
	</header>
</template>
