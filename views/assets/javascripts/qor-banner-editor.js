$(document).ready(function(){
  $(".js-banner-editor").vee({
    width: "960px",
    height: "400px",
    datas : {
      "sub_heading" : {
        "title" : "Sub Header",
        "template" : '<em style="color" {{color}};">{{text}}</em>',
        "keys" : {
          "text" : { "default" : "SUB-HEADING GOES HERE", "type" : "input" },
          "color" : { "default" : "#7dd4c9", "type" : "color" }
        }
      },
      "heading" : {
        "title" : "Header",
        "template" : '<h1 style="color" {{color}};">{{text}}</h1>',
        "keys" : {
          "text" : { "default" : "HEADER GOES HERE", "type" : "input" },
          "color" : { "default" : "#FFFFFF", "type" : "color" }
        }
      },
      "bold_heading" : {
        "title" : "Bold Header",
        "template" : '<h1 style="color" {{color}};"><strong>{{text}}</strong></h1>',
        "keys" : {
          "text" : { "default" : "BOLD HEADER GOES HERE", "type" : "input" },
          "color" : { "default" : "#000000", "type" : "color" }
        }
      },
      "button" : {
        "title" : "Button",
        "template" : '<a href="{{link}}" class="btn" title="{{text}}" target="{{target}}">{{text}}</a>',
        "keys" : {
          "text" : { "default" : "BUTTON TEXT GOES HERE", "type" : "input" },
          "link" : { "default" : "http://www.asicsamerica.com/", "type" : "input" },
          "target" : {"default" : "", "type" : "select", "options" : ["", "_blank"]}
        }
      }
    }
  });
});
