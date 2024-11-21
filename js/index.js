const articles = [
    {
        title: " Fans MU senang karna Erig Ten Hag di pecat!.",
        description:
            "Timnas Indonesia melesat naik ke peringkat 3 Grup C. Ini terjadi karena di partai lain yang berlangsung di Xiamen, tuan rumah China rontok di depan Jepang dengan skor 1-3. Kini, Australia, Indonesia, Arab Saudi, dan China sama-sama mengoleksi 6 poin, dan hanya dipisahkan oleh selisih gol.",
    },
    {
        title: "Ronaldo Vs Carragher: Kritikan Berujung Dicuekin.",
        description:
            "Jamie Carragher kerap melontarkan kritik kepada Cristiano Ronaldo. CR7 membalas dengan sikap cuek kepada legenda Liverpool itu. Kedatangan kembali Ronaldo ke Manchester United pada 2021 tak lepas dari kritik. Salah satu yang paling vokal akan hal itu adalah Carragher.Pundit Sky Sports tersebut heran MU mendatangkan Ronaldo yang sudah tak lagi muda. Carragher menilai eks Real Madrid dan Juventus itu sulit membawa Setan Merah juara.,",
    },
    {
        title: "Heboh hasil dari Indonesia Vs Arab saudi, dan lolos ke piala dunia.",
        description:
            "Timnas Indonesia melesat naik ke peringkat 3 Grup C. Ini terjadi karena di partai lain yang berlangsung di Xiamen, tuan rumah China rontok di depan Jepang dengan skor 1-3. Kini, Australia, Indonesia, Arab Saudi, dan China sama-sama mengoleksi 6 poin, dan hanya dipisahkan oleh selisih gol.",
    },
];

const mainArticles = document.querySelector(".main-articles");

let card = ``;
let no = 1;
let noImage = 1;

for (let i = 0; i < articles.length; i++) {
    card += `<article class="main-articles__article">
                <h1 class="main-articles__article-title">${no++}.${articles[i].title}</h1>
                <img src="./assets/img/${noImage++}.jpeg" alt="article" class="main-articles__article-image">
                <p>
                    ${articles[i].description}
                </p>
            </article>`;
}

articles.forEach((article, index) => {});

mainArticles.innerHTML = card;
