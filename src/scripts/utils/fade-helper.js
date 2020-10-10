class FadeHelper {
  constructor({ target }) {
    this._fadeInInterval;
    this._fadeOutInterval;
    this._target = target;

  }

  fadeIn() {
    clearInterval(this._fadeInInterval);
    clearInterval(this._fadeOutInterval);
    
    let newValue = 0;

    this._target.style.display = 'flex';
    this._target.style.opacity = 0;

    this._fadeInInterval = setInterval(() => {

      if (newValue < 1) {
        newValue += 0.01;
      } else if (newValue === 1) {
        clearInterval(this._fadeInInterval);
      }

      this._target.style.opacity = newValue;

    }, 0.1);


  }

  fadeOut() {
    clearInterval(this._fadeInInterval);
    clearInterval(this._fadeOutInterval);
    
    let newValue = 1;
    this._target.style.opacity = 1;
    
    this._fadeOutInterval = setInterval( () =>{

      if (newValue > 0) {
        newValue -= 0.01;
      } else if (newValue < 0) {
        this._target.style.opacity = 0;
        this._target.style.display = 'none';
        clearInterval(this._fadeOutInterval);
      }

      this._target.style.opacity = newValue;

    }, 0.1);

  }
};

export default FadeHelper;