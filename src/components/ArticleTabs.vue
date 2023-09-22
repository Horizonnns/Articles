<script setup>
import Article from './ArticleTabs/Article.vue';
import Notes from './ArticleTabs/Notes.vue';
import {
	TabGroup,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from '@headlessui/vue';

const categories = {
	Главная: Article,
	Заметки: Notes,
};
</script>

<template>
	<div class="flex space-x-3">
		<router-link to="/me">me</router-link>
		<router-link to="/home">home</router-link>
		<router-view />
	</div>

	<section class="bg-[#f7f8f8]">
		<div
			class="container py-4 flex flex-col items-center justify-between"
		>
			<TabGroup>
				<TabList
					class="w-full flex items-center justify-between"
				>
					<h1
						class="text-3xl uppercase font-bold cursor-pointer"
					>
						Kasim
					</h1>

					<div
						class="flex items-center space-x-8"
					>
						<Tab
							class="w-full"
							v-for="name in Object.keys(
								categories
							)"
							as="template"
							:key="name"
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
								{{ name }}
							</button>
						</Tab>
					</div>
				</TabList>

				<TabPanels>
					<TabPanel
						v-for="(posts, idx) in categories"
						:key="idx"
					>
						<component :is="posts" />
						<div v-if="posts.length > 1">
							<TabGroup>
								<TabPanels>
									<TabPanel
										v-for="(
											post, idx
										) in Object.values(posts)"
										:key="post"
									>
										<div
											v-for="(item, ind) in post"
											:key="ind"
										>
											<component :is="item" />
										</div>
									</TabPanel>
								</TabPanels>
							</TabGroup>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</div>
	</section>
</template>
