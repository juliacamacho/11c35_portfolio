console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// navLinks = $$("nav a")
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
	{url: "contact/", title: "Contact"},
	{url: "cv/", title: "CV"},
	{url: "https://github.com/juliacamacho", title: "Github"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
	let url = p.url;
	url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
	let title = p.title;

	// Create link and add it to nav
	nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}


