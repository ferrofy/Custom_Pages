
let Shortcut_Database = [
    { Title: "Python", Link: "https://www.youtube.com" },
    { Title: "Linux", Link: "https://www.youtube.com" },
    { Title: "Java", Link: "https://www.youtube.com" },
    { Title: "Web Dev", Link: "https://www.youtube.com" },
    { Title: "SQL", Link: "https://www.youtube.com" },
    { Title: "Git", Link: "https://www.youtube.com" },
    { Title: "OS", Link: "https://www.youtube.com" },
];

let Shortcut_Row = document.getElementById("Shortcut_Row");

function Build_Shortcuts() {
    Shortcut_Row.innerHTML = "";

    Shortcut_Database.forEach(Item => {
        let Shortcut_Card = document.createElement("div");
        Shortcut_Card.className = "Shortcut_Card";

        Shortcut_Card.innerHTML = `
            <div class="Shortcut_Icon">
                <div class="YT_Circle">
                    <div class="YT_Play_Back">
                        <div class="YT_Play_Triangle"></div>
                    </div>
                </div>
            </div>
            <p>${Item.Title}</p>
        `;

        Shortcut_Card.onclick = () => window.open(Item.Link, "_self");

        Shortcut_Row.appendChild(Shortcut_Card);
    });
}

Build_Shortcuts();