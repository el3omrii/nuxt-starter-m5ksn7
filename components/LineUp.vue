<template>
    <div class="pitch responsive" :style="pitchStyle()">
        <p v-if="lineup.error" class="text-3xl text-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">التشكيلة غير متاحة حاليا</p>
        <div v-else class="flex absolute h-full w-full">
            <Team v-for="(team, index) in lineup.data"
                :players="team.startXI"
                :formation="team.formation"
                :colors="team.team.colors"
                :away="index === 1" />
        </div>
    </div>
    <div dir="ltr" class="hidden md:flex flex-row-reverse gap-5 mt-4 p-4">
    <div class="w-full rounded-xl border shadow-md" v-for="team in lineup.data" v-bind:key="team.name">
      <div class="flex items-center h-12 text-2xl font-bold">
        <span
          class="float-left block w-3 h-full rounded-tl-xl"
          :style="{ 'background-color': '#' + team.team.colors.player.primary }"
        ></span>
        <span class="mx-3">{{ team.team.name }}</span>
        <span class="text-base">{{ team.formation }}</span>
        <span class="ml-auto mr-2"
          ><img class="w-auto h-[40px]" :src="team.team.logo" :alt="`${team.team.name} logo`"
        /></span>
      </div>
      <div class="team-lineup">
        <table class="w-full">
          <tr class=" bg-gray-100">
            <td colspan="2" class="uppercase font-bold py-2">coach</td>
          </tr>
          <tr class="bg-white border-b">
            <td></td>
            <td class="py-2">{{ team.coach.name }}</td>
          </tr>
          <tr class="bg-gray-100">
            <td colspan="2" class="uppercase font-bold py-2">starting XI</td>
          </tr>
          <tr class="font-light" v-for="player in team.startXI" :key="player.player.name">
            <td class="py-2 w-1/6 text-gray-500">{{ player.player.number }}</td>
            <td class="py-2">{{ player.player.name }}</td>
          </tr>
          <tr class="bg-gray-100">
            <td colspan="2" class="uppercase font-bold py-2">substitutes</td>
          </tr>
          <tr class="font-light" v-for="player in team.substitutes" :key="player.player.name">
            <td class="py-2 w-1/6 text-gray-500">{{ player.player.number }}</td>
            <td class="py-2">{{ player.player.name }}</td>
          </tr>
        </table>

        
      </div>
    </div>
  </div>
  <div class="flex flex-col md:hidden gap-5 mt-4 p-4 font-source">
    <TabGroup>
      <TabList class="w-full flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          v-for="team in lineup.data"
          as="template"
          :key="team.team.id"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ team.team.name }}
        </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-2">
        <TabPanel v-slot="{selected}" v-for="(team, idx) in lineup.data"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]">
          <TransitionRoot appear :show="selected"
                            enter="transition-opacity duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
          <table class="w-full">
          <tr class=" bg-gray-100">
            <td colspan="2" class="text-center uppercase font-bold py-2">coach</td>
          </tr>
          <tr class="bg-white border-b">
            <td></td>
            <td class="py-2">{{ team.coach.name }}</td>
          </tr>
          <tr class="bg-gray-100">
            <td colspan="2" class="text-center uppercase font-bold py-2">starting XI</td>
          </tr>
          <tr class="font-light" v-for="player in team.startXI" :key="player.player.name">
            <td class="py-2 w-1/6 text-gray-500">{{ player.player.number }}</td>
            <td class="py-2">{{ player.player.name }}</td>
          </tr>
          <tr class="bg-gray-100">
            <td colspan="2" class="text-center uppercase font-bold py-2">substitutes</td>
          </tr>
          <tr class="font-light" v-for="player in team.substitutes" :key="player.player.name">
            <td class="py-2 w-1/6 text-gray-500">{{ player.player.number }}</td>
            <td class="py-2">{{ player.player.name }}</td>
          </tr>
        </table>
        </TransitionRoot>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
    fixture: Number,
    color: {
        type: String,
        default: '#588f58'
    },
    pattern: {
        type: String,
        default: 'lines'
    }
})
const { data: lineup, pending } = await useApi('fixtures/lineup/' + props.fixture)
const pitchStyle = () => `background-color: ${props.color}; background-image: url(/assets/pitch.png), url(/assets/${props.pattern}.png);`
// for test purposes
const lineuptest = JSON.parse('{"data":[{"team":{"id":50,"name":"Manchester City","logo":"https://media.api-sports.io/football/teams/50.png","colors":{"player":{"primary":"5badff","number":"ffffff","border":"99ff99"},"goalkeeper":{"primary":"99ff99","number":"000000","border":"99ff99"}}},"formation":"4-3-3","startXI":[{"player":{"id":617,"name":"Ederson","number":31,"pos":"G","grid":"1:1"}},{"player":{"id":627,"name":"Kyle Walker","number":2,"pos":"D","grid":"2:4"}},{"player":{"id":626,"name":"John Stones","number":5,"pos":"D","grid":"2:3"}},{"player":{"id":567,"name":"Rúben Dias","number":3,"pos":"D","grid":"2:2"}},{"player":{"id":641,"name":"Oleksandr Zinchenko","number":11,"pos":"D","grid":"2:1"}},{"player":{"id":629,"name":"Kevin De Bruyne","number":17,"pos":"M","grid":"3:3"}},{"player":{"id":640,"name":"Fernandinho","number":25,"pos":"M","grid":"3:2"}},{"player":{"id":631,"name":"Phil Foden","number":47,"pos":"M","grid":"3:1"}},{"player":{"id":635,"name":"Riyad Mahrez","number":26,"pos":"F","grid":"4:3"}},{"player":{"id":643,"name":"Gabriel Jesus","number":9,"pos":"F","grid":"4:2"}},{"player":{"id":645,"name":"Raheem Sterling","number":7,"pos":"F","grid":"4:1"}}],"substitutes":[{"player":{"id":50828,"name":"Zack Steffen","number":13,"pos":"G","grid":null}},{"player":{"id":623,"name":"Benjamin Mendy","number":22,"pos":"D","grid":null}},{"player":{"id":18861,"name":"Nathan Aké","number":6,"pos":"D","grid":null}},{"player":{"id":622,"name":"Aymeric Laporte","number":14,"pos":"D","grid":null}},{"player":{"id":633,"name":"İlkay Gündoğan","number":8,"pos":"M","grid":null}},{"player":{"id":44,"name":"Rodri","number":16,"pos":"M","grid":null}},{"player":{"id":931,"name":"Ferrán Torres","number":21,"pos":"F","grid":null}},{"player":{"id":636,"name":"Bernardo Silva","number":20,"pos":"M","grid":null}},{"player":{"id":642,"name":"Sergio Agüero","number":10,"pos":"F","grid":null}}],"coach":{"id":4,"name":"Guardiola","photo":"https://media.api-sports.io/football/coachs/4.png"}},{"team":{"id":45,"name":"Everton","logo":"https://media.api-sports.io/football/teams/45.png","colors":{"player":{"primary":"070707","number":"ffffff","border":"66ff00"},"goalkeeper":{"primary":"66ff00","number":"000000","border":"66ff00"}}},"formation":"4-3-1-2","startXI":[{"player":{"id":2932,"name":"Jordan Pickford","number":1,"pos":"G","grid":"1:1"}},{"player":{"id":19150,"name":"Mason Holgate","number":4,"pos":"D","grid":"2:4"}},{"player":{"id":2934,"name":"Michael Keane","number":5,"pos":"D","grid":"2:3"}},{"player":{"id":19073,"name":"Ben Godfrey","number":22,"pos":"D","grid":"2:2"}},{"player":{"id":2724,"name":"Lucas Digne","number":12,"pos":"D","grid":"2:1"}},{"player":{"id":18805,"name":"Abdoulaye Doucouré","number":16,"pos":"M","grid":"3:3"}},{"player":{"id":326,"name":"Allan","number":6,"pos":"M","grid":"3:2"}},{"player":{"id":18762,"name":"Tom Davies","number":26,"pos":"M","grid":"3:1"}},{"player":{"id":2795,"name":"Gylfi Sigurðsson","number":10,"pos":"M","grid":"4:1"}},{"player":{"id":18766,"name":"Dominic Calvert-Lewin","number":9,"pos":"F","grid":"5:2"}},{"player":{"id":2413,"name":"Richarlison","number":7,"pos":"F","grid":"5:1"}}],"substitutes":[{"player":{"id":18755,"name":"João Virgínia","number":31,"pos":"G","grid":null}},{"player":{"id":766,"name":"Robin Olsen","number":33,"pos":"G","grid":null}},{"player":{"id":156490,"name":"Niels Nkounkou","number":18,"pos":"D","grid":null}},{"player":{"id":18758,"name":"Séamus Coleman","number":23,"pos":"D","grid":null}},{"player":{"id":138849,"name":"Kyle John","number":48,"pos":"D","grid":null}},{"player":{"id":18765,"name":"André Gomes","number":21,"pos":"M","grid":null}},{"player":{"id":1455,"name":"Alex Iwobi","number":17,"pos":"F","grid":null}},{"player":{"id":18761,"name":"Bernard","number":20,"pos":"F","grid":null}}],"coach":{"id":2407,"name":"C. Ancelotti","photo":"https://media.api-sports.io/football/coachs/2407.png"}}]}')
</script>
<style lang="scss" scoped>
.pitch {

position: relative;
background-repeat: round;

    &.responsive {
        padding-bottom: 58.3%;
        width: 100%;
    }
}
.startup {
  display: flex;
  width: 100%;
  gap: 20px;
  .team {
      width: 100%;
      .team-header {
      font-size: 1.5rem;
      height: 40px;
        .team-color {
         
          border-radius: 0.75rem 0 0 0;
        }
        .team-name {
          margin: 0 10px 0 10px;
        }
      }
      table > tr > td {
        padding-left: 1.25rem;
      }
    }
}
</style>