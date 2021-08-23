const MyCard = {
  props: {
    card: {
        type: Object,
        required: true
      },
  },
  template: `
    <div>
      <v-card
          class="mx-auto"
          max-width="344"
          outlined
          color="#CCC9DC"
      >
          <v-list-item three-line>
          <v-list-item-content>
              <div class="overline mb-4">OVERLINE</div>
              <v-list-item-title class="headline mb-1">{{ card.description }}</v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
              tile
              size="80"
              :color="card.color"
          ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
          </v-card-actions>
      </v-card>
      
    </div>
  `,
}