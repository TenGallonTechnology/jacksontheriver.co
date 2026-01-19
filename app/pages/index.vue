<script setup lang="ts">
const navLinks = [
  { label: 'Directions', to: 'https://goo.gl/maps/AAatoaujzVWKcSqG6', external: true },
  { label: 'About', to: '#about' },
  { label: 'Menu', to: '#menu' }
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="bg-gray-50 border-b">
      <UContainer>
        <nav class="flex items-center justify-between py-4">
          <NuxtImg src="/Logo.png" alt="Jack's On The River Logo" width="150" />

          <!-- Desktop Nav -->
          <div class="hidden md:flex gap-4">
            <UButton
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
              :external="link.external"
              variant="ghost"
              color="neutral"
            >
              {{ link.label }}
            </UButton>
          </div>

          <!-- Mobile Menu Button -->
          <UButton
            class="md:hidden"
            variant="ghost"
            color="neutral"
            icon="i-heroicons-bars-3"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </nav>

        <!-- Mobile Nav -->
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 flex flex-col gap-2">
          <UButton
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            :external="link.external"
            variant="ghost"
            color="neutral"
            block
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </UButton>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <UContainer class="py-8">
        <!-- Business Hours Card -->
        <UCard class="text-center mb-8" variant="outline">
          <div class="flex flex-col gap-2">
            <p class="flex items-center justify-center gap-2">
              <UIcon name="i-heroicons-clock" class="w-5 h-5" />
              <span>Business Hours: Thursday-Saturday 5:00pm - 9:00pm</span>
            </p>
            <p class="text-sm flex flex-wrap items-center justify-center gap-2">
              <span class="flex items-center gap-1">
                <UIcon name="i-heroicons-phone" class="w-4 h-4" />
                Call For Takeout:
              </span>
              <UButton to="tel:4782723315" variant="outline" size="xs">
                478-272-3315
              </UButton>
            </p>
            <p class="text-sm flex items-center justify-center gap-2">
              <UIcon name="i-heroicons-home" class="w-4 h-4" />
              Our Location
              <ULink
                to="https://goo.gl/maps/AAatoaujzVWKcSqG6"
                external
                class="text-primary-500 hover:underline"
              >
                245 Rex Miller Rd East Dublin
              </ULink>
            </p>
          </div>
        </UCard>

        <!-- About Section -->
        <section id="about" class="mb-8">
          <h3 class="text-center text-2xl font-semibold flex items-center justify-center gap-2 mb-4">
            About
            <UIcon name="i-heroicons-information-circle" class="w-6 h-6" />
          </h3>
          <p class="text-gray-700 leading-relaxed">
            Jack's on the River is considered by many, in and around the Laurens county area to be a
            hidden gem. The rustic restaurant originated in 1967 serving BBQ and later introducing
            fried catfish to the menu, which became a hit. Jack's is now known for their delicious
            Catfish, Steak &amp; Seafood, as well as many other famous menu options. So, if you're ever
            craving some great food along with a family-friendly environment, come try Jack's on the
            River!
          </p>
        </section>

        <!-- Menu Section -->
        <Menu />
      </UContainer>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-4">
      <UContainer>
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <small>©Jack's On The River 2023</small>

          <div class="text-center">
            <small class="block mb-1">Follow Us!</small>
            <UButton
              to="https://www.facebook.com/JacksPlaceOnTheRiver"
              external
              variant="ghost"
              color="neutral"
              icon="i-heroicons-globe-alt"
              size="lg"
            />
          </div>

          <ULink to="https://www.TenGallon.tech" external>
            <NuxtImg
              src="/TenGallonTech.png"
              alt="Ten Gallon Tech Logo"
              width="75"
              height="75"
            />
          </ULink>
        </div>
      </UContainer>
    </footer>
  </div>
</template>
