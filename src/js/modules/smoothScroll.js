export class Scrooth {
    constructor({element = window, strength=18, acceleration = 1.2,deceleration = 0.945}={}) {
      this.element = element;
      this.distance = strength;
      this.acceleration = acceleration;
      this.deceleration = deceleration;
      this.running = false;
      this.maxScroll = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
  
      this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
      this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
      this.scroll = this.scroll.bind(this);
    }
  
    scrollHandler(e) {
      e.preventDefault();
  
      if (!this.running) {
        this.top = this.element.pageYOffset || this.element.scrollTop || 0;
        this.running = true;
        this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
        this.isDistanceAsc = true;
        this.scroll();
      } else {
        this.isDistanceAsc = false;
        this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
      }
    }
  
    scroll() {

      if (this.running) {
        this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
        Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
        Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
        
        if (this.top + window.innerHeight > this.maxScroll) {
            console.log(this.top + window.innerHeight, this.maxScroll);
            this.top = this.maxScroll - window.innerHeight;
        } else if (this.top < 0) {
            this.top = 0;
        } else {
            this.top += this.currentDistance;
        }

        this.element.scrollTo(0, this.top);
        
        requestAnimationFrame(this.scroll);
      }
    }
  }
  

  