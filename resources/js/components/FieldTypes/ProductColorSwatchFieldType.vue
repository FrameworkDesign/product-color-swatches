<template>
    <div class="flex">
        <v-select
            ref="input"
            class="flex-1"
            :name="'product-color-swatch-field-type'"
            :clearable="true"
            :disabled="false"
            :options="options"
            :placeholder="placeholder"
            :searchable="true"
            :taggable="false"
            :multiple="false"
            :reset-on-options-change="false"
            :close-on-select="true"
            :value="selectedOption"
            :create-option="(value) => ({ value, label: value })"
            @input="vueSelectUpdated"
            @search:focus="$emit('focus')"
            @search:blur="$emit('blur')"
        >
            <template #selected-option="option">
                <div class="flex justify-start items-center">
                    <selected-color-option :colors="option.colors"></selected-color-option>
                    <span>{{ option.name }}</span>
                </div>
            </template>
            <template v-slot:option="option">
                <div class="flex justify-start items-center">
                    <color-option :colors="option.colors"></color-option>
                    <span>{{ option.name }}</span>
                </div>
            </template>
        </v-select>
    </div>
</template>

<script>
import ColorOption from "./ColorOption";
import SelectedColorOption from "./SelectedColorOption"
export default {
    mixins: [Fieldtype],
    components: {
        ColorOption,
        SelectedColorOption
    },
    mounted() {
        console.log('ProductColorSwatchFieldType', this.meta.swatches, Object.keys(this.meta.swatches))
        this.options = this.meta.swatches
    },

    data() {
        return {
            placeholder: 'Find Color',
            options: []
        };
    },

    computed: {
        selectedOption() {
            let selections = this.value || [];
            if (typeof selections === 'string' || typeof selections === 'number') {
                selections = [selections];
            }
            return selections.map(value => {
                return this.options.find(element => element.value === value) || {value, key: value}
            });
        },
    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        vueSelectUpdated(value) {
            if (value) {
                this.update(value.value)
            } else {
                this.update(null);
            }
        }
    }

}
</script>
