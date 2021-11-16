Vue.createApp({
    data() {
        return {
            title: "RESTful",
            roomData: []
        }
    },
    methods: {
        getAPI() {
            const hexAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/'
            const token = 'aTXLTsqJGnHCcyEkIF6mM5EW6NdJMaluqX0dD5BpQS5qk0NO67goQ232Mv4I'
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            axios.get(hexAPI + 'rooms')
                .then((res) => {
                    // The F2E的 API文件寫的是 item，實際取回的是 items
                    console.log(res.data.items[0])
                    this.roomData = res.data.items
                })
        },
        navBTN() {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('menu-active')
        },
        closeNav(e) {
            const menu = document.querySelector('.menu')
            const menuBar = document.querySelector('.menu-bar')
            const burger = document.querySelector('.burger')
            if (menu.classList.contains('menu-active')) {
                if (e.target !== menuBar && e.target !== burger) {
                    menu.classList.remove('menu-active')
                }
            }
        }
    },
    mounted() {
        this.getAPI()
    }
}).mount('#app');