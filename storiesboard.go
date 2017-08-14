package storiesboard

import (
    "net/http"
    "controller"
)

func init() {
  http.HandleFunc("/", controller.Blogs)
}
