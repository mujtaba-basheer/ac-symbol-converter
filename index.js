var app1 = new Vue({
    el: '#conv1',
    data: {
        angle: 0,
        value: 0,
        sub: false,
    },
    methods: {
        submit: function() {
            this.sub = true;
            //console.log(this.value, Math.sin(this.angle / 180 * Math.PI));
            // this.angle = 0;
            // this.value = 0;
        }
    },
    computed: {
        real: function() {
            return this.value * Math.cos(this.angle / 180 * Math.PI).toFixed(3)
        },
        img: function() {
            var pre = ''
            if (this.angle != 0) {
                if ((this.value * Math.sin(this.angle / 180 * Math.PI)) < 0) {
                    pre = '- '
                } else {
                    pre = '+ '
                }
            }
            return `${pre}j(${Math.abs(this.value * Math.sin(this.angle / 180 * Math.PI)).toFixed(3)})`
        }
    }
})

var app1 = new Vue({
    el: '#conv2',
    data: {
        real: 0,
        img: 0,
        sub: false,
    },
    methods: {
        submit: function() {
            this.sub = true;
            // this.real = 0;
            // this.img = 0;
            console.log(Math.atan(this.img / this.real) * 180 / Math.PI)
        }
    },
    computed: {
        value: function() {
            var root_part = Math.pow((this.real * this.real + this.img * this.img), 0.5)
            return root_part.toFixed(3)
        },
        angle: function() {
            return (Math.atan(this.img / this.real) * 180 / Math.PI).toFixed(3)
        }
    }
})