let a = pinyinUtil.getFirstLetter('小茗同学')

let city = []
for (let v in data.a) {
    //console.log('v--',v[0])
    let item = {}
    item.title = v
    item.key = pinyinUtil.getFirstLetter(v[0])
    item.items = []
    data.a[v].forEach((c) => {
        item.items.push({name: c})
    })
    city.push(item)
}

city.sort((a, b) => {
    let nameA = a.key
    let nameB = b.key
    if (nameA > nameB) {
        return 1
    } else if (nameA < nameB) {
        return -1
    } else {
        return 0
    }
})

// console.log(city)

function downloadJson(data) {
    let blob = new Blob([JSON.stringify(data)], {type: ""});
    saveAs(blob, "hello.json");
}

downloadJson(city)