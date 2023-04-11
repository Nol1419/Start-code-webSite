console.log("Conected");

// Contenido del Html -> preparado para enviar el fragment
const contentArticle = document.querySelector(".article-section");
const contentArticleBody = document.querySelector(".article-section__body");

//change img
const imgNew = document.getElementById("img");

// change contents
const parragraph = document.querySelector(".parragraph");
const section__footer = document.querySelector(".section__footer");
const title = document.querySelector(".title");

// CALL A THE LINKS
const btnLinkMoon = document.getElementById("moon");
const btnLinkMars = document.getElementById("mars");
const btnLinkEuropa = document.getElementById("europa");
const btnLinkTitan = document.getElementById("titan");

// 1 step
try {
  const getApiLocal = async () => {
    console.log("hola");
    const apiLocal = await fetch("./data.json");
    const result = await apiLocal.json();
    return result.destinations;
  };

  btnLinkMoon.addEventListener("click", async () => {
    try {
      const viweData = await getApiLocal();

      imgNew.src = viweData[0].images.png;
      parragraph.innerHTML = viweData[0].description;
      title.innerHTML = viweData[0].name;
      section__footer.innerHTML = `
                    <div class="footer__left">
                        <h4>Avg. distance</h4>
                        <p>${viweData[0].distance}</p>
                    </div>

                    <div class="footer__rigth">
                        <h4>Est. travel time</h4>
                        <p>${viweData[0].travel}</p>
                        <!--p>https://mohammedduke.github.io/Space-tourism-multi-page-website/destination-moon.html</p-->
                        
                        
                    </div>
                `;
    } catch (e) {
      console.log(e);
    }
  });

  btnLinkMars.addEventListener("click", async () => {
    try {
      const viweData = await getApiLocal();

      imgNew.src = viweData[1].images.png;
      parragraph.innerHTML = viweData[1].description;
      title.innerHTML = viweData[1].name;
      section__footer.innerHTML = `
                    <div class="footer__left">
                        <h4>Avg. distance</h4>
                        <p>${viweData[1].distance}</p>
                    </div>

                    <div class="footer__rigth">
                        <h4>Est. travel time</h4>
                        <p>${viweData[1].travel}</p>
                        <!--p>https://mohammedduke.github.io/Space-tourism-multi-page-website/destination-moon.html</p-->
                        
                        
                    </div>
                `;
    } catch (e) {
      console.log(e);
    }
  });

  btnLinkEuropa.addEventListener("click", async () => {
    try {
      const viweData = await getApiLocal();

      imgNew.src = viweData[2].images.png;
      parragraph.innerHTML = viweData[2].description;
      title.innerHTML = viweData[2].name;
      section__footer.innerHTML = `
                    <div class="footer__left">
                        <h4>Avg. distance</h4>
                        <p>${viweData[2].distance}</p>
                    </div>

                    <div class="footer__rigth">
                        <h4>Est. travel time</h4>
                        <p>${viweData[2].travel}</p>
                        <!--p>https://mohammedduke.github.io/Space-tourism-multi-page-website/destination-moon.html</p-->
                        
                        
                    </div>
                `;
    } catch (e) {
      console.log(e);
    }
  });

  btnLinkTitan.addEventListener("click", async () => {
    try {
      const viweData = await getApiLocal();

      imgNew.src = viweData[3].images.png;
      parragraph.innerHTML = viweData[3].description;
      title.innerHTML = viweData[3].name;
      section__footer.innerHTML = `
                    <div class="footer__left">
                        <h4>Avg. distance</h4>
                        <p>${viweData[3].distance}</p>
                    </div>

                    <div class="footer__rigth">
                        <h4>Est. travel time</h4>
                        <p>${viweData[3].travel}</p>
                        <!--p>https://mohammedduke.github.io/Space-tourism-multi-page-website/destination-moon.html</p-->
                        
                        
                    </div>
                `;
    } catch (e) {
      console.log(e);
    }
  });
  
} catch (e) {
  console.log(e);
}