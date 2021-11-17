Vue.createApp({
    data() {
        return {
            title: "RESTful",
            roomData: [],
            roomItem: [],
            oneRoom: {
                status: "",
                imgIndex: 0,
            },
        }
    },
    methods: {
        getRoomsAllData() {
            const hexAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/'
            const token = 'aTXLTsqJGnHCcyEkIF6mM5EW6NdJMaluqX0dD5BpQS5qk0NO67goQ232Mv4I'
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            axios.get(hexAPI + 'rooms')
                .then((res) => {
                    // console.log(res.data.items[0])
                    this.roomData = res.data.items
                    // console.log(this.roomData);
                })
        },
        getRoomsData() {
            //? GET room.html/roomID=?
            // const locationURL = new URL(location.href)
            const hexAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/'
            const roomID = new URL(location.href).searchParams.get('roomID')
            const token = 'aTXLTsqJGnHCcyEkIF6mM5EW6NdJMaluqX0dD5BpQS5qk0NO67goQ232Mv4I'
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            axios.get(hexAPI + 'room/' + roomID)
                .then((res) => {

                    // console.log(res.data)
                    // console.log(res.data.room)
                    this.roomItem = res.data
                    console.log(this.roomItem);
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
        this.getRoomsData()
        this.getRoomsAllData()
    }
}).mount('#app');