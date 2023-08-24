export default function decorate(block) {
    console.log(block);
    const blockAuthor = document.createElement('div');
    [...block.children].forEach((row) => {
        const propertydiv = document.createElement('div');
        propertydiv.classList.add(`tagsblock-`+row.children[0].innerHTML);

        const redirectList = document.createElement('ul');
        redirectList.classList.add(row.children[0].innerHTML+'-list');

        const redirectL = row.children[1].children;
        for(var link of redirectL){
            const li = document.createElement('li');
            li.innerHTML = link.innerHTML;
            redirectList.appendChild(li);
        }
        propertydiv.appendChild(redirectList);
        blockAuthor.appendChild(propertydiv);
    });
    block.innerHTML = blockAuthor.innerHTML;
}