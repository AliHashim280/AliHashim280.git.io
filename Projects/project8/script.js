

// Getting Info of the preview card

let stamps = document.querySelectorAll(".stamp")
let image = document.getElementById("thumbnail_image")
let preview_title = document.getElementById("preview_title")

function insertImage(image, link) {

    const img = document.createElement("img");

    img.src = link
    img.alt = "Your Image";

    image.appendChild(img);
}



function createcard(e) {


    e.preventDefault();
    // Gettig Info from the input fields
    let title = document.getElementById("video_title").value
    let ch_name = document.getElementById("channel").value
    let views = document.getElementById("views").value
    let time = document.getElementById("timestamp").value
    let source = document.getElementById("thumbnail").value

    let temp = {
        'title': title,
        'thumbnail_src': source
    }

    let compiled_info = {
        'channel_name': ch_name,
        'views': views,
        'time_stamp': time,

    }



    image.classList.toggle("skeleton-img")


    preview_title.classList.toggle("skeleton-text")
    stamps.forEach(e => {
        e.classList.toggle("skeleton-text")
    })


    let index = 0
    insertImage(image, temp['thumbnail_src'])
    preview_title.innerHTML = temp['title']
    for (let key in compiled_info) {
        stamps[index].innerHTML = compiled_info[key]
        index++
    }
    console.log("hello");



    return false;
}