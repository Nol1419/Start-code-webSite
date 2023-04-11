console.log('CONECTED')

const response = fetch('./data.json');
const Createfragment  = new DocumentFragment();

// const contentMainArticle = document.querySelector('.content__main-article')
const contentArticle = document.querySelector('.article-section')
const sectionLeft = document.querySelector('.section__left')

const nameCharacter = document.querySelector('.name')
const paragraph = document.querySelector('.paragraph')
const subTitle = document.querySelector('.sub_title')
const btnCarrusel = document.querySelector('.carrusel')

//img
const figure = document.querySelector('.section__right')
const img = document.querySelector('.img')

const commander = document.getElementById('commander')
const engineer = document.getElementById('engineer')
const pilot = document.getElementById('pilot')
const specialist = document.getElementById('specialist')

commander.addEventListener('click', () => {
    response
        .then(response => response.clone().json())
        .then(response => getData(response.crew))


    const getData = (data) => {
        try {
            let viweData = data[0]
                
            subTitle.innerHTML = viweData.role
            nameCharacter.innerHTML = viweData.name
            paragraph.innerHTML = viweData.bio
            img.src = viweData.images.png
            img.style.width =  '90%';

        } catch (e) {
            console.log(e)
        }
        finally{
            console.log('Exit')
        }

    }

})

engineer.addEventListener('click', () => {
    response
    .then(response => response.clone().json())
    .then(response => Createfragment.append(
        getData(response.crew)
        ),
        contentArticle.replaceChildren(
            sectionLeft,
            figure
        )

    )

    const getData = (data) => {
        try {
            let viweData = data[1]
                
            subTitle.innerHTML = viweData.role
            nameCharacter.innerHTML = viweData.name
            paragraph.innerHTML = viweData.bio
            img.src = viweData.images.png
            img.style.width =  '80%';
            

        } catch (e) {
                console.log(e)
        }finally{
            console.log('Exit')
        }

    }

})

pilot.addEventListener('click', () => {
    response
        .then(response => response.clone().json())
        .then(response => getData(response.crew))


    const getData = (data) => {
        try {
            let viweData = data[2]
                
            subTitle.innerHTML = viweData.role
            nameCharacter.innerHTML = viweData.name
            paragraph.innerHTML = viweData.bio
            img.src = viweData.images.png
            img.style.width =  '100%';

        } catch (e) {
                console.log(e)
        }
        finally{
            console.log('exit')
        }

    }

})

specialist.addEventListener('click', () => {
    response
        .then(response => response.clone().json())
        .then(response => getData(response.crew))


    const getData = (data) => {
        try {
            let viweData = data[3]
                
            subTitle.innerHTML = viweData.role
            nameCharacter.innerHTML = viweData.name
            paragraph.innerHTML = viweData.bio
            img.src = viweData.images.png
            img.style.width =  '100%';

        } catch (e) {
                console.log(e)
        }
        finally{
            console.log('exit')
        }

    }

})