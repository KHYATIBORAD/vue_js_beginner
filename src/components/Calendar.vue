<template>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
            <h5 class="mb-5">Celendar</h5>
            <div class="mb-4">
                <strong>{{ currentMonthName }}</strong><strong class="m-3">{{ currentYear }}</strong>
            </div>
            <div>
                <span class="p-4" v-for="day in days" :key="day" >{{ day }}</span>
            </div>
            <div class="">
               <span class="m-1" v-for="num in 30" :key="num" >{{ num }}</span>
            </div>
            <div>
                <button class="btn btn-primary btn-sm " @click="prev">Prev</button>
                <button class="btn btn-primary btn-sm" @click="next">Next</button>
            </div>
        </div>
        <div class="col-md-3"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            days : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            currentMonth : new Date().getMonth() + 1,
            currentYear : new Date().getFullYear(),
        }
    },

    methods : {
        daysInMonth(year,month) {
            return new Date(year,month,0).getDate();
        },

        startDay() {
            return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
        },

        next() {
            if (this.currentMonth == 11) {
                this.currentMonth = 0;
                this.currentYear++;
            }else{
                this.currentMonth++;
            }
        },

        prev() {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
    },

    computed : {
        currentMonthName() {
            return new Date(this.currentYear,this.currentMonth).toLocaleString("default", {month: 'long'});
        }
    }

}
</script>
