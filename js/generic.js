function toggleMenu() {
  var x = document.getElementById("menu-dropdown");
  if (!x.style.display || x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

/** LANG **/

function setLang(lang) {
  localStorage.lang = lang;
}

function localizeLinks() {
  if (!localStorage.lang) var lang = "de_DE";
  else var lang = localStorage.lang;
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    let element = links[i];
    if (!element.className.includes("localized")) continue;
    if (lang == "de_DE") {
      if (element.href.includes("?langID"))
        element.href = element.href.substr(0, element.href.indexOf("?lang"));
    } else if (!element.href.includes("?langID=" + lang)) {
      element.href += "?langID=" + lang;
    }
  }
}

function initLangClickEvents() {
  let a_seten = document.getElementById("a_setlang_en");
  if (a_seten) a_seten.onclick = () => setLang("en");
  let a_setde = document.getElementById("a_setlang_de");
  if (a_setde) a_setde.onclick = () => setLang("de");
}

/** END LANG **/
