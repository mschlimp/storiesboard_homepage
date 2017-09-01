package storiesboard

import (
    "net/http"
    "controller"
)

func init() {
  http.HandleFunc("/about", controller.About)
  http.HandleFunc("/imprint", controller.Imprint)
  http.HandleFunc("/", controller.Blogs)
}
