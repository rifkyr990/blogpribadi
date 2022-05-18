Vue.createApp({
    data() {
        return {
            contoh: []
        }
    },
    async created() {
        try {
            const res = await axios.get('https://my-json-server.typicode.com/rifkyr990/tekweb2022/article');
            this.contoh = res.data;
        } catch (error) {
            console.error(error);
        }
    }
}).mount('#json')