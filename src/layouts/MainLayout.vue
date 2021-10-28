<script setup></script>

<template>
  <q-layout view="hHr LpR lFf">
    <q-header reveal elevated bordered>
      <q-toolbar class="bg-purple text-white">
        <q-toolbar-title> Toolbar </q-toolbar-title>
        <q-btn flat round dense icon="assignment_ind" />
        <q-btn flat round dense icon="apps" class="q-mr-xs" />
        <q-btn flat round dense icon="more_vert" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
