Vue.createApp({
    data() {
        return {
            articles: [],
            article: null,
        };
    },
    methods: {
        getArticles() {
            axios
                .get(
                    "https://my-json-server.typicode.com/rifkyr990/tekweb2022/article"
                )
                .then((res) => {
                    this.articles = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const articles = urlParams.get('article');
            var converter = new showdown.Converter();
            console.log(articles);
            axios
                .get(
                    src = "https://raw.githubusercontent.com/rifkyr990/blogpribadi/main/article/" + articles
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                    console.log(html);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },

    beforeMount() {
        this.getHeaderData(),
            this.getArticles(),
            this.getMarkdown()
    }
}).mount("#app");
