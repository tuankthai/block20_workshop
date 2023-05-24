const users = [
    {
        name: "tuan",
        age: 30,
        occupation: "writer"
    },
    {
        name: "tom",
        age: 40,
        occupation: "artist"
    },
    {
        name: "terry",
        age: 50,
        occupation: "actor"
    },
    {
        name: "teresa",
        age: 60,
        occupation: "police"
    },    
]

function main() {
    const div = document.querySelector("#root")

    const h1 = document.createElement("h1")
    h1.textContent = "FREELANCERS"
    div.append(h1)

    const ul = document.createElement("ul")
    
    for (i of users) {
        const li = document.createElement("li")
        let str = i.name + "," + i.age + "," + i.occupation
        console.log(str)
        li.textContent = str
        ul.append(li)
    }
    console.log(ul)

    div.append(ul)
}

main()