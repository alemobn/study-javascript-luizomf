const debianList = [
    { tag: 'h2', text: 'Debian based' },
    { tag: 'li', text: 'Ubuntu' },
    { tag: 'li', text: 'Linux Mint' },
    { tag: 'li', text: 'Raspbian' },
    { tag: 'li', text: 'Kali Linux' },
    { tag: 'li', text: 'MX Linux' }
];

const fedoraList = [
    { tag: 'h2', text: 'Fedora based' },
    { tag: 'li', text: 'Red Hat Enterprise Linux (RHEL)' },
    { tag: 'li', text: 'CentOS Stream' },
    { tag: 'li', text: 'Silverblue' },
    { tag: 'li', text: 'Fedora Kinoite' },
    { tag: 'li', text: 'Feren OS' }
];

function createContainerList () {
    const container = document.querySelector('.container');
    const containerList = document.createElement('div');
    
    containerList.className = 'container-list';
    container.appendChild(containerList);    
}

function createDistroList () {
    const containerList = document.querySelector('.container-list');
    const debian = document.createElement('div');
    const fedora = document.createElement('div');
    
    debian.className = 'debian';
    fedora.className = 'fedora';
    
    containerList.appendChild(debian);
    containerList.appendChild(fedora);
}

function addDistroList () {
    const debianDiv = document.querySelector('.debian');
    const fedoraDiv = document.querySelector('.fedora');

    for (let i = 0; i < debianList.length; i++) {
        const item = document.createElement(debianList[i].tag);
        item.innerText = debianList[i].text;
        debianDiv.appendChild(item);
    }

    for (let i = 0; i < fedoraList.length; i++) {
        const item = document.createElement(fedoraList[i].tag);
        item.innerText = fedoraList[i].text;
        fedoraDiv.appendChild(item);
    }
}

createContainerList();
createDistroList();
addDistroList();