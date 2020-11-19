Vue.component('greetings',{
    template:`<p>Hey there {{name}}.<button v-on:click="changeName">Change Name</button></p>`,
    data:function() {
        return {
            name:"Component"
        }        
    },
    methods:{
        changeName:function(){
            this.name = "Mario"
        }
    }
})

var app = new Vue({
    el:"#myApp",
    data:{
        name :"This is the first app",

    },
    methods:{

    },
    computed:{

    }
});

var app1 = new Vue({
    el:"#myApp1",
    data:{
        name: "This is the second app",

    },
    methods:{

    },
    computed:{
        
    }
});