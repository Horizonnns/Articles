import Home from './views/Home.vue';
import Me from './views/Me.vue';
import {
	createRouter,
	createWebHistory,
} from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'Home',
			path: '/home',
			component: Home,
		},
		{
			name: 'Me',
			path: '/me',
			component: Me,
		},
	],
});
