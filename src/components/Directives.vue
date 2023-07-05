<template>
	<div class="container">
		<h2 class="text-center text-primary">{{ title.toUpperCase() }}</h2>
	    <div class="row mt-5">
	        <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-danger">
	                    <h5>V-IF || V-ELSE-IF || V-ELSE</h5>
	                </div>
	                <div class="card-body">
	                    <!-- VALUE MAKE TRUE THAT CONTAIN WILL BE DIASPLY -->
	                    <h6 v-if="8 * 8 == 64">When If condition is true this contain will be display.</h6>
	                    <h6 v-else-if="isShowing">When ELSE-IF condition make true then this contain will be display.</h6>
	                    <h6 v-else>When ELSE part is executed , this contain will be display.</h6>
	                </div>
	            </div>
	        </div>
	         <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-success">
	                    <h5>V-SHOW</h5>
	                </div>
	                <div class="card-body">
	                    <!-- SHOW THE CONTAIN AND HIDDEN -->
	                    <div v-show="false">Contain will be displayed.</div>
	                </div>
	            </div>
	        </div>
	         <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-success">
	                    <h5>V-MODEL</h5>
	                </div>
	                <div class="card-body">
	                    <h4>{{ trimModelExample }}</h4>
	                    <!-- TYPE TO CATCH THE VALUE USING MODEL -->
	                    <div class="row">
	                        <div class="col-md-12">
	                            <input class="form-control" v-model="modelExample">
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	         <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-danger">
	                    <h5>V-FOR</h5>
	                </div>
	                <div class="card-body">
	                    <!-- DISPLAY VALUE WITH INDEX -->
	                    <!-- <ul>
	                        <li v-for="(lang,index) in ['PHP','JAVA','PAYTHON','C++','C#']">{{ index }} : {{ lang }}</li>
	                    </ul> -->

	                    <!-- DISPLAY NUMBER VALUE -->
	                    <!-- <ul>
	                        <li v-for="num in 5">{{ num }}</li>
	                    </ul> -->

	                    <!-- DISPLAY ONLY VALUE -->
	                    <ul>
	                        <li v-for="(lang,index) in languages" :key="index">
	                            <div>
	                            {{ lang.name.toUpperCase() }}
	                            <button v-on:click="removeLang(index)" class="text-danger btn">X</button>
	                            </div>
	                        </li>
	                    </ul>
	                    <form @submit.prevent="addLang">
	                    <div class="row">
	                        <div class="col-md-8">
	                            <input class="form-control" v-model="newLang">
	                        </div>
	                        <div class="col-md-4">
	                            <button type="submit" class="btn btn-primary">ADD</button>
	                        </div>
	                    </div>
	                    </form>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="row mt-5">
	        <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-danger">
	                    <h5>V-TEXT</h5>
	                </div>
	                <div class="card-body">
	                    <h6>Second is : <span v-html="text"></span></h6>
	                </div>
	            </div>
	        </div>
	         <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-success">
	                    <h5>V-HTML</h5>
	                </div>
	                <div class="card-body">
	                    <!-- ALL HTML TAG ALLOW BUT IT'S RISKEY BECAUSE XSS PRON SCRIPT ALLOW  -->
	                    <div v-html="htmlExample"></div>
	                </div>
	            </div>
	        </div>
	         <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-danger">
	                    <h5>V-ONCE</h5>
	                </div>
	                <div class="card-body">
	                    <!-- ONLY ONE TIME DISPLY -->
	                    <h6 v-once>Second is : {{ second }}</h6>
	                </div>
	            </div>
	        </div>
	         <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header text-success">
	                    <h5>V-BIND</h5>
	                </div>
	                <div class="card-body">
	                    <!-- BINDING THE VARIABLE VALUE -->
	                    <input class="form-control" v-bind:value="bindValue">
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="row mt-5">
	        <div class="col-md-3">
	             <div class="card text-bg-light">
	                <div class="card-header text-success">
	                    <h5>V-ON</h5>
	                </div>
	                <div class="card-body">
	                    <h5>{{ onExample }}</h5>
	                    <!-- when click the button uppend the value -->
	                    <div class="row">
	                        <div class="col-md-6">
	                            <button v-on:click="onExample = 'v-on Example for click event'" class="btn btn-primary btn-sm   ">CLICK ME !</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="col-md-3">
	            <div class="card text-bg-light">
	                <div class="card-header">
	                    <h5>COMPUTED PROPERTIES</h5>
	                </div>
	                <div class="card-body">
	                    <strong>Total Languages : {{ totalLang }}</strong>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
        data() {
            return {
                title : "vue directives",
                isShowing : true,
                second : 0,
                htmlExample : '<h5>Hello Html tags !<br> Html all tags Allow.</h5>',
                bindValue : 'This binding value.',
                modelExample : '',
                newLang : '',
                languages : [
                    { name : 'PHP' },
                    { name : 'JAVA' },
                ]
            }
        },

        mounted() {
            setInterval(() => {
                this.second++
            }, 1000);
        },

        methods: {
            addLang() {
                if (this.newLang != '') {
                    this.languages.push({ name : this.newLang});
                    // this.languages.unshift({ name : this.newLang});
                    this.newLang = '';
                }
            },

            removeLang(index) {
                this.languages = this.languages.filter((lang, i) => i != index);
            }
        },

        computed: {
            // this properties only getters not setters by default getters
            totalLang() {
                return this.languages.length;
            },
            trimModelExample() {
                return this.modelExample;
            }
        }
    }
</script>