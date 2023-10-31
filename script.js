// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  












let mainEl = document.getElementsByTagName("main")[0]


mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML="<h1>SEI Rocks!</h1>";

// mainEl.setAttribute("className", "flex-ctr");
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add("flex-around")

for(let i = 0; i< menuLinks.length; i++){
    let anc = document.createElement("a");
    anc.textContent = menuLinks[i].text;
    anc.setAttribute("href", menuLinks[i].href)
    topMenuEl.append(anc)
}