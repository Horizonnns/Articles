import Articles from './components/Articles.vue';
import Post from './views/Post.vue';
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
			name: 'Notes',
			path: '/Notes',
			component: Notes,
		},
		{
			name: 'Post',
			path: '/post/:id/:title',
			component: Post,
		},
	],
});
