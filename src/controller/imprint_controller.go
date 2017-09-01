package controller

import (
  "net/http"
  "html/template"
)

func Imprint(w http.ResponseWriter, r *http.Request) {
  t, err :=  template.ParseFiles("view/layout.ghtml", "view/imprint.ghtml")

  if (err == nil) {
    t.ExecuteTemplate(w, "Layout", nil)
  } else {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }

}
