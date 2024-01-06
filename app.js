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

            function formatDate(date) {

                var dd = date.getDate();
                if (dd < 10) dd = '0' + dd;
              
                var mm = date.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;
              
                var yy = date.getFullYear();
              
                return yy + '-' + mm + '-' + dd;
            };

            var d = new Date();
            var d_Start = new Date(); 
            d_Start.setDate(d_Start.getDate() - 3 );

            const url = 'https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22keyword%22%3A%22%D0%B2%D1%96%D0%B9%D0%BD%D0%B0%20%D0%B2%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%96%22%2C%22keywordLoc%22%3A%22body%22%7D%2C%7B%22dateStart%22%3A%22' + formatDate(d_Start) + '%22%2C%22dateEnd%22%3A%22' + formatDate(d) + '%22%7D%5D%7D%7D&resultType=articles&articlesSortBy=date&apiKey=e7be1d69-c189-4255-99bc-300ee6f74dfd';
            this.commits = await (await fetch(url)).json();
        },
        formatDate(v) {
          return v.replace(/T|Z/g, ' ');
        }
    },

}


Vue.createApp(App).mount('#app')



