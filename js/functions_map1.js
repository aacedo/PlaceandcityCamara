// JavaScript Document "map1"

// Modal when load page


var number = 0;
var name_places;
var SOP = [];


function startAll() {

// POPOVER

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

// MODAL prev and next

    $("div[id^='myModal']").each(function () {

        var currentModal = $(this);

        //click next
        currentModal.find('.btn-next').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
        });

        //click prev
        currentModal.find('.btn-prev').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
        });

    });

    // NAMES PLACES


    $("#name_actual_place").select2({
        tags: [],
        tokenSeparators: [","]
    });

    //


    $('#submit_name_places').click(function () {
        name_places = $('#name_actual_place').val();
        if (name_places.length > 0) {
            $("#let_draw").toggleClass("hidden show");
            $("#title_done").toggleClass("hidden show");
            nameplace();

            $("#group_name_place").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
            $('#myModal3').modal('show');
            $("#pepe").toggleClass("hidden show");
            $("#pepa").toggleClass("hidden show");
            startMapComponents();
            buttonDraw.prop('disabled', false);


        }
        else {
            alert("Please, insert at least a group name");
        }

    });



        function nameplace() {
        $("#group_name_place").html('Área' + '<b style="font-size: 18px">' + ' hola ' + '</b>');
        var replaced = $("#group_name_place").html().replace('hola', name_places[number]);
        $("#group_name_place").html(replaced);
        $("#draw_places").html('Por favor desenhe a área' + '<b>' + ' (hola) ' + '</b>' + 'utilizando o ' + ' <button class="btn btn-default btn-xs" disabled><span class="glyphicon glyphicon-pencil" aria-hidden="true" style="margin-right: 5px"></span> Comece a desenhar </button>' + ' botão no mapa.');
        var replaced1 = $("#draw_places").html().replace('hola', name_places[number]);
        $("#draw_places").html(replaced1);
        $("#area_name_sliders").html('Área' + '<b style="font-size: 18px">' + ' hola ' + '</b>');
        var replaced2 = $("#area_name_sliders").html().replace('hola', name_places[number]);
        $("#area_name_sliders").html(replaced2);
        $("#title_sliders_change").html('Por favor, indique o nível de características aplicáveis que explica por que você desenhou esta área' + '<b>' + ' Y ' + '</b>' +'. ( Numa escala de 0 a 5, onde 0 é nada e 5 totalmente)');
        var replaced3 = $("#title_sliders_change").html().replace('Y', name_places[number]);
        $("#title_sliders_change").html(replaced3);

    };





    /*// SLIDER
        $("#ex1").slider();
        $("#ex1").on("slide", function (slideEvt) {
            $("#ex1SliderVal").text(slideEvt.value);
        });
        $("#ex2").slider();
        $("#ex2").on("slide", function (slideEvt) {
            $("#ex2SliderVal").text(slideEvt.value);
        });
        $("#ex3").slider();
        $("#ex3").on("slide", function (slideEvt) {
            $("#ex3SliderVal").text(slideEvt.value);
        });
        $("#ex4").slider();
        $("#ex4").on("slide", function (slideEvt) {
            $("#ex4SliderVal").text(slideEvt.value);
        });
        $("#ex5").slider();
        $("#ex5").on("slide", function (slideEvt) {
            $("#ex5SliderVal").text(slideEvt.value);
        });
        $("#ex6").slider();
        $("#ex6").on("slide", function (slideEvt) {
            $("#ex6SliderVal").text(slideEvt.value);
        });
        $("#ex7").slider();
        $("#ex7").on("slide", function (slideEvt) {
            $("#ex7SliderVal").text(slideEvt.value);
        });
        $("#ex8").slider();
        $("#ex8").on("slide", function (slideEvt) {
            $("#ex8SliderVal").text(slideEvt.value);
        });
        $("#ex9").slider();
        $("#ex9").on("slide", function (slideEvt) {
            $("#ex9SliderVal").text(slideEvt.value);
        });*/


    /*var namearea;

     $('#name_area').click(function () {
     if (!$("#text_area").val()) {
     alert("tonto")
     }
     else {
     namearea = $("#text_area").val();
     $("#area_done").toggleClass("hidden show");
     $("#questions_done").toggleClass("hidden show");
     var replaced = $("#change").html().replace('X', namearea);
     $("#change").html(replaced);
     }
     });*/


    $('#sliders_done_button').click(function () {

        var naturevalidation = $('[name=na1]:checked,[name=na2]:checked,[name=na3]:checked,[name=na4]:checked');
        if (naturevalidation.length < 4) {
            alert("Por favor responda a todas as perguntas");
            return;
        }

        if (number == name_places.length - 1) {


            var polygonData = {
                type: "sopa",
                name: name_places[number],
                layer: L.geoJson(drawnItems.toGeoJSON()),
                livingIn: ($("input[name=live]:checked").val()) === 'true',
                predictors: {
                    na1: parseInt($("input[name=na1]:checked").val()),
                    na2: parseInt($("input[name=na2]:checked").val()),
                    na3: parseInt($("input[name=na3]:checked").val()),
                    na4: parseInt($("input[name=na4]:checked").val())
                }
            };

            SOP.push(polygonData);
            map.removeLayer(drawnItems);
            drawnItems = new L.FeatureGroup();

            ShowAllAreas();
            $("#select_place").toggleClass("hidden show");
            $("#sliders_done").toggleClass("hidden show");

            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', true);
            $('#button-freguesia').prop('disabled', true);
            $('#button-freguesiaxs').prop('disabled', true);


        }

        else {

            map.setZoom(zoommap);
            buttonDraw.prop('disabled', false);
            $('#button-freguesia').prop('disabled', false);
            $('#button-freguesiaxs').prop('disabled', false);
            //$("#draw_polyxs").prop('disabled', false);
            //$(".finish-map").attr('disabled', false);

            $("#sliders_done").toggleClass("hidden show");
            $("#let_draw").toggleClass("hidden show");


            var polygonData = {
                type: "sopa",
                name: name_places[number],
                layer: L.geoJson(drawnItems.toGeoJSON()),
                livingIn: ($("input[name=live]:checked").val()) === 'true',
                predictors: {
                    na1: parseInt($("input[name=na1]:checked").val()),
                    na2: parseInt($("input[name=na2]:checked").val()),
                    na3: parseInt($("input[name=na3]:checked").val()),
                    na4: parseInt($("input[name=na4]:checked").val())
                }
            };

            number = number + 1;
            nameplace();
            $("#group_name_place").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

/*

            for (i = 1; i <= 7; i++) {
                $('input[id=ex' + i + ']').slider('setValue', 0);
                $('span[id=ex' + i + 'SliderVal]').text(0);
            };
*/
            $("input[name=na1]").prop('checked', false);
            $("input[name=na2]").prop('checked', false);
            $("input[name=na3]").prop('checked', false);
            $("input[name=na4]").prop('checked', false);



            SOP.push(polygonData);
            map.removeLayer(drawnItems);
            drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);
            map.addLayer(polygonData.layer);

            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', false);

        }


    });

    var AreaSelected;
    var group = new L.featureGroup();

    var highlightedArea = null;


    function ShowAllAreas() {

        map.removeLayer(drawnItems);
        //$(".finish-map").attr('disabled', true);
        buttonDraw.prop('disabled', true);
        buttonDelete.prop('disabled', true);
        for (i = 0; i < SOP.length; i++) {
            group.addLayer(SOP[i].layer);
            map.addLayer(SOP[i].layer);
            var sopi = SOP[i];
            /*SOP[i].layer.on('click', function (e) {
             L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
             map.fitBounds(e.layer.getBounds(), null);
             $("#title2_done").toggleClass("hidden show");
             $("#area_done").toggleClass("hidden show");
             $("input:radio[name=live]:first").attr('checked', true);
             $('#name_area').attr('disabled', false);
             AreaSelected = sopi;
             });*/
            $('#radios').append('<div class="radio"><label><input type="radio" name="sc_areas" value="' + i + '"/>Area ' + SOP[i].name + '</label></div>');


        }

        $("input[name='sc_areas']").change(function () {
            if (highlightedArea != null) {
                highlightedArea.layer.setStyle({color: '#6000ff'});
            }
            var index = parseInt($("input[name=sc_areas]:checked").val());
            highlightedArea = SOP[index];
            highlightedArea.layer.setStyle({color: '#FF0000'});

        });

        map.fitBounds(group.getBounds(), null);


        $('#choose_place').click(function () {

            if ($('input[name=sc_areas]:checked').length) {
                $("#select_place").toggleClass("hidden show");
                $("#questions_done").toggleClass("hidden show");
                buttonDraw.prop('disabled', true);
                buttonDelete.prop('disabled', true);


                for (var i = 0; i < SOP.length; i++) {
                    map.removeLayer(SOP[i].layer);
                }

                var group = new L.featureGroup();

                highlightedArea.layer.setStyle({color: '#FF0000'});
                group.addLayer(highlightedArea.layer);
                map.addLayer(highlightedArea.layer);

                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
                map.fitBounds(group.getBounds(), null);


                var title = $("#change").html().replace('X', highlightedArea.name);
                $("#change").html(title);
                var pi1re = $("#pi1").html().replace('Y', highlightedArea.name);
                $("#pi1").html(pi1re);
                var pi2re = $("#pi2").html().replace('Y', highlightedArea.name);
                $("#pi2").html(pi2re);
                var pi3re = $("#pi3").html().replace('Y', highlightedArea.name);
                $("#pi3").html(pi3re);
                var pa1re = $("#pa1").html().replace('Y', highlightedArea.name);
                $("#pa1").html(pa1re);
                var pa2re = $("#pa2").html().replace('Y', highlightedArea.name);
                $("#pa2").html(pa2re);
                var pa3re = $("#pa3").html().replace('Y', highlightedArea.name);
                $("#pa3").html(pa3re);
                var pd1re = $("#pd1").html().replace('Y', highlightedArea.name);
                $("#pd1").html(pd1re);
                var pd2re = $("#pd2").html().replace('Y', highlightedArea.name);
                $("#pd2").html(pd2re);
                var pd3re = $("#pd3").html().replace('Y', highlightedArea.name);
                $("#pd3").html(pd3re);
            }
            else {
                alert("Escolha uma área");
            }
        });

    }


    //------


    /*$('.finish-map').click(function () {
     map.removeLayer(drawnItems);
     $(".finish-map").attr('disabled', true);
     buttonDraw.prop('disabled', true);
     buttonDelete.prop('disabled', true);
     for (i = 0; i < SOP.length; i++) {
     group.addLayer(SOP[i].layer);
     map.addLayer(SOP[i].layer);
     var sopi = SOP[i];
     /!*SOP[i].layer.on('click', function (e) {
     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
     map.fitBounds(e.layer.getBounds(), null);
     $("#title2_done").toggleClass("hidden show");
     $("#area_done").toggleClass("hidden show");
     $("input:radio[name=live]:first").attr('checked', true);
     $('#name_area').attr('disabled', false);
     AreaSelected = sopi;
     });*!/
     $('#radios').append('<div class="radio"><label><input type="radio" name="sc_groups" value="' + i + '"/>Area ' + cGroup.name + '</label></div>');


     }
     map.fitBounds(group.getBounds(), null);
     });*/


    uiCoreAPI.instanceUrl = "http://localhost:8080/";

    app = {
        setSOP: function (data2, callback) {
            uiCoreAPI._postRequest(
                uiCoreAPI.instanceUrl + uiCoreWS.SOP,
                data2,
                callback
            );
        }
    };


    $('#questions-sop').click(function () {

        // validate


        var sopvalidation = $('[name=PI1]:checked,[name=PI2]:checked,[name=PI3]:checked,[name=PA1]:checked,[name=PA2]:checked,[name=PA3]:checked,[name=PD1]:checked,[name=PD2]:checked,[name=PD3]:checked');
        if (sopvalidation.length < 9) {
            alert("Por favor responda a todas as perguntas");
            return;
        }

        // finish validate

        highlightedArea.dimensions = {
            pi1: parseInt($("input[name=PI1]:checked").val()),
            pi2: parseInt($("input[name=PI2]:checked").val()),
            pi3: parseInt($("input[name=PI3]:checked").val()),
            pa1: parseInt($("input[name=PA1]:checked").val()),
            pa2: parseInt($("input[name=PA2]:checked").val()),
            pa3: parseInt($("input[name=PA3]:checked").val()),
            pd1: parseInt($("input[name=PD1]:checked").val()),
            pd2: parseInt($("input[name=PD2]:checked").val()),
            pd3: parseInt($("input[name=PD3]:checked").val())
        }

        for (i = 0; i < SOP.length; i++) {
            SOP[i].layer = JSON.stringify(SOP[i].layer.toGeoJSON());
        }

        var id = util.getFromLocalStorage(util.interPageDataKey);

        var data2 = {
            type: "sop",
            id: id,
            areas: SOP
        };


        app.setSOP(data2, function (response) {
            if (response === false) {
                alert("There is a connection problem; please try again later");
            }
            else {
                util.redirectToPage({
                    url: "map2.html",
                    payload: response.id
                });
            }
        });


    });

    // TRANSLATIONS
    //$("#title_done1").html(languages('en','title_done1'));

    //Freguesia buttons
    $('#d-ajuda').click(function () {
        map.setView([38.711402, -9.199039], 14);
    });

    $('#d-alcantara').click(function () {
        map.setView([38.710676, -9.182990], 14);
    });

    $('#d-alvalade').click(function () {
        map.setView([38.753182, -9.151691], 14);
    });

    $('#d-areeiro').click(function () {
        map.setView([38.742261, -9.133480], 14);
    });

    $('#d-arroios').click(function () {
        map.setView([38.727819, -9.140717], 14);
    });

    $('#d-avenidas').click(function () {
        map.setView([38.739568, -9.149152], 14);
    });

    $('#d-beato').click(function () {
        map.setView([38.733268, -9.113798], 14);
    });

    $('#d-belem').click(function () {
        map.setView([38.702305, -9.215116], 14);
    });

    $('#d-benfica').click(function () {
        map.setView([38.737770, -9.196060], 14);
    });


    $('#d-campo').click(function () {
        map.setView([38.719247, -9.166428], 14);
    });

    $('#d-campolide').click(function () {
        map.setView([38.731470, -9.165880], 14);
    });

    $('#d-carnide').click(function () {
        map.setView([38.763229, -9.188106], 14);
    });
    $('#d-estrela').click(function () {
        map.setView([38.710837, -9.153887], 14);
    });

    $('#d-lumiar').click(function () {
        map.setView([38.770204, -9.160321], 14);
    });

    $('#d-marvila').click(function () {
        map.setView([38.750852, -9.116730], 14);
    });

    $('#d-misericordia').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais').click(function () {
        map.setView([38.772473, -9.126950], 14);
    });

    $('#d-parque').click(function () {
        map.setView([38.765502, -9.099971], 14);
    });

    $('#d-penha').click(function () {
        map.setView([38.725873, -9.124024], 14);
    });

    $('#d-santa').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria').click(function () {
        map.setView([38.711168, -9.137130], 14);
    });

    $('#d-santo').click(function () {
        map.setView([38.718769, -9.149313], 14);
    });

    $('#d-sao').click(function () {
        map.setView([38.752111, -9.177416], 14);
    });

    $('#d-saovicente').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });


}



