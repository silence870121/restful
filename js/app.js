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
        }
    },
    mounted() {
        this.getAPI()
    }
}).mount('#app');