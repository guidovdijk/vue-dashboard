<template>
    <form>
        <input class="input" type="text" placeholder="Search Country" v-model="searchOn" v-on:keyup="searchDropdown">
        <div class="select is-multiple">
            <select size="7">
                <option 
                    v-bind:key="index" 
                    v-for="(country, index) in countries" 
                    v-on:click="getValue(index)"
                    :value="country">
                    {{ country }}
                </option>
            </select>
        </div>
        <input v-on:click="search" class="submit" type="submit" value="search">
    </form>
</template>
<script>

import { serverBus } from '../main';

let countries = [
    'Argentina',
    'Nederland',
    'Brazil',
    'Chile',
];

export default {
    name: 'searchform',
    data () {
        return {
            searchOn: '',
            selected: '',
            countries: countries,
        };
    },

    methods: {
        searchDropdown: function () {
            var search = this.searchOn.toLowerCase();
            if (!(search.length == 0 || search.length >= 3)) {
                return;
            }

            var optionList = document.querySelectorAll('.select option');

            console.log("search", search);
            console.log("optionList", optionList);
            for (var i = 0; i < optionList.length; i++) {
                var txt = optionList[i].textContent.toLowerCase();
                if (!search) {
                    optionList[i].classList.remove('is-hidden');
                } else if (txt.indexOf(search) > -1) {
                    optionList[i].classList.remove('is-hidden');
                } else {
                    optionList[i].classList.add('is-hidden');
                }
            }
        },
        getValue: function(index) {
            this.selected = this.countries[index];
        },
        search: function(e) {
            e.preventDefault();
            this.serverSelected();
        },
        serverSelected: function () {
            // Using the service bus
            serverBus.$emit('serverSelected', this.selected);
        }
    }
}
</script>
