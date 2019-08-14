function HtmlElement() {
  this.click = function(){
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function() {
  console.log(`focused`)
}

function HtmlSelectElement(items=[]) {
  this.items = items

  this.addItem = function(item){
    this.items.push(item)
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}

//*base is HTMLSelectElement
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype) //baseHTMLElement will not inherit click and focus unless we write it like this
HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

let example = new HtmlSelectElement()
console.log(example)
example.click()
example.focus()

// let arr = new HtmlSelectElement([1, 2, 3])
// arr.render()

//! image element
function HTMLImageElement(src) {
  this.src = src
  
  this.render = function() {
    return `<img src="${this.src}" alt="img"/>`
  }
}

HTMLImageElement.prototype = new HtmlElement()
HTMLImageElement.prototype.constructor = HTMLImageElement

let image = new HTMLImageElement('https://t.ly/lz8rL')
console.log(image.render())

function SelectHTML(items = ['amber', 'cami', 'mason']) {
  this.items = items

  this.render = function() {
    return (
      `<select>
        ${this.items.map(item => `<option>${item}</option>`)}
      </select>`
    )
  }
}


const select = new SelectHTML()
console.log(select.render())