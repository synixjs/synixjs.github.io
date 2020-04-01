new ClipboardJS('.cntx-trigger');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.github.com/orgs/synixjs/public_members", requestOptions)
    .then(response => response.text())
    .then(result => {
        members(JSON.parse(result))

    })
    .catch(error => console.error('error', error));


function members(memList) {
    console.log(memList)
    if (memList[0] != 1) {
        var mem = document.getElementById('members')
        memList.forEach(member => {
            var template = `<a title="${member.login}" href="${member.html_url}" target="_blank"><img src="${member.avatar_url}"></a>`
            mem.innerHTML = mem.innerHTML + template
        });
    }
}