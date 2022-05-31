<template>
    <div class="flex justify-center items-stretch" style="border: 1px solid;width: 24px;height: 22px;margin-right: 7px;">
        <div
            v-for="(color, index) in colors"
            :key="index"
            :style="{
                height: '20px',
                width: colorWidths,
                backgroundColor: index
            }"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        colors: {
            type: [Array, Object],
            default: function() {
                return []
            }
        }
    },

    data() {
        return {
            placeholder: 'Find Color',
            options: []
        };
    },

    computed: {
        colorWidths() {
            let keys = Object.keys(this.colors);
            return (keys.length <= 1) ? '100%' : `${(100 / keys.length)}%`
        }
    },
    methods: {

    }

}
</script>
