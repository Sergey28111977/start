const App = {
    data() {
        return {
            commits: null
        }
    },

    created() {
        // отримання даних при ініціалізації
        this.fetchData()
    },

    methods: {

        async fetchData() {

            const url = 'http://api.mediastack.com/v1/news?access_key=da2519fb140c548e5ac85f421d6a5708&countries=ua';
            this.commits = await (await fetch(url)).json();
        },
        formatDate(v) {
          return v.replace(/T|Z/g, ' ');
        }
    },

}


Vue.createApp(App).mount('#app')



