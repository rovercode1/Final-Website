function loadingFunc(){
    var loading = document.querySelector("section");
    var body = document.querySelector("body");
    body.classList.add("loading")
    loading.classList.remove("page-load")
    body.classList.remove("loading")
}