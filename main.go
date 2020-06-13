package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./build")))
	err := http.ListenAndServe(":8080", nil)
	log.Println(err)
}
