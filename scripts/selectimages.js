// Array of selected heroes
var selectedHeroes = []; 

// Array containing hero images and names
var heroesImages = [
    { heroName: "abaddon", imageURL: "./assets/img/abaddon_1.png" },
    { heroName: "alchemist", imageURL: "./assets/img/alchemist_1.png" },
    { heroName: "alchemist", imageURL: "./assets/img/alchemist_2.png" },
    // Add more heroes here as needed
];

// Function to clear selected heroes
function limparHeroisSelecionados() {
    selectedHeroes = [];
    $(".hero-item.selecionado").removeClass("selected");
    showSelectedHeroesImages();  // Refresh the displayed images
}

// Function to toggle visibility of selected heroes
function toggleSelectedHeroes() {
    $(".hero-item:not(.selecionado)").toggle();  // Show or hide unselected heroes
    showSelectedHeroesImages();
}

// Function to update the images of selected heroes
function showSelectedHeroesImages() {
    $("#selectedHeroesImages").empty();  // Clear the previous images

    selectedHeroes.forEach(function(heroName) {
        var heroImage = heroesImages.filter(function(hero) {
            return hero.heroName === heroName;
        });

        heroImage.forEach(function(hero) {
            addSelectedHeroImage(hero.imageURL);  // Add each selected hero's image
        });
    });
}

// Function to add an image of a selected hero to the page
function addSelectedHeroImage(imageSrc) {
    const selectedHeroesImagesDiv = document.getElementById("selectedHeroesImages");
    
    const imgElement = document.createElement("img");
    imgElement.src = imageSrc;
    imgElement.alt = "Selected Hero";
    imgElement.classList.add("rounded", "images", "img-fluid");
    imgElement.style.width = "100px";  // Adjust the size if needed
    imgElement.style.margin = "5px";
    
    selectedHeroesImagesDiv.appendChild(imgElement);  // Append the image to the div
}

// Function to handle hero selection
function selectHero(heroName, link) {
    var index = selectedHeroes.indexOf(heroName);
    if (index !== -1) {
        selectedHeroes.splice(index, 1);  // Remove the hero from selected list
        link.removeClass("selected");
    } else {
        selectedHeroes.push(heroName);  // Add the hero to selected list
        link.addClass("selected");
        showSelectedHeroesImages();  // Update the images when selection changes
    }
}

// Function to load heroes and display them
function getHeroes() {
    $.ajax({
        url: "https://api.opendota.com/api/heroes",
        type: "GET",
        success: function(data) {
            var links = [];
            data.forEach(function(hero) {
                var link = $("<div>", {
                    id: hero.id,
                    class: "hero-item",
                    hero_name: hero.localized_name.toLowerCase(),
                });

                var divWrapper = $("<figure>", { class: "hero-wrapper" });
                let hero_regex = hero.localized_name.replace(" ", "_").toLowerCase();

                var imgHero = $("<img>", {
                    src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero_regex}.png`,
                    alt: hero.localized_name,
                    class: "hero-image",
                });

                var nameHeroBaixo = $("<figcaption class='text-white'>" + hero.localized_name + "</figcaption>");

                link.click(function () {
                    selectHero(hero.localized_name.toLowerCase(), link);
                });

                divWrapper.append(imgHero);
                divWrapper.append(nameHeroBaixo);
                link.append(divWrapper);

                links.push(link);
            });

            links.sort(function (a, b) {
                return a.text().localeCompare(b.text());
            });

            $("#container").empty();
            links.forEach(function (link) {
                $("#container").append(link);
            });
        },
        error: function(xhr, status, error) {
            console.error("Error in the request:", error);
        }
    });
}

// Run the function when document is ready
$(document).ready(function() {
    $("#searchInput").on("input", function() {
        var searchText = $(this).val().toLowerCase();
        $(".hero-item").each(function() {
            var heroName = $(this).attr("hero_name").toLowerCase();
            $(this).toggle(heroName.includes(searchText));  // Filter heroes by search text
        });
    });

    $("#searchInput").trigger("input");  // Trigger search input to filter on load

    getHeroes();  // Fetch and display heroes on page load
});
