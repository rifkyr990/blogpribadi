const header = {
    data () {
        return {
            content : {
                head: "HEY THERE",
                nama: "I'M RIFKY RAMADHAN",
                location: "Based In Indonesia"
            },
            social_media : {
                instagram: 'https://www.instagram.com/rifkyyrmdhn/',
                github: 'https://github.com/rifkyr990',
                facebook: 'https://www.facebook.com/rifky.ramadhan09'
            },
            portofolio: [
                {
                    judul: 'Akademis',
                    deskripsi: 'bidang akademis pendidikan formal dan non formal yang pernah digeluti',
                    image: './img/edu.jpg',
                    link: ''
                },
                {
                    judul: 'Project',
                    deskripsi: 'Beberapa project yang pernah saya buat ketika proses pembelajaran',
                    image: './img/code.jpg'
                },
                {
                    judul: 'Komunitas',
                    deskripsi: 'Komunitas yang saya ikuti dalam mengikuti perkembangan teknologi web',
                    image: './img/com.jpg'
                }
            ],
            keahlian: [
                {
                    title: 'HTML',
                    level: 'Intermediate',
                    image: './img/html.png',
                    deskripsi: 'HTML adalah bahasa markup yang digunakan untuk membuat struktur halaman website.'
                },
                {
                    title: 'CSS',
                    level: 'Intermediate',
                    image: './img/css.png',
                    deskripsi: 'CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup'
                },
                {
                    title: 'Javascript',
                    level: 'beginer',
                    image: './img/js.png',
                    deskripsi: 'JavaScript adalah bahasa pemrograman populer yang digunakan untuk membuat situs dengan konten website yang dinamis.'
                },
                {
                    title: 'Figma',
                    level: 'Intermediate',
                    image: './img/figma.png',
                    deskripsi: 'Figma adalah sebuah aplikasi desain berbasis cloud dan alat prototyping untuk proyek digital.'
                }
            ]
        }
    }
}
Vue.createApp(header).mount('#app')