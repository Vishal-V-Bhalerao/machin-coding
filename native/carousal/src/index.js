const carouselRoot = document.querySelector('.root')
const imageArray = ['src/assets/image_1.jpg','src/assets/image_2.jpg','src/assets/image_3.jpg','src/assets/image_4.jpg','src/assets/image_5.jpg']

class Carousel {
    imageArray = []
    container = null
    height = 500
    width = 500
    currentIndex = 0
    imageHolder = null
    imageFrame = null
    constructor(imageArray = [], rootElement, height, width){
        this.imageArray = imageArray
        this.container = rootElement
        this.height = height
        this.width = width
        this.imageHolder = document.createElement('div')
        this.imageFrame = document.createElement('div')
        this.imageFrame.style.width = this.width + 'px'
        this.imageFrame.style.height = this.height + 'px'
        this.imageHolder.classList.add('image_holder') 
        this.imageFrame.classList.add('image_frame')
        this.crateImageCarousel()
        this.createScrollButtons()
        this.selectImageByID = this.selectImageByID.bind(this)
    }

    selectImageByID(e, index) {
        let selectedIndex = index 
        if(selectedIndex >= this.imageArray.length){
            selectedIndex = 0
        }
        if( selectedIndex < 0 ){
            selectedIndex = this.imageArray.length - 1
        }
        this.imageHolder.style.transform = `translateX(${(-selectedIndex) * this.width}px)`
        this.currentIndex = selectedIndex
    }
    crateImageCarousel() {
        this.imageArray.map((image) => {
            const imageItem = document.createElement('img')
            imageItem.style.width = this.width + 'px'
            imageItem.style.height = this.height + 'px'
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
        leftSelectButton.addEventListener('click', (e) => this.selectImageByID(e, this.currentIndex - 1))

        const rightSelectButton = document.createElement('button')
        rightSelectButton.classList.add('right_button')
        rightSelectButton.innerHTML = '>'
        rightSelectButton.addEventListener('click', (e) => this.selectImageByID(e, this.currentIndex + 1))

        this.imageFrame.appendChild(leftSelectButton)
        this.imageFrame.appendChild(rightSelectButton)
    }

}

new Carousel(imageArray, carouselRoot, 700, 700)