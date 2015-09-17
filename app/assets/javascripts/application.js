// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  $(".background_images").on("click", function() {
    $(".background_images").css("border", "2px solid white");
    $(this).css("border", "2px solid blue");
    $("#instagram_picture").css("background-image", "url('" + $(this).attr("src") + "')")
  });

  $("#colors li").on("click", function() {
    $("#colors li").css("border", "1px solid black");
    $(this).css("border", "1px solid blue");
    $("#book_message").css("color", $(this).css("background-color"));
    $("#book_author").css("color", $(this).css("background-color"));
    $("#assign").css("color", $(this).css("background-color"));
  });

  $("#shadows li").on("click", function() {
    $("#shadows li").css("border", "1px solid black");
    $(this).css("border", "1px solid blue");
    $("#book_message").css("text-shadow", "1px 1px " + $(this).css("background-color"));
    $("#book_author").css("text-shadow", "1px 1px " + $(this).css("background-color"));
    $("#assign").css("text-shadow", "1px 1px " + $(this).css("background-color"));
  });

  $("#message").on("keyup", function() {
    $("#book_message").text($(this).val());
  });

  $("#author").on("keyup", function() {
    $("#book_author").text($(this).val());
  });

  $("#form_generator").on("submit", function() {
    $("#instagram_picture").css(css($("#instagram_picture")));
    $("#book_message").css(css($("#book_message")));
    $("#book_author").css(css($("#book_author")));
    var html = $("<div />").append($("<html />").append($("<body />").
                css("margin", "0px").append($("#instagram_picture"))).
                clone()).html();
    $("#html_to_generate").val(html);
  });
});

function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}
