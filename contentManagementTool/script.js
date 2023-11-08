function addBlog() {

    var title = document.getElementById("title").value;
    var image = document.getElementById("image").value;
    var content = document.getElementById("content").value;


    var blogPost = document.createElement("div");
    blogPost.className = "blog-post";
    blogPost.innerHTML = `
      <h3>${title}</h3>
      <img src="${image}" alt="Blog Image">
      <p>${content}</p>
    `;

    var previewSection = document.getElementById("preview");
    previewSection.appendChild(blogPost);


    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("content").value = "";
  }