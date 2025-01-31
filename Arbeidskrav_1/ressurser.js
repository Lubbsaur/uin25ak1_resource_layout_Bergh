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

const mainSection = document.getElementById('main-section');

mainSection.innerHTML = `
    <nav>
        <ul class="navList">
            <li><a id="html" data-category>HTML</a></li>
            <li><a id="css" data-category>CSS</a></li>
            <li><a id="js" data-category>JavaScript</a></li>
            <li><a id="react" data-category>React</a></li>
            <li><a id="sanity" data-category>Sanity and headless CMS</a></li>
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


const navList = document.querySelectorAll('.navlist a');
const mainArticle = document.getElementById('main-article');

navList.forEach(item => {
    item.addEventListener('click', (event) => {
        const selectedCategory = event.target.getAttribute('data-category');
        updateArticle(selectedCategory);
    });
});

function updateArticle(category) {
    const resource = resources.find
}

/*
const tempHeadings = resources.map(item => {
    return (`
        <li><a id="${item.category}">${item.category}</a></li>
    `)
}).join('')

const htmlInner = resources[0];

const tempText = resources.map(item => {
    return item.text;
})

document.querySelector('.navList').innerHTML = tempHeadings;
let resourcesHTML = document.getElementById('main-article');

const resourcesURL = resources.flatMap(item => item.sources).map(item => item.url)

console.log(htmlInner.category)

function resourcesBody() {
       
}
*/


/*
const htmlTag = document.querySelector('.navList')
htmlTag.addEventListener('click', (e) => {
    resourcesBody(e);
    console.log(resourcesBody);
    
    let htmlInner;
    resources.map(i => {
        htmlInner = i.category;
    })
    console.log(htmlInner)
})  
*/

/*
const resourcesTemp = resources.map(item => {
    return `<h2>${item.category}</h2>
            <p>${item.text}</p>
            <ul>
                <li><a href="${item.sources}">${item.sources}</a></li>
            </ul>   
        `  
}).join('')
console.log(resourcesTemp);

resourcesHTML.innerHTML = resourcesTemp;

const text = resources.map((res) => {
    return res.text;
});

const sourcesTitle = resources.map((res) => {
    return res.sources[0].title;
});

console.log(resourcesURL)
//let  = document.querySelectorAll('.meny');
*/

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