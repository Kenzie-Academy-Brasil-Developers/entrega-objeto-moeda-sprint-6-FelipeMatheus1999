const divImages = document.querySelector('.divImages');
const divText = document.querySelector('.divText');

const coin = {
    state: 0,

    flip: function() {
        this.state = Number.parseInt(Math.random(0, 1) * 2);

        return this.state;
    },

    toString: function() {
        if (this.state === 0) {
            return "Heads";
        }

        else if (this.state === 1) {
            return "Tails";
        }
    },

    toHTML: function() {
        const image = document.createElement('img');

        if (coin.toString() === "Heads") {
            image.src = "/coinObject/img/image.jpg";
            image.alt = coin.toString();
        }

        else if (coin.toString() === "Tails") {
            image.src = "/coinObject/img/moeda-de-1-real-direitos-humanos-D_NQ_NP_22133-MLB20225120851_012015-F_moeda+1+real+direitos+humanos.jpg";
            image.alt = coin.toString();
        }

        return image
    },
};

const display20Flips = () => {
    const results = [];

    for (let i = 0; i < 20; i++) {
        results[i] = coin.flip();
    }

    const span = document.createElement("span");
    span.innerText = results
    divText.appendChild(span);

    return results;
}

const display20Images = () => {
    const results = [];

    for (let i = 0; i < 20; i++) {
        coin.flip()
        results[i] = coin.toHTML();

        const image = document.createElement("img");
        image.classList.add('image');
        image.src = results[i].src;
        image.alt = results[i].alt;
        divImages.appendChild(image);
    }
    
    return results;
}

display20Flips();
display20Images();