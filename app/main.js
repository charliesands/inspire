import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
// import TodoController from "./components/todo/todo-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController,
      // todoController: new TodoController
      imageController: new ImageController,
      quoteController: new QuoteController
    }
  }
}

//@ts-ignore
window.app = new app()  