export default {
    head() {
        return {
            title: this.meta.title,
            meta: [
                { hid: 'og:title', property: 'og:title', content: this.meta.title },
                { hid: 'og:url', property: 'og:url', content: this.meta.url }
            ],
        }
    }
}