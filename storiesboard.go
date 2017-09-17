package storiesboard

import (
    "net/http"
    "controller"
)

func init() {
  http.HandleFunc("/blogs/201709/crypto-currency-data", controller.Blog_201709)
  http.HandleFunc("/blogs/201709", controller.Blog_201709Overview)

  http.HandleFunc("/about", controller.About)
  http.HandleFunc("/imprint", controller.Imprint)
  http.HandleFunc("/", controller.Blogs)
}
