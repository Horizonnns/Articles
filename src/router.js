import Articles from './components/Articles.vue';
import OwnArticle from './views/OwnArticle.vue';
import Notes from './views/Notes.vue';
import {
	createRouter,
	createWebHistory,
} from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: '',
			path: '/',
			component: Articles,
		},
		{
			name: 'OwnArticle',
			path: '/OwnArticle',
			component: OwnArticle,
		},
		{
			name: 'Notes',
			path: '/Notes',
			component: Notes,
		},
	],
});
