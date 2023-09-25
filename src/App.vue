<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<section class="bg-[#f7f8f8]">
		<Header />

		<router-view />

		<Footer />
	</section>
</template>
