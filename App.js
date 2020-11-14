new Vue({
    el:'#myApp',
    data:{
        name:"Collins",
        age:25,
        website:"https://cokikip.github.io",
        websiteTarget:'<a href="https://cokikip.github.io">My Web page</a>',
        courses:[
            {
                name:"english",
                grade:87
            },

            {
                name:"Maths",
                grade:87
            },
            {
                name:"Kiswahili",
                grade:87
            },
            {
                name:"Biology",
                grade:87
            },
        ],
        x:0,
        y:0
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
        updateXY:function(){
            console.log(event);
            this.x=event.offsetX;
            this.y=event.offsetY;
            console.log(this.x+" "+this.y);
        }
    }

});