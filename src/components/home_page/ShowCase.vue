<script>
import Star1 from "../img_logo/Star1.vue";
export default {
  components: {
    Star1,
  },
};
</script>

<template>
  <div class="min-w-[1440px] p-20 flex flex-col items-center mx-auto">
    <p class="mb-[120px] text-headline2 text-etc-black">
      "Your Pets, Our Priority: Perfect Care, Anytime, Anywhere."
    </p>
    <div class="flex justify-between items-center mb-[120px] w-[1064px]">
      <div
        class="w-[504px] h-[601px] flex flex-col justify-between items-start gap-[55px]"
      >
        <div class="flex items-start gap-3">
          <div>
            <Star1 color="#76D0FC" :width="24" :height="24" />
          </div>
          <div>
            <p class="text-headline3 text-etc-black mb-3">Boarding</p>
            <p class="text-body1 text-gray-500">
              Your pets stay overnight in your sitter’s home. They’ll be treated
              like part of the family in a comfortable environment.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div>
            <Star1 color="#FA8AC0" :width="24" :height="24" />
          </div>
          <div>
            <p class="text-headline3 text-etc-black mb-3">House Sitting</p>
            <p class="text-body1 text-gray-500">
              Your sitter takes care of your pets and your home. Your pets will
              get all the attention they need without leaving home.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div>
            <Star1 color="#1CCD83" :width="24" :height="24" />
          </div>
          <div>
            <p class="text-headline3 text-etc-black mb-3">Dog Walking</p>
            <p class="text-body1 text-gray-500">
              Your dog gets a walk around your neighborhood. Perfect for busy
              days and dogs with extra energy to burn.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div>
            <Star1 color="#FFCA62" :width="24" :height="24" />
          </div>
          <div>
            <p class="text-headline3 text-etc-black mb-3">Drop-In Visits</p>
            <p class="text-body1 text-gray-500">
              Your sitter drops by your home to play with your pets, offer food,
              and give potty breaks or clean the litter box.
            </p>
          </div>
        </div>
      </div>
      <div class="w-[455px] h-[601px]">
        <img
          src="@/assets/images/LoveCat.png"
          alt="LoveCat"
          class="max-w-fit"
        />
      </div>
    </div>
    <div class="flex">
      <div class="w-[416px] px-6 text-center">
        <div class="w-[268px] h-[268px] mb-[46px] mx-auto">
          <img
            src="@/assets/images/HumanCat.png"
            alt="HumanCat"
            class="max-w-fit"
          />
        </div>
        <p class="text-headline3 text-etc-black mb-3">
          <span class="text-green-500">Connect</span> With Sitters
        </p>
        <p class="text-body1 text-gray-500">
          Find a verified and reviewed sitter who’ll keep your pets company and
          give time.
        </p>
      </div>
      <div class="w-[416px] px-6 text-center">
        <div class="w-[268px] h-[268px] mb-[46px] mx-auto">
          <img
            src="@/assets/images/DogCat.png"
            alt="DogCat"
            class="max-w-fit"
          />
        </div>
        <p class="text-headline3 text-etc-black mb-3">
          <span class="text-blue-500">Better</span> For Your Pets
        </p>
        <p class="text-body1 text-gray-500">
          Pets stay happy at home with a sitter who gives them loving care and
          companionship.
        </p>
      </div>
      <div class="w-[416px] px-6 text-center">
        <div class="w-[268px] h-[268px] mb-[46px] mx-auto">
          <img
            src="@/assets/images/HumanDog.png"
            alt="HumanDog"
            class="max-w-fit"
          />
        </div>
        <p class="text-headline3 text-etc-black mb-3">
          <span class="text-orange-500">Calling</span> All Pets
        </p>
        <p class="text-body1 text-gray-500">
          Stay for free with adorable animals in unique homes around the world.
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
