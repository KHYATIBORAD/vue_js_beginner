<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
	<WelcomeItem>
		<h3 v-if="false">This is v-if directive example</h3>
		<div v-show="false">This example for v-show directives.</div>
		<!-- <h3 v-else-if="true">This is v-else-if directive example</h3>
		<h3 v-else>This is v-else directive example</h3>
		<h3>This tis example of v-for</h3>
		<ul>
			<li v-for="(lang,index) in ['PHP','JAVA','PAYTHON','C++','C#']">{{ index }} : {{ lang }}</li>
		</ul> -->
	</WelcomeItem>
</template>