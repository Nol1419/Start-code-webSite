// containers
const contentData = document.getElementById("contentData");
const sectionRight = document.getElementById("sectionRight");
const fragment = document.createDocumentFragment();

// btn content
const btnSection_1 = document.getElementById("sectionRight__1");
const btnSection_2 = document.getElementById("sectionRight__2");
const btnSection_3 = document.getElementById("sectionRight__3");

// url json
let URL = "./data.json";

// function get json
const getDataJson = async (data) => {
  const dataJson = await fetch(data);
  const response = await dataJson.json();
  if (!response.ok) {
    contentData.innerHTML = `Se ha detectado un error en la carga de datos`;
    fragment.appendChild(contentData);
    sectionRight.appendChild(fragment);
  }
  return response.technology;
};

// see data in the DOM
const seeData = async (data, posicion) => {
  try {
    let getData = await data;
    getData = getData[posicion];
    console.log(getData);

    // let imgData = getData.images.landscape;
    let imgData = getData.images.portrait;

    let itemHtml = `
                <div class="itemData" id="itemData">
                  <span>THE TERMINOLOGY...</span>
                  <h2>${getData.name}</h2>
                  <p>${getData.description}</p>
    
                </div>
                
                <figure class="itemImg">
                  <figcaption class="contentImg">
                    <img src="${imgData}" alt="Imagen">
    
                  </figcaption>
                
                </figure>
        `;

    contentData.innerHTML = itemHtml;
    fragment.appendChild(contentData);
    sectionRight.appendChild(fragment);
  } catch (e) {
    contentData.innerHTML = `Se ha detectado un error: ${e}`;
    fragment.appendChild(contentData);
    sectionRight.appendChild(fragment);
  }
};

// call Api | See Html content
btnSection_1.addEventListener("click", () => {
  seeData(getDataJson(URL), 0);
});

btnSection_2.addEventListener("click", () => {
  seeData(getDataJson(URL), 1);
});

btnSection_3.addEventListener("click", () => {
  seeData(getDataJson(URL), 2);
});

// load page
window.addEventListener("load", seeData(getDataJson(URL), 0));

const contentRigth = document.getElementById("content_rigth");
const btnMenu = document.querySelector("button i");

btnMenu.addEventListener("click", (e) => {
  if (btnMenu.classList.toggle("bx-x")) {
    console.log("aaaa");
    contentRigth.style.transitionDuration = "400ms";
    contentRigth.style.right = "0";
  } else {
    console.log("bbbb");
    contentRigth.style.transitionDuration = "400ms";
    contentRigth.style.right = "-100rem";
  }
});
