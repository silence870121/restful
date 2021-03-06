const app = Vue.createApp({
    data() {
        return {
            title: "RESTful",
            roomData: [],
            roomItem: [],
            oneRoom: {
                status: "",
                imgIndex: 0,
            },
            amenities: [{
                id: 0,
                item: "Wi-Fi",
                icon: ` M27.6712 16.9824C28.1533 16.5085 28.1042 15.7143 27.5306 15.3479C24.099 13.1568 20.0933 11.9936 16.0013 12C11.7498 12 7.7884 13.2286 4.47199 15.3479C4.33932 15.436 4.22839 15.5521 4.14737 15.6878C4.06635 15.8235 4.0173 15.9753 4.00381 16.1321C3.99032 16.2889 4.01275 16.4466 4.06944 16.5938C4.12612 16.7409 4.21563 16.8737 4.33139 16.9824C4.52154 17.1648 4.76914 17.2783 5.03354 17.3042C5.29794 17.3302 5.56345 17.267 5.7865 17.125C8.83516 15.2055 12.3809 14.188 16.0013 14.1939C19.6217 14.188 23.1675 15.2055 26.2161 17.125C26.6736 17.4146 27.2874 17.3619 27.6712 16.9824ZM22.7993 21.7717C23.3037 21.2759 23.2122 20.4444 22.5761 20.1263C20.5396 19.1075 18.2863 18.5782 16.0013 18.5818C13.6356 18.5818 11.3994 19.139 9.42652 20.1263C8.79047 20.4444 8.69896 21.2759 9.20334 21.7717L9.23682 21.8046C9.5939 22.1556 10.1474 22.2215 10.6004 22.0021C12.2815 21.1922 14.1292 20.7726 16.0013 20.7757C17.9385 20.7757 19.773 21.2167 21.4022 22.0043C21.8553 22.2237 22.4065 22.1578 22.7658 21.8046L22.7993 21.7717V21.7717ZM18.367 26.1288C18.8044 25.6988 18.8089 24.988 18.2777 24.6808C17.5892 24.278 16.8026 24.0657 16.0013 24.0665C15.2 24.0657 14.4134 24.278 13.7249 24.6808C13.1938 24.988 13.1982 25.6988 13.6356 26.1288L15.2113 27.6777C15.3149 27.7799 15.4381 27.8609 15.5736 27.9162C15.7092 27.9715 15.8545 28 16.0013 28C16.1481 28 16.2934 27.9715 16.429 27.9162C16.5646 27.8609 16.6877 27.7799 16.7914 27.6777L18.3692 26.1266L18.367 26.1288Z `
            }, {
                id: 1,
                item: "早餐",
                icon: `M14.6 12.4H12.2V4H9.8V12.4H7.4V4H5V12.4C5 14.944 6.992 17.008 9.5 17.164V28H12.5V17.164C15.008 17.008 17 14.944 17 12.4V4H14.6V12.4ZM20.6 8.8V18.4H23.6V28H26.6V4C23.288 4 20.6 6.688 20.6 8.8Z `
            }, {
                id: 2,
                item: "Mini Bar",
                icon: ` M16.0645 4C12.3722 4 3.14142 4.46154 4.06449 5.38462L15.1414 16.9231V24.3077C15.1414 26.1538 9.60296 25.2308 9.60296 28H22.526C22.526 25.2308 16.9876 26.1538 16.9876 24.3077V16.9231L28.0645 5.38462C28.9876 4.46154 19.7568 4 16.0645 4ZM16.0645 5.84615C20.6799 5.84615 24.8337 6.30769 24.8337 6.30769L23.4491 7.69231H8.67988L7.29526 6.30769C7.29526 6.30769 11.4491 5.84615 16.0645 5.84615Z `
            }, {
                id: 3,
                item: "客服",
                icon: `M15.8182 4C10.3636 4 6 8.36364 6 13.8182V21.4545C6 22.3225 6.3448 23.155 6.95856 23.7687C7.57232 24.3825 8.40475 24.7273 9.27273 24.7273H12.5455V16H8.18182V13.8182C8.18182 11.7929 8.98636 9.85055 10.4185 8.41846C11.8506 6.98636 13.7929 6.18182 15.8182 6.18182C17.8435 6.18182 19.7858 6.98636 21.2179 8.41846C22.65 9.85055 23.4545 11.7929 23.4545 13.8182V16H19.0909V24.7273H23.4545V25.8182H15.8182V28H22.3636C23.2316 28 24.064 27.6552 24.6778 27.0414C25.2916 26.4277 25.6364 25.5953 25.6364 24.7273V13.8182C25.6364 8.36364 21.24 4 15.8182 4Z `
            }, {
                id: 4,
                item: "電話",
                icon: `M16 7C11.46 7 7.34 8.78 4.29 11.67C4.11 11.85 4 12.1 4 12.38C4 12.66 4.11 12.91 4.29 13.09L6.77 15.57C6.95731 15.7552 7.20956 15.8599 7.47297 15.8618C7.73637 15.8636 7.99008 15.7625 8.18 15.58C8.97 14.84 9.87 14.22 10.84 13.73C11.17 13.57 11.4 13.23 11.4 12.83V9.73C12.85 9.25 14.39 9 16 9C17.59 9 19.14 9.25 20.59 9.72V12.82C20.59 13.21 20.82 13.56 21.15 13.72C22.13 14.21 23 14.84 23.82 15.57C24 15.75 24.25 15.85 24.5 15.85C24.8 15.85 25.05 15.74 25.23 15.56L27.71 13.08C27.89 12.9 28 12.65 28 12.37C28 12.09 27.88 11.85 27.7 11.67C24.5439 8.66937 20.3548 6.99731 16 7V7ZM13 11V14C13 14 7 19 7 22V26H25V22C25 19 19 14 19 14V11H17V13H15V11H13ZM16 16C17.0609 16 18.0783 16.4214 18.8284 17.1716C19.5786 17.9217 20 18.9391 20 20C20 21.0609 19.5786 22.0783 18.8284 22.8284C18.0783 23.5786 17.0609 24 16 24C14.9391 24 13.9217 23.5786 13.1716 22.8284C12.4214 22.0783 12 21.0609 12 20C12 18.9391 12.4214 17.9217 13.1716 17.1716C13.9217 16.4214 14.9391 16 16 16V16ZM16 17.5C15.337 17.5 14.7011 17.7634 14.2322 18.2322C13.7634 18.7011 13.5 19.337 13.5 20C13.5 20.663 13.7634 21.2989 14.2322 21.7678C14.7011 22.2366 15.337 22.5 16 22.5C16.663 22.5 17.2989 22.2366 17.7678 21.7678C18.2366 21.2989 18.5 20.663 18.5 20C18.5 19.337 18.2366 18.7011 17.7678 18.2322C17.2989 17.7634 16.663 17.5 16 17.5V17.5Z `
            }, {
                id: 5,
                item: "空調",
                icon: `M13.6 22.36C13.6 25 11.08 27.4 10.84 27.64C10.6 27.88 10.24 28 10 28C9.64 28 9.4 27.88 9.04 27.52C8.68 27.04 8.68 26.32 9.16 25.84C9.76 25.36 11.2 23.68 11.2 22.36C11.2 21.64 10.72 20.92 10.24 20.08C9.52 19.12 8.8 17.92 8.8 16.48C8.8 13.72 10.36 12.64 10.6 12.52C11.08 12.28 11.92 12.4 12.16 12.88C12.52 13.48 12.4 14.2 11.8 14.56C11.8 14.56 11.2 15.04 11.2 16.48C11.2 17.32 11.68 18.04 12.16 18.76C12.88 19.72 13.6 20.92 13.6 22.36V22.36ZM16 16.48C16 15.04 16.6 14.56 16.6 14.56C17.2 14.2 17.32 13.48 16.96 12.88C16.6 12.28 15.88 12.16 15.28 12.52C15.04 12.64 13.48 13.72 13.48 16.48C13.48 17.92 14.2 19.12 14.92 20.08C15.4 20.92 15.88 21.64 15.88 22.36C15.88 23.68 14.44 25.36 13.84 25.84C13.36 26.32 13.36 27.04 13.72 27.52C13.96 27.76 14.32 27.88 14.56 27.88C15.04 28 15.4 27.88 15.64 27.64C15.88 27.4 18.4 25 18.4 22.36C18.4 20.92 17.68 19.72 16.96 18.76C16.48 17.92 16 17.2 16 16.48V16.48ZM25.6 4H6.4C5.76348 4 5.15303 4.25286 4.70294 4.70294C4.25286 5.15303 4 5.76348 4 6.4V19.6C4 20.2365 4.25286 20.847 4.70294 21.2971C5.15303 21.7471 5.76348 22 6.4 22H7.6V19.6H6.4V6.4H25.6V19.6H24.4V22H25.6C26.2365 22 26.847 21.7471 27.2971 21.2971C27.7471 20.847 28 20.2365 28 19.6V6.4C28 5.76348 27.7471 5.15303 27.2971 4.70294C26.847 4.25286 26.2365 4 25.6 4ZM21.04 16.6C21.04 15.16 21.64 14.68 21.64 14.68C22.12 14.32 22.36 13.6 22 13C21.64 12.52 20.92 12.28 20.32 12.64C20.08 12.76 18.52 13.84 18.52 16.6C18.52 18.04 19.36 19.24 19.96 20.2C20.44 21.04 20.92 21.76 20.92 22.48C20.92 23.8 19.48 25.48 18.88 25.96C18.4 26.44 18.28 27.16 18.76 27.64C19 27.88 19.24 28 19.6 28C19.84 28 20.2 27.88 20.68 27.76C20.92 27.52 23.44 25.12 23.44 22.48C23.44 21.04 22.6 19.84 22 18.88C21.52 18.04 21.04 17.32 21.04 16.6V16.6Z `
            }, {
                id: 6,
                item: "冰箱",
                icon: `M22.8 4H8.4C7.08 4 6 5.08 6 6.4V28H25.2V6.4C25.2 5.08 24.12 4 22.8 4ZM19.8 17.8C18.804 17.8 18 16.996 18 16C18 15.004 18.804 14.2 19.8 14.2C20.796 14.2 21.6 15.004 21.6 16C21.6 16.996 20.796 17.8 19.8 17.8Z `
            }, {
                id: 7,
                item: "沙發",
                icon: `M16.5455 9.18182C16.5455 7.97091 17.5164 7 18.7273 7H22.5455C23.7455 7 24.7273 7.98182 24.7273 9.18182V11.5382C23.4618 11.9855 22.5455 13.1855 22.5455 14.6036V16.8182H16.5455V9.18182ZM9.45455 14.5927V16.8182H15.4545V9.18182C15.4545 7.97091 14.4836 7 13.2727 7H9.45455C8.25455 7 7.27273 7.98182 7.27273 9.18182V11.5273C8.53818 11.9745 9.45455 13.1855 9.45455 14.5927ZM25.4473 12.4873C24.3782 12.6618 23.6364 13.6764 23.6364 14.7673V17.9091H8.36364V14.6364C8.36364 14.0577 8.13377 13.5028 7.7246 13.0936C7.31543 12.6844 6.76047 12.4545 6.18182 12.4545C5.60316 12.4545 5.04821 12.6844 4.63904 13.0936C4.22987 13.5028 4 14.0577 4 14.6364V20.0909C4 21.2909 4.98182 22.2727 6.18182 22.2727V24.4545H8.36364V22.2727H23.6364V24.4545H25.8182V22.2727C27.0182 22.2727 28 21.2909 28 20.0909V14.6364C28 13.3164 26.8109 12.2582 25.4473 12.4873V12.4873Z `
            }, {
                id: 8,
                item: "視野",
                icon: `M26.44 6.10658C24.04 6.94658 20.68 7.78658 16 7.78658C11.32 7.78658 7.72 6.82658 5.56 6.10658C4.84 5.74658 4 6.34658 4 7.18658V23.9866C4 24.8266 4.84 25.4266 5.56 25.1866C8.08 24.3466 11.32 23.3866 16 23.3866C20.68 23.3866 24.04 24.3466 26.44 25.1866C27.28 25.4266 28 24.8266 28 23.9866V7.18658C28 6.34658 27.16 5.74658 26.44 6.10658ZM16 19.1866C13.24 19.1866 10.6 19.3066 8.2 19.6666L12.64 14.3866L15.04 17.2666L18.4 13.1866L23.8 19.6666C21.4 19.3066 18.76 19.1866 16 19.1866Z `
            }, {
                id: 9,
                item: "禁菸",
                icon: ` M5 8.57143L13 16.5714H5V20H16.4286L24.4286 28L25.8571 26.5714L6.42857 7.14286L5 8.57143ZM26.1429 16.5714H27.8571V20H26.1429V16.5714ZM23.2857 16.5714H25V20H23.2857V16.5714ZM24.2571 7.29143C24.9657 6.59429 25.4 5.63429 25.4 4.57143H23.6857C23.6857 5.71429 22.7143 6.68571 21.5714 6.68571V8.4C24.1314 8.4 26.1429 10.4914 26.1429 13.0514V15.4286H27.8571V13.0514C27.8571 10.5029 26.3943 8.30857 24.2571 7.29143V7.29143ZM19.2857 11.6571H21.0343C22.2343 11.6571 23.2857 12.5029 23.2857 14V15.4286H25V13.6114C25 11.5543 23.1714 10 21.0343 10H19.2857C18.1429 10 17.1714 8.88 17.1714 7.71429C17.1714 6.54857 18.1429 5.71429 19.2857 5.71429V4C18.2703 4 17.2965 4.40337 16.5785 5.12136C15.8605 5.83936 15.4571 6.81317 15.4571 7.82857C15.4571 8.84397 15.8605 9.81778 16.5785 10.5358C17.2965 11.2538 18.2703 11.6571 19.2857 11.6571V11.6571ZM22.1429 19.92V16.5714H18.7943L22.1429 19.92Z `
            }, {
                id: 10,
                item: "適合兒童",
                icon: `M18.2 4V13.6H27.8C27.8 11.0539 26.7886 8.61212 24.9882 6.81178C23.1879 5.01143 20.7461 4 18.2 4V4ZM25.784 20.668C27.0912 18.9914 27.8008 16.926 27.8 14.8H10.328L9.2 12.4H5V14.8H7.664C7.664 14.8 9.932 19.684 10.208 20.104C8.888 20.8 8 22.204 8 23.8C8 24.9139 8.4425 25.9822 9.23015 26.7699C10.0178 27.5575 11.0861 28 12.2 28C14.312 28 16.064 26.44 16.352 24.4H18.848C19.136 26.44 20.888 28 23 28C24.1139 28 25.1822 27.5575 25.9698 26.7699C26.7575 25.9822 27.2 24.9139 27.2 23.8C27.2 22.552 26.648 21.436 25.784 20.668ZM12.2 25.6C11.7226 25.6 11.2648 25.4104 10.9272 25.0728C10.5896 24.7352 10.4 24.2774 10.4 23.8C10.4 23.3226 10.5896 22.8648 10.9272 22.5272C11.2648 22.1896 11.7226 22 12.2 22C12.6774 22 13.1352 22.1896 13.4728 22.5272C13.8104 22.8648 14 23.3226 14 23.8C14 24.2774 13.8104 24.7352 13.4728 25.0728C13.1352 25.4104 12.6774 25.6 12.2 25.6ZM23 25.6C22.5226 25.6 22.0648 25.4104 21.7272 25.0728C21.3896 24.7352 21.2 24.2774 21.2 23.8C21.2 23.3226 21.3896 22.8648 21.7272 22.5272C22.0648 22.1896 22.5226 22 23 22C23.4774 22 23.9352 22.1896 24.2728 22.5272C24.6104 22.8648 24.8 23.3226 24.8 23.8C24.8 24.2774 24.6104 24.7352 24.2728 25.0728C23.9352 25.4104 23.4774 25.6 23 25.6Z `
            }, {
                id: 11,
                item: "寵物攜帶",
                icon: `M24.4 5L19.6 9.8L23.2 13.4L24.4 12.2L25.6 13.4L28 11L24.4 7.4V5ZM5.2 9.8L4 11L7.6 14.6V18.2L6.4 19.4V26.6H8.8V23L11.2 19.4H19.6V26.6H22V14.6L18.4 11L17.2 12.2H7.6L5.2 9.8Z `
            }],
            format: {
                month: [
                    "January.", "February.", "March.", "April.",
                    "May.", "June.", "July.", "August.",
                    "September.", "October.", "November.", "December.",
                ],
            },
            calendar: {
                year: "",
                today: "",
                current: {
                    year: 2021,
                    month: 10,
                    date: [],
                },
                next: {
                    year: 2021,
                    month: 11,
                    date: [],
                }
            },
            booking: {
                status: true,
                name: "",
                phoneNumber: "",
                temp: "",
                dateFrom: "",
                dateTo: "",
                dateRange: [],
                normalDay: 0,
                holiday: 0,
                price: 0,
                formError: {
                    name: false,
                    phoneNumber: false,
                    dateFrom: false,
                    dateTo: false,
                },
                alert: {
                    name: "",
                    phoneNumber: "",
                    dateFrom: "",
                    dateTo: "",
                },
            },
            limit: {
                dateFrom: "",
                dateTo: "",
            },
            response: {
                time: "",
                data: {
                    room: "",
                    name: "",
                    phoneNumber: "",
                    dateFrom: "",
                    dateTo: "",
                },
                success: true,
                alert: "",
            },
            showModal: false,
            isLoading: false,
            ispartLoading: false,
        }
    },
    methods: {
        dateFormat(e) {
            switch (typeof(e)) {
                case "object":
                    let year = e.getFullYear()
                    let month = e.getMonth() + 1
                    let day = e.getDate()

                    function add0(num) {
                        if (num < 10) {
                            return `0${num}`
                        } else {
                            return `${num}`
                        }
                    }
                    return `${year}-${add0(month)}-${add0(day)}`
                    break;
                case "string":
                    return `${e.split("/")[0]}-${e.split("/")[1]}-${e.split("/")[2]}`
                    break;
                default:
                    break;
            }
        },
        toCurrency(num) {
            // 如何加入千分位
            const parts = num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return `${parts.join('.')}`;
        },
        //? ---------- ---------- getData ---------- ----------
        //? ---------- ---------- getData ---------- ----------
        //? ---------- ---------- getData ---------- ----------
        getRoomsAllData() {
            const hexAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/'
            const token = 'aTXLTsqJGnHCcyEkIF6mM5EW6NdJMaluqX0dD5BpQS5qk0NO67goQ232Mv4I'
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
            axios.get(hexAPI + 'rooms')
                .then((res) => {
                    // console.log(res.data.items[0])
                    this.roomData = res.data.items
                    // console.log(this.roomData);
                    setTimeout(() => {
                        this.isLoading = false
                    }, 500);
                })
        },

        getRoomsData() {
            //? GET room.html/roomID=?
            // const locationURL = new URL(location.href)
            const hexAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/'
            const roomID = new URL(location.href).searchParams.get('roomID')
            const token = 'aTXLTsqJGnHCcyEkIF6mM5EW6NdJMaluqX0dD5BpQS5qk0NO67goQ232Mv4I'
            if (roomID !== null) {
                axios.defaults.headers.common.Authorization = `Bearer ${token}`
                axios.get(hexAPI + 'room/' + roomID)
                    .then((res) => {
                        this.roomItem = res.data
                        console.log(res.data);
                        setTimeout(() => {
                            this.isLoading = false
                            this.ispartLoading = false
                        }, 500);
                    })
            }
        },
        getToday() {
            const today = new Date()
            const year = today.getFullYear()
            const currentMonth = today.getMonth()

            const oneDay = 24 * 60 * 60 * 1000;
            this.calendar.year = year
            this.calendar.today = this.dateFormat(today)
            this.calendar.current.month = currentMonth
            this.calendar.current.year = year
            if (currentMonth + 1 > 11) {
                this.calendar.next.month = 0
                this.calendar.next.year = year + 1
            } else {
                this.calendar.next.month = currentMonth + 1
                this.calendar.next.year = year
            }
            this.limit.dateFrom = this.dateFormat(new Date(today.getTime() + oneDay))
            this.limit.dateTo = this.dateFormat(new Date(today.getTime() + oneDay * 90))
            // console.log(this.calendar.current.date);
            // console.log(this.calendar.next.date);
        },
        getCalender() {
            console.log("renderCalender");
            const currentFirst = new Date(this.calendar.current.year, this.calendar.current.month, 1)
            const nextFirst = new Date(this.calendar.next.year, this.calendar.next.month, 1)
            const oneDay = 24 * 60 * 60 * 1000;
            this.calendar.current.date = []
            this.calendar.next.date = []
            for (let i = 0; i < 35; i++) {
                let currentDay = new Date(currentFirst.getTime() + oneDay * (i - currentFirst.getDay()))
                let nextDay = new Date(nextFirst.getTime() + oneDay * (i - nextFirst.getDay()))
                // console.log(this.dateFormat(currentDay), this.dateFormat(nextDay));
                this.calendar.current.date.push(this.dateFormat(currentDay))
                this.calendar.next.date.push(this.dateFormat(nextDay))
            }
            // console.log(this.calendar.current.date);
            // console.log(this.calendar.next.date);
        },
        //? ---------- ---------- Action ---------- ----------
        //? ---------- ---------- Action ---------- ----------
        //? ---------- ---------- Action ---------- ----------
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
        },
        //? ---------- booking ----------
        setbookingDate(date) {
            if (new Date(this.limit.dateFrom) <= new Date(date) && new Date(date) <= new Date(this.limit.dateTo)) {
                //? ---------- if date in can booking range ----------
                if (this.booking.temp == "") {
                    console.log("this's first select");
                    this.booking.temp = date
                } else {
                    if (new Date(this.booking.temp) < new Date(date)) {
                        this.booking.dateFrom = this.booking.temp
                        this.booking.dateTo = date
                        // this.bookingRange()
                        this.booking.temp = ""
                    } else if (new Date(date) < new Date(this.booking.temp)) {
                        this.booking.dateFrom = date
                        this.booking.dateTo = this.booking.temp
                        // this.bookingRange()
                        this.booking.temp = ""
                    } else {
                        console.log("please select other date");
                    }
                }
                // console.log(new Date().getTime());
                //? ---------- if date in can booking range ----------
            } else {
                console.log("your select date is over range");
            }
        },
        getDateRange() {
            //? reset booking data
            this.booking.normalDay = 0
            this.booking.holiday = 0
            this.booking.dateRange = []
            //? render new booking data
            for (let i = new Date(this.booking.dateFrom).getTime(); i < new Date(this.booking.dateTo).getTime() + 1000 * 60 * 60 * 24; i += 1000 * 60 * 60 * 24) {
                this.booking.dateRange.push(this.dateFormat(new Date(i)))
            }
            console.log("renderBookingRange");
            this.booking.dateRange.filter((date, index) => index < this.booking.dateRange.length - 1).forEach(date => {
                if (1 <= new Date(date).getDay() && new Date(date).getDay() <= 4) {
                    this.booking.normalDay++
                } else {
                    this.booking.holiday++
                }
            });
        },
        updateCalender(num) {
            this.calendar.current.month += num
            this.calendar.next.month += num
            if (this.calendar.current.month > 11) {
                this.calendar.current.month = 0
                this.calendar.current.year++
            }
            if (this.calendar.next.month > 11) {
                this.calendar.next.month = 0
                this.calendar.next.year++
            }
            if (this.calendar.current.month < 0) {
                this.calendar.current.month = 11
                this.calendar.current.year--
            }
            if (this.calendar.next.month < 0) {
                this.calendar.next.month = 11
                this.calendar.next.year--
            }
            this.getCalender()
        },
        checkNamne() {
            // const isName = /^[a-zA-Z0-9]+$/;
            const isName = /^[a-zA-Z\u4e00-\u9fa5\_\-\.\·]*$/g;
            if (this.booking.name == "") {
                this.booking.formError.name = true
                this.booking.alert.name = "請輸入姓名 ! "
            } else if (!isName.test(this.booking.name)) {
                this.booking.formError.name = true
                this.booking.alert.name = "請勿包含特殊字元"
            } else if (this.booking.name.length < 3) {
                this.booking.formError.name = true
                this.booking.alert.name = "請輸入正確的姓名"
            } else {
                this.booking.formError.name = false
            }
        },
        checkPhone() {
            const isPhone = /\d{4}-\d{3}-\d{3}/;
            const isPhone2 = /\d{4}\d{3}\d{3}/;
            if (this.booking.phoneNumber == "") {
                this.booking.formError.phoneNumber = true
                this.booking.alert.phoneNumber = "請輸入手機號碼 ! "
            } else if (!isPhone.test(this.booking.phoneNumber) && !isPhone2.test(this.booking.phoneNumber)) {
                this.booking.formError.phoneNumber = true
                this.booking.alert.phoneNumber = "請輸入正確的號碼 ! "
            } else {
                this.booking.formError.phoneNumber = false
            }
        },
        checkDateFrom() {
            if (this.booking.phoneNumber == "") {
                this.booking.formError.dateFrom = true
                this.booking.alert.dateFrom = "請選擇入住日期 ! "
            } else {
                this.booking.formError.dateFrom = false
            }
        },
        checkDateTo() {
            if (this.booking.phoneNumber == "") {
                this.booking.formError.dateTo = true
                this.booking.alert.dateTo = "請選擇退房日期 ! "
            } else {
                this.booking.formError.dateTo = false
            }
        },
        sendBookingForm() {
            const hexAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/'
            const roomID = new URL(location.href).searchParams.get('roomID')
            const token = 'aTXLTsqJGnHCcyEkIF6mM5EW6NdJMaluqX0dD5BpQS5qk0NO67goQ232Mv4I'
            const dataurl = hexAPI + 'room/' + roomID
            const data = {
                name: this.booking.name,
                tel: this.booking.phoneNumber,
                date: this.booking.dateRange
            }
            this.checkNamne()
            this.checkPhone()
            this.checkDateFrom()
            this.checkDateTo()
            console.log(this.booking.dateRange);
            if (!this.booking.formError.name && !this.booking.formError.phoneNumber && !this.booking.dateFrom == "" && !this.booking.dateTo == "") {
                this.isLoading = true
                axios.defaults.headers.common.Authorization = `Bearer ${token}`
                axios.post(dataurl, data)
                    .then((res) => {
                        console.log(res)
                        console.log(res.data.success)
                        console.log(data)
                        // alert("您的預約成功")
                        this.response.success = res.data.success
                        this.response.alert = "您的預約成功"
                        this.response.data = {
                            room: res.data.room[0].name,
                            name: this.booking.name,
                            tel: this.booking.phoneNumber,
                            dateFrom: this.booking.dateFrom,
                            dateTo: this.booking.dateTo
                        }
                        this.booking.name = ""
                        this.booking.phoneNumber = ""
                        this.booking.dateFrom = ""
                        this.booking.dateTo = ""
                        this.booking.dateRange = []
                        setTimeout(() => {
                            this.booking.status = false
                            this.isLoading = false
                        }, 500);
                    })
                    .catch((err) => {
                        // console.log(err.request)
                        console.log(err.response)
                        console.log(err.response.data.success)
                        console.log(err.response.data.message)
                        // alert(err.response.data.message)
                        this.response.success = false
                        this.response.alert = err.response.data.message
                        this.booking.status = false
                        setTimeout(() => {
                            this.isLoading = false
                        }, 500);
                    })
                this.response.time = this.calendar.today + " " + new Date().toLocaleTimeString('en-US')
            }
        }
    },
    computed: {
        price() {
            return this.toCurrency(this.booking.normalDay * this.roomItem.room[0].normalDayPrice + this.booking.holiday * this.roomItem.room[0].holidayPrice)
        }
    },
    watch: {
        //? ---------- modal control ----------
        showModal() {
            if (this.showModal) {
                document.documentElement.style.overflow = 'hidden'
            } else {
                document.documentElement.style.overflow = 'auto'
                this.booking.formError.name = false
                this.booking.formError.phoneNumber = false
                this.booking.formError.dateFrom = false
                this.booking.formError.dateTo = false
            }
        },
        "booking.name"() {
            this.checkNamne()
        },
        "booking.phoneNumber"() {
            this.checkPhone()
        },
        "booking.dateFrom"() {
            this.getDateRange()
        },
        "booking.dateTo"() {
            this.getDateRange()
        },
    },
    updated() {
        console.log('updated')
    },
    mounted() {
        this.isLoading = true
        this.getRoomsData()
        this.getRoomsAllData()
        this.getToday()
        this.getCalender()
    }
})
app.component("modal", {
    template: "#modal-template",
})

app.mount('#app');