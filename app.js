const blogs = [
    {
        title: "Blog One",
        date: "25th July 2022",
        img: "img/anubhav-saxena-RA5ntyyDHlw-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus eu nibh dapibus, sed ultricies mi eleifend. Mauris velit nisl, volutpat sed eleifend eu, sollicitudin eu elit."
    },
    {
        title: "Blog Two",
        date: "14th May 2022",
        img: "img/aziz-acharki-U3C79SeHa7k-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus eu nibh dapibus, sed ultricies mi eleifend. Mauris velit nisl, volutpat sed eleifend eu, sollicitudin eu elit."
    },
    {
        title: "Blog Three",
        date: "20th March 2022",
        img: "img/roland-denes-24CcFvbRsBE-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus eu nibh dapibus, sed ultricies mi eleifend. Mauris velit nisl, volutpat sed eleifend eu, sollicitudin eu elit."
    },
    {
        title: "Blog Four",
        date: "1st February 2022",
        img: "img/peter-conlan-LEgwEaBVGMo-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus eu nibh dapibus, sed ultricies mi eleifend. Mauris velit nisl, volutpat sed eleifend eu, sollicitudin eu elit."
    },
    {
        title: "Blog Five",
        date: "1st January 2022",
        img: "img/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus eu nibh dapibus, sed ultricies mi eleifend. Mauris velit nisl, volutpat sed eleifend eu, sollicitudin eu elit."
    },
    {
        title: "Blog Six",
        date: "25th December 2022",
        img: "img/campaign-creators-OGOWDVLbMSc-unsplash.jpg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum risus eu nibh dapibus, sed ultricies mi eleifend. Mauris velit nisl, volutpat sed eleifend eu, sollicitudin eu elit."
    }
]

function generateHtmlString () {

    let htmlString = ""

    blogs.forEach(function(blog) {
        htmlString += `
        <div class="blog">
            <img class="blog-img"src="${blog.img}" alt="">
            <span class="blog-date">${blog.date}</span>
            <h2 class="blog-title">${blog.title}</h2>
            <p class="blog-body zero-margin-bottom">${blog.body}</p>
    </div>`
    })

    return htmlString

}

function render() {
    document.getElementById('blog-items').innerHTML = generateHtmlString()
}

render()