const carouselRoot = document.querySelector('.root')
const imageArray = ['src/assets/image_1.jpg','src/assets/image_2.jpg','src/assets/image_3.jpg','src/assets/image_4.jpg','src/assets/image_5.jpg']

class Carousel {
    imageArray = []
    container = null
    height = '500px'
    width = '500px'
    currentIndex = 0
    imageHolder = null
    imageFrame = null
    constructor(imageArray = [], rootElement, height, width){
        this.imageArray = imageArray
        this.container = rootElement
        this.imageHolder = document.createElement('div')
        this.imageFrame = document.createElement('div')
        this.imageHolder.style.width = this.width
        this.imageHolder.style.height = this.height
        this.imageHolder.classList.add('image_holder') 
        this.imageFrame.classList.add('image_frame')
        this.crateImageCarousel()
        this.createScrollButtons()
        this.selectImageByLeft = this.selectImageByLeft.bind(this)
        this.selectImageByRight = this.selectImageByRight.bind(this)
    }

    selectImageByLeft(e, index){
        let selectedIndex = index 
        if(selectedIndex >= this.imageArray.length){
            selectedIndex = 0
        }
        if( selectedIndex < 0 ){
            selectedIndex = this.imageArray.length
        }
        console.log(e.target.parentNode.scrollLeft)
        if(this.imageHolder.scrollLeft !== undefined){
            this.imageHolder.scrollLeft -= 500
        } 
    }

    selectImageByRight(e, index){
        let selectedIndex = index 
        if(selectedIndex >= this.imageArray.length){
            selectedIndex = 0
        }
        if( selectedIndex < 0 ){
            selectedIndex = this.imageArray.length
        }
        console.log(e.target.parentNode.scrollLeft)
        if(this.imageHolder.scrollLeft !== undefined){
            this.imageHolder.scrollLeft += 500
        } 
    }
    crateImageCarousel() {
        this.imageArray.map((image) => {
            const imageItem = document.createElement('img')
            imageItem.style.width = this.width
            imageItem.style.height = this.height
            imageItem.src = image
            this.imageHolder.appendChild(imageItem)
        })
        this.imageFrame.appendChild(this.imageHolder)
        this.container.appendChild(this.imageFrame)
    }
    createScrollButtons(){
        const leftSelectButton = document.createElement('button')
        leftSelectButton.innerHTML = '<'
        leftSelectButton.classList.add('left_button')
        leftSelectButton.addEventListener('click', (e) => this.selectImageByLeft(e, this.currentIndex - 1))

        const rightSelectButton = document.createElement('button')
        rightSelectButton.classList.add('right_button')
        rightSelectButton.innerHTML = '>'
        rightSelectButton.addEventListener('click', (e) => this.selectImageByRight(e, this.currentIndex + 1))

        this.imageFrame.appendChild(leftSelectButton)
        this.imageFrame.appendChild(rightSelectButton)
    }

}

new Carousel(imageArray, carouselRoot, '700px', '700px')