new Vue({
    el:'#myApp',
    data:{
        name:"Collins",
        age:25,
        website:"https://cokikip.github.io",
        websiteTarget:'<a href="https://cokikip.github.io">My Web page</a>',
        //Array of objects
        courses:[
            {
                name:"english",
                grade:97
            },

            {
                name:"Maths",
                grade:77
            },
            {
                name:"Kiswahili",
                grade:89
            },
            {
                name:"Biology",
                grade:69
            },
        ],
        //Array of strings
        characters:["Luffy","Nami","Zoro","Chopa","Dragon","Ace"],
        x:0,
        y:0,
        error:false,
        success:true
    },
    methods:{
        getName:function(data){
            return data
        },
        greet:function(time) {
            return 'Good '+time+' '+ this.name
        },
        add:function(){
            this.age++
        },
        subtract:function(){
            this.age--
        },
        addTen:function(){
            this.age+=10

        },
        subtractTen:function(){
            this.age-=10
        },
        updateXY:function(event){
            console.log(event)
            this.x=event.offsetX
            this.y=event.offsetY
            console.log(this.x+" "+this.y)
        },
        logName:function(firstname){
            console.log("firstname");

        },
        logAge:function(agenew){
            console.log("agenew");
        }
    },
    computed:{
        
    }

});