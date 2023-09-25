<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

import {
	TabGroup,
	TabList,
	Tab,
} from '@headlessui/vue';

const categories = [
	{ path: 'main', title: 'Главная' },
	{
		path: 'article',
		title: 'Заметки',
	},
];

const handleCardClick = (name) => {
	if (name.path === 'main') {
		router.push('/');
	} else if (name.path === 'article') {
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

				<div class="flex items-center space-x-8">
					<Tab
						class="w-full"
						v-for="name in categories"
						as="template"
						:key="name"
						@click="handleCardClick(name)"
						v-slot="{ selected }"
					>
						<button
							class="flex text-xl duration-200 outline-none"
							:class="[
								selected
									? 'text-blue-10'
									: 'text-gray-300',
							]"
						>
							{{ name.title }}
						</button>
					</Tab>
				</div>
			</TabList>
		</TabGroup>
	</header>
</template>
