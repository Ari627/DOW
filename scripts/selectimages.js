var selectedHeroes = []; // Array para armazenar os heróis selecionados
var showSelected = false;
let url = "https://api.opendota.com/api/heroes"; // url da api

var heroesImages = [
{
    heroName: "abaddon",
    imageURL: "./assets/img/abaddon_1.png",
},
{
    heroName: "alchemist",
    imageURL: "./assets/img/alchemist_1.png",
},
{
    heroName: "ancient apparition",
    imageURL: "./assets/img/ancient apparition_1.png",
},
{
    heroName: "anti-mage",
    imageURL: "./assets/img/anti-mage_1.png",
},
{
    heroName: "arc warden",
    imageURL: "./assets/img/arc warden_1.png",
},
{
    heroName: "axe",
    imageURL: "./assets/img/axe_1.png",
},
{
    heroName: "bane",
    imageURL: "./assets/img/bane_1.png",
},
{
    heroName: "batrider",
    imageURL: "./assets/img/batrider_1.png",
},
{
    heroName: "beastmaster",
    imageURL: "./assets/img/beastmaster_1.png",
},
{
    heroName: "bounty hunter",
    imageURL: "./assets/img/bounty hunter_1.png",
},
{
    heroName: "brewmaster",
    imageURL: "./assets/img/brewmaster_1.png",
},
{
    heroName: "bristleback",
    imageURL: "./assets/img/bristleback_1.png",
},
{
    heroName: "broodmother",
    imageURL: "./assets/img/broodmother_1.png",
},
{
    heroName: "centaur warrunner",
    imageURL: "./assets/img/centaur warrunner_1.png",
},
{
    heroName: "chaos knight",
    imageURL: "./assets/img/chaos knight_1.png",
},
{
    heroName: "chen",
    imageURL: "./assets/img/chen_1.png",
},
{
    heroName: "clinkz",
    imageURL: "./assets/img/clinkz_1.png",
},
{
    heroName: "crystal maiden",
    imageURL: "./assets/img/crystal maiden_1.png",
},
{
    heroName: "dark seer",
    imageURL: "./assets/img/dark seer_1.png",
},
{
    heroName: "dazzle",
    imageURL: "./assets/img/dazzle_1.png",
},
{
    heroName: "death prophet",
    imageURL: "./assets/img/death prophet_1.png",
},
{
    heroName: "disruptor",
    imageURL: "./assets/img/disruptor_1.png",
},
{
    heroName: "doom",
    imageURL: "./assets/img/doom_1.png",
},
{
    heroName: "dragon knight",
    imageURL: "./assets/img/dragon knight_1.png",
},
{
    heroName: "drow ranger",
    imageURL: "./assets/img/drow ranger_1.png",
},
{
    heroName: "earth spirit",
    imageURL: "./assets/img/earth spirit_1.png",
},
{
    heroName: "earthshaker",
    imageURL: "./assets/img/earthshaker_1.png",
},
{
    heroName: "elder titan",
    imageURL: "./assets/img/elder titan_1.png",
},
{
    heroName: "ember spirit",
    imageURL: "./assets/img/ember spirit_1.png",
},
{
    heroName: "enchantress",
    imageURL: "./assets/img/enchantress_1.png",
},
{
    heroName: "enigma",
    imageURL: "./assets/img/enigma_1.png",
},
{
    heroName: "faceless void",
    imageURL: "./assets/img/faceless void_1.png",
},
{
    heroName: "grimstroke",
    imageURL: "./assets/img/grimstroke_1.png",
},
{
    heroName: "gyrocopter",
    imageURL: "./assets/img/gyrocopter_1.png",
},
{
    heroName: "huskar",
    imageURL: "./assets/img/huskar_1.png",
},
{
    heroName: "invoker",
    imageURL: "./assets/img/invoker_1.png",
},
{
    heroName: "io",
    imageURL: "./assets/img/io_1.png",
},
{
    heroName: "iron branch",
    imageURL: "./assets/img/iron branch_1.png",
},
{
    heroName: "juggernaut",
    imageURL: "./assets/img/juggernaut_1.png",
},
{
    heroName: "keeper of the light",
    imageURL: "./assets/img/keeper of the light_1.png",
},
{
    heroName: "kunkka",
    imageURL: "./assets/img/kunkka_1.png",
},
{
    heroName: "legion commander",
    imageURL: "./assets/img/legion commander_1.png",
},
{
    heroName: "leshrac",
    imageURL: "./assets/img/leshrac_1.png",
},
{
    heroName: "lich",
    imageURL: "./assets/img/lich_1.png",
},
{
    heroName: "lifestealer",
    imageURL: "./assets/img/lifestealer_1.png",
},
{
    heroName: "lina",
    imageURL: "./assets/img/lina_1.png",
},
{
    heroName: "lion",
    imageURL: "./assets/img/lion_1.png",
},
{
    heroName: "lone druid",
    imageURL: "./assets/img/lone druid_1.png",
},
{
    heroName: "luna",
    imageURL: "./assets/img/luna_1.png",
},
{
    heroName: "lycan",
    imageURL: "./assets/img/lycan_1.png",
},
{
    heroName: "magnus",
    imageURL: "./assets/img/magnus_1.png",
},
{
    heroName: "marci",
    imageURL: "./assets/img/marci_1.png",
},
{
    heroName: "mars",
    imageURL: "./assets/img/mars_1.png",
},
{
    heroName: "medusa",
    imageURL: "./assets/img/medusa_1.png",
},
{
    heroName: "meepo",
    imageURL: "./assets/img/meepo_1.png",
},
{
    heroName: "mirana",
    imageURL: "./assets/img/mirana_1.png",
},
{
    heroName: "monkey king",
    imageURL: "./assets/img/monkey king_1.png",
},
{
    heroName: "morphling",
    imageURL: "./assets/img/morphling_1.png",
},
{
    heroName: "naga siren",
    imageURL: "./assets/img/naga siren_1.png",
},
{
    heroName: "nature's prophet",
    imageURL: "./assets/img/nature’s prophet_1.png",
},
{
    heroName: "necrophos",
    imageURL: "./assets/img/necrophos_1.png",
},
{
    heroName: "night stalker",
    imageURL: "./assets/img/night stalker_1.png",
},
{
    heroName: "nyx assassin",
    imageURL: "./assets/img/nyx assassin_1.png",
},
{
    heroName: "ogre magi",
    imageURL: "./assets/img/ogre magi_1.png",
},
{
    heroName: "oracle",
    imageURL: "./assets/img/oracle_1.png",
},
{
    heroName: "outworld destroyer",
    imageURL: "./assets/img/outworld destroyer_1.png",
},
{
    heroName: "pangolier",
    imageURL: "./assets/img/pangolier_1.png",
},
{
    heroName: "phantom assassin",
    imageURL: "./assets/img/phantom assassin_1.png",
},
{
    heroName: "phantom lancer",
    imageURL: "./assets/img/phantom lancer_1.png",
},
{
    heroName: "puck",
    imageURL: "./assets/img/puck_1.png",
},
{
    heroName: "pugna",
    imageURL: "./assets/img/pugna_1.png",
},
{
    heroName: "riki",
    imageURL: "./assets/img/riki_1.png",
},
{
    heroName: "rubick",
    imageURL: "./assets/img/rubick_1.png",
},
{
    heroName: "sand king",
    imageURL: "./assets/img/sand king_1.png",
},
{
    heroName: "shadow demon",
    imageURL: "./assets/img/shadow demon_1.png",
},
{
    heroName: "shadow fiend",
    imageURL: "./assets/img/shadow fiend_1.png",
},
{
    heroName: "shaman",
    imageURL: "./assets/img/shaman_1.png",
},
{
    heroName: "silencer",
    imageURL: "./assets/img/silencer_1.png",
},
{
    heroName: "slardar",
    imageURL: "./assets/img/slardar_1.png",
},
{
    heroName: "slark",
    imageURL: "./assets/img/slark_1.png",
},
{
    heroName: "sniper",
    imageURL: "./assets/img/sniper_1.png",
},
{
    heroName: "spectre",
    imageURL: "./assets/img/spectre_1.png",
},
{
    heroName: "spirit breaker",
    imageURL: "./assets/img/spirit breker_1.png",
},
{
    heroName: "storm spirit",
    imageURL: "./assets/img/storm spirit_1.png",
},
{
    heroName: "sven",
    imageURL: "./assets/img/sven_1.png",
},
{
    heroName: "tinker",
    imageURL: "./assets/img/tinker_1.png",
},
{
    heroName: "tiny",
    imageURL: "./assets/img/tiny_1.png",
},
{
    heroName: "treant protector",
    imageURL: "./assets/img/treant protector_1.png",
},
{
    heroName: "troll warlord",
    imageURL: "./assets/img/troll warlord_1.png",
},
{
    heroName: "tidehunter",
    imageURL: "./assets/img/tidehunter_1.png",
},
{
    heroName: "timbersaw",
    imageURL: "./assets/img/timbersaw_1.png",
},
{
    heroName: "underlord",
    imageURL: "./assets/img/underlord_1.png",
},
{
    heroName: "undying",
    imageURL: "./assets/img/undying_1.png",
},
{
    heroName: "ursa",
    imageURL: "./assets/img/ursa_1.png",
},
{
    heroName: "vengeful spirit",
    imageURL: "./assets/img/vengeful spirit_1.png",
},
{
    heroName: "venomancer",
    imageURL: "./assets/img/venomancer_1.png",
},
{
    heroName: "viper",
    imageURL: "./assets/img/viper_1.png",
},
{
    heroName: "warlock",
    imageURL: "./assets/img/warlock_1.png",
},
{
    heroName: "weaver",
    imageURL: "./assets/img/weaver_1.png",
},
{
    heroName: "windranger",
    imageURL: "./assets/img/windranger_1.png",
},
{
    heroName: "winter wyvern",
    imageURL: "./assets/img/winter wyvern_1.png",
},
{
    heroName: "wraith king",
    imageURL: "./assets/img/wraith king_1.png",
},
{
    heroName: "zeus",
    imageURL: "./assets/img/zeus_1.png",
},
{
    heroName: "visage",
    imageURL: "./assets/img/visage_1.png",
},
{
    heroName: "hoodwink",
    imageURL: "./assets/img/hoodwink_1.png",
},
{
    heroName: "snapfire",
    imageURL: "./assets/img/snapfire_1.png",
},
{
    heroName: "dawnbreaker",
    imageURL: "./assets/img/dawnbreaker_1.png",
},
{
    heroName: "witch doctor",
    imageURL: "./assets/img/witch doctor_1.png",
},
{
    heroName: "void spirit",
    imageURL: "./assets/img/void spirit_1.png",
},
];

