const url = "https://jsonplaceholder.typicode.com/posts";

const displaydat = async () => {
    const res = await fetch(url);
    const data = await res.json();

    data.forEach(item => console.log(`<h1>${item.title}</h1>`)); // better than map for side effects
};

displaydat();