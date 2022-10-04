package main

import (
	"log"
	"fmt"
	"net/http"
)

/*
	readme
*/
func handler(writter http.ResponseWriter, request *http.Request) {
	fmt.Fprintf(writter, "Hell world, the current path is: %s", request.URL.Path[1:])
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil)) 
}