function limparHeroisSelecionados() {
  selectedHeroes = []; // Limpa o array de heróis selecionados
  $(".hero-item.selecionado").removeClass("selected"); // Remove a classe 'selecionado' dos elementos visuais
  // $('#selectedHeroesImages').empty(); // Limpa as imagens dos heróis selecionados
  getHeroes();
  // toggleSelectedHeroes(); //volta pra tela base
}

//função para selecionar heroi e chamas as imagens
function toggleSelectedHeroes() {
  $(".hero-item:not(.selecionado)").toggle();

  showSelectedHeroesImages();

  if (selectedHeroes.length > 1) {
    // $(".images").css("width", "50% !important");
    $(".images").addClass("images50");
  }
}

// Função para ocultar um herói selecionado ao clicar nele
function hideHeroesSelected(link) {
  // Verificar se o link corresponde a um herói selecionado
  if (link.hasClass("selected")) {
    link.hide();
    // Atualizar a exibição das imagens dos heróis selecionados
    showSelectedHeroesImages();
  }
}

function showSelectedHeroesImages() {
  // Limpar as imagens exibidas anteriormente
  $("#selectedHeroesImages").empty();

  // Iterar pelos nomes dos heróis selecionados e exibir suas imagens relacionadas
  selectedHeroes.forEach(function (heroName) {
    // Procurar o herói no array de imagens
    var heroImage = heroesImages.find(function (hero) {
      return hero.heroName === heroName;
    });

    if (heroImage) {
      var imgElement = $("<img>", {
        src: heroImage.imageURL,
        alt: heroName,
        class: "selected-hero-image rounded images img-fluid",
      });
      $("#selectedHeroesImages").append(imgElement);
    }
  });
}

