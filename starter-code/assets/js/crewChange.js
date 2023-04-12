console.log("CONECTED");

let URL = "./data.json";

const fragment = document.createDocumentFragment();
const div = document.createElement("DIV");
div.classList = "article-section"

const contentMainArticle = document.querySelector(".content__main-article");
const contentSection = document.querySelector(".article-section");

// btn change data HTML
const commander = document.getElementById("commander");
const engineer = document.getElementById("engineer");
const pilot = document.getElementById("pilot");
const specialist = document.getElementById("specialist");

// get api.json
const getDataJson = async (data) => {
  const dataUrl = await fetch(data);
  const response = await dataUrl.json();
  return response.crew;
};

// function see data html
const seeData = async (data, posicion) => {
  contentSection.innerHTML = "";
  try {
      let datos = await data;
      datos = datos[posicion]
      console.log(datos);

      let sectionHtml = `
          <div class="section__left">
            <p class="sub_title">${datos.role}</p>

            <h3 class="name">${datos.name}</h3>

            <p class="paragraph">
              ${datos.bio}
            </p>

          </div>

          <figure class="section__right">
            <figcaption class="content_img">
              <img src="${datos.images.png}" alt="${datos.name}" class="img">

            </figcaption>

          </figure>
      `;
      div.innerHTML = sectionHtml;
      fragment.appendChild(div);
      contentSection.appendChild(fragment);
    
  } catch (e) {
    // console.log(e);
    contentSection.innerHTML = `Error en la carga de datos: ${e}`;
  }
};

commander.addEventListener('click', (event) => {
  event.preventDefault();
  seeData(getDataJson(URL), 0);
})

engineer.addEventListener('click', (event) => {
  event.preventDefault();
  seeData(getDataJson(URL), 1);
})

pilot.addEventListener('click', (event) => {
  event.preventDefault();
  seeData(getDataJson(URL), 2);  
})

specialist.addEventListener('click', (event) => {
  event.preventDefault();
  seeData(getDataJson(URL), 3);
})

window.addEventListener("load", seeData(getDataJson(URL), 0))