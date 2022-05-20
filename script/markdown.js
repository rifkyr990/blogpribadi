Vue.createApp({
    data() {
        return {
            articles: [],
            article: null,
        };
    },
    methods: {
        getHeaderData() {
            axios
                .get(
                    "https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/contents/header.json"
                )
                .then((res) => {
                    this.header = res.data;
                    this.getArticles();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getArticles() {
            axios
                .get(
                    "https://raw.githubusercontent.com/wenispr2703/tekweb2022/main/contents/articles.json"
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
                    src = "./article/" + articles
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