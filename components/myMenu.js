const MyMenu = {
    data: function () {
        return {
            buttons: [
                {title: "File Alpha", link: "index.html"},
                {title: "File Beta", link: ""},
                {title: "File Gamma:", link: "FileGamma.html"},
              ]
        }
    },
    template: `
      <div class="text-center">
        <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                Greek Files Menu
            </v-btn>
            </template>
    
            <v-list>
            <v-list-item
                v-for="(item, index) in buttons"
                :key="index"
                :href="item.link"
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            </v-list>
        </v-menu>
    </div>
    `
}