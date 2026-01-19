<script setup lang="ts">
import { menuData } from '~/data/menuData'

const formatPrice = (price: number | string) => {
  if (typeof price === 'number') {
    return `$${price.toFixed(2)}`
  }
  return price
}
</script>

<template>
  <section id="menu" class="w-full border-t border-gray-200">
    <!-- Menu Header -->
    <div class="rounded-lg bg-primary-600 text-white p-4 mb-6">
      <h3 class="text-center text-2xl font-semibold flex items-center justify-center gap-2">
        Menu
        <UIcon name="i-heroicons-list-bullet" class="w-6 h-6" />
      </h3>
      <p class="text-center text-sm mt-2">
        All Plates Served with Hushpuppies and a choice of two sides:<br />
        coleslaw, potato things, plain or cheese grits, salad, baked potato,
        french fries, sweet potato fries, baked sweet potato.
      </p>
    </div>

    <!-- Menu Categories -->
    <div
      v-for="category in menuData"
      :key="category.category"
      class="m-4 p-4 rounded-lg border border-neutral-200"
    >
      <h4 class="text-center text-xl font-semibold mb-2">{{ category.category }}</h4>
      <p v-if="category.comment" class="text-center italic text-gray-600 mb-4">
        {{ category.comment }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UCard
          v-for="item in category.items"
          :key="item.name"
          class="flex flex-col"
        >
          <template #header>
            <h5 class="font-semibold">{{ item.name }}</h5>
          </template>


          <template #footer>
            <UBadge color="primary" variant="solid">
              {{ formatPrice(item.price) }}
            </UBadge>
          </template>
        </UCard>
      </div>
    </div>
  </section>
</template>
