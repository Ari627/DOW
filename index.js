$(document).ready(function () {
  var heroes = [
    "bloodseeker",
    " abaddon ",
    " alchemist ",
    " antimage ",
    " arc warden ",
    " bounty hunter ",
    "bristleback",
    "broodmother",
    "centaur warrunner",
    " chaos knight ",
    " chen ",
    "crystal maiden",
    "dark willow",
    "dawnbreaker",
    " dazzle ",
    " drow ranger ",
    "death prophet",
    "doom",
    "dragon knight",
    "earth spirit",
    "ember spirit",
    "enchantress",
    "grimstroke",
    " gyrocopter ",
    "hoodwink",
    "huskar",
    " juggernaut ",
    "kunkka",
    "lina",
    "lion",
    " luna ",
    "lone druid",
    " marci ",
    "mars",
    " medusa ",
    "monkey king",
    "morphling",
    "muerta",
    "naga siren",
    " nature's prophet ",
    " necrophos ",
    "night stalker",
    "nyx assassin",
    "outworld destroyer",
    "pangolier",
    "phantom assassin",
    "phantom lancer",
    "phoenix",
    "primal beast",
    "puck",
    "pudge",
    " pugna ",
    "queen of pain",
    " razor ",
    "riki",
    " rubick ",
    " shadow fiend ",
    "silencer",
    "skywrath mage",
    "slardar",
    " slark ",
    "snapfire",
    " sniper ",
    "spectre",
    "spirit breaker",
    "storm spirit",
    "techies",
    "templar assassin",
    "tidehunter",
    "timbersaw",
    "tinker",
    "tiny",
    " troll warlord ",
    "tusk",
    " undying ",
    " ursa ",
    " viper ",
    " visage ",
    " void spirit ",
    "weaver",
    "winter wyvern",
    "zeus",
  ];

  for (var i = 0; i < heroes.length; i++) {
    $("#example-multiselect").append(
      $(`<option>`, {
        value: heroes[i].toLowerCase(),
        text: heroes[i],
      })
    );
  }

  $("#example-multiselect ").multiselect({
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
      var selectedImagesHtml = ""; // $(this).val() + "_" +

      selectedImages.each(function () {
        selectedImagesHtml +=
          //'<h4 class="text-white text-center">'+${$(this).text()}+
          '</h4> <img class="rounded images" src="./assets/img/' +
          $(this).text().toLowerCase() +
          "_1" +
          '.png" alt=""> ';
      });

      // Caso queria colocar mais de uma imagem usar o padrao abaixo
      // as imagens devem conter o numero correspondente apos o nomes
      // ex. dark willow_2.png

      // selectedImages.each(function () {
      //     selectedImagesHtml += '<img class="rounded images" src="./assets/img/' +
      //         $(this).text().toLowerCase() + "_2" +
      //         '.png" alt=""> ';
      // });

      if (selectedImages.length > 2) {
        $(".container").css("height", "auto !important");
      }
      $("#selected-images").html(selectedImagesHtml);
    },
  });
});
