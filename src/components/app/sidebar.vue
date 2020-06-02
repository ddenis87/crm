<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="sbRow in sidebar"
      v-bind:key="sbRow.url" 
      tag="li"
      active-class="active"
      :to="sbRow.url"
      :exact="sbRow.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{sbRow.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    sidebar: [
      {url: "/", title: "Счет", exact: true},
      {url: "/history", title: "История"},
      {url: "/planning", title: "Планирование"},
      {url: "/record", title: "Новая запись"},
      {url: "/categories", title: "Категории"}
    ]
  })
}
</script>