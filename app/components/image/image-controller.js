import ImageService from "./image-service.js"
//Your ImageService is a global class what can you do here to instantiate it?
const imageService = new ImageService

function draw(data) {
  document.getElementById('body').style.backgroundImage = `url('${data.large_url}')`
  document.getElementById('body').style.backgroundSize = '100%'
  document.getElementById('body').style.backgroundAttachment = 'fixed'

}

export default class ImageController {
  constructor() {
    this.getImage()
  }

  getImage() {
    imageService.getImage(draw)
  }
}


