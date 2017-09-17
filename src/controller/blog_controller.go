package controller

import (
  "net/http"
  "html/template"
)

func Blogs(w http.ResponseWriter, r *http.Request) {
  t, err :=  template.ParseFiles("view/layout.ghtml", "view/blogs.ghtml")

  if (err == nil) {
    t.ExecuteTemplate(w, "Layout", nil)
  } else {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }
}

func Blog_201709(w http.ResponseWriter, r *http.Request) {
  t, err :=  template.ParseFiles("view/layout.ghtml", "view/blogs/201709/blog.ghtml")

  if (err == nil) {
    t.ExecuteTemplate(w, "Layout", nil)
  } else {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }
}

func Blog_201709Overview(w http.ResponseWriter, r *http.Request) {
  t, err :=  template.ParseFiles("view/layout.ghtml", "view/blogs/201709/overview.ghtml")

  if (err == nil) {
    t.ExecuteTemplate(w, "Layout", nil)
  } else {
    http.Error(w, err.Error(), http.StatusInternalServerError)
  }
}
