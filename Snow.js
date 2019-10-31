class Snow {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    } 

    fall = () => {
        this.pos.y += this.speed;
        if (this.pos.y >= canvas.height - (maxheight[this.pos.x] + 1) * snowsize) {
            this.pos.y = canvas.height - (maxheight[this.pos.x] + 1) * snowsize;
            var min = [0, maxheight[this.pos.x]];
            if (this.pos.x - 1 >= 0) {
                if (maxheight[this.pos.x - 1] < maxheight[this.pos.x]) {
                    min[0] = -1;
                    min[1] = maxheight[this.pos.x - 1];
                }
            }
            if (this.pos.x + 1 < maxheight.length) {
                if (maxheight[this.pos.x + 1] < min[1]) {
                    min[0] = 1;
                    min[1] = maxheight[this.pos.x + 1];
                } else if (maxheight[this.pos.x + 1] == min[1]) {
                    if (Math.floor(Math.random() * 2) == 1) {
                        min[0] = 1;
                        min[1] = maxheight[this.pos.x + 1];
                    }
                }
            }

            if (min[0] != 0) {
                if (min[0] == -1)
                    this.pos.x--;
                else
                    this.pos.x++;
                requestAnimationFrame(this.fall);
            } else {
                maxheight[this.pos.x]++;
            }
        }
        else
            requestAnimationFrame(this.fall);
    }

    draw = () => {
        context.fillStyle = "white";
        context.fillRect(this.pos.x * snowsize, this.pos.y, snowsize, snowsize);
    }
}