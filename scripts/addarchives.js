let archivesHTML = "";

archives.forEach((archive) => {
  archivesHTML += `
  <hr />
  <div class="main_content_comming_soon_container">
    <p class="name">${archive.name}</p>
    <p class="data">${archive.data}</p>
    <p class="location">${archive.location}</p>
  </div>
    `;
});
document.querySelector(".js-archives").innerHTML = archivesHTML;

console.log(archivesHTML);
