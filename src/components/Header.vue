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
		class="container py-4 flex flex-col items-center justify-between"
	>
		<TabGroup>
			<TabList
				class="w-full flex items-center justify-between"
			>
				<a
					href="/"
					class="text-3xl uppercase font-bold cursor-pointer"
				>
					Kasim
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
