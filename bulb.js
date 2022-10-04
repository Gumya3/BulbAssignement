const lightingBulb = {
    data () {
        return{
            switchButton: true,
        }
    },
    methods:{
        switchBtn: function () {
            this.switchButton =! this.switchButton
        }
    }
}

Vue.createApp(lightingBulb).mount("#app")