$(document).ready(function () {
  var heroes = [
    "abaddon", "alchemist", "ancient apparition", "anti-mage", "arc warden", "axe", "bane", "batrider", "beastmaster", "bounty hunter", 
    "brewmaster", "bristleback", "broodmother", "centaur warrunner", "chaos knight", "chen", "clinkz", "crystal maiden", "dark seer", 
    "dazzle", "death prophet", "disruptor", "doom", "dragon knight", "drow ranger", "earth spirit", "earthshaker", "elder titan", 
    "ember spirit", "enchantress", "enigma", "faceless void", "grimstroke", "gyrocopter", "huskar", "invoker", "io", "iron branch", 
    "juggernaut", "keeper of the light", "kunkka", "legion commander", "leshrac", "lich", "lifestealer", "lina", "lion", "lone druid", 
    "luna", "lycan", "magnus", "marci", "mars", "medusa", "meepo", "mirana", "monkey king", "morphling", "naga siren", "nature's prophet", 
    "necrophos", "night stalker", "nyx assassin", "ogre magi", "oracle", "outworld destroyer", "pangolier", "phantom assassin", 
    "phantom lancer", "puck", "pugna", "riki", "rubick", "sand king", "shadow demon", "shadow fiend", "shaman", "silencer", "slardar", 
    "slark", "sniper", "spectre", "spirit breaker", "storm spirit", "sven", "tinker", "tiny", "treant protector", "troll warlord", 
    "tidehunter", "timbersaw", "underlord", "undying", "ursa", "vengeful spirit", "venomancer", "viper", "warlock", "weaver", "windranger", 
    "winter wyvern", "wraith king", "zeus", "visage", "hoodwink", "snapfire", "dawnbreaker", "witch doctor", "void spirit", "dark willow", 
    "mars", "underlord", "oracle", "shaman", "queen of pain", "treant protector", "sven", "pugna", "lone druid", "grimstroke", 
    "clinkz", "warlock"
  ];

  // Tambahkan opsi hero ke dalam select
  for (var i = 0; i < heroes.length; i++) {
    $("#example-multiselect").append(
      $(`<option>`, {
        value: heroes[i].toLowerCase(),
        text: heroes[i],
      })
    );
  }

  // Inisialisasi multiselect
  $("#example-multiselect").multiselect({
    nonSelectedText: "Select the Heroes",
    allSelectedText: "All Heroes selected",
    nSelectedText: " Heroes Selected",
    buttonWidth: "100%",
    enableFiltering: true,
    filterBehavior: "value",
    filterPlaceholder: "Search...",
    maxHeight: 500,
    selectedClass: "active multiselect-selected",
    onChange: function (option, checked) {
      var selectedImages = $("#example-multiselect option:selected");
      var selectedImagesHtml = "";

      selectedImages.each(function () {
        var heroName = $(this).text().toLowerCase();
        var firstImage = `<img class="rounded images" src="./assets/img/${heroName}_1.png" alt="">`;
        var secondImage = `<img class="rounded images" src="./assets/img/${heroName}_2.png" alt="">`;

        // Menambahkan gambar pertama dan kedua
        selectedImagesHtml += 
          '<h4 class="text-white text-center">' + $(this).text() + '</h4>' + 
          firstImage + ' ' + secondImage + ' '; // Gambar pertama dan kedua
      });

      // Atur ketinggian container berdasarkan pilihan
      if (selectedImages.length > 2) {
        $(".container").css("height", "auto !important");
      }

      // Masukkan gambar-gambar terpilih ke dalam div dengan id selected-images
      $("#selected-images").html(selectedImagesHtml);
    },
  });
});
