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

            const url = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=1799f58a5ad44db6b75eec57e4ea5b4f';
            this.commits = await (await fetch(url)).json();
        },
        formatDate(v) {
          return v.replace(/T|Z/g, ' ');
        }
    },

}


Vue.createApp(App).mount('#app')



