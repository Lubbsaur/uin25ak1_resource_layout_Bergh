const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

const mainArticle = document.getElementById('main-section');

mainArticle.innerHTML = `
    <nav>
        <ul>
            <li><a id="html">HTML</a></li>
            <li><a id="css">CSS</a></li>
            <li><a id="js">JavaScript</a></li>
            <li><a id="react">React</a></li>
            <li><a id="sanity">Sanity and headless CMS</a></li>
        </ul>
    </nav>
    <article id="main-article">
        <h2>HTML</h2>
        <p>HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.</p>
        <ul>
        <li><a href="https://www.w3schools.com/html/">W3Schools</a></li>
        <li><a href="https://html.spec.whatwg.org/multipage/">HTML Living standard</a></li>
        <li><a href="https://html.com/">HTML.com Tutorials</a></li>
        </ul>
    </article>
`;

function selectItem() {
    let selector;
    resources.map((item) => {
        if (item === )
    })
}

const resourcesSources = resources.map((item) => {
    return item.sources;
})

console.log(resourcesSources)

const tempLi = document.querySelectorAll('nav ul li');

const htmlTag = document.getElementById('html')
htmlTag.addEventListener('click', e => {
    htmlTag.style.color = '#fff';
    const resourcesHTML = resources.map((res) => {
        return (`
                <nav>
                    <ul>
                        <li><a id="html">${res.text}</a></li>
                        <li><a id="css">CSS</a></li>
                        <li><a id="js">JavaScript</a></li>
                        <li><a id="react">React</a></li>
                        <li><a id="sanity">Sanity and headless CMS</a></li>
                    </ul>
                </nav>
                <article id="main-article">
                    <h2>HTML</h2>
                    <p>HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.</p>
                    <ul>
                    <li><a href="https://www.w3schools.com/html/">W3Schools</a></li>
                    <li><a href="https://html.spec.whatwg.org/multipage/">HTML Living standard</a></li>
                    <li><a href="https://html.com/">HTML.com Tutorials</a></li>
                    </ul>
                </article>
                ${console.log(res.category)}
        `)
        
    })
    mainArticle.innerHTML = resourcesHTML;
})

const text = resources.map((res) => {
    return res.text;
});

const sourcesTitle = resources.map((res) => {
    return res.sources[0].title;
});

//let  = document.querySelectorAll('.meny');


/*
function renderSite() {
    
    const resourcesHTML = resources.map((res) => {
        return `<li><a>${res.category}</a></li>`
    }).join('')
    
    let headingsHTML = `
        <nav>
            <ul>
                ${resourcesHTML}
            </ul>
        </nav>
        <article id="main-article">
            <h2>HTML</h2>
            <p>${text}</p>
            <ul>
            <li><a href="https://www.w3schools.com/html/">W3Schools</a></li>
            <li><a href="https://html.spec.whatwg.org/multipage/">HTML Living standard</a></li>
            <li><a href="https://html.com/">HTML.com Tutorials</a></li>
            </ul>
        </article>
    `;

    console.log(headingsHTML);


    mainArticle.innerHTML = headingsHTML;

    //const choiceHtml = document.getElementById('html');

    choiceHtml.addEventListener('click', (e) => { 
        
    })

    //mainArticle.innerHTML += headingsHTML;

}*/

//renderSite();

/*
<nav>
            <ul>
            
            </ul>
        </nav>
            <article id="main-article">
            <h2>${headings[0]}</h2>
            <p>${text[0]}</p>
            <ul>
            <li><a href="https://www.w3schools.com/html/">W3Schools</a></li>
            <li><a href="https://html.spec.whatwg.org/multipage/">HTML Living standard</a></li>
            <li><a href="https://html.com/">HTML.com Tutorials</a></li>
            </ul>
        </article>
*/