function verifyselectedheroes() {
  // Verificar se o array de heróis selecionados está vazio
  if (selectedHeroes.length === 0) {
    // Se estiver vazio, desabilite o botão de ocultar
    $("#ocultar").prop("disabled", true);
    $(".hero-item:not(.selecionado)").toggle();
    $("#clearSelections").hide();
  } else {
    // Caso contrário, habilite o botão de ocultar
    $("#ocultar").prop("disabled", false);
  }
}

//get api heroes
function getHeroes() {
  $.ajax({
    url: url,
    type: "GET",
    success: function (data) {
      var links = [];
      // console.log(data)

      data.forEach(function (hero) {
        var link = $("<div>", {
          id: hero.id,
          class: "hero-item",
          hero_name: hero.localized_name.toLowerCase(),
        });

        var divWrapper = $("<figure>", {
          class: "hero-wrapper",
        });

        let hero_regex = hero.localized_name.replace(" ", "_").toLowerCase();

        if (hero_regex == "anti-mage") {
          hero_regex = "antimage";
        } else if (hero_regex == "windranger") {
          hero_regex = "windrunner";
        } else if (hero_regex == "lifestealer") {
          hero_regex = "life_stealer";
        } else if (hero_regex == "io") {
          hero_regex = "wisp";
        } else if (hero_regex == "vengeful_spirit") {
          hero_regex = "vengefulspirit";
        } else if (hero_regex == "keeper_of the light") {
          hero_regex = "keeper_of_the_light";
        } else if (hero_regex == "timbersaw") {
          hero_regex = "shredder";
        } else if (hero_regex == "wraith_king") {
          hero_regex = "skeleton_king";
        } else if (hero_regex == "necrophos") {
          hero_regex = "necrolyte";
        } else if (hero_regex == "zeus") {
          hero_regex = "zuus";
        } else if (hero_regex == "doom") {
          hero_regex = "doom_bringer";
        } else if (hero_regex == "nature's_prophet") {
          hero_regex = "furion";
        } else if (hero_regex == "shadow_fiend") {
          hero_regex = "nevermore";
        } else if (hero_regex == "magnus") {
          hero_regex = "magnataur";
        } else if (hero_regex == "queen_of pain") {
          hero_regex = "queenofpain";
        } else if (hero_regex == "treant_protector") {
          hero_regex = "treant";
        } else if (hero_regex == "outworld_destroyer") {
          hero_regex = "obsidian_destroyer";
        } else if (hero_regex == "clockwerk") {
          hero_regex = "rattletrap";
        } else if (hero_regex == "centaur_warrunner") {
          hero_regex = "centaur";
        }
        var imgHero = $("<img>", {
          src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero_regex}.png`, // Substitua pela URL da imagem correspondente ao herói
          alt: hero.localized_name,
          class: "hero-image",
        });

        var nameHeroBaixo = $(
          `<figcaption class="text-white">${hero.localized_name} </figcaption>`
        );

        // Adicionar evento de clique para tratar a seleção
        link.click(function () {
          var nameHero = hero.localized_name.toLowerCase();

          // Verificar se o herói já está na lista de heróis selecionados
          var index = selectedHeroes.indexOf(nameHero);
          if (index !== -1) {
            selectedHeroes.splice(index, 1);
            link.removeClass("selected");
            // $(link).css("display", 'none');
            //  hideHeroesSelected(link);
            // verificarEstadoHeroisSelecionados();
          } else {
            selectedHeroes.push(nameHero);
            link.addClass("selected");
            $("#ocultar").removeAttr("disabled");
            $("#clearSelections").show();
          }

          // Imprimir os heróis selecionados
          //console.log("Heróis selecionados:", selectedHeroes);
        });

        divWrapper.append(imgHero);
        divWrapper.append(nameHeroBaixo);
        link.append(divWrapper);

        links.push(link);
      });

      // Ordenar os elementos <a> em ordem alfabética com base no texto
      links.sort(function (a, b) {
        return a.text().localeCompare(b.text());
      });

      // Limpar o contêiner antes de adicionar os elementos ordenados
      $("#container").empty();

      // Adicionar os elementos <a> ordenados ao contêiner
      links.forEach(function (link) {
        $("#container").append(link);
      });
    },
    error: function (xhr, status, error) {
      console.error("Erro na requisição:", error);
    },
  });
}
$.ajax({
  url: url,
  type: "GET",
  success: function (data) {
    var links = [];
    // console.log(data)

    data.forEach(function (hero) {
      var link = $("<div>", {
        id: hero.id,
        class: "hero-item",
        hero_name: hero.localized_name.toLowerCase(),
      });

      var divWrapper = $("<figure>", {
        class: "hero-wrapper",
      });

      let hero_regex = hero.localized_name.replace(" ", "_").toLowerCase();

      if (hero_regex == "anti-mage") {
        hero_regex = "antimage";
      } else if (hero_regex == "windranger") {
        hero_regex = "windrunner";
      } else if (hero_regex == "lifestealer") {
        hero_regex = "life_stealer";
      } else if (hero_regex == "io") {
        hero_regex = "wisp";
      } else if (hero_regex == "vengeful_spirit") {
        hero_regex = "vengefulspirit";
      } else if (hero_regex == "keeper_of the light") {
        hero_regex = "keeper_of_the_light";
      } else if (hero_regex == "timbersaw") {
        hero_regex = "shredder";
      } else if (hero_regex == "wraith_king") {
        hero_regex = "skeleton_king";
      } else if (hero_regex == "necrophos") {
        hero_regex = "necrolyte";
      } else if (hero_regex == "zeus") {
        hero_regex = "zuus";
      } else if (hero_regex == "doom") {
        hero_regex = "doom_bringer";
      } else if (hero_regex == "nature's_prophet") {
        hero_regex = "furion";
      } else if (hero_regex == "shadow_fiend") {
        hero_regex = "nevermore";
      } else if (hero_regex == "magnus") {
        hero_regex = "magnataur";
      } else if (hero_regex == "queen_of pain") {
        hero_regex = "queenofpain";
      } else if (hero_regex == "treant_protector") {
        hero_regex = "treant";
      } else if (hero_regex == "outworld_destroyer") {
        hero_regex = "obsidian_destroyer";
      } else if (hero_regex == "clockwerk") {
        hero_regex = "rattletrap";
      } else if (hero_regex == "centaur_warrunner") {
        hero_regex = "centaur";
      } else if (hero_regex == "underlord") {
        hero_regex = "abyssal_underlord";
      }
      var imgHero = $("<img>", {
        src: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero_regex}.png`, // Substitua pela URL da imagem correspondente ao herói
        alt: hero.localized_name,
        class: "hero-image",
      });

      var nameHeroBaixo = $(
        `<figcaption class="text-white">${hero.localized_name} </figcaption>`
      );

      // Adicionar evento de clique para tratar a seleção
      link.click(function () {
        var nameHero = hero.localized_name.toLowerCase();

        // Verificar se o herói já está na lista de heróis selecionados
        var index = selectedHeroes.indexOf(nameHero);
        if (index !== -1) {
          selectedHeroes.splice(index, 1);
          link.removeClass("selected");
          // $(link).css("display", 'none');
          //  hideHeroesSelected(link);
          // verificarEstadoHeroisSelecionados();
        } else {
          selectedHeroes.push(nameHero);
          link.addClass("selected");
          $("#ocultar").removeAttr("disabled");
          $("#clearSelections").show();
        }

        // Imprimir os heróis selecionados
        // console.log('Heróis selecionados:', selectedHeroes);
      });

      divWrapper.append(imgHero);
      divWrapper.append(nameHeroBaixo);
      link.append(divWrapper);

      links.push(link);
    });

    // Ordenar os elementos <a> em ordem alfabética com base no texto
    links.sort(function (a, b) {
      return a.text().localeCompare(b.text());
    });

    // Limpar o contêiner antes de adicionar os elementos ordenados
    $("#container").empty();

    // Adicionar os elementos <a> ordenados ao contêiner
    links.forEach(function (link) {
      $("#container").append(link);
    });
  },
  error: function (xhr, status, error) {
    console.error("error: ", error);
  },
});

$(document).ready(function () {
  $("#searchInput").on("input", function () {
    var searchText = $(this).val().toLowerCase();
    $(".hero-item").each(function () {
      var heroName = $(this).attr("hero_name").toLowerCase();

      if (heroName.includes(searchText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $("#searchInput").trigger("input");

  var selectedImagesHtml = "";
  // Adicionar evento de clique para ocultar um herói selecionado quando todos estão visíveis
  $("#clearSelections").hide();

  $("#selected-images").html(selectedImagesHtml);
});
