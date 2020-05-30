<template>
	<q-form @submit="submitForm">
		<q-input 
			v-if="tab == 'register'"
		outlined v-model="formData.name" label="Name" class="q-mb-md"/>
		<q-input outlined v-model="formData.email" type="email" label="Email" class="q-mb-md"/>
		<q-input outlined v-model="formData.password" type="password" label="Password" class="q-mb-md"/>
		<div class="row">
			<q-space/>
			<q-btn 
				@click="submitForm"
				color="primary" :label="tab == 'register' ? 'Register' : 'Login'" />
		</div>
	</q-form>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		props: ['tab'],
		data() {
			return {
				formData: {
					name: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			...mapActions('store', ['registerUser', 'loginUser']),
			submitForm() {
				if (this.tab == 'login') {
					this.loginUser(this.formData);
				} else {
					this.registerUser(this.formData);
				}
			}
		}
	}
</script>